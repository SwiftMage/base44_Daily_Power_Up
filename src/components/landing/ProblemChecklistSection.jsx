import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, Sparkles } from "lucide-react";

const symptoms = [
  "Meltdowns",
  "Sibling & peer fights",
  "Power struggles",
  "Rigid routines",
  "Anxiety",
  "Poor self-esteem",
];

const transformations = [
  { before: "\"I'm not doing that!\"", after: "\"I can try.\"" },
  { before: "\"You can't make me!\"", after: "\"I can do hard things.\"" },
  { before: "\"No! I won't!\"", after: "\"I'll give it my best.\"" },
];

const results = [
  "Increased cooperation",
  "Less resistance & anxiety",
  "Increased flexibility",
  "Fewer meltdowns",
  "More joy",
  "A willingness to try",
];

export default function ProblemChecklistSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Symptom Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Does this sound familiar?
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {symptoms.map((s, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-full px-4 py-2 text-sm md:text-base font-medium"
              >
                <AlertCircle className="w-4 h-4" />
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Root Cause Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            These challenges often have <strong>one thing in common</strong> — they're driven by your child's inner dialogue.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            Science has proven that the thoughts your child repeats become their reality. When the brain hears <em>"No! I won't! I can't! I don't want to!"</em> it follows those instructions — resulting in anxiety, overwhelm, power struggles, avoidance, meltdowns, and rigid behaviors.
          </p>
          <p className="text-lg md:text-xl text-gray-800 font-semibold">
            Here's the good news: Daily Power Up has the solution.
          </p>
        </motion.div>

        {/* Transformation Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Flip your child's biggest challenges into their biggest strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {transformations.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center"
              >
                <p className="text-red-500 font-medium mb-3 line-through decoration-2">
                  {t.before}
                </p>
                <ArrowRight className="w-5 h-5 text-gray-400 mx-auto mb-3 rotate-90" />
                <p className="text-green-600 font-bold text-lg">
                  {t.after}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Neuroscience Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Daily Power Up uses the power of neuroscience to build new neural pathways in the brain that cancel out old negative thought patterns. Repeated thoughts become stronger pathways — and the strongest pathways influence behaviors, mood, habits, and reactions to the world.
          </p>
          <p className="text-xl md:text-2xl font-bold text-purple-600 mb-8">
            It's neuroscience that feels like magic.
          </p>

          {/* Results */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">
              In just a few days, you'll see:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {results.map((r, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
