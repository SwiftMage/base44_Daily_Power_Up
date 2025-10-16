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
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BeforeSection />
      <TransformationSection />
      <ScreenshotCarousel />
      <StorySection />
      <FinalCallout />
      
      {/* App Store Badge Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex justify-center">
          <a
            href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src="/images/download-white.png"
              alt="Download on the App Store"
              className="h-16 md:h-20 w-auto"
            />
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}