import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Clock, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Sparkles,
    title: "Build Confidence",
    description:
      "Kids choose affirmations that speak to their unique challenges, building genuine self-belief from the inside out.",
    screenshot: "/images/screenshot-1.png",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Shield,
    title: "Reduce Anxiety",
    description:
      "Guided self-talk techniques backed by neuroscience help kids replace worry with calm, brave thoughts.",
    screenshot: "/images/screenshot-3.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Fits Any Schedule",
    description:
      "Just 3 minutes a day — during breakfast, in the car, or before bed. Press play and let it work.",
    screenshot: "/images/screenshot-5.png",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: Gamepad2,
    title: "Kids Actually Love It",
    description:
      "Streaks, rewards, and fun themes keep kids engaged and asking to come back every day.",
    screenshot: "/images/screenshot-6.png",
    color: "from-orange-500 to-yellow-500",
  },
];

export default function TransformationSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-purple-50 via-pink-50 to-yellow-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <img
              src="/images/brain-muscle-new.png"
              alt="Brain Power"
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Change your words. Change your world.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Daily Power Up helps kids build the mindset they need to handle life's ups and downs.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
              >
                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Screenshot */}
                <div className="flex-1 flex justify-center">
                  <div className="rounded-2xl shadow-xl overflow-hidden max-w-[260px] border-4 border-white">
                    <img
                      src={benefit.screenshot}
                      alt={benefit.title}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-6 md:px-10 py-6 text-base md:text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135",
                "_blank"
              )
            }
          >
            <Sparkles className="w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 flex-shrink-0" />
            Try Daily Power Up — Two-Week Free Trial!
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
