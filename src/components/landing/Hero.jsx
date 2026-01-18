import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 pt-0 min-h-screen flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Content - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Title, Subtitle & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Give Kids the Tools to Handle Big Feelings
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                With Daily Power Up's guided affirmations, kids learn how to talk to themselves with confidence, kindness, and courage.
              </p>

              {/* CTA Button */}
              <div className="mb-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 md:px-10 py-6 md:py-7 text-base md:text-xl lg:text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold w-full sm:w-auto"
                  onClick={() => window.open("https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135", "_blank")}
                >
                  <Download className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 flex-shrink-0" />
                  <span className="leading-tight text-center whitespace-normal">
                    Download Free Trial
                  </span>
                </Button>
              </div>

              {/* App Store Badge */}
              <a
                href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                <img
                  src="/images/download-badge-new.png"
                  alt="Download on the App Store"
                  className="h-12 md:h-14 w-auto"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                />
              </a>
            </motion.div>

            {/* Right side - Logo + Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Logo as title above image */}
              <motion.img
                src="/images/new-logo-no-bg.png"
                alt="Daily Power Up!"
                className="w-64 md:w-80 h-auto mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                style={{
                  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
                }}
              />
              {/* Hero Image */}
              <div className="rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.6),0_0_60px_rgba(255,182,193,0.4),0_0_80px_rgba(135,206,250,0.3)]">
                <motion.img
                  src="/images/hero-child.png"
                  alt="Happy child with positive affirmations"
                  className="w-full max-w-md h-auto object-cover"
                  whileHover={{
                    scale: 1.02,
                    filter: "brightness(1.1) contrast(1.05)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center text-gray-600 mt-12 text-lg"
          >
            Build confidence and calm in just 3 minutes a day
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
