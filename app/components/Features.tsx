'use client';

import { motion } from 'framer-motion';
import { 
  VideoCameraIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Your Private Space',
    description: 'Record and store up to a year\'s worth of personal affirmation videos directly on your device. No cloud storage needed.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Complete Privacy',
    description: 'We collect absolutely no personal data. Your affirmations stay on your device, giving you total control and privacy.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Offline Access',
    description: 'Access your affirmations anytime, anywhere - even without internet. Everything is stored locally on your phone.',
    icon: DevicePhoneMobileIcon,
  },
  {
    title: 'Daily Boost',
    description: 'Give yourself the motivation you need, when you need it. Create powerful, personal affirmations that resonate with your goals.',
    icon: HeartIcon,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Your Personal Affirmation Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Built for privacy and convenience, with infrastructure ready to support millions of users while keeping your data completely private.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg p-2 mb-6">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors duration-200">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
