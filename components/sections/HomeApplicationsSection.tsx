"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Activity, Droplets } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeApplicationsSection() {
 const t = useTranslations('Home');
 const applications = [
 {
 title: t('app1Title'),
 icon: <Building2 className="w-6 h-6" />,
 description: t('app1Desc')
 },
 {
 title: t('app2Title'),
 icon: <Home className="w-6 h-6" />,
 description: t('app2Desc')
 },
 {
 title: t('app3Title'),
 icon: <Activity className="w-6 h-6" />,
 description: t('app3Desc')
 },
 {
 title: t('app4Title'),
 icon: <Droplets className="w-6 h-6" />,
 description: t('app4Desc')
 }
 ];

 return (
 <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="text-center max-w-4xl mx-auto mb-20">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 ">{t('Engineered for Every Sector')}</h2>
 <p className="text-xl text-slate-600 leading-relaxed ">
 {t('sectorDescription')}
 </p>
 </motion.div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {applications.map((app, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.1 }}
 className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 transition-colors min-w-0"
 >
 <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6 text-primary">
 {app.icon}
 </div>
 <h3 className="text-xl font-bold mb-4 ">{app.title}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {app.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
