import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Printer, ShieldCheck, ArrowRight, Building2, HardHat } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ContactDepartmentsSection() {
 const t = useTranslations('Contact.Departments');

 return (
 <section className="py-24 bg-white relative z-10 border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-16"
 >
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-6 ">
 {t('title')}
 </h2>
 <p className="text-xl text-slate-600 max-w-[60ch] ">
 {t('subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 
 <motion.article 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="min-w-0 bg-slate-50 p-10 sm:p-12 rounded-2xl border border-slate-200 shadow-sm"
 >
 <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center ">
 <Building2 className="w-4 h-4 mr-3" /> {t('enterprise_division.tag')}
 </h3>
 <p className="text-slate-600 text-lg mb-8 leading-relaxed ">
 {t('enterprise_division.desc')}
 </p>
 <div className="space-y-6">
 <a href="tel:+4960859868410" className="flex items-center text-2xl font-semibold text-slate-900 hover:text-blue-600 transition-colors group">
 <span className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mr-6 group-hover:border-blue-600 group-hover:bg-blue-50 transition-colors shadow-sm">
 <Phone className="w-5 h-5 text-blue-600" />
 </span>
 +49 (0)60 85 / 9868-410
 </a>
 <div className="flex items-center text-xl text-slate-600">
 <span className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mr-6 shadow-sm">
 <Printer className="w-5 h-5 text-slate-400" />
 </span>
 +49 (0)60 85 / 9868-420 <span className="text-sm uppercase tracking-wider ml-4 font-bold text-slate-400">{t('enterprise_division.fax_protocol')}</span>
 </div>
 <a href="mailto:info@k-aqua.de" className="flex items-center text-2xl font-semibold text-slate-900 hover:text-blue-600 transition-colors group">
 <span className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mr-6 group-hover:border-blue-600 group-hover:bg-blue-50 transition-colors shadow-sm">
 <Mail className="w-5 h-5 text-blue-600" />
 </span>
 info@k-aqua.de
 </a>
 </div>
 </motion.article>

 <motion.article 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="min-w-0 bg-blue-600 text-white p-10 sm:p-12 rounded-2xl shadow-sm relative overflow-hidden group"
 >
 <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen scale-150 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
 <div className="relative z-10">
 <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100 mb-8 flex items-center ">
 <ShieldCheck className="w-4 h-4 mr-3" /> {t('technical_support.tag')}
 </h3>
 <p className="text-blue-50 text-xl mb-8 leading-relaxed font-medium ">
 {t('technical_support.desc')}
 </p>
 
 <div className="bg-blue-700/50 p-6 rounded-xl mb-10 border border-blue-500/30">
 <ul className="space-y-3 text-blue-100 font-medium">
 <li className="flex items-center"><HardHat className="w-4 h-4 mr-3 text-white" /> {t('technical_support.bullet1')}</li>
 <li className="flex items-center"><HardHat className="w-4 h-4 mr-3 text-white" /> {t('technical_support.bullet2')}</li>
 <li className="flex items-center"><HardHat className="w-4 h-4 mr-3 text-white" /> {t('technical_support.bullet3')}</li>
 </ul>
 </div>

 <MagneticButton 
 onClick={() => window.location.href='mailto:support@k-aqua.de'}
 className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
 >
 support@k-aqua.de <ArrowRight className="ml-3 w-5 h-5" />
 </MagneticButton>
 </div>
 </motion.article>

 </div>
 </div>
 </section>
 );
}
