import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function AboutGlobalPresenceCtaSection() {
 const t = useTranslations('About');

 return (
 <section className="relative py-32 bg-slate-50 border-y border-slate-200 text-center overflow-hidden">
 <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="flex flex-col items-center w-full"
 >
 <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-8 border border-blue-200">
 <Globe className="w-10 h-10 text-blue-700" />
 </div>
 
 <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none ">
 {t('global_cta.title_line1')}<br />{t('global_cta.title_line2')}
 </h2>
 
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light mb-12 leading-relaxed text-center ">
 <p>
 {t('global_cta.p1')}
 </p>
 <p>
 {t('global_cta.p2')}
 </p>
 </article>
 
 <Link href="/news" passHref legacyBehavior>
 <a className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-5 text-lg rounded-full transition-colors duration-300 shadow-sm">
 {t('global_cta.button')}
 <ArrowRight className="ml-3 w-5 h-5" />
 </a>
 </Link>
 </motion.div>
 </div>
 </section>
 );
}
