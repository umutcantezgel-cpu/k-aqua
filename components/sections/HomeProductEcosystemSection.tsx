"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function HomeProductEcosystemSection() {
 const t = useTranslations('Home');
 const products = [
 {
 name: t('product1Name'),
 desc: t('product1Desc')
 },
 {
 name: t('product2Name'),
 desc: t('product2Desc')
 },
 {
 name: t('product3Name'),
 desc: t('product3Desc')
 },
 {
 name: t('product4Name'),
 desc: t('product4Desc')
 }
 ];

 return (
 <section className="py-24 bg-white border-t border-slate-200">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
 <div className="lg:col-span-5 sticky top-24 min-w-0">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center mb-6">
 <Settings2 className="w-6 h-6 text-[#431074]" />
 </div>
 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('Comprehensive Product Ecosystem')}
 </h2>
 <p className="text-lg text-slate-600 mb-8 leading-relaxed ">
 {t('ecosystemDescription')}
 </p>
 <Link href="/products" className="inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-[#431074] transition-colors">
 {t('Download Technical Catalog')} <ArrowRight className="w-4 h-4" />
 </Link>
 </motion.div>
 </div>

 <div className="lg:col-span-7 space-y-8 min-w-0">
 {products.map((prod, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.1 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0"
 >
 <h3 className="text-2xl font-bold mb-4 text-slate-900">{prod.name}</h3>
 <p className="text-slate-600 leading-relaxed">
 {prod.desc}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
