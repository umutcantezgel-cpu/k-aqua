"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FolderArchive, Image as ImageIcon, FileText, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function NewsPressKitSection() {
 const t = useTranslations('News.PressKitSection');

 return (
 <section className="py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-br from-[#5b2d8c]/5 to-transparent pointer-events-none"></div>
 
 <div className="max-w-[1440px] mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="flex flex-col items-start"
 >
 <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
 <FolderArchive className="w-4 h-4" />
 <span>{t('badge')}</span>
 </div>
 
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-tight ">
 {t('title')}
 </h2>
 
 <p className="text-xl text-slate-600 max-w-[45ch] leading-relaxed font-light mb-8 ">
 {t('subtitle')}
 </p>

 <div className="flex flex-col sm:flex-row gap-4 w-full">
 <a href="https://www.k-aqua.de/PDF/KWT%20Zertifikate%20English.pdf" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
 <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-[#5b2d8c] text-white rounded-full font-semibold text-base tracking-wide flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#5b2d8c]/20">
 <Download className="w-5 h-5 mr-3" />
 {t('btnEn')}
 </MagneticButton>
 </a>
 <a href="https://www.k-aqua.de/PDF/KWT%20Zertifikat%20Deutsch.pdf" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
 <MagneticButton className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-300 text-slate-900 rounded-full font-semibold text-base tracking-wide flex items-center justify-center transition-all hover:bg-slate-100 hover:border-slate-400 hover:scale-105 active:scale-95 shadow-sm">
 <Download className="w-5 h-5 mr-3" />
 {t('btnDe')}
 </MagneticButton>
 </a>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0"
 >
 {/* Asset Card 1 */}
 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer min-w-0">
 <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5b2d8c]/10 transition-colors">
 <ImageIcon className="w-6 h-6 text-slate-700 group-hover:text-[#5b2d8c] transition-colors" />
 </div>
 <h3 className="text-lg font-bold text-slate-900 mb-2 ">{t('card1.title')}</h3>
 <p className="text-sm text-slate-600 font-light mb-4 ">{t('card1.desc')}</p>
 <div className="text-sm font-semibold text-[#5b2d8c] flex items-center">
 {t('card1.action')} <Download className="w-4 h-4 ml-1" />
 </div>
 </div>

 {/* Asset Card 2 */}
 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer min-w-0">
 <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5b2d8c]/10 transition-colors">
 <ImageIcon className="w-6 h-6 text-slate-700 group-hover:text-[#5b2d8c] transition-colors" />
 </div>
 <h3 className="text-lg font-bold text-slate-900 mb-2 ">{t('card2.title')}</h3>
 <p className="text-sm text-slate-600 font-light mb-4 ">{t('card2.desc')}</p>
 <div className="text-sm font-semibold text-[#5b2d8c] flex items-center">
 {t('card2.action')} <Download className="w-4 h-4 ml-1" />
 </div>
 </div>

 {/* Asset Card 3 */}
 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer min-w-0">
 <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5b2d8c]/10 transition-colors">
 <FileText className="w-6 h-6 text-slate-700 group-hover:text-[#5b2d8c] transition-colors" />
 </div>
 <h3 className="text-lg font-bold text-slate-900 mb-2 ">{t('card3.title')}</h3>
 <p className="text-sm text-slate-600 font-light mb-4 ">{t('card3.desc')}</p>
 <div className="text-sm font-semibold text-[#5b2d8c] flex items-center">
 {t('card3.action')} <ArrowRight className="w-4 h-4 ml-1" />
 </div>
 </div>

 {/* Asset Card 4 */}
 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group cursor-pointer min-w-0">
 <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#5b2d8c]/10 transition-colors">
 <FileText className="w-6 h-6 text-slate-700 group-hover:text-[#5b2d8c] transition-colors" />
 </div>
 <h3 className="text-lg font-bold text-slate-900 mb-2 ">{t('card4.title')}</h3>
 <p className="text-sm text-slate-600 font-light mb-4 ">{t('card4.desc')}</p>
 <div className="text-sm font-semibold text-[#5b2d8c] flex items-center">
 {t('card4.action')} <Download className="w-4 h-4 ml-1" />
 </div>
 </div>

 </motion.div>
 </div>
 </section>
 );
}
