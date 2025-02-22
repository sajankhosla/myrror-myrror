'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'User Capacity', value: '100M+' },
  { label: 'Storage Per User', value: '365' },
  { label: 'Data Privacy', value: '100%' },
  { label: 'Cloud Dependency', value: '0%' },
];

export default function Technology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="py-24 bg-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Built for Scale, Designed for Privacy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Our infrastructure is ready to support millions while keeping your affirmations completely private on your device
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                {stat.label === 'Storage Per User' && <span className="text-2xl ml-1">days</span>}
                {stat.label === 'User Capacity' && <span className="text-2xl">+</span>}
              </div>
              <div className="text-sm md:text-base text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Visualization */}
        <motion.div
          style={{ y, opacity }}
          className="relative h-[400px] md:h-[600px] rounded-xl overflow-hidden bg-purple-800"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('/ship-tech.jpg')] bg-cover bg-center opacity-50" />
          
          {/* Benefits Highlights */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  Local Storage
                </h3>
                <p className="text-white/80">
                  Store a full year of daily affirmations right on your device, always available when you need them
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  Zero Data Collection
                </h3>
                <p className="text-white/80">
                  Your affirmations stay on your device. We never collect, store, or analyze your personal data
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-white text-purple-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-50 transition-colors duration-200">
            Download MyrrorMyrror Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
