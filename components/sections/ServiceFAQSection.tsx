"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServiceFAQSection() {
 const [openIndex, setOpenIndex] = useState<number | null>(0);
 const t = useTranslations('Service.FAQ');
 
 const faqs = [0, 1, 2, 3, 4].map((idx) => ({
 q: t(`faqs.${idx}.q`),
 a: t(`faqs.${idx}.a`)
 }));

 return (
 <section className="py-24 bg-white border-b border-slate-100">
 <div className="max-w-[900px] mx-auto px-4 sm:px-6 min-w-0">
 <div className="mb-16 text-center">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('title')}
 </h2>
 <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto ">
 {t('subtitle')}
 </p>
 </div>

 <div className="flex flex-col gap-4">
 {faqs.map((faq, idx) => {
 const isOpen = openIndex === idx;
 return (
 <div 
 key={idx} 
 className={`border ${isOpen ? 'border-slate-300 bg-slate-50' : 'border-slate-200 bg-white'} rounded-2xl overflow-hidden transition-colors`}
 >
 <button
 onClick={() => setOpenIndex(isOpen ? null : idx)}
 className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-900"
 >
 <span className="text-lg font-bold text-slate-900 pr-8 ">{faq.q}</span>
 <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
 </button>
 <div 
 className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
 >
 <div className="p-6 md:p-8 pt-0 text-slate-600 leading-relaxed ">
 {faq.a}
 </div>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
