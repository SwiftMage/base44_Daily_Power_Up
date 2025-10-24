import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TransformationSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-8">
            <img
              src="/images/brain-muscle-new.png"
              alt="Brain Power"
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Change your words. Change your world.
          </h2>

          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            <p className="inline">In as little as three minutes a day, </p>
            <a
              href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105"
            >
              <img
                src="/images/new-logo-no-bg.png"
                alt="Daily Affirmations Power Up!"
                className="inline-block h-8 md:h-10 w-auto mx-1 align-middle cursor-pointer"
              />
            </a>
            <p className="inline"> helps kids (and adults) build the mindset they need to handle life's ups and downs with confidence and joy.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 px-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-6 md:px-10 py-6 text-base md:text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              onClick={() => window.open("https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135", "_blank")}
            >
              <Sparkles className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 flex-shrink-0" />
              <span className="leading-tight">
                <span className="block sm:inline">Try Daily Affirmations Power Up!</span>
                <span className="hidden sm:inline sm:ml-1">—</span>
                <span className="block sm:inline sm:ml-1">Two-Week Free Trial!</span>
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}