import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactRegionalOfficesSection() {
 const t = useTranslations('Contact.RegionalOffices');

 const regions = [
 {
 name: t('mena.name'),
 address: t('mena.address'),
 focus: t('mena.focus'),
 phone: "+971 (0) 4 332 8811",
 email: "mena@k-aqua.de"
 },
 {
 name: t('apac.name'),
 address: t('apac.address'),
 focus: t('apac.focus'),
 phone: "+65 6818 6388",
 email: "apac@k-aqua.de"
 },
 {
 name: t('latam.name'),
 address: t('latam.address'),
 focus: t('latam.focus'),
 phone: "+55 11 3230 4000",
 email: "latam@k-aqua.de"
 }
 ];

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-16"
 >
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-6 " dangerouslySetInnerHTML={{ __html: t.raw('title') }} />
 <p className="text-xl text-slate-600 max-w-[60ch] ">
 {t('subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {regions.map((region, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.1 }}
 className="min-w-0 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group"
 >
 <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start ">
 <MapPin className="w-5 h-5 mr-3 text-blue-600 shrink-0 mt-1" />
 {region.name}
 </h3>
 <p className="text-slate-600 text-sm mb-6 pb-6 border-b border-slate-100 font-medium ">
 {region.address}
 </p>
 <p className="text-slate-600 mb-8 leading-relaxed text-sm ">
 {region.focus}
 </p>
 <div className="space-y-3 min-w-0">
 <a href={`tel:${region.phone.replace(/[^0-9+]/g, '')}`} className="block text-slate-900 font-semibold hover:text-blue-600 transition-colors ">
 {region.phone}
 </a>
 <a href={`mailto:${region.email}`} className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors ">
 {region.email} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
 </a>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
