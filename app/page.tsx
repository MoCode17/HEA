import React from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getSiteContent } from "@/lib/googleSheets";

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
      <Testimonials data={content?.testimonials} />
      <About data={content?.about} />
      <Contact data={content?.contact} />
      <Footer data={content?.footer} />
    </>
  );
}
