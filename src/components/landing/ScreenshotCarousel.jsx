import React from "react";
import { motion } from "framer-motion";

const categories = [
  { label: "Anxiety", color: "bg-gradient-to-r from-blue-400 to-cyan-400" },
  { label: "Body Image", color: "bg-gradient-to-r from-pink-400 to-rose-400" },
  { label: "School", color: "bg-gradient-to-r from-amber-400 to-yellow-400" },
  { label: "Sports", color: "bg-gradient-to-r from-green-400 to-emerald-400" },
  { label: "Resilience", color: "bg-gradient-to-r from-purple-400 to-violet-400" },
  { label: "Self-Esteem", color: "bg-gradient-to-r from-orange-400 to-red-400" },
];

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
    <section className="py-16 md:py-20 px-6 bg-gradient-to-b from-blue-100 to-blue-50">
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
          <p className="text-lg text-gray-600 mb-8">
            Our guided system helps you customize the perfect self-talk list for your child
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className={`${cat.color} text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-md`}
              >
                {cat.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {screenshots.map((screenshot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group"
            >
              {/* Phone frame */}
              <div className="bg-gray-900 rounded-[1.5rem] p-[3px] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Notch */}
                <div className="bg-gray-900 rounded-t-[1.4rem] flex justify-center pt-1.5 pb-1">
                  <div className="w-10 h-1.5 bg-gray-700 rounded-full" />
                </div>
                {/* Screen */}
                <div className="rounded-b-[1.3rem] overflow-hidden">
                  <img
                    src={screenshot.url}
                    alt={screenshot.caption}
                    className="w-full h-auto object-cover"
                  />
                </div>
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
