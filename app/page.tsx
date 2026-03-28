import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import GoogleReviews from "@/components/GoogleReviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/sanity";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // Fetch content from Google Sheets
  const content = await getSiteContent();

  return (
    <>
      <Nav />
      <Hero data={content?.hero} />
      <Services data={content?.services} />
      <WhyChooseUs data={content?.whyChooseUs} />
      <GoogleReviews />
      <About data={content?.about} />
      <Contact />
      <Footer data={content?.footer} />
    </>
  );
}
