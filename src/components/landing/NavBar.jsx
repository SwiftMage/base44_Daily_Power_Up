import React, { useState, useEffect } from "react";
import { Download, Menu, X, Sparkles, Star, Heart, BookOpen, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

const anchorLinks = [
  { label: "Benefits", id: "benefits", icon: Sparkles, color: "text-yellow-600" },
  { label: "Reviews", id: "reviews", icon: Star, color: "text-pink-600" },
  { label: "Our Story", id: "story", icon: Heart, color: "text-red-500" },
  { label: "Community", id: "faq", icon: MessageCircle, color: "text-purple-600" },
  { label: "Blog", href: "blog", icon: BookOpen, color: "text-blue-600" },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 backdrop-blur-md shadow-md"
          : "bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo - always visible, shrinks on scroll */}
        <Link
          to="/"
          className="flex items-center transition-all duration-500 ease-out"
        >
          <img
            src="/images/logo.png"
            alt="Daily Power Up!"
            className={`w-auto transition-all duration-500 drop-shadow-lg ${
              scrolled ? "h-12" : "h-28 md:h-36"
            }`}
          />
        </Link>

        {/* Desktop Anchor Links - spread out with icons and fun colors */}
        <div className="hidden md:flex items-center gap-2 flex-1 justify-center">
          {anchorLinks.map((link) => {
            const Icon = link.icon;
            const inner = (
              <span className="flex items-center gap-1.5 group">
                <Icon className={`w-4 h-4 ${link.color} transition-transform group-hover:scale-125`} />
                <span>{link.label}</span>
              </span>
            );

            return link.href ? (
              <Link
                key={link.label}
                to={createPageUrl(link.href)}
                className="text-base font-semibold px-4 py-2 rounded-xl transition-all duration-200 text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:shadow-sm"
              >
                {inner}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-base font-semibold px-4 py-2 rounded-xl transition-all duration-200 text-gray-700 hover:bg-white/60 hover:text-gray-900 hover:shadow-sm"
              >
                {inner}
              </button>
            );
          })}
        </div>

        {/* Download button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135",
                "_blank"
              )
            }
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 border-t px-4 py-4 space-y-2">
          {anchorLinks.map((link) => {
            const Icon = link.icon;
            return link.href ? (
              <Link
                key={link.label}
                to={createPageUrl(link.href)}
                className="flex items-center gap-3 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-white/60 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <Icon className={`w-5 h-5 ${link.color}`} />
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => {
                  scrollToSection(link.id);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-white/60 transition-colors w-full text-left"
              >
                <Icon className={`w-5 h-5 ${link.color}`} />
                {link.label}
              </button>
            );
          })}
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold mt-2"
            onClick={() => {
              window.open(
                "https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135",
                "_blank"
              );
              setMenuOpen(false);
            }}
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>
      )}
    </nav>
  );
}
