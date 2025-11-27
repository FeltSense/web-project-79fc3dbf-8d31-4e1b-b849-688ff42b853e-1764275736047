'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Accent Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-rose-500" />
              <span className="text-rose-500 text-sm font-semibold" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                Transform Your Social Presence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Build Your Personal Brand.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-400">
                Amplify Your Influence.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              Master social media growth with AI-powered insights, content strategies, and personal branding tools designed for creators who want to stand out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md group"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                Start Growing Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                Explore Features
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-800"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  50K+
                </div>
                <div className="text-sm text-slate-500" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                  Active Creators
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  2.5M+
                </div>
                <div className="text-sm text-slate-500" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                  Posts Optimized
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  350%
                </div>
                <div className="text-sm text-slate-500" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                  Avg Growth
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Dashboard Container */}
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
              {/* Dashboard Header */}
              <div className="bg-slate-800/50 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                </div>
                <div className="text-xs text-slate-500 font-semibold" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                  Ego Dashboard
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 space-y-6">
                {/* Analytics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-5 h-5 text-rose-500" />
                      <span className="text-xs text-green-400 font-semibold">+24%</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      48.2K
                    </div>
                    <div className="text-xs text-slate-500" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                      Total Reach
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-xs text-green-400 font-semibold">+18%</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      12.5K
                    </div>
                    <div className="text-xs text-slate-500" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                      New Followers
                    </div>
                  </div>
                </div>

                {/* Growth Chart Mockup */}
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="text-sm font-semibold text-white mb-4" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                    Engagement Growth
                  </div>
                  <div className="flex items-end justify-between h-32 gap-2">
                    <div className="w-full bg-slate-700 rounded-t" style={{ height: '45%' }}></div>
                    <div className="w-full bg-slate-700 rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-full bg-slate-700 rounded-t" style={{ height: '55%' }}></div>
                    <div className="w-full bg-gradient-to-t from-rose-500 to-cyan-400 rounded-t" style={{ height: '85%' }}></div>
                    <div className="w-full bg-gradient-to-t from-rose-500 to-cyan-400 rounded-t" style={{ height: '100%' }}></div>
                    <div className="w-full bg-slate-700 rounded-t opacity-30" style={{ height: '70%' }}></div>
                  </div>
                </div>

                {/* Content Suggestions */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-white" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                    AI Content Suggestions
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-rose-500 mt-1.5"></div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-300 mb-1" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                        Post about personal growth at 6 PM
                      </div>
                      <div className="text-xs text-slate-500">Best time for engagement</div>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5"></div>
                    <div className="flex-1">
                      <div className="text-xs text-slate-300 mb-1" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                        Share success story with video
                      </div>
                      <div className="text-xs text-slate-500">Video posts get 3x engagement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden lg:block"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-cyan-400 rounded-full"></div>
                <div>
                  <div className="text-xs font-semibold text-slate-900" style={{ fontFamily: 'Work Sans, sans-serif' }}>
                    New Follower
                  </div>
                  <div className="text-xs text-slate-500">Just now</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden lg:block"
            >
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-rose-500" />
                <div className="text-sm font-bold text-slate-900" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  +2.4K Reach
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
