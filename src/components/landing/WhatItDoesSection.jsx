import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Decrease meltdowns",
  "Increase cooperation",
  "Reduce anxiety",
  "Boost self-esteem",
  "Increase joy, calm & courage",
];

export default function WhatItDoesSection() {
  return (
    <section className="py-12 md:py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Benefits box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-300 shadow-sm"
          >
            <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
              Using the power of neuroscience + self-talk, Daily Power Up helps your child:
            </p>
            <ul className="space-y-3">
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-base md:text-lg font-medium text-gray-800">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Parent hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 border border-blue-200 shadow-sm"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong>Tried everything and still struggling with behaviors?</strong>{" "}
              Daily Power Up improves behavior quickly, fits easily into your routine, and is specially designed for kids.
            </p>
            <p className="text-base md:text-lg text-gray-600 mt-3">
              Teaches kids how to reset instead of meltdown and get back to their day — so you can get back to yours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
