import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutQualityDynamicsSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/30 to-slate-50 pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center border border-slate-200/50 shadow-xl shadow-blue-500/10 flex-shrink-0">
              <ShieldCheck className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-2">
                <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
                QUALITY PROTOCOL
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                {t('quality.title')}
              </h2>
            </div>
          </div>
          
          <article className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-12 hover:-translate-y-1 hover:shadow-md transition-all prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0">
            <p className="mb-8 text-2xl text-slate-800 font-medium leading-snug">
              {t('quality.p1')}
            </p>
            <div className="h-px w-full bg-gradient-to-r from-slate-200 to-transparent mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <p className="text-lg">
                {t('quality.p2')}
              </p>
              <p className="text-lg">
                {t('quality.p3')}
              </p>
              <p className="text-lg">
                {t('quality.p4')}
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
