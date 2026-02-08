import { useEffect } from "react";
import { Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Fewer Meltdowns",
  "More Cooperation",
  "Less Anxiety",
  "Increased Self-Esteem",
  "Joy, Calm & Courage",
];

export default function Hero() {
  const colorfulBoxes = [
    'bg-pink-500',
    'bg-pink-500',
    'bg-pink-500',
    'bg-pink-500',
    'bg-pink-500',
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.7) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (e.pageX - 10) + 'px';
        sparkle.style.top = (e.pageY - 30) + 'px';
        sparkle.innerHTML = '✨';
        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const style = document.createElement('style');
    style.textContent = `
      .sparkle {
        position: absolute;
        pointer-events: none;
        animation: sparkle-fade 1s ease-out forwards;
        font-size: 20px;
        z-index: 9999;
      }
      @keyframes sparkle-fade {
        0% { opacity: 1; transform: translateY(0) scale(1); }
        100% { opacity: 0; transform: translateY(-20px) scale(0.5); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      style.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <nav className="flex justify-between items-center px-8 py-1">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Daily Power Up!" className="h-40 w-auto -mb-20 mt-2" />
          <span className="font-extrabold text-yellow-300 text-4xl mt-8 drop-shadow-lg">Self-Talk for Kids</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="/Blog" className="text-white font-medium hover:text-white/80 transition">Blog</a>
          <a href="/FAQ" className="text-white font-medium hover:text-white/80 transition">FAQ</a>
          <a href="#eguide" className="text-white font-medium hover:text-white/80 transition">E-Guide</a>
          <a href="#faq" className="text-white font-medium hover:text-white/80 transition">Community</a>
          <a href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full px-8 py-2 text-lg font-bold">Get App</Button>
          </a>
        </div>
      </nav>
      <div className="max-w-none mx-auto px-8 py-20 grid md:grid-cols-[1.4fr_1fr] gap-8 items-start">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            We help kids feel awesome about themselves
          </h1>
          <div className="space-y-3 mb-10">
            {benefits.map((b, i) => (
              <div key={i} className={`flex items-center gap-3 ${colorfulBoxes[i]} backdrop-blur-sm rounded-xl p-4 w-3/4`}>
                <Check className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white text-xl font-bold whitespace-nowrap">{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center pt-0">
          <div className="flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            ))}
            <span className="ml-2 text-white/90 text-sm font-bold">5.0</span>
            <span className="text-white/90 text-sm font-medium">• Loved by parents everywhere</span>
          </div>
          <p className="text-white/90 text-lg italic mb-6">
            "This app completely transformed our mornings"
          </p>
          <img src="/images/hero-child.png" alt="Happy child" className="w-full max-w-md rounded-3xl border-8 border-white/40 shadow-2xl mb-6" />
          <Button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-7 text-xl rounded-xl font-bold">
            Start Free Trial
          </Button>
        </div>
      </div>
    </div>
  );
}
