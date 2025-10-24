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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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