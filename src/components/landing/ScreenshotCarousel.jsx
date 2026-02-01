import React from "react";
import { motion } from "framer-motion";

const screenshots = [
  { url: "/images/screenshot-1.png", caption: "Create profiles" },
  { url: "/images/screenshot-2.png", caption: "Choose your affirmations" },
  { url: "/images/screenshot-3.png", caption: "Daily power-up routine" },
  { url: "/images/screenshot-4.png", caption: "Voice affirmations" },
  { url: "/images/screenshot-5.png", caption: "Track streaks" },
  { url: "/images/screenshot-6.png", caption: "Unlock rewards" },
];

export default function ScreenshotCarousel() {
  return (
    <section className="py-16 md:py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            A Glimpse Inside the App
          </h2>
          <p className="text-lg text-gray-600">
            A peek at what your kids will love
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
          {screenshots.map((screenshot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <img
                  src={screenshot.url}
                  alt={screenshot.caption}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs text-gray-500 text-center mt-2 leading-tight">
                {screenshot.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
