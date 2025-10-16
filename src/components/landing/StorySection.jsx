
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Mail, Check, ChevronDown, ChevronUp } from "lucide-react";
import { base44 } from "@/api/base44Client";

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
      await base44.entities.EmailSignup.create({
        email: email,
        subscribed_date: new Date().toISOString()
      });
      
      setIsSuccess(true);
      setEmail("");
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
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
              Hi, I'm Kathryn, an Occupational Therapist and mom to a deeply feeling child. For years, our home was filled with what I call emotional tornadoes—big, unpredictable meltdowns that could turn our whole day upside down. When those storms hit, everything stopped. We were all left feeling overwhelmed, sad, and confused long after the meltdown was over.
            </p>
            
            {!isExpanded && (
              <div className="relative">
                <div className="relative pb-8">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                    Parenting a self-directed, highly spirited child is beautiful and exhausting all at once. It can feel like you're constantly riding an emotional rollercoaster. The uncertainty of when the next emotional twist is coming can lead to a parenting journey that is isolating, lonely, and honestly sometimes scary.
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                    Watching your child struggle and not knowing how to help left me questioning everything: Why can't I figure this out? What do they need that I'm not giving them? What's wrong with me? And sometimes, the question I whispered only to myself… is something wrong with them?
                  </p>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                    For years I asked for help everywhere I could find it. I talked to teachers, behavior specialists, and therapists. We tried individual and family counseling. I read all the books, listened to all the podcasts...
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
                  Parenting a self-directed, highly spirited child is beautiful and exhausting all at once. It can feel like you're constantly riding an emotional rollercoaster. The uncertainty of when the next emotional twist is coming can lead to a parenting journey that is isolating, lonely, and honestly sometimes scary. Watching your child struggle and not knowing how to help left me questioning everything: Why can't I figure this out? What do they need that I'm not giving them? What's wrong with me? And sometimes, the question I whispered only to myself… is something wrong with them?
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  For years I asked for help everywhere I could find it. I talked to teachers, behavior specialists, and therapists. We tried individual and family counseling. I read all the books, listened to all the podcasts, talked to all the doctors, and used all my OT training to search for answers. I even dove deep into neuroscience and self-regulation courses trying to understand the brain and figure out, what was I missing?
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Then one night, at the very end of my rope, a simple thought popped into my head: "Just try self-talk." As an OT, I'd seen self-talk work wonders for kids in my practice but I wasn't sure something that simple could work for my family. Still, I was out of ideas and willing to try anything.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  So I took my son's biggest struggles and turned them into positive affirmations. Every morning before school, he repeated them back to me. Phrases like:
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
                  I taped the list to our kitchen wall and read the phrases aloud as we packed lunches, filled water bottles, and slipped on shoes before heading to the bus stop.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  At first, he wanted nothing to do with it (which, honestly, is totally normal). He covered his ears, yelled, and refused to listen. I was desperate, so I offered him a dollar for every day he participated. He agreed, but still wouldn't say the affirmations out loud. I didn't push it. I just asked him to listen and say the words quietly in his head.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  About ten days later, I was doing dishes when out of the blue he walked over and said, "Mom, I just feel so good today. I don't know why. I just think my body is so strong and awesome, and I can't stop thinking about it."
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  He was smiling. He was happy.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I froze, staring at my husband like, what is happening right now? I was thrilled, but also nervous wondering if I could trust it or if a meltdown was just around the corner. When he walked away, I whispered to my husband, "What was that?" He just shook his head, equally stunned.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Could it really be the self-talk working? I hoped so but didn't want to get ahead of myself. But as the days went on, it became clear that something was shifting. My son got $7 from me before he stopped asking for his daily payment. Instead, he started reminding me, "Mom! Don't forget the self-talk!"
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  His frustration tolerance grew. He became more flexible, more patient, more joyful. The tension in our home started to lift, and for the first time in years, I felt like I could finally exhale.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  When I finally stepped out of crisis mode and realized how much this small daily practice had transformed our family, I knew I had to share it with others. That's how Daily Affirmations Power Up! was born.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  These days, it's hard to even remember the emotional chaos we used to live in. We smile more than we cry. We laugh more than we rage. We talk things out more than we explode. And we're stronger and more connected as a family than we've ever been.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  This app was created with kids in mind—but honestly, it's for everyone. Because our thoughts shape our world. And with just a few minutes a day, you can help your child (and yourself) build a world filled with courage, confidence, joy, and emotional resilience.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
                  With love from our family to yours,<br />
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
