'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ego transformed how I see myself. The confidence boost from genuine feedback has been life-changing. I've landed opportunities I never thought possible.",
      name: "Marcus Chen",
      title: "Content Creator",
      avatar: "https://i.pravatar.cc/150?img=12",
      company: "TikTok"
    },
    {
      quote: "This platform helped me understand my personal brand better. The insights from real people shaped my entire social media strategy.",
      name: "Sophia Rodriguez",
      title: "Entrepreneur",
      avatar: "https://i.pravatar.cc/150?img=45",
      company: "Instagram"
    },
    {
      quote: "Ego isn't just about validation—it's about growth. The feedback I received pushed me to level up in ways I never expected.",
      name: "Jordan Blake",
      title: "Life Coach",
      avatar: "https://i.pravatar.cc/150?img=33",
      company: "LinkedIn"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Loved by Thousands
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real stories from people who discovered their confidence with Ego
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="inline-block bg-rose-50 rounded-lg px-4 py-2">
                  <span className="text-rose-500 font-semibold text-sm tracking-wide">
                    {testimonial.company}
                  </span>
                </div>
              </div>

              <p className="text-slate-900 text-lg mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-rose-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
