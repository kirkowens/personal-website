'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ActivityTrackerProject() {
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
                Activity Tracker
              </h1>
            </div>

            {/* Right: Description */}
            <div className="flex items-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A comprehensive activity tracking application designed to help users monitor their daily activities, 
                set goals, and visualize their progress over time with intuitive dashboards and insights.
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
                  src="/images/activity-dashboard.png" 
                  alt="Activity Tracker"
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
                <p className="text-lg text-gray-900 dark:text-white">Personal Project</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Year
                </p>
                <p className="text-lg text-gray-900 dark:text-white">2025</p>
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
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/addactivity-calendar.png" 
                  alt="Activity Tracker - Add Activity Calendar"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/images/activity-goal.png" 
                  alt="Activity Tracker - Goal"
                  className="w-full h-full object-contain"
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
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-pink-400">The Problem</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Many people struggle to maintain consistent habits and track their daily activities effectively. Existing habit tracking apps often feel like chores themselves, with complicated interfaces and overwhelming features that discourage regular use.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Users needed a simple, visual way to log activities, set achievable goals, and see their progress over time without feeling overwhelmed by data or complex tracking systems.
              </p>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-pink-400">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Activity Tracker was designed with simplicity and motivation in mind. The interface focuses on quick logging and visual feedback, making it easy to build and maintain healthy habits without friction.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span><strong>Calendar View:</strong> A clean, month-at-a-glance calendar that shows activity completion with visual indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span><strong>Quick Add:</strong> Simple modal interface for logging activities without navigating away from the main view</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span><strong>Goal Setting:</strong> Intuitive goal creation with customizable targets and timeframes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span><strong>Dashboard Overview:</strong> At-a-glance stats showing streaks, completion rates, and progress toward goals</span>
                </li>
              </ul>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-pink-400">Design Process</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                I started by researching habit formation psychology and analyzing popular habit tracking apps to understand what works and what doesn't. The goal was to create an interface that encourages consistency without adding stress.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                Key design decisions included:
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span>Using a calendar as the primary interface since it's a familiar mental model for tracking time-based activities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span>Implementing color-coded indicators to show completion status at a glance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span>Creating a streamlined add activity flow that takes just seconds to complete</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-pink-400 mr-3">•</span>
                  <span>Designing motivational elements like streak counters without making them feel punitive</span>
                </li>
              </ul>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-pink-400">Results & Learnings</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                This project reinforced the importance of reducing friction in user interfaces, especially for apps that require daily engagement. Every extra tap or confusing element can be the difference between building a habit and abandoning the app.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I learned how to design for motivation and positive reinforcement, balance simplicity with functionality, and create interfaces that feel rewarding to use. The project also taught me the value of visual feedback in keeping users engaged with their goals.
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
