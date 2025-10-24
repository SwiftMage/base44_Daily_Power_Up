
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Twitter, Facebook, Instagram } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background elements - matching hero section style */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Optional: Very subtle space pattern overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-repeat opacity-5"
        style={{
          backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/c58e3c1bd_file5.jpg')"
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            We'd love to hear from you! Connect with us on social media or send us an email.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.a
            href="mailto:dailyaffirmationspowerup@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="block"
          >
            <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-100 h-full bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-sm text-gray-600 break-words">
                  dailyaffirmationspowerup@gmail.com
                </p>
              </div>
            </Card>
          </motion.a>

          <motion.a
            href="https://twitter.com/DailyPowerUpApp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="block"
          >
            <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-sky-100 h-full bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Twitter className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Twitter</h3>
                <p className="text-sm text-gray-600">
                  @DailyPowerUpApp
                </p>
              </div>
            </Card>
          </motion.a>

          <motion.a
            href="https://www.facebook.com/profile.php?id=61578251199955"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="block"
          >
            <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-blue-100 h-full bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Facebook className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Facebook</h3>
                <p className="text-sm text-gray-600">
                  Daily Power Up!
                </p>
              </div>
            </Card>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/dailyaffirmationspowerup"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="block"
          >
            <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-pink-100 h-full bg-white/90 backdrop-blur-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Instagram</h3>
                <p className="text-sm text-gray-600">
                  @dailyaffirmationspowerup
                </p>
              </div>
            </Card>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
