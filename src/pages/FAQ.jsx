import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import SEO from "../components/SEO";

const faqs = [
  {
    question: "How many affirmations should I choose?",
    answer: "There's no \"right\" number! Choose as many or as few as you'd like. It's not about how many you listen to, the key to success is just listening every day! Daily practice will rewire the brain for happiness, courage and calm!"
  },
  {
    question: "What affirmations should I start with?",
    answer: "Choose affirmations that turn your child's challenges into strengths. For example, if your child often feels nervous, try an affirmation from the building resilience or anxiety category. The best affirmations are the ones that make you smile or feel a little stronger when you read them. You can update and change your affirmations anytime, or create multiple profiles for different family members, moods, or goals."
  },
  {
    question: "How long should I listen each day?",
    answer: "There's no perfect amount of time. Listen for as long or as little as you'd like! Even a few seconds a day can start to rewire the brain for greater happiness, calm, and courage. The key is consistency. Skipping days slows progress; staying consistent creates faster, lasting results."
  },
  {
    question: "What should I do if my child yells, covers their ears, or avoids self-talk?",
    answer: "This is completely normal! Start by explaining why self-talk matters (see FAQ #5). You might say: \"What we think about becomes how we feel. Our family has decided to practice thinking happy, brave, and calm thoughts to bring more of that into our lives.\"\n\nModel the behavior yourself by listening to and repeating the affirmations out loud in front of your child. This isn't a performance; it's practice. Kids will often join in once they see you having fun with it. Stay calm and consistently play the positive self-talk without pressurizing your child to join in. Your child doesn't have to repeat the phrases out loud for it to sink in and start working. Simply hearing it in the background will begin to rewire the brain for greater happiness, calm and courage!"
  },
  {
    question: "How do I explain self-talk to my child?",
    answer: "Here are two ways to explain self-talk to your child:\n\n1. Self-talk is power for your brain. The words you say to yourself can charge you up like a battery, or drain your energy. When you practice positive self-talk, you're giving your brain a power-up that helps you be your best!\n\nOr try this:\n\n2. Self-talk is how your feelings talk to your brain. When you say things like 'I'm proud of myself' or 'I can try again,' you're helping your happy feelings grow stronger. When your self-talk is mean or negative, your sad or mad feelings grow louder instead."
  },
  {
    question: "How long does it take to see results?",
    answer: "Some families notice shifts after just a few days—a calmer morning, a lighter mood, a little more confidence. Others may see changes after a few weeks of consistent practice. Some stubborn thought patterns can take longer to shift. Don't give up! Your brain is always listening and rewiring itself based on what you say. Consistency gets faster results - skipping days slows down progress. Each time your child faces a new challenge, help them customize affirmations to find their courage, confidence, and joy."
  },
  {
    question: "How can I remember to do it every day?",
    answer: "Pick a time of day that fits easily into your routine, like brushing teeth, during breakfast, or on the drive to school. Consistency helps it stick! You can also set a daily reminder on your phone. Label it something fun like \"Brainpower Boost Time\" or \"Time to Power Up!\" Turn on notifications to get daily reminders to Power Up!"
  },
  {
    question: "What if I don't have time?",
    answer: "Life is busy but the great thing about self-talk is you don't need to \"make time.\" Just press play and listen while you live your life. Play it in the background while you get ready, drive, or make dinner. Your brain is always listening — even if you're not focused on the words, the messages still sink in and start rewiring your brain for more joy, calm, and courage."
  },
  {
    question: "Do my kids need to say the affirmations out loud?",
    answer: "Nope! Hearing or thinking them works too. But saying them out loud adds extra power - and it's pretty special to hear your child say, \"When I look in the mirror, I love what I see.\" Even if your kids don't join in, model it yourself. It's great practice for you and kids will often join in when they see you having fun with it."
  },
  {
    question: "What do I do if negative self-talk fights back?",
    answer: "This is totally normal! Negative self-talk can be very stubborn, so it often fights back with thoughts like \"that's not true,\" \"yeah right,\" or it might even call you a \"liar\" after you say a positive affirmation. Your brain is simply unlearning old patterns and learning new ones.\n\nAs you practice self-talk with your kids, you might notice negative thoughts pushing back at you also! Talk about having those feelings with your child. You can say, \"That's just our brains unlearning mean words and learning kinder ones.\" Keep listening to and repeating the kind words until your brain (and you!) truly believe them. It's worth the work, because the way we talk to ourselves shapes everything — our confidence, our calm, and our joy."
  }
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
      <Card className="mb-4 overflow-hidden border-2 border-blue-100 hover:border-blue-200 transition-colors duration-300">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors duration-200"
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 flex-1">
              {faq.question}
            </h3>
          </div>
          <div className="ml-4 flex-shrink-0">
            {isOpen ? (
              <ChevronUp className="w-6 h-6 text-blue-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-blue-600" />
            )}
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 pb-6 pl-18">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\n\n/g, ' ').replace(/(\(see FAQ #\d+\))/g, '').trim()
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <SEO
        title="FAQ - Kids Affirmation App Questions"
        description="Common questions about Daily Power Up, the positive affirmations app designed to help children build confidence and self-esteem."
        url="/FAQ"
        structuredData={faqSchema}
      />
      {/* Space background pattern - subtle throughout the page */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/c58e3c1bd_file5.jpg')"
        }}
      />

      {/* Logo */}
      <div className="relative z-10 px-6 pt-4">
        <Link to="/">
          <img src="/images/logo.png" alt="Daily Power Up!" className="h-24 w-auto" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 pt-8 pb-12">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Everything you need to know about Daily Power Up!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 relative">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
