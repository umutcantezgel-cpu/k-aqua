import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutGlobalStandardsSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="min-w-0"
          >
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
              {t('standards.subtitle')}
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              {t('standards.title')}
            </h2>
            
            <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0">
              <p className="mb-6 text-xl text-slate-700 font-medium">
                {t('standards.p1')}
              </p>
              <p className="text-lg">
                {t('standards.p2')}
              </p>
            </article>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-6 min-w-0"
          >
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:scale-110 transition-transform">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('standards.item1_title')}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    {t('standards.item1_desc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:scale-110 transition-transform">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('standards.item2_title')}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    {t('standards.item2_desc')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:scale-110 transition-transform">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{t('standards.item3_title')}</h3>
                  <p className="text-slate-600 font-light leading-relaxed text-lg">
                    {t('standards.item3_desc')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
