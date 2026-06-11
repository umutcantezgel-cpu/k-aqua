"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactFAQSection() {
 const t = useTranslations('Contact.FAQ');
 const [openIndex, setOpenIndex] = useState<number | null>(0);

 const faqs = [
 {
 question: t('q1.q'),
 answer: t('q1.a')
 },
 {
 question: t('q2.q'),
 answer: t('q2.a')
 },
 {
 question: t('q3.q'),
 answer: t('q3.a')
 },
 {
 question: t('q4.q'),
 answer: t('q4.a')
 },
 {
 question: t('q5.q'),
 answer: t('q5.a')
 }
 ];

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="max-w-[1000px] mx-auto px-4 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-center mb-16"
 >
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-6 ">
 {t('title')}
 </h2>
 <p className="text-xl text-slate-600 max-w-[60ch] mx-auto ">
 {t('subtitle')}
 </p>
 </motion.div>

 <div className="space-y-4">
 {faqs.map((faq, idx) => {
 const isOpen = openIndex === idx;
 return (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.1 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all"
 >
 <button
 onClick={() => setOpenIndex(isOpen ? null : idx)}
 className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
 >
 <span className="text-lg font-bold text-slate-900 pr-8 ">{faq.question}</span>
 <span className="flex-shrink-0 text-blue-600">
 {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
 </span>
 </button>
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.3 }}
 >
 <div className="px-8 pb-6 text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-6 ">
 {faq.answer}
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
