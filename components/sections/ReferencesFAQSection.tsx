"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ReferencesFAQSection() {
 const t = useTranslations('References.FAQ');
 
 const faqs = [
 {
 question: t('questions.q1'),
 answer: t('questions.a1')
 },
 {
 question: t('questions.q2'),
 answer: t('questions.a2')
 },
 {
 question: t('questions.q3'),
 answer: t('questions.a3')
 },
 {
 question: t('questions.q4'),
 answer: t('questions.a4')
 }
 ];

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="text-center mb-16">
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 "
 >
 {t('title')}
 </motion.h2>
 <p className="text-lg text-slate-600 ">
 {t('description')}
 </p>
 </div>

 <div className="space-y-6">
 {faqs.map((faq, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: idx * 0.1 }}
 className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
 >
 <h4 className="text-xl font-bold text-slate-900 mb-4 ">{faq.question}</h4>
 <p className="text-slate-600 leading-relaxed ">{faq.answer}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
