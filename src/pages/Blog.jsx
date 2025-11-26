import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { BookOpen, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "morning-routine-calm-confident-kids",
    title: "The Ultimate Morning Routine for Calm, Confident Kids",
    excerpt: "Mornings with kids rarely look like the calm, smiling family photos on social media. Here's a detailed, parent-tested approach to creating a morning routine that helps your child start the day calm and confident.",
    readTime: "8 min read",
    tags: ["Morning Routine", "Parenting Tips"],
    image: "https://images.pexels.com/photos/7220534/pexels-photo-7220534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    date: "2025"
  },
  {
    slug: "why-positive-self-talk-matters",
    title: "Why Positive Self Talk Matters More Than You Think",
    excerpt: "Your inner voice is with you from the moment you wake up until your head hits the pillow. When that voice is kind and hopeful it can quietly reshape how you handle stress, challenges, and everyday life.",
    readTime: "7 min read",
    tags: ["Mindset", "Science backed habits"],
    image: "https://images.unsplash.com/photo-1708119651120-f48a57a0437d?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025"
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Space background pattern */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/c58e3c1bd_file5.jpg')"
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 pt-16 pb-12">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Insights on positive self-talk, affirmations, and building healthy habits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6 relative">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl group">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span className="flex items-center gap-1 text-blue-600 font-medium group-hover:gap-2 transition-all">
                            Read more <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
