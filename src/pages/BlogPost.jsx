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
  },
  "morning-routine-calm-confident-kids": {
    title: "The Ultimate Morning Routine for Calm, Confident Kids",
    subtitle: "Mornings with kids rarely look like the calm, smiling family photos on social media. Here's a detailed, parent-tested approach to creating a morning routine that helps your child start the day calm and confident.",
    readTime: "8 min read",
    audience: "For parents seeking peaceful mornings and confident children",
    tags: ["Morning Routine", "Parenting Tips"],
    heroImage: "https://images.pexels.com/photos/7220534/pexels-photo-7220534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    badges: ["Reduce morning stress", "Build lasting confidence", "Create positive habits"],
    content: `
## The real problem with chaotic mornings

Let's be honest: mornings with kids rarely look like the calm, smiling family photos on social media. More often, they involve last-minute searches for shoes, forgotten homework, spilled cereal, and a frazzled parent counting down the minutes until the school bell rings.

But here's the thing: how your child starts the day matters. Research consistently shows that [morning routines impact children's emotional regulation, focus, and overall wellbeing](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6266538/). A chaotic start can set a negative tone that follows kids into the classroom and beyond.

The good news? With some intentional planning and a few mindset shifts, you can transform your mornings from stressful to supportive. This isn't about perfection—it's about creating a rhythm that helps your child feel calm, capable, and ready to face the day.

## Why morning routines matter for kids

### The science behind structured mornings

Children's brains thrive on predictability. When kids know what to expect, their stress response stays regulated, and they can focus their mental energy on learning and growing rather than coping with uncertainty.

According to the [American Academy of Pediatrics](https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx), consistent routines help children:

- Fall asleep more easily and wake up more refreshed
- Experience fewer behavioral problems
- Develop better self-regulation skills
- Feel more secure and confident

### The emotional foundation of good mornings

Beyond the practical benefits, morning routines offer something even more valuable: connection. Those quiet moments before the day's demands take over are opportunities to strengthen your bond with your child and reinforce their sense of being loved and supported.

When a child starts the day feeling connected and confident, they're better equipped to handle whatever challenges come their way—whether it's a tough math test, a conflict with a friend, or just the ordinary ups and downs of childhood.

## Building your morning routine: A step-by-step guide

### The night before: Setting up for success

Great mornings actually start the evening before. Here's how to set the stage:

- **Prepare clothes together.** Let your child pick out their outfit (within reason) the night before. This gives them a sense of control and eliminates morning decision fatigue.

- **Pack bags and check homework.** Make it a habit to do a backpack check after dinner. Everything that needs to go to school should be ready to grab.

- **Set a consistent bedtime.** The [Sleep Foundation recommends](https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need) that school-age children get 9-12 hours of sleep. Work backward from your wake-up time to establish an appropriate bedtime.

- **Talk about tomorrow.** Briefly discuss what's happening the next day. This helps children mentally prepare and reduces morning anxiety about the unknown.

### The morning flow: Timing is everything

A calm morning requires realistic timing. Most families underestimate how long things actually take. Here's a general framework:

**60-90 minutes before departure:**

- Wake up (give kids a few minutes to transition from sleep)
- Use the bathroom, wash face, brush teeth
- Get dressed

**45-60 minutes before departure:**

- Eat breakfast together if possible
- Quick cleanup of breakfast dishes

**30-45 minutes before departure:**

- Final preparations (hair, accessories, etc.)
- Affirmation or mindset moment (more on this below)
- Gather belongings

**15-30 minutes before departure:**

- Put on shoes and outerwear
- Last bathroom trip
- Leave with buffer time

Adjust these windows based on your child's age and temperament. Some kids need more transition time; others move quickly when motivated.

### The secret ingredient: Morning affirmations

Here's where the magic happens. Building a brief affirmation practice into your morning routine can transform not just your child's day, but their developing self-image.

**Why affirmations work for kids:**

Children's brains are incredibly malleable. The messages they hear—especially from trusted adults and from themselves—literally shape the neural pathways that will influence their thoughts and behaviors for years to come.

[Research on self-affirmation theory](https://www.apa.org/pubs/journals/releases/psp-904553.pdf) shows that practicing positive self-statements can:

- Reduce stress responses
- Improve problem-solving under pressure
- Boost academic performance
- Increase resilience in the face of setbacks

**How to incorporate affirmations:**

1. **Keep it simple and age-appropriate.** Young children benefit from short, concrete statements like "I am kind" or "I can do hard things." Older kids might connect with more specific affirmations like "I am prepared for my test" or "I am a good friend."

2. **Make it interactive.** Rather than just reciting affirmations, try asking your child, "What's something you're proud of?" or "What's one thing you're going to try today?" This engages their thinking and makes the practice more meaningful.

3. **Use visual reminders.** Post affirmations on the bathroom mirror or create affirmation cards to flip through at breakfast.

4. **Model the practice yourself.** Let your child hear you say your own affirmations. "Today I'm going to stay calm, even when things get busy."

5. **Connect it to their day.** If your child has something challenging ahead, help them create an affirmation that addresses it: "I can ask for help when I need it" or "Mistakes help me learn."

## Troubleshooting common morning challenges

### The slow mover

Some kids are naturally slow to wake up and transition. For these children:

- Consider an earlier wake-up time with a gradual, gentle start
- Use timers to make the passage of time more concrete
- Build in small rewards for staying on schedule
- Play upbeat music to energize the morning

### The perfectionist

Kids who struggle with getting things "just right" can derail morning timing:

- Limit choices (only 2-3 outfit options, for example)
- Reassure them that "good enough" is really okay
- Save detailed grooming for times when there's less pressure
- Practice self-compassion affirmations: "I don't have to be perfect"

### The anxious child

For children who worry about the day ahead:

- Provide extra transition time so they don't feel rushed
- Use affirmations that address their specific fears
- Create a goodbye ritual that provides closure
- Talk through the day's schedule so there are no surprises

### The resistant child

When kids fight the routine:

- Involve them in creating the routine (they're more likely to follow something they helped design)
- Use visual schedules or checklists they can manage themselves
- Focus on natural consequences rather than nagging
- Celebrate cooperation enthusiastically

## A sample morning routine for a 7-year-old

Here's what a calm, confidence-building morning might look like:

**6:45 AM** – Gentle wake-up with soft lighting and a hug

**6:50 AM** – Bathroom routine (potty, wash face, brush teeth)

**7:00 AM** – Get dressed (clothes were picked out the night before)

**7:10 AM** – Breakfast together at the table

**7:30 AM** – Clean up breakfast, pack lunch together

**7:40 AM** – Affirmation moment: "What's one thing you're going to try today?" followed by parent sharing their own affirmation

**7:45 AM** – Final preparations (hair, gather belongings)

**7:55 AM** – Shoes on, backpack check, goodbye hugs

**8:00 AM** – Leave for school with 5 minutes of buffer time

Notice how this routine builds in connection points (breakfast together, affirmation moment, goodbye hugs) alongside the practical tasks. These moments of connection are what transform a routine from a checklist into a confidence-building ritual.

## The long game: Building lasting confidence

Morning routines aren't just about getting out the door on time (though that's certainly a nice benefit). They're about:

- Teaching children that they are capable of managing their own needs
- Providing daily opportunities for positive self-talk
- Creating predictability that reduces anxiety
- Starting each day with connection and confidence

Over time, these small morning investments compound. The child who hears "I can do hard things" every morning will eventually believe it—and act accordingly.

## Where Daily Affirmations Power Up fits in

Building a consistent affirmation habit is easier with the right tools. **Daily Affirmations Power Up** was designed specifically to help families incorporate meaningful, age-appropriate affirmations into their daily routines.

The app offers:

- A library of kid-friendly affirmations organized by theme
- Customizable affirmation selections that match your child's current challenges
- Gentle reminders to keep the habit consistent
- A beautiful, engaging interface that kids enjoy using

Whether you use it as part of your morning routine or find another moment that works for your family, the goal is the same: helping your child develop a kind, encouraging inner voice that will serve them for life.

## Start small, stay consistent

You don't need to overhaul your entire morning tomorrow. Pick one or two elements from this guide and try them for a week. Maybe it's preparing clothes the night before. Maybe it's adding a simple affirmation at breakfast. Maybe it's just leaving five minutes earlier to reduce the rush.

Small changes, consistently applied, lead to significant transformations. And before you know it, those chaotic mornings will become calm, connected moments that set your child up for success—one day at a time.
    `,
    sources: [
      { name: "Mindell JA, et al. Development of infant and toddler sleep patterns.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6266538/" },
      { name: "American Academy of Pediatrics. Healthy Sleep Habits.", url: "https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx" },
      { name: "Sleep Foundation. How Much Sleep Do Kids Need?", url: "https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need" },
      { name: "Cohen GL, Sherman DK. The Psychology of Self-Affirmation.", url: "https://www.apa.org/pubs/journals/releases/psp-904553.pdf" }
    ],
    sidebar: {
      whatItSoundsLike: {
        examples: [
          { from: "I don't want to go to school", to: "I can do hard things, and I might even have fun" },
          { from: "I'm going to mess up my test", to: "I prepared, and I'll do my best" }
        ]
      },
      routine: [
        { time: "Night before", action: "Pick out clothes and pack your backpack together." },
        { time: "Morning", action: "Follow your routine and share one affirmation at breakfast." },
        { time: "Before leaving", action: "End with a hug and an encouraging word for the day." }
      ]
    }
  },
  "building-lasting-confidence-power-of-positive-self-talk": {
    title: "Building Lasting Confidence: The Power of Positive Self-Talk for Kids",
    subtitle: "When we think about building confidence in our kids, the conversation usually starts on the outside. But there's a more powerful tool at play: the way our children talk to themselves in the privacy of their own minds.",
    readTime: "10 min read",
    audience: "For parents who want to nurture confident, resilient children",
    tags: ["Confidence", "Self-Talk"],
    heroImage: "https://images.pexels.com/photos/8088100/pexels-photo-8088100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    badges: ["Build self-esteem", "Foster resilience", "Create lasting habits"],
    content: \`
## What Is Positive Self-Talk?

When we think about building confidence in our kids, the conversation usually starts on the outside—praise, encouragement, celebrations of effort. But there's a more powerful (and often less visible) tool at play: the way our children talk to themselves in the privacy of their own minds. At Daily Power Up!, we've seen firsthand how intentionally fostering positive self-talk can change not just a child's mood, but the very trajectory of how they see themselves, approach challenges, and believe in their own abilities for the rest of their lives.

Positive self-talk is when kids treat their inner voice like a helpful coach—one that encourages, reassures, and motivates, instead of criticizing or shutting down possibilities. It's the difference between "I can do hard things" and "I always mess up." The words kids use with themselves become the beliefs they carry into school, friendships, new experiences, and ultimately their sense of self-worth.

## Why Positive Self-Talk Really Matters

Children's inner dialogue isn't just idle chatter—it shapes their emotional landscape and patterns their behavior in deeply lasting ways. Here's how positive self-talk acts as the engine for lifelong confidence:

- **Boosts Self-Esteem:** When kids believe they're capable and worthy, they approach life with curiosity and courage.

- **Builds Emotional Resilience:** Positive self-talk helps them recover from mistakes or setbacks by reframing stumbles as learning moments.

- **Ignites Motivation:** Affirmations like "I can try again" fuel the perseverance needed to master new skills.

- **Fosters Better Social Relationships:** A confident inner voice helps kids participate fully, manage peer conflict, and stand up for themselves.

- **Supports a Growth Mindset:** Children who talk to themselves positively are more likely to see challenges as opportunities, not threats.

## The Science: How the Brain Learns Confidence

The early years (roughly ages 3–10) are a critical period for setting the patterns of self-talk. Neurological studies show that when kids repeat encouraging phrases linked to real experiences—whether that's learning to read, navigating a tough day, or trying a new activity—their brains literally build stronger pathways for confidence, emotional regulation, and motivation. Over time, positive self-talk lays down the mental tracks that become kids' go-to response in stressful or unfamiliar situations.

## Real-Life Moments: What Positive Self-Talk Looks Like

- **Losing a Game:** Instead of spiraling into "I'm terrible," a child who's practiced affirmations says, "I tried my best, and I can try again tomorrow."

- **Starting a New School:** Positive inner dialogue might sound like, "It's okay to feel nervous. I can ask for help and make friends one step at a time."

- **Resolving Friendship Problems:** Kids with strong self-talk skills think, "This is hard, but I can be brave and honest," instead of letting fear take over.

## How Families Can Cultivate Positive Self-Talk (Without Adding Stress)

We all want to empower our kids, but real life is busy! Here's what we practice ourselves—and what we've built into Daily Affirmations Power Up to help families stay consistent without feeling overwhelmed:

### 1. Model What You Want to See

Let your kids hear you catch your own negative self-talk and gently rephrase it. For example: "I made a mistake at work, but I'm learning, too!" Children imitate what they hear from parents and caregivers.

### 2. Notice and Reframe

When your child voices frustration ("I can't do this!"), validate their feelings, then offer a new script: "This is tough, and you are learning every day." Over time, these phrases become automatic for them.

### 3. Make Affirmations a Shared Ritual

Consider integrating short, meaningful affirmations into your morning routine, the drive to school, or bedtime wind-down. The key: keep it simple and repeat. Affirmations like "I am brave" or "I am a kind friend" stick best.

### 4. Celebrate Progress—Not Just Perfection

Confidence grows from effort, not only outcomes. Point out moments when your child perseveres, shows kindness, or bounces back—and highlight the positive self-talk that made it possible.

### 5. Give Each Child a Voice

Kids respond to ownership. Let them choose or create their own affirmations, record themselves, or draw pictures that represent how they want to feel. These become anchors for tough moments.

## What Makes Daily Affirmations Power Up Different?

At Daily Power Up!, we wanted to create an experience that helps parents and kids turn these positive habits into fun, easy-to-stick-with rituals. Here's how our approach empowers families:

- **Designed Entirely for Kids:** Affirmations are written in language kids understand, across real-life themes like bravery, gratitude, and staying calm.

- **Gentle, Encouraging Voiceovers:** Each child hears a friendly guide—not a rushed robot or adult voice—prompting them to listen, repeat, and adopt the affirmations.

- **Profiles for Every Child:** Families with multiple kids can personalize the experience for each child, so everyone gets the encouragement they need, at their own pace.

- **No Distractions—Truly Calm Experience:** The app contains zero ads, no popups, and no overstimulation—just a safe, supportive environment for every temperament.

- **Fits Busy Routines:** Daily reminders and engaging visuals turn short affirmation practice into a habit, not another chore. Whether it's before school, after a tough day, or just before bed, kids can power up confidence independently.

## Everyday Challenges: Why Consistency Matters for Lasting Change

If you've ever tried to start a new habit in your own life, you know consistency is everything. The same is true for your child's self-talk. Quick wins ("I listened to my affirmations today!") are motivating, but the deep, lasting benefits show up after weeks or months of small, daily effort. That's why Daily Power Up makes it easy to keep track of progress, celebrate sticking with routines, and gently remind kids (and parents) that every positive practice counts—especially when life gets busy or tough.

## Strategies for Different Personality Types

Every child is different, but positive self-talk works for all. Here's how we see families adapting affirmation practice to unique personalities:

- **The Shy Child:** Try affirmations about self-worth and gentle bravery—build up their belief in being seen and heard.

- **The Outgoing Child:** Focus on themes like kindness and focus, helping them channel energy in affirming ways.

- **The Sensitive or Anxious Child:** Calm, repetitive affirmations ("I can breathe and feel safe") provide predictability and reassurance.

- **Neurodiverse Kids:** Predictable language, gentle visuals, and a safe, offline environment help self-regulation and confidence grow naturally.

## Simple Affirmations to Get Started

The most powerful affirmations are honest, clear, and age-appropriate. Here are a few favorites families in our community love—and you can use today:

- "I am learning every day."
- "It's okay to make mistakes."
- "I can do hard things."
- "I am a kind friend."
- "I can stay calm and take a deep breath."
- "I am proud of myself for trying."

Invite your child to pick one or two to focus on for a week, repeat them together at predictable moments, and watch the small shifts add up.

## Frequently Asked Questions

**How fast will I see changes?**
Some families notice new language and attitudes in less than two weeks. The most lasting changes tend to build slowly over several months.

**Is this approach just for kids struggling with confidence?**
Not at all. Even confident kids need tools to handle setbacks, reach for new goals, or deal with tough transitions.

**Can kids use Daily Affirmations Power Up on their own?**
Yes! The kid-friendly visuals, voiceovers, and navigation mean even pre-readers or neurodiverse children can listen and participate independently.

## Start Your Family's Confidence Journey

At the heart of raising confident kids is one simple truth: what they say to themselves becomes what they believe about the world—and their unique place in it. With a bit of intention, positive rituals, and daily practice, we can help our children build self-talk habits that last a lifetime.

Ready to help your child power up their confidence with the support of hundreds of other families? You can explore the Daily Affirmations Power Up app for iOS and see how fun, friendly positive self-talk fits right into your family's real life. [Try Daily Power Up today](https://apps.apple.com/app/id6744414135) and let's grow resilient, joyful kids together—one small affirmation at a time.
    \`,
    sources: [
      { name: "Daily Power Up! App on the App Store", url: "https://apps.apple.com/app/id6744414135" }
    ],
    sidebar: {
      whatItSoundsLike: {
        examples: [
          { from: "I always mess up", to: "I can do hard things" },
          { from: "I'm terrible at this", to: "I tried my best, and I can try again tomorrow" }
        ]
      },
      routine: [
        { time: "Morning", action: "Start the day with one affirmation together before school." },
        { time: "After school", action: "Check in and celebrate one thing your child tried today." },
        { time: "Bedtime", action: "End with a calming affirmation like 'I am safe and loved.'" }
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
