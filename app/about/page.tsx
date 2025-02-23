// Last deployed: 2025-02-23 13:02 UTC
// Last deployed: 2024-02-22 21:45 UTC
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
                Meet Our Young Innovators
              </h2>
              
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <div className="relative w-full pt-[125%] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src="/IMG_0326.jpg"
                        alt="Khushee Khosla"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Khushee Khosla
                    </h3>
                    <p className="text-gray-600 mb-4">
                      At just 12 years old, Khushee Khosla is one of the brilliant minds behind MyrrorMyrror. With a passion for technology and a deep understanding of the importance of self-confidence, Khushee envisioned an app that could help people feel more empowered through daily affirmations.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Her innovative thinking and commitment to making a positive impact in people&apos;s lives were instrumental in shaping MyrrorMyrror&apos;s core features and user-friendly design. Khushee believes that everyone deserves to feel confident and powerful, regardless of their age or background.
                    </p>
                    <div className="bg-purple-50 rounded-xl p-6 mb-8">
                      <blockquote className="text-lg italic text-purple-700">
                        &ldquo;I wanted to create something that could help people build confidence and feel amazing about themselves. Technology should be used to spread positivity and make people&apos;s lives better.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <div className="relative w-full pt-[125%] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src="/IMG_4928.jpg"
                        alt="Manav Khosla"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Manav Khosla
                    </h3>
                    <p className="text-gray-600 mb-4">
                      At 9 years old, Manav Khosla brings a fresh perspective and boundless creativity to MyrrorMyrror. His natural ability to see the world through optimistic eyes helped shape the app&apos;s approach to making affirmations fun and engaging for users of all ages.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Manav&apos;s enthusiasm for using technology to help others feel good about themselves has been a driving force in making MyrrorMyrror accessible and enjoyable for everyone. His input was crucial in ensuring the app remains simple yet powerful.
                    </p>
                    <div className="bg-purple-50 rounded-xl p-6 mb-8">
                      <blockquote className="text-lg italic text-purple-700">
                        &ldquo;Everyone should be able to feel happy and confident. I wanted to help create something that makes people smile and believe in themselves.&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-purple-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                Together, these young innovators set out with a clear mission: create an app that brings more positivity to the world. They wanted to build something that would:
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
                Using their understanding of technology and their passion for helping others, these young developers worked to create an app that would be both powerful and easy to use. They focused on making sure everyone&apos;s privacy was protected while still delivering a meaningful experience that could help transform lives.
              </p>
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <p className="text-lg text-purple-700">
                  MyrrorMyrror represents the innovative spirit of young minds working to make a difference. It&apos;s a testament to how age is no barrier when it comes to creating meaningful technology that can positively impact people&apos;s lives.
                </p>
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