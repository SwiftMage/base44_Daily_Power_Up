import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MulticolorText = ({ text }) => {
  const colors = ['text-red-500', 'text-orange-500', 'text-yellow-500', 'text-green-500', 'text-blue-500', 'text-purple-500'];
  const words = text.split(' ');
  
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className={colors[i % colors.length]} style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          {word}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </>
  );
};

export default function FinalCallout() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 md:p-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl text-white">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6 -mt-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/0ee450156_logo.png"
                  alt="Daily Power Up Logo"
                  className="w-40 h-40 md:w-52 md:h-52"
                />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                <MulticolorText text="If I could tell every parent one thing, it would be this: the way we talk to ourselves shapes everything." />
              </h2>

              <p className="text-2xl md:text-3xl mb-12 leading-relaxed font-medium">
                Give your kids the language they need to be calm, confident, and joyful.
              </p>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="px-1"
              >
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-4 md:px-10 py-6 text-sm md:text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-bold w-full sm:w-auto"
                  onClick={() => window.open("https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135", "_blank")}
                >
                  <Sparkles className="hidden md:block w-6 h-6 mr-3 flex-shrink-0" />
                  <span className="leading-tight">
                    <span className="block sm:inline">Try Daily Affirmations Power Up!</span>
                    <span className="hidden sm:inline sm:ml-1">—</span>
                    <span className="block sm:inline sm:ml-1">Two-Week Free Trial</span>
                  </span>
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}