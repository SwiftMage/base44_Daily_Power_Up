import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScreenshotCarousel() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/94fd3639f_screenshot-1.png",
      caption: "Choose your daily affirmations" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/e0dd4141b_screenshot-2.png",
      caption: "Create fun profiles for each child" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/bfecfb211_screenshot-3.png",
      caption: "Start your daily power-up routine" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/e0aaa7e46_screenshot-4.png",
      caption: "Interactive voice affirmations" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/06b60f5e8_screenshot-5.png",
      caption: "Celebrate daily streaks and progress" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/6b11e3281_screenshot-6.png",
      caption: "Unlock fun rewards and themes" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/39db29186_screenshot-7.png",
      caption: "Practice positive self-talk together" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/d17384d19_screenshot-8.png",
      caption: "Build your affirmation collection" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/179f7ff31_screeenshot-9.png",
      caption: "Browse by category - anxiety, body image & more" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/ca15beebf_screenshot-10.png",
      caption: "Track all your affirmations in one place" 
    },
    { 
      url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ed5ad37e872e305c2f8b5e/ab8e6e015_screenshot-11.png",
      caption: "Beautiful themes your kids will love" 
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % screenshots.length;
        
        // Scroll to the next screenshot
        if (scrollRef.current) {
          const cardWidth = 320;
          scrollRef.current.scrollTo({
            left: nextIndex * cardWidth,
            behavior: 'smooth'
          });
        }
        
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, screenshots.length]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
        >
          See It In Action
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-600 text-center mb-16"
        >
          A peek inside the app your kids will love
        </motion.p>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex-shrink-0 snap-center"
              >
                <div className="w-72 bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <div className="aspect-[9/19] relative overflow-hidden">
                    <img 
                      src={screenshot.url}
                      alt={screenshot.caption}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-center text-gray-700 font-medium leading-relaxed">
                      {screenshot.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  if (scrollRef.current) {
                    const cardWidth = 320;
                    scrollRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}