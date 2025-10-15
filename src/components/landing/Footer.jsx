import React from "react";
import { Heart, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Daily Affirmations Power Up!</h3>
            <p className="text-sm leading-relaxed">
              Empowering kids with positive self-talk, one affirmation at a time.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="https://apps.apple.com/us/app/daily-affirmations-power-up/id6744414135" target="_blank" className="hover:text-white transition-colors duration-200">App Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@dailypowerup.app" className="hover:text-white transition-colors duration-200">
                hello@dailypowerup.app
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by a family for families
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © 2024 Daily Affirmations Power Up! All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}