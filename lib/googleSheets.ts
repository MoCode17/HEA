import { google } from 'googleapis';

// Cache for Google Sheets data with timestamp
let cache: { data: any; timestamp: number } | null = null;
const CACHE_DURATION = 60000; // 1 minute in milliseconds

/**
 * Initialize Google Sheets API client
 */
function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
}

/**
 * Fetch data from a specific sheet range
 */
async function fetchSheetData(sheetName: string, range: string) {
  try {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!${range}`,
    });

    return response.data.values || [];
  } catch (error) {
    console.error(`Error fetching ${sheetName} data:`, error);
    return [];
  }
}

/**
 * Parse hero data from Google Sheets
 */
function parseHeroData(rows: any[][]) {
  if (rows.length < 2) return null;

  const data: any = {};
  rows.forEach(row => {
    if (row[0] && row[1]) {
      data[row[0]] = row[1];
    }
  });

  return {
    tagline: data.tagline || '',
    heading: data.heading || '',
    description: data.description || '',
    ctaText: data.ctaText || 'Get A Quote',
    secondaryCtaText: data.secondaryCtaText || 'Our Services',
    stats: [
      { value: data.stat1Value || '500+', label: data.stat1Label || 'Projects Completed' },
      { value: data.stat2Value || '100%', label: data.stat2Label || 'Satisfaction Rate' },
      { value: data.stat3Value || '24/7', label: data.stat3Label || 'Support Available' },
      { value: data.stat4Value || '10+', label: data.stat4Label || 'Years Experience' },
    ],
  };
}

/**
 * Parse services data from Google Sheets
 */
function parseServicesData(rows: any[][]) {
  if (rows.length < 2) return [];

  const services: any[] = [];
  let currentService: any = null;

  rows.slice(1).forEach(row => {
    if (row[0]) { // New service
      if (currentService) {
        services.push(currentService);
      }
      currentService = {
        title: row[0] || '',
        description: row[1] || '',
        icon: row[2] || 'Zap',
        bgImage: row[3] || '',
        features: row[4] ? [row[4]] : [],
      };
    } else if (currentService && row[4]) { // Additional feature for current service
      currentService.features.push(row[4]);
    }
  });

  if (currentService) {
    services.push(currentService);
  }

  return services;
}

/**
 * Parse testimonials data from Google Sheets
 */
function parseTestimonialsData(rows: any[][]) {
  if (rows.length < 2) return [];

  return rows.slice(1).map(row => ({
    name: row[0] || '',
    location: row[1] || '',
    rating: parseInt(row[2]) || 5,
    text: row[3] || '',
  }));
}

/**
 * Parse Why Choose Us data from Google Sheets
 */
function parseWhyChooseUsData(rows: any[][]) {
  if (rows.length < 2) return [];

  return rows.slice(1).map(row => ({
    title: row[0] || '',
    description: row[1] || '',
    icon: row[2] || 'CheckCircle',
  }));
}

/**
 * Parse About data from Google Sheets
 */
function parseAboutData(rows: any[][]) {
  if (rows.length < 2) return null;

  const data: any = {};
  rows.forEach(row => {
    if (row[0] && row[1]) {
      data[row[0]] = row[1];
    }
  });

  return {
    heading: data.heading || 'About Us',
    paragraph1: data.paragraph1 || '',
    paragraph2: data.paragraph2 || '',
    paragraph3: data.paragraph3 || '',
    certifications: [
      data.cert1 || 'Licensed & Certified',
      data.cert2 || 'Fully Insured',
      data.cert3 || 'Local Experts',
    ],
  };
}

/**
 * Parse Contact data from Google Sheets
 */
function parseContactData(rows: any[][]) {
  if (rows.length < 2) return null;

  const data: any = {};
  rows.forEach(row => {
    if (row[0] && row[1]) {
      data[row[0]] = row[1];
    }
  });

  return {
    heading: data.heading || 'Get in Touch',
    subheading: data.subheading || '',
    phone: data.phone || '',
    email: data.email || '',
    liveChat: data.liveChat || 'Available 24/7',
    serviceArea: data.serviceArea || '',
    mapEmbedUrl: data.mapEmbedUrl || '',
    businessHours: {
      weekday: data.weekdayHours || 'Mon-Fri: 7:00 AM - 6:00 PM',
      saturday: data.saturdayHours || 'Saturday: 8:00 AM - 4:00 PM',
      sunday: data.sundayHours || 'Sunday: Emergency Only',
    },
  };
}

/**
 * Parse Footer data from Google Sheets
 */
function parseFooterData(rows: any[][]) {
  if (rows.length < 2) return null;

  const data: any = {};
  rows.forEach(row => {
    if (row[0] && row[1]) {
      data[row[0]] = row[1];
    }
  });

  return {
    tagline: data.tagline || '',
    phone: data.phone || '',
    email: data.email || '',
    facebookUrl: data.facebookUrl || '',
    instagramUrl: data.instagramUrl || '',
    copyrightText: data.copyrightText || '',
  };
}

/**
 * Main function to get all site content from Google Sheets
 */
export async function getSiteContent() {
  // Check cache
  if (cache && Date.now() - cache.timestamp < CACHE_DURATION) {
    return cache.data;
  }

  try {
    // Fetch all data in parallel
    const [heroRows, servicesRows, testimonialsRows, whyChooseUsRows, aboutRows, contactRows, footerRows] = await Promise.all([
      fetchSheetData('Hero', 'A:B'),
      fetchSheetData('Services', 'A:E'),
      fetchSheetData('Testimonials', 'A:D'),
      fetchSheetData('WhyChooseUs', 'A:C'),
      fetchSheetData('About', 'A:B'),
      fetchSheetData('Contact', 'A:B'),
      fetchSheetData('Footer', 'A:B'),
    ]);

    const siteContent = {
      hero: parseHeroData(heroRows),
      services: parseServicesData(servicesRows),
      testimonials: parseTestimonialsData(testimonialsRows),
      whyChooseUs: parseWhyChooseUsData(whyChooseUsRows),
      about: parseAboutData(aboutRows),
      contact: parseContactData(contactRows),
      footer: parseFooterData(footerRows),
    };

    // Update cache
    cache = {
      data: siteContent,
      timestamp: Date.now(),
    };

    return siteContent;
  } catch (error) {
    console.error('Error fetching site content:', error);

    // Return cache if available, even if expired
    if (cache) {
      return cache.data;
    }

    // Return null if no cache available
    return null;
  }
}

/**
 * Clear the cache (useful for development/testing)
 */
export function clearCache() {
  cache = null;
}
