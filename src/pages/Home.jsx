import React from "react";
import Hero from "../components/landing/Hero";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import ProblemChecklistSection from "../components/landing/ProblemChecklistSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import StorySection from "../components/landing/StorySection";
import CommunitySection from "../components/landing/CommunitySection";
import ScreenshotCarousel from "../components/landing/ScreenshotCarousel";
import WhatItDoesSection from "../components/landing/WhatItDoesSection";
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
    "email": "dailyaffirmationspowerup@gmail.com",
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
      <HowItWorksSection />
      <ScreenshotCarousel />
      <div id="story">
        <StorySection />
      </div>
      <div id="reviews">
        <TestimonialsSection />
      </div>
      <div id="faq">
        <CommunitySection />
      </div>
      <Footer />
    </div>
  );
}
