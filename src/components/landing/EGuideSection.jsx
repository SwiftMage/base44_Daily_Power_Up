import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/api/supabaseClient";

export default function EGuideSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const { error: dbError } = await supabase
        .from("email_signups")
        .insert([{ email: email, source: "eguide" }]);

      if (dbError) throw dbError;
      setStatus("success");
    } catch (err) {
      console.error("Error saving email:", err);
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section className="py-16 md:py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Free E-Guide: Self-Talk for Kids
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            See results fast and avoid the biggest mistakes. Download our free guide to learn how to use the power of self-talk to increase joy, reduce anxiety, and build lasting confidence.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-3 text-white">
                <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-semibold">
                  Check your email for the guide!
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/90 border-0 text-gray-900 placeholder-gray-500 rounded-xl py-6 text-base"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  "Get Free Guide"
                )}
              </Button>
            </form>
          )}

          {error && (
            <p className="text-red-200 text-sm mt-3">{error}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
