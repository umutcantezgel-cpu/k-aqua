import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutManufacturingInnovationSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
              <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
              {t('manufacturing.subtitle')}
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1] max-w-4xl">
              {t('manufacturing.title')}
            </h2>
          </div>
          
          <article className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-12 hover:-translate-y-1 hover:shadow-md transition-all prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0">
            <p className="mb-6 text-xl text-slate-800 font-medium">
              {t('manufacturing.p1')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div>
                <p className="mb-6 text-lg">
                  {t('manufacturing.p2')}
                </p>
                <p className="mb-6 text-lg">
                  {t('manufacturing.p3')}
                </p>
              </div>
              <div>
                <p className="mb-6 text-lg">
                  {t('manufacturing.p4')}
                </p>
                <p className="text-lg">
                  {t('manufacturing.p5')}
                </p>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
