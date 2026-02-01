import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

const homeFaqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Some families notice shifts after just a few days — a calmer morning, a lighter mood, a little more confidence. Others may see changes after a few weeks of consistent practice. Consistency gets faster results — each time your child faces a new challenge, help them customize affirmations to find their courage, confidence, and joy.",
  },
  {
    question: "What if I don't have time?",
    answer:
      "Life is busy but the great thing about self-talk is you don't need to \"make time.\" Just press play and listen while you live your life. Play it in the background while you get ready, drive, or make dinner. Your brain is always listening — even if you're not focused on the words, the messages still sink in.",
  },
  {
    question: "Do my kids need to say the affirmations out loud?",
    answer:
      "Nope! Hearing or thinking them works too. But saying them out loud adds extra power — and it's pretty special to hear your child say, \"When I look in the mirror, I love what I see.\" Even if your kids don't join in, model it yourself. Kids will often join in when they see you having fun with it.",
  },
  {
    question: "What should I do if my child resists or avoids self-talk?",
    answer:
      "This is completely normal! Start by modeling the behavior yourself — listen to and repeat the affirmations out loud in front of your child. Stay calm and consistently play the positive self-talk without pressure. Your child doesn't have to repeat the phrases out loud for it to start working. Simply hearing it in the background will begin to rewire the brain.",
  },
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <div className="mb-3 overflow-hidden border-2 border-blue-100 hover:border-blue-200 rounded-2xl transition-colors duration-300 bg-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors duration-200"
        >
          <h3 className="text-base md:text-lg font-bold text-gray-900 flex-1 pr-4">
            {faq.question}
          </h3>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-5 pb-5">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Quick answers to common questions
          </p>
        </motion.div>

        {homeFaqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-8"
        >
          <Link
            to={createPageUrl("FAQ")}
            className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4"
          >
            See all FAQs →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
