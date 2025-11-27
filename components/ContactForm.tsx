'use client';

import { useState } from 'react';
import { Send, Mail, User, Phone, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '79fc3dbf-8d31-4e1b-b849-688ff42b853e',
          founder_id: '55a7495e-945b-478f-b5c3-dc7c4e33d021',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-rose-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-rose-500" />
            <span className="text-sm font-semibold text-rose-500">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
            Ready to Elevate Your Presence?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join thousands building their personal brand. Drop us a message and let's start your transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-rose-50 rounded-xl p-3">
                  <Mail className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Email Us</h3>
                  <p className="text-slate-500 mb-3">Our team responds within 24 hours</p>
                  <a href="mailto:hello@ego.com" className="text-rose-500 font-semibold hover:text-rose-600 transition-colors">
                    hello@ego.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-50 rounded-xl p-3">
                  <MessageSquare className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Live Chat</h3>
                  <p className="text-slate-500 mb-3">Available Monday to Friday, 9AM - 6PM EST</p>
                  <button className="text-rose-500 font-semibold hover:text-rose-600 transition-colors">
                    Start a conversation
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-rose-50 rounded-xl p-3">
                  <Phone className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Call Us</h3>
                  <p className="text-slate-500 mb-3">Speak directly with our team</p>
                  <a href="tel:+15551234567" className="text-rose-500 font-semibold hover:text-rose-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500 mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-rose-500 font-semibold hover:text-rose-600 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-rose-500 focus:ring-rose-500 transition-all outline-none"
                      placeholder="John Doe"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-rose-500 focus:ring-rose-500 transition-all outline-none"
                      placeholder="john@example.com"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-rose-500 focus:ring-rose-500 transition-all outline-none"
                      placeholder="+1 (555) 123-4567"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-rose-500 focus:ring-rose-500 transition-all outline-none resize-none"
                      placeholder="Tell us about your goals and how we can help..."
                      disabled={status === 'loading'}
                    ></textarea>
                  </div>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
