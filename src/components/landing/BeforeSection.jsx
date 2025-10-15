import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const struggles = [
  "Our child's brain was stuck in \"worry mode,\" leaving little room for joy.",
  "Meltdowns could last for hours.",
  "Plans were constantly canceled because we never knew which version of our child we'd get that day.",
  "The smallest change could ruin an entire day.",
  "Every outing felt like a gamble — joy or chaos, who knew?"
];

const MulticolorText = ({ text }) => {
  const colors = ['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-purple-500'];
  const words = text.split(' ');
  
  return (
    <span>
      {words.map((word, i) => (
        <span key={i} className={colors[i % colors.length]}>
          {word}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
};

export default function BeforeSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Before Our Family Found the Tools to Help…
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* First row - 2 boxes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full border-4 border-white">
              <p className="text-lg md:text-xl leading-relaxed font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                {struggles[0]}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full border-4 border-white">
              <p className="text-lg md:text-xl leading-relaxed font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                {struggles[1]}
              </p>
            </div>
          </motion.div>

          {/* Middle row - 1 wide box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 border-white">
              <p className="text-lg md:text-xl leading-relaxed font-bold text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                {struggles[2]}
              </p>
            </div>
          </motion.div>

          {/* Bottom row - 2 boxes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full border-4 border-white">
              <p className="text-lg md:text-xl leading-relaxed font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                {struggles[3]}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full border-4 border-white">
              <p className="text-lg md:text-xl leading-relaxed font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                {struggles[4]}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}