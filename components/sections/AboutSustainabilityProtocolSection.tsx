import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutSustainabilityProtocolSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-emerald-50/30 border-t border-slate-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-emerald-100/40 to-transparent pointer-events-none blur-3xl"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-emerald-600 mb-6">
            <Leaf className="w-5 h-5 text-emerald-500" />
            {t('sustainability.subtitle')}
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-12 tracking-tight leading-[1.1]">
            {t('sustainability.title')}
          </h2>
          
          <article className="bg-white/80 backdrop-blur-xl border border-emerald-200/50 shadow-sm rounded-3xl p-8 lg:p-12 hover:-translate-y-1 hover:shadow-md transition-all prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0">
            <p className="mb-6 text-xl font-medium text-slate-800">
              {t('sustainability.p1')}
            </p>
            <p className="mb-6 text-lg">
              {t('sustainability.p2')}
            </p>
            <p className="mb-6 text-lg">
              {t('sustainability.p3')}
            </p>
            <p className="text-lg">
              {t('sustainability.p4')}
            </p>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
