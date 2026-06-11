"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Droplet, Globe, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeFeaturesSection() {
 const t = useTranslations('Home');
 const features = [
 {
 icon: <Factory className="w-8 h-8" />,
 title: t('feature1Title'),
 description: t('feature1Desc')
 },
 {
 icon: <Droplet className="w-8 h-8" />,
 title: t('feature2Title'),
 description: t('feature2Desc')
 },
 {
 icon: <Globe className="w-8 h-8" />,
 title: t('feature3Title'),
 description: t('feature3Desc')
 },
 {
 icon: <ShieldCheck className="w-8 h-8" />,
 title: t('feature4Title'),
 description: t('feature4Desc')
 }
 ];

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-16 max-w-4xl"
 >
 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">{t('Architecture of Water Transport')}</h2>
 <p className="text-xl text-slate-600 leading-relaxed ">
 {t('architectureDescription')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {features.map((feature, idx) => (
 <motion.article 
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.1 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group min-w-0"
 >
 <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 mb-8 group-hover:text-primary group-hover:bg-primary/5 transition-colors">
 {feature.icon}
 </div>
 <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
 <p className="text-slate-600 leading-relaxed">
 {feature.description}
 </p>
 </motion.article>
 ))}
 </div>
 </div>
 </section>
 );
}
