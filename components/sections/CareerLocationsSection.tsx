"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerLocationsSection() {
 const t = useTranslations('Career');

 return (
 <section className="py-24 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
 >
 <div>
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 ">{t('Locations.title')}</h2>
 <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 ">
 {t('Locations.subtitle')}
 </p>
 <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
 <MapPin className="w-6 h-6 text-[#8c30eb] mt-1 flex-shrink-0" />
 <div className="min-w-0">
 <h3 className="font-medium text-slate-900 mb-1 ">{t('Locations.hq_title')}</h3>
 <p className="text-slate-600 font-light text-sm ">
 Technologiepark<br />
 61440 Oberursel<br />
 Germany
 </p>
 </div>
 </div>
 </div>
 
 <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
 <div className="text-slate-400 font-mono text-sm uppercase tracking-widest">{t('Locations.map_placeholder')}</div>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
