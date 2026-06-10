"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import { useTranslations } from 'next-intl';

export default function HomeFAQSection() {
 const t = useTranslations('Home');
 const faqs = [
 {
 question: t('faq1Question'),
 answer: t('faq1Answer')
 },
 {
 question: t('faq2Question'),
 answer: t('faq2Answer')
 },
 {
 question: t('faq3Question'),
 answer: t('faq3Answer')
 },
 {
 question: t('faq4Question'),
 answer: t('faq4Answer')
 },
 {
 question: t('faq5Question'),
 answer: t('faq5Answer')
 }
 ];

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="w-full max-w-[800px] mx-auto px-6 sm:px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="text-center mb-16"
 >
 <h2 className="text-4xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('Frequently Asked Questions')}
 </h2>
 <p className="text-lg text-slate-600 ">
 {t('faqDescription')}
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 >
 <Accordion type="single" collapsible className="w-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
 {faqs.map((faq, idx) => (
 <AccordionItem key={idx} value={`item-${idx}`}>
 <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-[#431074] ">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-slate-600 leading-relaxed text-base ">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </motion.div>
 </div>
 </section>
 );
}
