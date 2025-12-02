import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Sparkles, Download, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "../components/landing/Hero";
import BeforeSection from "../components/landing/BeforeSection";
import TransformationSection from "../components/landing/TransformationSection";
import ScreenshotCarousel from "../components/landing/ScreenshotCarousel";
import StorySection from "../components/landing/StorySection";
import FinalCallout from "../components/landing/FinalCallout";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";
import SEO from "../components/SEO";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Daily Power Up",
  "url": "https://dailyaffirmationspowerup.com",
  "logo": "https://dailyaffirmationspowerup.com/images/screenshot-1.png",
  "sameAs": [
    "https://twitter.com/DailyPowerUpApp"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@dailypowerup.app",
    "contactType": "customer service"
  }
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Daily Power Up",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "iOS",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Daily positive affirmations app for kids. Help your child build confidence, reduce anxiety, and develop a positive mindset.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "100"
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Daily Power Up - Positive Affirmations App for Kids"
        description="Help your child build confidence and a positive mindset with Daily Power Up. Daily affirmations designed to boost self-esteem and reduce anxiety in children."
        url="/"
        structuredData={[organizationSchema, appSchema]}
      />
      <Hero />
      <BeforeSection />
      <TransformationSection />
      <ScreenshotCarousel />
      <StorySection />
      <FinalCallout />
      <ContactSection />
      <Footer />
    </div>
  );
}