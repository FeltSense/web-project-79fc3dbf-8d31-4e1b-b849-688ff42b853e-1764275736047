'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },

  
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-cyan-400 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              Ego
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white font-medium transition-colors duration-300"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-white font-medium transition-colors duration-300 py-2"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 text-center"
              style={{ fontFamily: 'Work Sans, sans-serif' }}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
