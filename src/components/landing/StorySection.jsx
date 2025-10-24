
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Check, ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/api/supabaseClient";

export default function StorySection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const { error: insertError } = await supabase
        .from('email_signups')
        .insert([{ email: email }]);

      if (insertError) throw insertError;

      setIsSuccess(true);
      setEmail("");

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error saving email:', err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mb-6 shadow-xl">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Story
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl sticky top-8">
              <img
                src="/images/family.jpg"
                alt="Our family"
                className="w-full h-full object-cover"
              />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Always visible first paragraph */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Hi, I'm Kathryn — an Occupational Therapist and mom to a deeply feeling child. For years, our home was full of what I called emotional tornadoes — giant meltdowns that left us drained, sad and confused. Parenting a sensitive child is beautiful and also exhausting. There were many tears and sleepless nights where I kept asking myself, Why can't I figure this out? What am I doing wrong?
            </p>

            {!isExpanded && (
              <div className="relative">
                <div className="relative pb-8">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                    I searched everywhere for answers — teachers, therapists, doctors, behavior specialists, books and podcasts. I even dove deep into neuroscience and self-regulation courses trying to figure out, what was I missing? Nothing truly helped until one night, at my breaking point, I thought: "Just try self-talk." As an OT, I'd seen self-talk work wonders for kids in my practice but I wasn't sure something that simple could work for my family. Still, I was willing to try anything.
                  </p>

                  {/* Fade overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white to-transparent pointer-events-none" />
                </div>
              </div>
            )}

            {!isExpanded && (
              <Button
                onClick={() => setIsExpanded(true)}
                variant="outline"
                className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronDown className="w-5 h-5 mr-2" />
                Continue Reading
              </Button>
            )}

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I searched everywhere for answers — teachers, therapists, doctors, behavior specialists, books and podcasts. I even dove deep into neuroscience and self-regulation courses trying to figure out, what was I missing? Nothing truly helped until one night, at my breaking point, I thought: "Just try self-talk." As an OT, I'd seen self-talk work wonders for kids in my practice but I wasn't sure something that simple could work for my family. Still, I was willing to try anything.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I began turning my son's hardest moments into simple affirmations:
                </p>

                <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
                  <p className="text-lg md:text-xl text-blue-800 leading-relaxed italic">
                    "I always try my best. My best is good enough."
                  </p>
                  <p className="text-lg md:text-xl text-blue-800 leading-relaxed italic mt-2">
                    "I don't need everything to be perfect to be okay."
                  </p>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  At first, he resisted. (I had to bribe him with a dollar a day to keep him from covering his ears and yelling!) But soon, something shifted. One afternoon he said, "Mom, I just feel so good today. I don't know why. I'm just happy."
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  The moment my son said this and I saw that Yes! He truly WAS happy, my heart exploded and melted in all the best ways. I knew then that the self-talk was really working. My son got seven dollars from me before he stopped asking for his daily payment. Instead, he started reminding me, "Mom! Don't forget the self-talk!"
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  His frustration tolerance grew. He became more flexible, more patient, more joyful. The tension in our home started to lift, and for the first time in years, I felt like I could finally exhale.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  That's how Daily Power Up! App was born — a tool to help kids (and parents) use self-talk to build courage, confidence, and emotional resilience.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  The power of self-talk changed everything for our family, and it can for yours too.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Our thoughts shape our world, and in just a few minutes a day, you can help your child shape their world for the better.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
                  With love,<br />
                  Kathryn and Evan Jones
                </p>

                <Button
                  onClick={() => setIsExpanded(false)}
                  variant="outline"
                  className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Show Less
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-100">
              <div className="w-24 h-24 rounded-2xl mb-4 overflow-hidden">
                <img
                  src="/images/parent-1.jpg"
                  alt="Mom and Occupational Therapist"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Mom and Occupational Therapist</h3>
              <p className="text-gray-600 leading-relaxed">
                A parent who understands the daily challenges and an advocate for mental wellness in childhood.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-100">
              <div className="w-24 h-24 rounded-2xl mb-4 overflow-hidden">
                <img
                  src="/images/parent-2.jpg"
                  alt="Dad & Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Dad & Designer</h3>
              <p className="text-gray-600 leading-relaxed">
                A father committed to creating tools that empower children to build confidence and emotional resilience.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="p-8 md:p-12 rounded-3xl shadow-xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Stay Connected</h3>
            </div>
            <p className="text-center text-gray-600 mb-6">
              Get updates, tips, and encouragement delivered to your inbox
            </p>
            
            {isSuccess ? (
              <div className="flex items-center justify-center gap-2 text-green-600 font-semibold">
                <Check className="w-6 h-6" />
                <span>Thanks for signing up!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border-2 border-blue-200 focus:border-blue-400 px-6 py-3"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Signing Up..." : "Sign Up"}
                </Button>
              </form>
            )}
            
            {error && (
              <p className="text-center text-red-600 mt-4 text-sm">{error}</p>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
