"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ThermometerSun, Droplets, Activity } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ReferencesTechnicalSection() {
 const t = useTranslations('References.Technical');

 const features = [
 {
 title: t('features.thermalTitle'),
 description: t('features.thermalDesc'),
 icon: <ThermometerSun className="w-6 h-6 text-blue-600" />
 },
 {
 title: t('features.corrosionTitle'),
 description: t('features.corrosionDesc'),
 icon: <Droplets className="w-6 h-6 text-blue-600" />
 },
 {
 title: t('features.pressureTitle'),
 description: t('features.pressureDesc'),
 icon: <Activity className="w-6 h-6 text-blue-600" />
 }
 ];

 return (
 <section className="py-24 bg-white border-t border-slate-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="flex flex-col lg:flex-row gap-16 items-center">
 <motion.div 
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="lg:w-1/2"
 >
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 ">{t('title')}</h2>
 <p className="text-lg text-slate-600 mb-8 leading-relaxed ">
 {t('description')}
 </p>
 <div className="space-y-8">
 {features.map((feature, idx) => (
 <div key={idx} className="flex">
 <div className="flex-shrink-0 mt-1">
 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
 {feature.icon}
 </div>
 </div>
 <div className="ml-6 min-w-0">
 <h4 className="text-xl font-bold text-slate-900 mb-2 ">{feature.title}</h4>
 <p className="text-slate-600 leading-relaxed ">{feature.description}</p>
 </div>
 </div>
 ))}
 </div>
 </motion.div>
 
 <motion.div 
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="lg:w-1/2 w-full"
 >
 <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
 <h3 className="text-2xl font-bold text-slate-900 mb-6 ">{t('specsTitle')}</h3>
 <ul className="space-y-4">
 <li className="flex justify-between items-center py-3 border-b border-slate-200">
 <span className="text-slate-600 font-medium ">{t('specs.material')}</span>
 <span className="text-slate-900 font-bold ">PP-R / PP-RCT</span>
 </li>
 <li className="flex justify-between items-center py-3 border-b border-slate-200">
 <span className="text-slate-600 font-medium ">{t('specs.density')}</span>
 <span className="text-slate-900 font-bold ">0.895 g/cm³</span>
 </li>
 <li className="flex justify-between items-center py-3 border-b border-slate-200">
 <span className="text-slate-600 font-medium ">{t('specs.thermal')}</span>
 <span className="text-slate-900 font-bold ">0.24 W/mK</span>
 </li>
 <li className="flex justify-between items-center py-3 border-b border-slate-200">
 <span className="text-slate-600 font-medium ">{t('specs.linear')}</span>
 <span className="text-slate-900 font-bold ">0.035 mm/mK</span>
 </li>
 <li className="flex justify-between items-center py-3">
 <span className="text-slate-600 font-medium ">{t('specs.lifespan')}</span>
 <span className="text-slate-900 font-bold ">&gt; 50 Years</span>
 </li>
 </ul>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
