'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const news = [
  {
    date: 'February 22, 2024',
    title: 'Launching MyrrorMyrror: Your Personal Affirmation Companion',
    description: 'We\'re excited to announce the launch of MyrrorMyrror, designed to help you create and maintain powerful daily affirmations. With a focus on privacy and personal growth, MyrrorMyrror keeps your affirmations secure on your device.',
    link: '#',
    category: 'Launch',
  },
  {
    date: 'February 22, 2024',
    title: 'Privacy First: How We Keep Your Data Safe',
    description: 'Learn about our commitment to privacy. MyrrorMyrror is designed with a zero-data-collection policy, ensuring your personal affirmations stay completely private on your device.',
    link: 'https://sites.google.com/view/myrror-myrror-privacy-policy/home',
    category: 'Privacy',
  },
  {
    date: 'February 22, 2024',
    title: 'Store a Full Year of Affirmations',
    description: 'MyrrorMyrror now allows you to store up to 365 days of personal affirmation videos directly on your device, giving you a complete library of motivation at your fingertips.',
    link: '#',
    category: 'Feature',
  },
];

export default function NewsComponent() {
  return (
    <section id="updates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Latest Updates
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Stay informed about new features and improvements to enhance your affirmation journey
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-2 text-purple-600 text-sm mb-4">
                <CalendarIcon className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
              
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full mb-4">
                {item.category}
              </span>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {item.description}
              </p>

              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-600 hover:text-purple-700"
                whileHover={{ x: 4 }}
              >
                Learn more
                <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a
            href="/news"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            View all updates
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
