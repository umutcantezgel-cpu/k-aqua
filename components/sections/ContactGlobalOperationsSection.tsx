import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ContactGlobalOperationsSection() {
 const t = useTranslations('Contact.GlobalOperations');

 return (
 <section id="contact-ops" className="py-32 bg-slate-50 relative z-10 border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
 
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="sticky top-32"
 >
 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-8 " dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
 <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-[45ch] mb-12 ">
 <p>
 {t('p1')}
 </p>
 <p>
 {t('p2')}
 </p>
 </div>
 
 <div className="flex gap-4">
 <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
 <Globe className="w-6 h-6 text-blue-600" />
 </div>
 <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
 <MapPin className="w-6 h-6 text-blue-600" />
 </div>
 </div>
 </motion.div>

 <div className="flex flex-col gap-12">
 <motion.address 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="not-italic min-w-0 bg-white p-12 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-600 transition-colors duration-500"
 >
 <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-8 flex items-center ">
 <MapPin className="w-4 h-4 mr-3" /> {t('hq_tag')}
 </h3>
 <div className="text-3xl sm:text-4xl font-semibold leading-[1.3] text-slate-900 mb-8 " dangerouslySetInnerHTML={{ __html: t.raw('hq_address') }} />
 <p className="text-slate-600 mb-8 max-w-md ">
 {t('hq_desc')}
 </p>
 <MagneticButton 
 onClick={() => window.open('https://maps.google.com/?q=Auweg+3,+35647+Waldsolms-Brandoberndorf', '_blank')}
 className="bg-transparent border border-slate-300 text-slate-900 hover:bg-slate-100 px-6 py-3"
 >
 {t('view_map')} <ArrowUpRight className="w-4 h-4 ml-2" />
 </MagneticButton>
 </motion.address>
 </div>
 </div>
 </div>
 </section>
 );
}
