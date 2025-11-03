# Google Sheets CMS Setup Guide

This guide will help you set up Google Sheets as a CMS for your website content.

## Part 1: Google Cloud Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "HEA Website CMS")
4. Click "Create"

### Step 2: Enable Google Sheets API

1. In your project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and click "Enable"

### Step 3: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Fill in the details:
   - Name: `hea-website-cms`
   - ID: (auto-generated)
   - Description: "Service account for website CMS"
4. Click "Create and Continue"
5. Skip the optional steps by clicking "Continue" then "Done"

### Step 4: Create Service Account Key

1. Find your service account in the list
2. Click on it to open details
3. Go to the "Keys" tab
4. Click "Add Key" → "Create new key"
5. Select "JSON" format
6. Click "Create" - a JSON file will download
7. **Keep this file safe and private!**

### Step 5: Get Your Credentials

Open the downloaded JSON file and find:
- `client_email` - your service account email
- `private_key` - your private key (starts with `-----BEGIN PRIVATE KEY-----`)

---

## Part 2: Create Your Google Sheet

### Step 1: Create a New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "HEA Website Content"

### Step 2: Share with Service Account

1. Click the "Share" button
2. Paste the `client_email` from your JSON file (looks like `xxx@xxx.iam.gserviceaccount.com`)
3. Give it "Viewer" access (read-only is enough)
4. Uncheck "Notify people"
5. Click "Share"

### Step 3: Get Your Spreadsheet ID

The ID is in the URL of your Google Sheet:
```
https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
```
Copy the `SPREADSHEET_ID` part.

---

## Part 3: Create Sheet Tabs

Create these tabs in your Google Sheet (exact names matter):

### Tab 1: Hero
| Key | Value |
|-----|-------|
| tagline | Your Trusted Electrical Automation Experts |
| heading | Smart Solutions for Modern Living |
| description | From smart home integration to comprehensive electrical services, we bring innovation and expertise to every project. |
| ctaText | Get A Quote |
| secondaryCtaText | Our Services |
| stat1Value | 500+ |
| stat1Label | Projects Completed |
| stat2Value | 100% |
| stat2Label | Satisfaction Rate |
| stat3Value | 24/7 |
| stat3Label | Support Available |
| stat4Value | 10+ |
| stat4Label | Years Experience |

### Tab 2: Services
| Title | Description | Icon | BgImage | Feature |
|-------|-------------|------|---------|---------|
| Smart Home Automation | Transform your home with intelligent automation systems | Home | https://images.pexels.com/... | Voice-controlled lighting |
|  |  |  |  | Automated climate control |
|  |  |  |  | Security system integration |
|  |  |  |  | Energy monitoring |
|  |  |  |  | Remote access control |
| General Electrical | Comprehensive electrical services for residential and commercial | Zap | https://images.pexels.com/... | Rewiring & upgrades |
|  |  |  |  | Safety inspections |
|  |  |  |  | LED lighting installation |
|  |  |  |  | Emergency repairs |
| Solar Installation | Harness the power of the sun with professional solar solutions | Sun | https://images.pexels.com/... | Custom solar design |
|  |  |  |  | Battery storage systems |
|  |  |  |  | Government rebate assistance |
|  |  |  |  | 25-year warranty |
| EV Charger Installation | Professional electric vehicle charging solutions | BatteryCharging | https://images.pexels.com/... | Level 2 home chargers |
|  |  |  |  | Smart charging systems |
|  |  |  |  | Government rebates |
|  |  |  |  | Installation & support |

**Note:** For services, leave Title/Description/Icon/BgImage empty for feature rows that belong to the service above.

### Tab 3: Testimonials
| Name | Location | Rating | Text |
|------|----------|--------|------|
| Sarah Mitchell | South Yarra | 5 | Outstanding service! The team installed our smart home system flawlessly. |
| James Thompson | Brighton | 5 | Professional, punctual, and excellent quality work. |
| Emma Wilson | Toorak | 5 | Best electrical service we've used. Highly recommended! |

### Tab 4: WhyChooseUs
| Title | Description | Icon |
|-------|-------------|------|
| Licensed & Insured | Fully certified professionals with comprehensive insurance coverage | Shield |
| Quality Guaranteed | We stand behind our work with industry-leading warranties | Award |
| Reliable Service | On-time service with 24/7 emergency support availability | Clock |
| Cutting-Edge Tech | Latest tools and techniques for superior results | Cpu |

### Tab 5: About
| Key | Value |
|-----|-------|
| heading | About Heffernan Electrical |
| paragraph1 | At Heffernan Electrical Automation, we're passionate about bringing cutting-edge electrical solutions to homes and businesses across Melbourne. With over a decade of experience, our team of licensed electricians has completed hundreds of successful projects. |
| paragraph2 | We specialize in smart home automation, solar installation, EV charger setup, and all general electrical needs. Our commitment to quality, safety, and customer satisfaction has made us a trusted name in the industry. |
| paragraph3 | Whether you're upgrading your home with the latest smart technology or need reliable electrical services, we have the expertise and dedication to exceed your expectations. |
| cert1 | Licensed & Certified |
| cert2 | Fully Insured |
| cert3 | Local Experts |

### Tab 6: Contact
| Key | Value |
|-----|-------|
| heading | Get in Touch |
| subheading | Ready to upgrade your space? Contact us today for a free consultation. |
| phone | +61481267812 |
| email | info@heffernanelectrical.com.au |
| liveChat | Available 24/7 |
| serviceArea | Greater Melbourne Area |
| mapEmbedUrl | https://www.google.com/maps/embed?pb=1sCjsSCgIIARIYChIJdd... |
| weekdayHours | Mon-Fri: 7:00 AM - 6:00 PM |
| saturdayHours | Saturday: 8:00 AM - 4:00 PM |
| sundayHours | Sunday: Emergency Only |

### Tab 7: Footer
| Key | Value |
|-----|-------|
| tagline | Powering the future, one home at a time. |
| phone | +61481267812 |
| email | info@heffernanelectrical.com.au |
| facebookUrl | # |
| instagramUrl | # |
| copyrightText | © 2024 Heffernan Electrical Automation. All rights reserved. |

---

## Part 4: Environment Variables

Add these to your `.env.local` file:

```env
# Google Sheets CMS
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**
- Replace values with your actual credentials
- The private key must include the full text with `\n` for newlines
- Keep the double quotes around `GOOGLE_PRIVATE_KEY`
- **Never commit `.env.local` to git!**

---

## Part 5: Deploy to Vercel

1. Go to your Vercel project dashboard
2. Go to "Settings" → "Environment Variables"
3. Add the three environment variables:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
4. Make sure to add them for all environments (Production, Preview, Development)
5. Redeploy your site

---

## Testing

1. Make a change in your Google Sheet
2. Wait 1 minute (cache duration)
3. Refresh your website
4. The changes should appear!

---

## Icon Names Reference

For the `Icon` column in Services and WhyChooseUs, use these Lucide icon names:
- `Home` - House icon
- `Zap` - Lightning bolt
- `Sun` - Sun icon
- `BatteryCharging` - Battery with bolt
- `Shield` - Shield icon
- `Award` - Award/medal icon
- `Clock` - Clock icon
- `Cpu` - Chip/processor icon
- `CheckCircle` - Check mark in circle
- `Settings` - Gear icon
- `Smartphone` - Phone icon
- `Wifi` - Wifi signal icon

See more at: https://lucide.dev/icons/

---

## Troubleshooting

### Error: "Unable to parse range"
- Check that your sheet tab names match exactly (case-sensitive)
- Ensure there are no extra spaces in tab names

### Error: "The caller does not have permission"
- Make sure you shared the sheet with your service account email
- Check that the service account email is correct in `.env.local`

### Changes not appearing
- Wait at least 1 minute for cache to expire
- Check browser console for errors
- Verify environment variables are set correctly in Vercel

### Private key errors
- Ensure the entire key is copied including BEGIN and END lines
- Check that `\n` is used for newlines (not actual newlines)
- Keep the double quotes around the entire key

---

## Tips for Your Client

1. **Always use the first row for headers** - Don't delete the header row
2. **For Services features** - Leave the first 4 columns empty and just fill in the Feature column
3. **Test changes** - Make a small change first to test before editing everything
4. **Keep backups** - Use File → Version History in Google Sheets
5. **Don't delete tabs** - The website needs all 7 tabs to work properly
6. **Icon names** - Use the exact icon names from the reference list above

---

## Cache Information

The site caches Google Sheets data for 1 minute to improve performance. This means:
- Changes take up to 60 seconds to appear
- Reduces API calls to Google
- Faster page loads for visitors

If you need changes to appear instantly during testing, you can reduce `CACHE_DURATION` in `/lib/googleSheets.ts`.
