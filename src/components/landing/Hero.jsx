
import React from "react";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-6xl mx-auto px-1 md:px-6 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/e0ef227ad_DailyPowerUplogo.png"
              alt="Daily Power Up!"
              className="h-24 w-auto md:h-48 lg:h-56 max-w-full"
              style={{ 
                filter: 'drop-shadow(0 10px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block bg-white/60 backdrop-blur-sm rounded-3xl px-8 py-4 shadow-lg">
              <p className="text-xl md:text-2xl text-blue-600 font-bold leading-relaxed">
                The ultimate self-talk adventure designed just for kids!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135", "_blank")}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-2 border-blue-500 text-blue-600 hover:bg-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135", "_blank")}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Two-Week Free Trial
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex justify-center px-4"
          >
            <a
              href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/3f86769f1_download-white.png"
                alt="Download on the App Store"
                className="h-16 md:h-20 w-auto"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
