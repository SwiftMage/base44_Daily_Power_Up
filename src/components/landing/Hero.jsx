import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 pt-0">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Large Logo at Top */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <img
              src="/images/new-logo-no-bg.png"
              alt="Daily Power Up!"
              className="w-full max-w-2xl h-auto"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
              }}
            />
          </motion.div>

          {/* Headline and Image - Horizontal Layout */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-10">
            {/* Left side - Headlines */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 h-full flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                  1 in 5 kids experiences significant emotional distress.
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
                  Your child doesn't have to.
                </h2>
              </div>
            </motion.div>

            {/* Right side - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center"
            >
              <div className="rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.6),0_0_60px_rgba(255,182,193,0.4),0_0_80px_rgba(135,206,250,0.3)] cursor-pointer group w-full h-full flex items-center justify-center">
                <motion.img
                  src="/images/hero-child.png"
                  alt="Happy child with positive affirmations"
                  className="w-full h-full object-cover"
                  whileHover={{
                    filter: "brightness(1.1) contrast(1.05)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Subtext - Full Width Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Build confidence and calm in just 3 minutes a day with Daily Power Up! App for kids
            </p>
          </motion.div>

          {/* Single CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mb-8 text-center px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 md:px-10 py-6 md:py-7 text-base md:text-xl lg:text-2xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold w-full sm:w-auto"
              onClick={() => window.open("https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135", "_blank")}
            >
              <Download className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 flex-shrink-0" />
              <span className="leading-tight text-center whitespace-normal">
                Download Now for a Free Two-Week Trial!
              </span>
            </Button>
          </motion.div>

          {/* App Store Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <a
              href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/images/download-badge-new.png"
                alt="Download on the App Store"
                className="h-14 md:h-16 w-auto"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
