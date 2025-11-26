import { motion } from "framer-motion";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";

const blogPosts = {
  "why-positive-self-talk-matters": {
    title: "Why Positive Self Talk Matters More Than You Think",
    subtitle: "Your inner voice is with you from the moment you wake up until your head hits the pillow. When that voice is kind and hopeful it can quietly reshape how you handle stress, challenges, and everyday life.",
    readTime: "7 min read",
    audience: "For parents, busy humans, and anyone learning to be kinder to themselves",
    tags: ["Mindset", "Science backed habits"],
    heroImage: "https://images.unsplash.com/photo-1708119651120-f48a57a0437d?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badges: ["Improved mood and resilience", "Backed by psychological research", "Built into Daily Affirmations Power Up"],
    content: `
## The inner voice that quietly shapes children's days

Kids develop their inner voice earlier than most people realize. The way they talk to themselves is shaped by what they hear at home, at school, and inside their own heads when no one else is around. Positive self talk gives children the tools to be kinder to themselves and more confident when facing challenges.

Psychologists define positive self talk as using encouraging and realistic language with yourself rather than critical or pessimistic thoughts. Over time, this can influence a child's mood, behavior, emotional regulation, and willingness to try new things.

### What research says about positive self talk

Positive thinking has been linked with better stress management and emotional health in both kids and adults, according to the [Mayo Clinic](https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/positive-thinking/art-20043950). It is not about pretending everything is perfect. It is about choosing thoughts that are realistic, hopeful, and supportive.

Research highlighted by the [American Psychological Association](https://www.apa.org/news/press/releases/2025/10/self-affirmations-well-being) shows that self affirmations can strengthen well being by helping people reflect on their strengths and values. This same foundation helps kids build resilience when dealing with school pressure, friendship struggles, or new experiences.

### Better mood, confidence, and resilience

When children practice kinder inner language, it creates space for growth instead of fear. Studies summarized by [Medical News Today](https://www.medicalnewstoday.com/articles/positive-self-talk) note that positive self talk can contribute to:

- Lower emotional distress
- Improved confidence in learning new skills
- Better emotional regulation during stressful moments
- A stronger sense of self worth

### Negative self talk: why kids slip into it easily

Children can be surprisingly hard on themselves. They often jump to conclusions like "I'm bad at this" or "Everyone is better than me." According to [Healthdirect](https://www.healthdirect.gov.au/self-talk), persistent negative self talk can increase stress and chip away at self esteem if it goes unaddressed.

These thoughts can also become a loop. If a child believes "I never do this right," they may put in less effort, avoid asking for help, or give up quickly. When the outcome goes poorly, the original belief feels confirmed.

Teaching positive self talk helps break that cycle. A thought like "I can try again" encourages persistence instead of avoidance.

## Simple ways for kids to practice positive self talk

### 1. Help kids notice their current inner voice

Kids often say things out loud that reveal how they speak to themselves internally. When you hear a harsh phrase, gently pause and ask how they might rephrase it with kindness.

### 2. Flip negative phrases into supportive ones

Examples parents can model or teach:

- *"I messed up again"* → *"I made a mistake, and I can learn from it."*
- *"I'm bad at math"* → *"I'm still learning this, and it's okay to need help."*
- *"I can't do this"* → *"I can try again or try a different way."*

### 3. Use second-person self talk for tough moments

Research in [Nature Scientific Reports](https://www.nature.com/articles/s41598-017-04047-3) suggests that using "you" instead of "I" during stressful tasks can help create emotional distance and calm.

For instance, instead of "I can't do this," a child might say, "You can take it one step at a time."

### 4. Use daily affirmations as gentle, guided practice

Affirmations give kids simple, supportive statements they can repeat to build confidence and emotional strength. They work best when they're age-appropriate, believable, and tied to real situations.

Kid-friendly examples:

- *"I can learn new things."*
- *"I'm allowed to make mistakes."*
- *"My feelings matter."*
- *"I am brave enough to try."*

## Where Daily Affirmations Power Up fits in

Daily affirmations are most powerful when they become a consistent habit, especially for kids who are still forming their self identity. That is exactly what **Daily Affirmations Power Up** is designed to support.

The app gives children a friendly, simple way to practice positive self talk every day. Parents play a small but important role in the beginning by setting things up, choosing affirmations, and helping guide the habit.

Kids get affirmations that feel fun and easy to repeat. Parents get a tool that helps reinforce emotional skills at home, using language kids understand.

Over time, these short moments of positive self talk help children build confidence, resilience, and a kinder inner voice. It is not about memorizing phrases. It is about giving kids a foundation of self respect and emotional strength they can grow with.
    `,
    sources: [
      { name: "Mayo Clinic. Positive thinking and stress management.", url: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/positive-thinking/art-20043950" },
      { name: "American Psychological Association. Self affirmations and well being.", url: "https://www.apa.org/news/press/releases/2025/10/self-affirmations-well-being" },
      { name: "Medical News Today. Overview of positive self talk.", url: "https://www.medicalnewstoday.com/articles/positive-self-talk" },
      { name: "Healthdirect Australia. Self talk and mental health.", url: "https://www.healthdirect.gov.au/self-talk" },
      { name: "Creswell et al. Neural mechanisms of self affirmation.", url: "https://pubmed.ncbi.nlm.nih.gov/26854981/" },
      { name: "Kross et al. Self talk and psychological distance.", url: "https://www.nature.com/articles/s41598-017-04047-3" }
    ],
    sidebar: {
      whatItSoundsLike: {
        examples: [
          { from: "I always mess this up", to: "I am still learning and I am allowed to improve" },
          { from: "I am terrible at this", to: "This is hard, but I can take it one step at a time" }
        ]
      },
      routine: [
        { time: "Morning", action: "Read one affirmation out loud. Take a single deep breath while you say it." },
        { time: "Afternoon", action: "When something goes wrong, catch one harsh thought and flip it gently." },
        { time: "Evening", action: "Name one thing you handled well, even if it was tiny." }
      ]
    }
  }
};

function MarkdownRenderer({ content }) {
  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = [];
  let inList = false;

  const processInlineMarkdown = (text) => {
    // Process links [text](url)
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">$1</a>');
    // Process bold
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>');
    // Process italic
    text = text.replace(/\*([^*]+)\*/g, '<em class="text-blue-700">$1</em>');
    return text;
  };

  const flushList = () => {
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          {currentList.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
          ))}
        </ul>
      );
      currentList = [];
      inList = false;
    }
  };

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();

    if (!trimmedLine) {
      flushList();
      return;
    }

    if (trimmedLine.startsWith('## ')) {
      flushList();
      elements.push(
        <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4">
          {trimmedLine.replace('## ', '')}
        </h2>
      );
    } else if (trimmedLine.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={index} className="text-xl md:text-2xl font-bold text-gray-900 mt-8 mb-3">
          {trimmedLine.replace('### ', '')}
        </h3>
      );
    } else if (trimmedLine.startsWith('- ')) {
      inList = true;
      currentList.push(trimmedLine.replace('- ', ''));
    } else {
      flushList();
      elements.push(
        <p
          key={index}
          className="text-gray-600 text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: processInlineMarkdown(trimmedLine) }}
        />
      );
    }
  });

  flushList();

  return <>{elements}</>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-gray-100">
      {/* Navigation */}
      <header className="py-5 px-6">
        <nav className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 via-blue-400 to-orange-400 p-0.5">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-yellow-400 to-green-500 flex items-center justify-center">
                <span className="font-bold text-slate-900 text-sm">D</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs tracking-widest uppercase text-gray-400">Daily Affirmations</span>
              <span className="text-sm font-semibold text-gray-200">Power Up</span>
            </div>
          </Link>
          <a
            href="https://www.dailyaffirmationspowerup.com"
            className="text-sm px-4 py-2 rounded-full border border-gray-600 hover:border-blue-400 transition-colors flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-slate-900/30"
          >
            Get the app <span>↗</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-gray-700 text-xs text-gray-300 mb-4">
                <span className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
                {post.tags.join(" • ")}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Why positive self talk matters{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                  more than you think
                </span>
              </h1>

              <p className="text-gray-400 text-lg mb-6">{post.subtitle}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-800/60 border border-gray-700 text-gray-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-slate-900 font-medium text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-green-500/30 transition-all"
                >
                  Start your affirmation habit <span>▶</span>
                </a>
                <span className="text-gray-400 text-sm">Read the science behind simple daily self talk</span>
              </div>

              <p className="text-xs text-gray-500">
                Based on findings from the Mayo Clinic, the American Psychological Association, and recent self affirmation studies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-green-400 via-blue-400 to-slate-900 p-1">
                <img
                  src={post.heroImage}
                  alt="Person writing in a journal with coffee at sunrise"
                  className="w-full h-64 md:h-80 object-cover rounded-3xl"
                />
              </div>
              <div className="absolute top-4 right-4 px-3 py-2 rounded-full bg-slate-900/80 backdrop-blur border border-gray-600 text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />
                <div>
                  <strong className="text-green-400">Daily check in</strong>
                  <br />
                  <span className="text-gray-300">Gentle prompts that keep your inner voice on your side.</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-green-500 opacity-80 blur-sm" />
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur border border-gray-600 text-xs text-gray-300">
                <span className="px-2 py-0.5 rounded-full border border-gray-600 text-gray-400 mr-2">Habit friendly</span>
                Just a few seconds of self talk a day adds up over time.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Article */}
            <article className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Long read
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span>•</span>
                <span>{post.audience}</span>
              </div>

              <MarkdownRenderer content={post.content} />

              {/* CTA Block */}
              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-slate-50 border border-green-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Ready to power up your inner voice?</h3>
                    <p className="text-gray-600">
                      Start with one week of simple, guided self talk. A few seconds a day. Zero pressure.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium flex items-center gap-2"
                    >
                      Try Daily Affirmations Power Up <span>↗</span>
                    </a>
                    <a
                      href="https://www.dailyaffirmationspowerup.com"
                      className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 text-sm flex items-center gap-2"
                    >
                      Learn more about the app
                    </a>
                  </div>
                </div>
              </div>

              {/* Sources */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Sources</h4>
                <ul className="space-y-2">
                  {post.sources.map((source, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {source.name}{" "}
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline inline-flex items-center gap-1"
                      >
                        View <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* What it sounds like */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-gray-700">
                <span className="text-xs uppercase tracking-widest text-gray-400">Visual snapshot</span>
                <div className="mt-4 rounded-xl overflow-hidden border border-gray-600">
                  <img
                    src="https://images.unsplash.com/photo-1546800237-ddc1372bc253?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sticky notes with positive words"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mt-4 mb-2">What positive self talk sounds like</h3>
                <p className="text-gray-400 text-sm mb-4">
                  If you are not sure where to start, try swapping harsh thoughts with kinder ones.
                </p>
                <ul className="space-y-3 text-sm">
                  {post.sidebar.whatItSoundsLike.examples.map((example, i) => (
                    <li key={i} className="text-gray-300">
                      <span className="text-gray-500">From:</span> {example.from}
                      <br />
                      <span className="text-green-400">To:</span> {example.to}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Routine */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-gray-700">
                <span className="text-xs uppercase tracking-widest text-gray-400">Daily rhythm</span>
                <h3 className="text-lg font-bold mt-2 mb-4">A simple three step routine</h3>
                <ul className="space-y-3 text-sm">
                  {post.sidebar.routine.map((item, i) => (
                    <li key={i} className="text-gray-300">
                      <strong className="text-white">{item.time}:</strong> {item.action}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-sm mt-4">
                  Small repetitions teach your brain that kindness is the new default.
                </p>
              </div>

              {/* For Parents */}
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-gray-700">
                <span className="text-xs uppercase tracking-widest text-gray-400">For parents</span>
                <div className="mt-4 rounded-xl overflow-hidden border border-gray-600">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                    alt="Parent and child reading together"
                    className="w-full h-40 object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mt-4 mb-2">Model the voice you want your kids to have</h3>
                <p className="text-gray-400 text-sm">
                  Kids learn how to talk to themselves by listening to how the adults around them talk about their own mistakes and wins.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  When you practice positive self talk out loud, you are not only helping yourself. You are quietly teaching your kids that they deserve the same kindness from themselves too.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-blue-900/50 bg-slate-950">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
          <span>© {new Date().getFullYear()} Daily Affirmations Power Up. All rights reserved.</span>
          <span>Made for gentle, realistic self talk that fits into real life.</span>
        </div>
      </footer>
    </div>
  );
}
