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
          <p className="text-sm text-gray-500">Last Updated: September 2024</p>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Daily Power Up! does not collect or store any personal information directly from its users. However, when users opt for premium features, RevenueCat — a third-party subscription manager — collects purchase history linked to an anonymous identifier that cannot identify users personally.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Usage</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Since no personal data is collected directly, we don't use it. RevenueCat's anonymous purchase information serves the following purposes:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold">App Functionality:</span> Authenticating subscriptions, enabling premium features, preventing fraud, ensuring security and performance, and providing customer support.
              </li>
              <li className="text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold">Analytics:</span> Evaluating subscription-related user behavior anonymously to improve features and understand audience size.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Daily Power Up! is designed safely for children and complies with COPPA. We do not directly collect any personal information from children or any other users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              RevenueCat manages subscriptions using anonymous identifiers. You can review their privacy practices at{" "}
              <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                revenuecat.com/privacy
              </a>.
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
