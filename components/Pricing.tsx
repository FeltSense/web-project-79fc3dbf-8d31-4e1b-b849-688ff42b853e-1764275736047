'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    'Unlimited photo ratings',
    'See your ranking in real-time',
    'Compete with friends',
    'Advanced analytics dashboard',
    'Exclusive badges & achievements',
    'Ad-free experience',
    'Priority support',
    'Early access to new features'
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Pre-Order Ego Today
          </h2>
          <p className="text-lg md:text-xl text-slate-500">
            Be among the first to experience the ultimate social rating platform. 
            Limited pre-order pricing available now.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold transition-colors duration-300 ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-slate-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-rose-500 rounded-full transition-transform duration-300 ${
                isYearly ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold transition-colors duration-300 ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400 text-slate-900">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-rose-50 text-rose-500 text-sm font-semibold mb-6">
              🚀 Pre-Order Special
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                  ${isYearly ? '23' : '29'}
                </span>
                <span className="text-xl text-slate-500">
                  /{isYearly ? 'month' : 'month'}
                </span>
              </div>
              {isYearly && (
                <p className="text-sm text-slate-500">
                  Billed annually at $276/year
                </p>
              )}
              <p className="text-sm text-cyan-400 font-semibold mt-2">
                Regular price: $49/month after launch
              </p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md mb-8"
            >
              Pre-Order Now - ${isYearly ? '23' : '29'}/mo
            </button>

            {/* Features */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                What's Included:
              </p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-50 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-rose-500" />
                    </div>
                    <span className="text-slate-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-slate-100">
              <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>30-day guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              Join <span className="font-semibold text-slate-900">2,847 early adopters</span> who've already pre-ordered
            </p>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-slate-500">
            Questions about pre-ordering?{' '}
            <a href="#contact" className="text-rose-500 hover:text-rose-600 font-semibold transition-colors duration-300">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  </span>);
}
