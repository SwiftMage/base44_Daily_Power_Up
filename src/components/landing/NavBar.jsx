import React, { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/new-logo-no-bg.png"
            alt="Daily Power Up!"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to={createPageUrl("FAQ")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"
            }`}
          >
            FAQ
          </Link>
          <Link
            to={createPageUrl("Blog")}
            className={`text-sm font-medium transition-colors ${
              scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-800 hover:text-blue-600"
            }`}
          >
            Blog
          </Link>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t px-4 py-4 space-y-3">
          <Link
            to={createPageUrl("FAQ")}
            className="block text-gray-700 font-medium py-2"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to={createPageUrl("Blog")}
            className="block text-gray-700 font-medium py-2"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl"
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
