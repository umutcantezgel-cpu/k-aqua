import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutHeroSection() {
 const t = useTranslations('About');

 return (
 <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 pb-20 bg-white overflow-hidden">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col items-center text-center">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="inline-flex items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl mb-8 shadow-sm"
 >
 <Building2 className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
 </motion.div>
 
 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.1 }}
 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-900 "
 >
 {t('hero.title_line1')}<br />
 <span className="text-blue-600">{t('hero.title_line2')}</span>
 </motion.h1>
 
 <motion.div
 initial={{ opacity: 0, scaleX: 0 }}
 whileInView={{ opacity: 1, scaleX: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="h-px w-24 bg-blue-600 mb-8 origin-center"
 />

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.3 }}
 className="max-w-4xl"
 >
 <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed font-light mb-6 ">
 {t('hero.p1')}
 </p>
 <p className="text-lg text-slate-600 leading-relaxed font-light">
 {t('hero.p2')}
 </p>
 </motion.div>
 </div>
 </section>
 );
}
