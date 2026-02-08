import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, HelpCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function CommunitySection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-white relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white fill-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You've Found Your Community
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're walking beside you on this journey to improve children's mental wellness, and we're so glad you're here.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Link
              to="/FAQ"
              className="block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full"
            >
              <HelpCircle className="w-10 h-10 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Check Our FAQs</h3>
              <p className="text-sm text-gray-600">
                Get faster results and avoid the biggest mistakes.
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link
              to="/Blog"
              className="block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full"
            >
              <BookOpen className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Read Our Blog</h3>
              <p className="text-sm text-gray-600">
                Tips, insights, and encouragement for your family's journey.
              </p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href="mailto:dailyaffirmationspowerup@gmail.com"
              className="block bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full"
            >
              <Mail className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600">
                dailyaffirmationspowerup@gmail.com
              </p>
            </a>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4 font-medium">Let's connect!</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/dailyaffirmationspowerup"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578251199955"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-md"
            >
              Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
