import { useState } from "react";
import { BookOpen, Check, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/api/supabaseClient";

export default function HowItWorksSection() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setError("");

    try {
      const { error: dbError } = await supabase
        .from("email_signups")
        .insert([{ email: email }]);

      if (dbError) console.error("Error saving email:", dbError);
    } catch (err) {
      console.error("Error saving email:", err);
    }

    setStatus("success");
  };

  return (
    <section id="eguide" className="py-20 px-8 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-16">
          How Daily Power Up! Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">The Neuroscience</h3>
            <p className="text-white font-semibold text-lg mb-3">Repeated words rewire the brain.</p>
            <p className="text-white/90 text-lg leading-relaxed">
              Our thoughts and words create neural pathways. The more they're repeated, the stronger they become—guiding how we think, feel, and behave.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Self-Talk in Daily Life</h3>
            <p className="text-white font-semibold text-lg mb-3">What your child repeats becomes their reality.</p>
            <p className="text-white/90 text-lg leading-relaxed">
              "I can't" on repeat leads to anxiety, overwhelm, and resistance. "I can do hard things" builds calm, confidence, and perseverance.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Best Parenting Hack Ever</h3>
            <p className="text-white font-semibold text-lg mb-3">Most parents see positive changes in 7–10 days.</p>
            <p className="text-white/90 text-lg leading-relaxed">
              After just a few days of positive self-talk on repeat, the brain follows new instructions. It's neuroscience—but parents say it feels magical.
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-4">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-extrabold text-white mb-4">Free E-Guide — <span className="text-yellow-300">Self-Talk for Kids</span></h3>
            <p className="text-white/90 text-lg mb-6">
              Learn the science behind self-talk — download our free guide!
            </p>
            <Button
              onClick={() => setShowModal(true)}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Download Our Free E-Guide!
            </Button>
          </div>

        </div>
      </div>

      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-2xl mb-4">
                <BookOpen className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Get Your Free E-Guide</h3>
              <p className="text-lg font-semibold text-purple-600">Self-Talk for Kids</p>
              <p className="text-gray-600 mt-2">Enter your email and we'll send the guide straight to your inbox!</p>
            </div>

            {status === "success" ? (
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">You're all set!</p>
                </div>
                <a href="/DPU!%20Ebook%20guide%20final%20pdf.pdf" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 text-lg rounded-xl">
                    Open Your Free E-Guide
                  </Button>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 rounded-xl py-6 text-base"
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 text-lg rounded-xl"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Send Me the Guide"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
