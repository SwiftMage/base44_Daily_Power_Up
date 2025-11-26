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
## The inner voice that quietly shapes your day

Most of us walk around with a constant stream of thoughts about ourselves. Some of those thoughts are helpful like *I can figure this out*. Others are quietly harsh like *Why do I always mess this up*.

Psychologists often call this running commentary **self talk**. When that self talk is mostly supportive and encouraging it is known as **positive self talk** and it can influence how you feel and how you act in real situations not just inside your head.

### What research says about positive self talk

Positive self talk is not about pretending everything is perfect. It is about choosing thoughts that are realistic, hopeful, and kind instead of critical by default. According to the Mayo Clinic, people who practice more positive thinking tend to experience better stress management and may enjoy broader health and emotional benefits over time compared with people who stay in negative thought patterns.

The American Psychological Association has highlighted research showing that **self affirmations** short statements that reflect your personal values or strengths can boost general well being and social well being especially when people are under stress.

### Better mood, more resilience

When you speak to yourself with warmth instead of constant criticism, something important shifts. Positive self talk has been associated with:

- Lower levels of distress and more stable mood in daily life.
- Greater resilience when facing setbacks or uncertainty.
- Improved emotion regulation like being able to pause, breathe, and respond instead of reacting on autopilot.

A review on positive self talk and related practices suggests that people who adopt more constructive inner dialogue tend to cope more effectively with stressors and often report better overall well being.

### Improved focus and performance

Positive self talk does not just make you feel better in a vague way. It can also affect focus and performance. In sports psychology for example, self talk is often used as a strategy to help athletes stay motivated, concentrate, and keep going when things get tough.

Neuroscience research on self affirmations has found that when people reflect on their core values and strengths, it activates areas of the brain involved in self evaluation and reward which may help reinforce positive behavior and motivation over time.

## Why it is so easy to slip into negative self talk

For many people, negative self talk is the default. It creeps in quietly:

- You replay a mistake from work over and over and turn it into a story about not being good enough.
- You compare yourself to other parents and conclude that you are always behind.
- You downplay every win and zoom in on every flaw.

Health services and mental health organizations note that persistent negative self talk is linked with higher stress, lower self esteem, and greater emotional distress.

The tricky part is that this inner commentary often runs on autopilot. You may not even notice how critical it has become until you feel drained, anxious, or stuck.

### Negative self talk can become a self fulfilling loop

Imagine going into a new challenge with the thought: *I always fail at this*. That thought might lead you to hold back, put in less effort, or avoid asking for help. If things do not go well, the outcome then seems to prove the original belief.

Positive self talk works in the opposite direction. Thoughts like *I can learn this* or *I do not know how yet, but I can figure it out* support more effort and more curiosity. When things go a little better than expected, that experience then reinforces the new, healthier belief.

## Simple ways to practice positive self talk

You do not have to overhaul your personality to change your inner dialogue. Small, consistent shifts can make a real difference over time.

### 1. Start noticing your current self talk

For a day or two, simply pay attention. When something goes wrong, what is the first thing you say to yourself? When you do something well, do you give yourself any credit at all?

You cannot change what you never notice. Awareness is the first step.

### 2. Gently flip the script

When you hear a harsh thought show up, try responding with a kinder version. For example:

- *That was so stupid* can become *That was a mistake, and I can learn from it*.
- *I am terrible at this* can become *I am still learning, and that is okay*.
- *I never get this right* can become *Sometimes I struggle with this, but I have handled tough things before*.

### 3. Try second person self talk for stressful moments

Some research suggests that using the word *you* instead of *I* when talking to yourself can create a bit of healthy distance and help you stay calmer under pressure.

For example, instead of *I cannot do this*, you might say: *You have gotten through harder things than this. Take one step at a time*.

### 4. Anchor your day with a few simple affirmations

Positive affirmations are short, intentional statements you can repeat to yourself. They work best when they feel believable, specific, and connected to your real values.

Examples:

- *I am learning to be kinder to myself.*
- *I can pause, breathe, and respond instead of reacting on autopilot.*
- *I am doing the best I can with the energy and information I have today.*
- *I am allowed to grow at my own pace.*

## Where Daily Affirmations Power Up fits in

Positive self talk makes the biggest difference when it becomes a daily habit, especially for kids who are still forming their self-image and internal voice. That is exactly what **Daily Affirmations Power Up** is built for.

The app gives children a friendly, fun way to practice simple affirmations each day while parents help guide the setup and encourage the habit. Kids hear messages like "I can try again," "I am capable," and "My feelings matter" in a format that feels playful instead of forced.

And because parents participate in the beginning, you can shape the experience so the affirmations match your child's age, personality, and emotional needs.

### A shared practice that strengthens both sides of the relationship

When you help your child practice positive self talk, you're giving them a tool they will carry for years. Kids learn how to treat themselves by listening to how trusted adults speak to them and how they navigate challenges.

Daily Affirmations Power Up becomes a small daily touchpoint where:

- Kids hear messages that build confidence and resilience
- Parents reinforce emotional skills at home
- You both create a consistent language of support

Over time, those short prompts help kids internalize a kinder, more encouraging inner voice. It is not about memorizing phrases. It is about growing up with a foundation of self respect and emotional strength.
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
