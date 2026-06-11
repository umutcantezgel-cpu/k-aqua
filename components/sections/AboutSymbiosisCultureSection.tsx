import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutSymbiosisCultureSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-white border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50/50 to-transparent pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
            SYMBIOSIS CULTURE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
            {t('symbiosis.title')}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-400 mx-auto mb-16 rounded-full" />
          
          <article className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-12 hover:-translate-y-1 hover:shadow-md transition-all prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed text-left min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <p className="mb-6 text-xl font-medium text-slate-800">
                  {t('symbiosis.p1')}
                </p>
                <p className="text-lg">
                  {t('symbiosis.p2')}
                </p>
              </div>
              <div>
                <p className="mb-6 text-lg">
                  {t('symbiosis.p3')}
                </p>
                <p className="text-lg">
                  {t('symbiosis.p4')}
                </p>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
