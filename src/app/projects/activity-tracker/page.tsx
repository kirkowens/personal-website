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

            {/* Image 2 - Placeholder */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-400 dark:text-gray-600">Image 2</p>
              </div>
            </div>

            {/* Image 3 - Placeholder */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-400 dark:text-gray-600">Image 3</p>
              </div>
            </div>

            {/* Image 4 - Placeholder */}
            <div>
              <div className="rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 aspect-[4/3] flex items-center justify-center">
                <p className="text-gray-400 dark:text-gray-600">Image 4</p>
              </div>
            </div>
          </motion.div>

          {/* Back to Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
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
