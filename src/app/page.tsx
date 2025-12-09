'use client';

import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

type Section = 'home' | 'about' | 'projects' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Section detection logic
      const sections = ['home', 'about', 'projects', 'contact'] as Section[];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Head>
        <title>Kirk Owens | Software Developer</title>
        <meta name="description" content="Personal website of Kirk Owens - Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-sm' : 'py-4'}`}>
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kirk Owens
          </motion.a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-cyan-400 ${
                  activeSection === item.id ? 'text-blue-600 dark:text-cyan-400' : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.id as Section);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-8"
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-gray-600 dark:text-gray-300">Available for new opportunities</span>
              </motion.div>

              {/* Main Heading with Staggered Animation */}
              <div className="mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-7xl font-bold mb-4"
                >
                  Hi, I'm{' '}
                  <motion.span
                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{ backgroundSize: '200% 200%' }}
                  >
                    Kirk Owens
                  </motion.span>
                </motion.h1>
              </div>

              {/* Subtitle with Typing Effect */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-light"
              >
                Product Designer | UX/UI Thinker | Problem Solver
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gray-500 dark:text-gray-400 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              >
                I build exceptional digital experiences with modern web technologies,
                turning complex problems into elegant solutions.
              </motion.p>

              {/* CTA Buttons with Hover Effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium overflow-hidden cursor-pointer"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get In Touch
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-500/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Positioned at bottom of section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-12 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    I'm a web designer with a passion for creating clean, modern, and intuitive digital experiences. I love working in Figma, exploring layout ideas, refining visual hierarchy, and turning vague concepts into designs that feel simple and beautiful.
                    <br /><br />
                    My background in finance and problem-solving helps me organize complex information into interfaces that actually make sense to real people.
                  </motion.p>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    When I'm not designing, I enjoy learning new tools, improving my craft, and working on personal projects that challenge my creativity. I'm always excited to take on new ideas and figure things out along the way.
                  </motion.p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Figma',
                      'UI/UX design',
                      'Wireframing & mockups',
                      'Responsive design',
                      'HTML & CSS',
                      'JavaScript/TypeScript',
                      'React',
                      'Next.js',
                      'Basic Node.js',
                      'Tailwind CSS'

                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, x: 5 }}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.div 
                    className="w-full h-80 rounded-2xl overflow-hidden relative"
                    whileHover={{ scale: 1.02, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/images/myphoto.png" 
                      alt="Kirk Owens"
                      className="w-full h-full object-cover scale-[1.3]"
                    />
                  </motion.div>
                  
                  {/* Floating decorative elements */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full -z-10"
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full -z-10"
                    animate={{ 
                      y: [0, 20, 0],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-20 overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
          <motion.div
            className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                My Projects
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              <motion.p 
                className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Here are some of my recent projects. Each project was built to solve a specific problem or explore new technologies.
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-10">
                {[
                  {
                    id: 'scope',
                    title: 'Scope',
                    image: '/images/laptop-and-mobile.png',
                    gradient: 'from-blue-400 to-cyan-400'
                  },
                  {
                    id: 'activity-tracker',
                    title: 'Activity Tracker',
                    image: '/images/activity-dashboard.png',
                    gradient: 'from-purple-400 to-pink-400'
                  }
                ].map((project, index) => (
                  <motion.a
                    key={index}
                    href={`/projects/${project.id}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer"
                  >
                    {/* Project Image */}
                    <div className={`relative overflow-hidden rounded-2xl mb-8 aspect-[5/4] ${project.image ? 'bg-transparent p-4' : 'bg-gray-100 dark:bg-gray-800'}`}>
                      {project.image ? (
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-r ${project.gradient} transition-transform duration-500 group-hover:scale-105`} />
                      )}
                      
                      {/* Hover overlay - only for gradient backgrounds */}
                      {!project.image && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      )}
                    </div>
                    
                    {/* Project Title */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <motion.span
                        className="text-2xl text-gray-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
          {/* Animated Background */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full opacity-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
              transition={{ duration: 18, repeat: Infinity }}
            />
          </motion.div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              <motion.p 
                className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                I'll get back to you as soon as possible!
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Contact Info</h3>
                  <div className="space-y-4">
                    {[
                      { icon: FiMail, label: 'Email', value: 'kirkaowens@gmail.com', href: 'mailto:kirkaowens@gmail.com', delay: 0.3 }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: contact.delay }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        onClick={() => {
                          navigator.clipboard.writeText(contact.value);
                          setEmailCopied(true);
                          setTimeout(() => setEmailCopied(false), 2000);
                        }}
                        className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all cursor-pointer group"
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 flex items-center justify-center group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <contact.icon className="text-blue-600 dark:text-blue-400 text-xl" />
                        </motion.div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{contact.label}</p>
                          <p className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors font-medium">
                            {contact.value}
                            {emailCopied && (
                              <span className="ml-2 text-green-600 dark:text-green-400 text-sm">✓ Copied!</span>
                            )}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.form 
                  action="https://formspree.io/f/myzrdeav"
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus('submitting');
                    
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    
                    try {
                      const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json'
                        }
                      });
                      
                      if (response.ok) {
                        setFormStatus('success');
                        form.reset();
                        setTimeout(() => setFormStatus('idle'), 5000);
                      } else {
                        setFormStatus('error');
                        setTimeout(() => setFormStatus('idle'), 5000);
                      }
                    } catch (error) {
                      setFormStatus('error');
                      setTimeout(() => setFormStatus('idle'), 5000);
                    }
                  }}
                  className="space-y-4"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                      placeholder="Your name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <motion.input
                      whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" }}
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all resize-none"
                      placeholder="Your message..."
                    ></motion.textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-6 rounded-xl font-medium relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Sent!' : 'Send Message'}
                      {formStatus === 'idle' && (
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      )}
                    </span>
                  </motion.button>
                  
                  {/* Status Messages */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 dark:text-green-400 text-center font-medium"
                    >
                      ✓ Message sent successfully!
                    </motion.div>
                  )}
                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 dark:text-red-400 text-center font-medium"
                    >
                      ✗ Something went wrong. Please try again.
                    </motion.div>
                  )}
                </motion.form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kirk Owens. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
