import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

export default function AboutKesselPartnershipSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 bg-white border-t border-slate-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 to-transparent pointer-events-none rounded-full blur-3xl"></div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-12"
          >
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
              {t('kessel.subtitle')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-12 tracking-tight leading-[1.1]">
              {t('kessel.title')}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0">
                <p className="mb-6 text-xl text-slate-700 font-medium">
                  {t('kessel.p1')}
                </p>
                <p className="mb-6 text-lg">
                  {t('kessel.p2')}
                </p>
                <p className="text-lg">
                  {t('kessel.p3')}
                </p>
              </article>
              
              <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0 flex flex-col justify-between">
                <div>
                  <p className="mb-6 text-lg">
                    {t('kessel.p4')}
                  </p>
                  <p className="mb-6 text-lg">
                    {t('kessel.p5')}
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all mt-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    {t('kessel.benefits_title')}
                  </h3>
                  <ul className="space-y-4 text-lg text-slate-700 font-medium m-0 p-0 list-none">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{t('kessel.benefit_1')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{t('kessel.benefit_2')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{t('kessel.benefit_3')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{t('kessel.benefit_4')}</span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
