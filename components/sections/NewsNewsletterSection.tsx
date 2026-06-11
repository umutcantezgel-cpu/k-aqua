"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function NewsNewsletterSection() {
 const t = useTranslations('News.NewsletterSection');
 const [email, setEmail] = useState('');
 const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 if (email) {
 setSubmitted(true);
 // In a real implementation, you would send this to an API
 }
 };

 return (
 <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
 <div className="max-w-[1000px] mx-auto w-full bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-6 md:p-16 lg:p-20 relative overflow-hidden min-w-0 hover:-translate-y-1 hover:shadow-md transition-all">
 
 {/* Subtle background element */}
 <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-[#5b2d8c]/5 rounded-full blur-[100px] pointer-events-none"></div>
 <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-80 h-80 bg-[#5b2d8c]/5 rounded-full blur-[80px] pointer-events-none"></div>

 <div className="relative z-10 flex flex-col items-center text-center">
 <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 border border-slate-200 shadow-sm">
 <Mail className="w-8 h-8 text-[#5b2d8c]" />
 </div>
 
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 ">
 {t('title')}
 </h2>
 
 <p className="text-lg md:text-xl text-slate-600 max-w-2xl font-light mb-12 ">
 {t('subtitle')}
 </p>

 {submitted ? (
 <motion.div 
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 className="flex items-center space-x-3 bg-green-50 text-green-800 px-8 py-5 rounded-full border border-green-200"
 >
 <CheckCircle2 className="w-6 h-6 text-green-600" />
 <span className="font-medium ">{t('success')}</span>
 </motion.div>
 ) : (
 <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-4 relative">
 <input 
 type="email" 
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder={t('placeholder')} 
 className="w-full bg-white border border-slate-300 text-slate-900 placeholder-slate-400 px-6 py-4 rounded-full outline-none focus:ring-2 focus:ring-[#5b2d8c] focus:border-transparent transition-all shadow-sm"
 />
 <Button 
 type="submit"
 variant="primary"
 className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold flex items-center justify-center shadow-md"
 >
 {t('subscribe')}
 <ArrowRight className="w-5 h-5 ml-2" />
 </Button>
 </form>
 )}

 <p className="text-xs text-slate-500 mt-6 font-light ">
 {t('privacy')} <a href="#" className="underline hover:text-slate-800 transition-colors ">{t('privacyLink')}</a>{t('dot')}
 </p>
 </div>
 </div>
 </section>
 );
}
