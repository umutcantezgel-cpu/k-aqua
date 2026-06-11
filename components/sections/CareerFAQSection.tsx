"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerFAQSection() {
  const t = useTranslations('Career');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: t('FAQ.items.0.q'), a: t('FAQ.items.0.a') },
    { q: t('FAQ.items.1.q'), a: t('FAQ.items.1.a') },
    { q: t('FAQ.items.2.q'), a: t('FAQ.items.2.a') },
    { q: t('FAQ.items.3.q'), a: t('FAQ.items.3.a') }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
            <Sparkles className="w-4 h-4" />
            {t('FAQ.title')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Got questions?
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-slate-900">{faq.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIdx === i ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} />
                </div>
              </button>
              {openIdx === i && (
                <div className="px-6 sm:px-8 pb-8 text-slate-600 font-light leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
