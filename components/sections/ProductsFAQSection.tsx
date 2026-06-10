"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductsFAQSection() {
 const t = useTranslations('Products');
 const faqs = [
 {
 q: t('FAQ.questions.diff.q'),
 a: t('FAQ.questions.diff.a')
 },
 {
 q: t('FAQ.questions.hvac.q'),
 a: t('FAQ.questions.hvac.a')
 },
 {
 q: t('FAQ.questions.weld.q'),
 a: t('FAQ.questions.weld.a')
 },
 {
 q: t('FAQ.questions.safe.q'),
 a: t('FAQ.questions.safe.a')
 },
 {
 q: t('FAQ.questions.life.q'),
 a: t('FAQ.questions.life.a')
 }
 ];

 const [openIndex, setOpenIndex] = useState<number | null>(0);

 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 bg-slate-50 border-t border-slate-200">
 <div className="max-w-4xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6 }}
 className="text-center mb-16 md:mb-24"
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('FAQ.title')}
 </h2>
 <p className="text-slate-600 text-lg leading-relaxed font-light max-w-2xl mx-auto ">
 {t('FAQ.subtitle')}
 </p>
 </motion.div>

 <div className="space-y-4">
 {faqs.map((faq, index) => {
 const isOpen = openIndex === index;

 return (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-5%" }}
 transition={{ duration: 0.4, delay: index * 0.05 }}
 className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
 >
 <button
 onClick={() => setOpenIndex(isOpen ? null : index)}
 className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
 >
 <span className="font-medium text-slate-900 pr-8 ">{faq.q}</span>
 <div className={`flex-shrink-0 h-6 w-6 rounded-full border flex items-center justify-center transition-colors duration-300 ${isOpen ? 'border-[#8667b3] bg-[#8667b3]/10' : 'border-slate-300'}`}>
 <span className={`block h-[2px] w-3 bg-current transition-transform duration-300 ${isOpen ? 'text-[#8667b3]' : 'text-slate-400'}`} />
 {!isOpen && (
 <span className="block w-[2px] h-3 bg-slate-400 absolute transition-transform duration-300" />
 )}
 </div>
 </button>
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3 }}
 >
 <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4 ">
 {faq.a}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
