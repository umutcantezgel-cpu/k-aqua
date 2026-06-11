import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutGenauSystemSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-white border-t border-slate-200 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
              <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
              {t('genau.subtitle')}
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] max-w-3xl">
              {t('genau.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <article className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-10 hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed">
                <p className="mb-6 text-xl font-medium text-slate-800">
                  {t('genau.p1')}
                </p>
                <p className="text-lg">
                  {t('genau.p2')}
                </p>
              </div>
            </article>
            <article className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-10 hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed">
                <p className="mb-6 text-xl font-medium text-slate-800">
                  {t('genau.p3')}
                </p>
                <p className="text-lg">
                  {t('genau.p4')}
                </p>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
