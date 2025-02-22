'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-cyan-400 to-purple-600 opacity-90 z-10" />
        <div className="absolute inset-0 bg-[url('/colorful-bg.jpg')] bg-cover bg-center mix-blend-overlay" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Transform Your Life with Daily Affirmations
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Create, record, and experience personalized affirmation videos that empower you to become your best self.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm text-purple-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-white transition-colors duration-200 shadow-lg"
            >
              Download Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600/30 backdrop-blur-sm border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-600/40 transition-colors duration-200 shadow-lg"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-8 sm:left-12 md:left-16"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-6 h-10 border-2 border-white/80 rounded-full p-1 backdrop-blur-sm"
          >
            <div className="w-1 h-3 bg-white/80 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </div>

      {/* App Store Badges */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md py-4 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-center mb-4 text-sm drop-shadow-md">Available on all platforms:</p>
          <div className="flex justify-center items-center space-x-8 opacity-90">
            <div className="w-32 h-10 bg-purple-600/30 backdrop-blur-sm rounded flex items-center justify-center text-white shadow-lg">
              App Store
            </div>
            <div className="w-32 h-10 bg-purple-600/30 backdrop-blur-sm rounded flex items-center justify-center text-white shadow-lg">
              Google Play
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
