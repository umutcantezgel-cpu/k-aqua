import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutCompanyHeritageSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50/20 to-slate-50 opacity-70 pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
            <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
            {t('heritage.subtitle')}
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-12 tracking-tight leading-[1.1]">
            {t('heritage.title')}
          </h2>
          
          <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all">
              <p className="mb-6 text-xl text-slate-700 leading-relaxed font-medium">
                {t('heritage.p1')}
              </p>
              <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent my-8"></div>
              <p className="mb-6 text-lg text-slate-600">
                {t('heritage.p2')}
              </p>
              <p className="mb-6 text-lg text-slate-600">
                {t('heritage.p3')}
              </p>
              <p className="text-lg text-slate-600">
                {t('heritage.p4')}
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
