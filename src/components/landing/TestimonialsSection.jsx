import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Loudcol",
    title: "Our Daily Boost of Confidence",
    review:
      "This app fits seamlessly into our busy schedule. The customization options let us target our children's specific needs. It's been a real boost for confidence and anxiety.",
    stars: 5,
  },
  {
    name: "Zuccara831",
    title: "Great app for my kids",
    review:
      "We've seen significant positive changes in our son's attitude and self-esteem. He now gets out the door for school with a positive attitude. Results across multiple areas of his life.",
    stars: 5,
  },
  {
    name: "Jenny5928",
    title: "Great self-esteem booster",
    review:
      "The gamification aspect engaged our children immediately. They actively select their own affirmations and request to use the app daily!",
    stars: 5,
  },
  {
    name: "ceil15",
    title: "My kids love this app!",
    review:
      "The affirmations are fun, positive, and easy for my child to follow. It's become an integral part of our family's daily routine.",
    stars: 5,
  },
  {
    name: "Turpene",
    title: "Love this app!",
    review:
      "The visuals and narration keep our children engaged and interested with each use. A wonderful tool for building positivity.",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Parents Are Saying
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from real families on the App Store
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <StarRating count={t.stars} />
              <h3 className="font-bold text-gray-900 mt-3 mb-2">{t.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                "{t.review}"
              </p>
              <p className="text-xs text-gray-400 font-medium">— {t.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-10"
        >
          <a
            href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm underline underline-offset-4"
          >
            See all reviews on the App Store →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
