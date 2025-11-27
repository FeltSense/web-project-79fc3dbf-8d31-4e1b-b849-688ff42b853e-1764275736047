import React from 'react';
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#services" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Careers", href: "#contact" },
        { name: "Press", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#contact" },
        { name: "Community", href: "#contact" },
        { name: "Support", href: "#contact" },
        { name: "Guides", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "#contact" },
        { name: "Terms", href: "#contact" },
        { name: "Security", href: "#contact" },
        { name: "Cookies", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@ego.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "San Francisco, CA" }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Ego</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Elevate your social presence. Build authentic connections. Grow your personal brand with confidence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-400 hover:text-rose-500 transition-colors duration-300">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-rose-500 transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Stay in the loop</h3>
              <p className="text-slate-400 text-sm">
                Get the latest updates, tips, and exclusive content delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300"
              />
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Ego. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#contact" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#contact" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#contact" className="text-slate-500 hover:text-rose-500 text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
