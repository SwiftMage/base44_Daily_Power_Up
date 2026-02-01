import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function SocialProofBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white py-6 px-6 border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 font-bold text-gray-900">5.0</span>
        </div>
        <span className="text-gray-400 hidden sm:block">|</span>
        <span className="text-gray-600 text-sm md:text-base">
          Rated 5 stars on the App Store
        </span>
        <span className="text-gray-400 hidden sm:block">|</span>
        <span className="text-gray-600 text-sm md:text-base">
          Loved by families everywhere
        </span>
      </div>
    </motion.section>
  );
}
