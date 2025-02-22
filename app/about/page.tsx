'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="relative pt-24 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-cyan-400 to-purple-600 opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Built by young innovators with a vision to make the world more positive
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-purple-600 mb-6">
                Young Minds, Big Dreams
              </h2>
              <p className="text-gray-600 mb-6">
                MyrrorMyrror was created by two young innovators - a 12-year-old and a 9-year-old - who saw the potential of AI to make a positive impact in people's lives. They envisioned an app that could help people feel more confident, powerful, and optimistic about themselves.
              </p>
              <p className="text-gray-600 mb-6">
                Inspired by their own experiences and understanding the importance of positive self-talk, these young developers wanted to create a tool that could help people of all ages build confidence through daily affirmations. They believed that by combining the power of AI with personal affirmations, they could create something truly special.
              </p>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                The mission was clear: create an app that brings more positivity to the world. They wanted to build something that would:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Help people feel more confident in themselves</li>
                <li>Make positive affirmations accessible to everyone</li>
                <li>Create a safe, private space for personal growth</li>
                <li>Use technology to spread positivity</li>
              </ul>
              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                The Journey
              </h3>
              <p className="text-gray-600 mb-6">
                Using their understanding of AI and their passion for helping others, these young developers worked to create an app that would be both powerful and easy to use. They focused on making sure everyone's privacy was protected while still delivering a meaningful experience that could help transform lives.
              </p>
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <blockquote className="text-lg italic text-purple-700">
                  "We wanted to create something that could help people feel as amazing as they truly are. Everyone deserves to feel confident and powerful."
                </blockquote>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 