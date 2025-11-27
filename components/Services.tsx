'use client';

import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Sparkles,
      title: 'Profile Enhancement',
      description: 'Craft a magnetic social presence that attracts followers and builds authentic connections.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Analytics',
      description: 'Track your influence with real-time metrics and insights.',
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Connect with like-minded individuals and grow your tribe.',
    },
    {
      icon: Zap,
      title: 'Instant Engagement',
      description: 'Boost your content with proven strategies that drive likes, shares, and meaningful interactions.',
    },

  
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Elevate Your Digital Presence
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Transform your social media game with powerful tools designed for personal growth and authentic influence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* FIRST CARD - SPANS 2 COLUMNS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 bg-rose-50 rounded-3xl p-8 min-h-[300px] hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center mb-6">
              <features[0].icon className="w-7 h-7 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{features[0].title}</h3>
            <p className="text-slate-500 text-lg">{features[0].description}</p>
          </motion.div>

          {/* SECOND CARD - SINGLE COLUMN, TALL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 rounded-3xl p-8 min-h-[300px] hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
              <features[1].icon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{features[1].title}</h3>
            <p className="text-slate-400 text-lg">{features[1].description}</p>
          </motion.div>

          {/* THIRD CARD - SMALLER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-6">
              <features[2].icon className="w-7 h-7 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{features[2].title}</h3>
            <p className="text-slate-500 text-lg">{features[2].description}</p>
          </motion.div>

          {/* FOURTH CARD - SPANS 2 COLUMNS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-gradient-to-br from-rose-500 to-rose-600 text-white rounded-3xl p-8 hover:shadow-md transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <features[3].icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{features[3].title}</h3>
            <p className="text-rose-50 text-lg mb-6">{features[3].description}</p>
            <a
              href="#contact"
              className="inline-block bg-white text-rose-500 font-semibold rounded-xl px-6 py-3 hover:bg-rose-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
