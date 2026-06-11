"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ContactSalesFormSection() {
 const t = useTranslations('Contact.SalesForm');
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 
 const formData = new FormData(e.currentTarget);
 const firstName = formData.get('firstName');
 const lastName = formData.get('lastName');
 const company = formData.get('company');
 const email = formData.get('email');
 const inquiryType = formData.get('inquiryType');
 const message = formData.get('message');

 const subject = encodeURIComponent(`${t('email_subject')}: ${inquiryType} from ${company}`);
 const body = encodeURIComponent(`
${t('email_body.name')}: ${firstName} ${lastName}
${t('email_body.company')}: ${company}
${t('email_body.email')}: ${email}
${t('email_body.inquiry_type')}: ${inquiryType}

${t('email_body.message')}:
${message}
 `);

 window.location.href = `mailto:sales@k-aqua.com?subject=${subject}&body=${body}`;
 setIsSubmitted(true);
 };

 return (
 <section className="py-24 bg-white border-t border-slate-200">
 <div className="max-w-[1000px] mx-auto px-4 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-16"
 >
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-6 ">
 {t('title')}
 </h2>
 <p className="text-xl text-slate-600 max-w-[60ch] ">
 {t('subtitle')}
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all"
 >
 {isSubmitted ? (
 <div className="flex flex-col items-center justify-center py-16 text-center">
 <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
 <CheckCircle2 className="w-10 h-10 text-blue-600" />
 </div>
 <h3 className="text-3xl font-bold text-slate-900 mb-4 ">{t('success_title')}</h3>
 <p className="text-lg text-slate-600 max-w-[45ch] ">
 {t('success_desc')}
 </p>
 </div>
 ) : (
 <form onSubmit={handleSubmit} className="space-y-8">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
 <div className="space-y-2">
 <label htmlFor="firstName" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">{t('labels.first_name')}</label>
 <input required type="text" id="firstName" name="firstName" className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-900" placeholder={t('placeholders.first_name')} />
 </div>
 <div className="space-y-2">
 <label htmlFor="lastName" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">{t('labels.last_name')}</label>
 <input required type="text" id="lastName" name="lastName" className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-900" placeholder={t('placeholders.last_name')} />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
 <div className="space-y-2">
 <label htmlFor="company" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">{t('labels.company')}</label>
 <input required type="text" id="company" name="company" className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-900" placeholder={t('placeholders.company')} />
 </div>
 <div className="space-y-2">
 <label htmlFor="email" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">{t('labels.email')}</label>
 <input required type="email" id="email" name="email" className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-900" placeholder={t('placeholders.email')} />
 </div>
 </div>

 <div className="space-y-2">
 <label htmlFor="inquiryType" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">{t('labels.inquiry_type')}</label>
 <select id="inquiryType" name="inquiryType" className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-900 appearance-none">
 <option value="distributor">{t('options.distributor')}</option>
 <option value="project">{t('options.project')}</option>
 <option value="technical">{t('options.technical')}</option>
 <option value="other">{t('options.other')}</option>
 </select>
 </div>

 <div className="space-y-2">
 <label htmlFor="message" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">{t('labels.message')}</label>
 <textarea required id="message" name="message" rows={6} className="w-full bg-white border border-slate-300 rounded-xl px-5 py-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-900 resize-none" placeholder={t('placeholders.message')}></textarea>
 </div>

 <div className="pt-4 flex justify-end">
 <MagneticButton type="submit" className="bg-blue-600 text-white hover:bg-slate-900 px-10 py-5 text-lg w-full sm:w-auto font-semibold">
 {t('button')} <Send className="ml-3 w-5 h-5" />
 </MagneticButton>
 </div>
 </form>
 )}
 </motion.div>
 </div>
 </section>
 );
}
