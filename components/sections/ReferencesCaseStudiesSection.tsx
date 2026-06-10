"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { getAllCaseStudies } from '@/lib/data/case-studies';
import { useTranslations } from 'next-intl';

export default function ReferencesCaseStudiesSection() {
 const caseStudies = getAllCaseStudies();
 const t = useTranslations('References');

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mb-16"
 >
 <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 ">{t('CaseStudies.title')}</h2>
 <p className="text-lg text-slate-600 max-w-2xl ">
 {t('CaseStudies.description')}
 </p>
 </motion.div>

 <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
 {caseStudies.map((study, idx) => (
 <motion.div 
 key={study.id}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.1 }}
 className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col min-w-0"
 >
 <div className="p-8 flex-1">
 <div className="flex items-center justify-between mb-6">
 <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider rounded-full ">
 {study.category}
 </span>
 <span className="text-sm text-slate-500 font-medium ">
 {study.year}
 </span>
 </div>
 
 <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors ">
 {study.title}
 </h3>
 
 <div className="space-y-3 mb-6">
 <div className="flex items-center text-slate-600">
 <Building2 className="w-4 h-4 mr-3 text-slate-400" />
 <span className="text-sm">{study.client}</span>
 </div>
 <div className="flex items-center text-slate-600">
 <MapPin className="w-4 h-4 mr-3 text-slate-400" />
 <span className="text-sm">{study.location}</span>
 </div>
 </div>

 <p className="text-slate-600 line-clamp-3 mb-8 ">
 {study.challenge}
 </p>

 <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
 {study.kpis.slice(0, 2).map((kpi, kpiIdx) => (
 <div key={kpiIdx}>
 <div className="text-xl font-bold text-slate-900">{kpi.value}</div>
 <div className="text-xs text-slate-500 uppercase tracking-wider">{kpi.label}</div>
 </div>
 ))}
 </div>
 </div>

 <div className="bg-slate-50 p-6 border-t border-slate-100">
 <Link 
 href={`/references/${study.slug}`} 
 className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
 >
 {t('CaseStudies.viewFull')} <ArrowRight className="ml-2 w-4 h-4" />
 </Link>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
