import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <SEO
        title="Privacy Policy - Daily Power Up!"
        description="Privacy policy for the Daily Power Up! app. Learn how we protect your data and your children's privacy."
        url="/Privacy"
      />

      {/* Logo */}
      <div className="relative z-10 px-6 pt-4">
        <Link to="/">
          <img src="/images/logo.png" alt="Daily Power Up!" className="h-24 w-auto" />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 pt-8 pb-12">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Your privacy and your children's safety matter to us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 relative">
        <div className="max-w-3xl mx-auto relative z-10 space-y-10">
          <p className="text-sm text-gray-500">Last Updated: November 10, 2026</p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The web app uses one shared password for the teacher profile. The password is checked by a Vercel server function; the web app does not create individual accounts or ask for a sign-in email. The web app does not currently check Apple or RevenueCat subscription status. If you submit an email through a free-resource form, it is stored in the website's Supabase email signups table so we can manage that request.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              In the web app, affirmation choices, custom affirmations, playlists, themes, stars, and streaks are saved in local storage in the browser you use. They are not uploaded to our app database or synced between devices. Anyone using the same browser profile may see and change that browser's saved app data; clearing that browser's site data removes it. People using the shared login in different browsers or on different devices each have their own local copy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Our hosting provider, Vercel, may process technical information such as IP address, browser details, and request or diagnostic data to deliver and secure the website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Usage</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We use email addresses submitted through free-resource forms to manage those requests. The shared password allows a group to sign in to the teacher profile. Locally saved app data powers the web app features in each browser. Listen and repeat is self-guided in this beta; the web app does not request microphone access or record speech. We do not use the web app's local profile or progress data for advertising or analytics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              A parent, caregiver, or teacher should manage the shared sign-in and decide who may use it. Profile information stays in each browser's local storage as described above.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The website uses Supabase to manage free-resource email signups and Vercel for hosting and web app sign-in. You can review their privacy notices at{" "}
              <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Supabase</a>,{" "}
              <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vercel</a>. The iOS app uses RevenueCat to manage in-app subscriptions; its privacy practices are described at{" "}
              <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">RevenueCat</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Changes to this policy will be reflected on this page with an updated date. We encourage you to review this page periodically.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              If you have any questions about this privacy policy, please contact us at{" "}
              <a href="mailto:dailyaffirmationspowerup@gmail.com" className="text-blue-600 hover:underline">
                dailyaffirmationspowerup@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
