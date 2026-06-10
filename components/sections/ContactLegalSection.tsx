import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ContactLegalSection() {
 const t = useTranslations('Contact.Legal');

 return (
 <section className="py-32 bg-slate-50 border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
 <div className="mb-20">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-6 " dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
 <p className="text-xl text-slate-600 max-w-[50ch] ">
 {t('subtitle')}
 </p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 {/* Imprint */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="flex flex-col h-full"
 >
 <div className="min-w-0 p-10 bg-white rounded-2xl border border-slate-200 shadow-sm h-full">
 <h3 className="text-2xl font-bold text-slate-900 mb-10 pb-6 border-b border-slate-100 ">{t('imprint.title')}</h3>
 
 <dl className="space-y-8 text-lg">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 <dt className="text-slate-600 min-w-0 ">{t('imprint.directors_label')}</dt>
 <dd className="font-semibold text-slate-900 sm:text-right min-w-0 ">{t('imprint.directors_value')}</dd>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 <dt className="text-slate-600 min-w-0 ">{t('imprint.court_label')}</dt>
 <dd className="font-semibold text-slate-900 sm:text-right min-w-0 ">{t('imprint.court_value')}</dd>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
 <dt className="text-slate-600 min-w-0 ">{t('imprint.vat_label')}</dt>
 <dd className="font-semibold text-slate-900 sm:text-right font-mono text-base mt-1 min-w-0 ">{t('imprint.vat_value')}</dd>
 </div>
 </dl>

 <div className="mt-12 pt-8 border-t border-slate-100">
 <p className="text-sm text-slate-500 leading-relaxed font-medium ">
 {t('imprint.disclaimer')}
 </p>
 </div>
 </div>
 </motion.div>

 {/* Privacy */}
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="flex flex-col h-full"
 >
 <div className="min-w-0 p-10 bg-white rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col justify-between group hover:border-blue-300 transition-colors">
 <div>
 <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center mb-8">
 <ShieldCheck className="w-7 h-7 text-blue-600" />
 </div>
 <h3 className="text-2xl font-bold text-slate-900 mb-6 ">{t('privacy.title')}</h3>
 <p className="text-slate-600 text-lg leading-relaxed mb-6 ">
 {t('privacy.p1')}
 </p>
 <p className="text-slate-600 text-lg leading-relaxed ">
 {t('privacy.p2')}
 </p>
 </div>
 
 <div className="mt-12">
 <MagneticButton className="bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 px-8 py-4 w-full sm:w-auto font-semibold">
 {t('privacy.button')} <ArrowRight className="ml-3 w-5 h-5" />
 </MagneticButton>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
