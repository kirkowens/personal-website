'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ScopeFinancialProject() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 shadow-sm">
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          >
            Kirk Owens
          </Link>
          
          <div className="flex items-center gap-8">
            <Link href="/#projects" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
              ← Back to Projects
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Project Header - Title Left, Description Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-16 mb-16"
          >
            {/* Left: Project Title */}
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white">
                Scope
              </h1>
            </div>

            {/* Right: Description */}
            <div className="flex items-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A modern financial tracking application with cash flow visualization and real-time insights. 
                Designed to help users understand their spending patterns and make informed financial decisions.
              </p>
            </div>
          </motion.div>

          {/* Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full h-px bg-gray-300 dark:bg-gray-700 mb-16 origin-left"
          />

          {/* Hero Image with Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 mb-16 items-start"
          >
            {/* Left: Hero Image */}
            <div className="max-w-lg">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/laptop-and-mobile.png" 
                  alt="Scope"
                  className="w-full"
                />
              </div>
            </div>

            {/* Right: Metadata */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Client
                </p>
                <p className="text-lg text-gray-900 dark:text-white">Scope</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Year
                </p>
                <p className="text-lg text-gray-900 dark:text-white">2023-2025</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Service
                </p>
                <p className="text-lg text-gray-900 dark:text-white">
                  UI & UX<br />
                  Product Design<br />
                  Web Design
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional Project Images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Image 1 */}
            <div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/laptop-dashboard.png" 
                  alt="Scope - Dashboard"
                  className="w-full"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/laptop-cashflow-summary.png" 
                  alt="Scope - Cash Flow Summary"
                  className="w-full"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/laptop-cashflow-trends.png" 
                  alt="Scope - Cash Flow Trends"
                  className="w-full"
                />
              </div>
            </div>

            {/* Image 4 */}
            <div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/images/laptop-cashflow-projections.png" 
                  alt="Scope - Cash Flow Projections"
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Case Study Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Case Study</h2>
            
            {/* Problem */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-cyan-400">The Problem</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Managing personal finances can be overwhelming, especially when trying to understand cash flow patterns and make informed decisions about spending and saving. Most financial apps are either too complex with features users don't need, or too simple to provide meaningful insights.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Users needed a clean, intuitive way to visualize their financial data, track spending trends, and project future cash flow without getting lost in complicated spreadsheets or cluttered interfaces.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-cyan-400">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Scope was designed to simplify financial tracking by focusing on what matters most: clear visualization of cash flow, spending patterns, and future projections. The interface prioritizes clarity and ease of use, making complex financial data accessible at a glance.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span><strong>Dashboard Overview:</strong> A clean, card-based layout showing key metrics like current balance, monthly spending, and income at a glance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span><strong>Cash Flow Visualization:</strong> Interactive charts that make it easy to understand spending trends and identify patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span><strong>Projections:</strong> Forward-looking insights that help users plan for upcoming expenses and savings goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span><strong>Mobile-First Design:</strong> Fully responsive interface that works seamlessly across all devices</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-cyan-400">Design Process</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                The design process started with research into existing financial apps and user pain points. I created wireframes in Figma to explore different layout options, focusing on information hierarchy and visual clarity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Key design decisions included:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span>Using a card-based layout to separate different types of information clearly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span>Implementing a blue-to-cyan gradient for positive financial indicators and warm colors for alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span>Creating custom chart visualizations that are both beautiful and functional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-cyan-400 mr-3">•</span>
                  <span>Ensuring all interactive elements have clear hover states and feedback</span>
                </li>
              </ul>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-cyan-400">Results & Learnings</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                This project taught me the importance of balancing visual appeal with functional clarity. Financial data can be intimidating, so making it approachable through thoughtful design was crucial.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I learned how to organize complex information hierarchies, create meaningful data visualizations, and design interfaces that feel both modern and trustworthy. The project also reinforced the value of iterating on designs based on real-world usage patterns.
              </p>
            </div>
          </motion.div>

          {/* Back to Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-center"
          >
            <Link 
              href="/#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              ← Back to All Projects
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
