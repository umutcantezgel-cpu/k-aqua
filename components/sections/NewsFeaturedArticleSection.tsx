"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplet, Zap, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NewsFeaturedArticleSection() {
 const t = useTranslations('News.FeaturedArticleSection');

 return (
 <div className="w-full flex flex-col gap-12 lg:gap-32 pb-24">
 {/* SECTION 1: ISO 9001 */}
 <ArticleSection 
 index="01"
 title={t('article1.title')}
 subtitle={t('article1.subtitle')}
 icon={<ShieldCheck className="w-8 h-8 text-[#5b2d8c]" />}
 reverse={false}
 badge={t('badge')}
 >
 <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-8 ">
 {t('article1.p1')}
 </p>
 <p className="text-lg text-slate-600 leading-relaxed max-w-[60ch] mb-8 ">
 {t('article1.p2')}
 </p>
 <ul className="space-y-4">
 {[t('article1.li1'), t('article1.li2'), t('article1.li3')].map((item, i) => (
 <li key={i} className="flex items-center text-slate-600 font-mono text-sm">
 <CheckCircle2 className="w-4 h-4 mr-3 text-[#5b2d8c]" />
 {item}
 </li>
 ))}
 </ul>
 </ArticleSection>

 {/* SECTION 2: ISO 14001 */}
 <ArticleSection 
 index="02"
 title={t('article2.title')}
 subtitle={t('article2.subtitle')}
 icon={<Droplet className="w-8 h-8 text-slate-700" />}
 reverse={true}
 badge={t('badge')}
 >
 <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-8 ">
 {t('article2.p1')}
 </p>
 <p className="text-lg text-slate-600 leading-relaxed max-w-[60ch] mb-8 ">
 {t('article2.p2')}
 </p>
 <ul className="space-y-4">
 {[t('article2.li1'), t('article2.li2'), t('article2.li3')].map((item, i) => (
 <li key={i} className="flex items-center text-slate-600 font-mono text-sm">
 <CheckCircle2 className="w-4 h-4 mr-3 text-slate-600" />
 {item}
 </li>
 ))}
 </ul>
 </ArticleSection>

 {/* SECTION 3: ISO 50001 */}
 <ArticleSection 
 index="03"
 title={t('article3.title')}
 subtitle={t('article3.subtitle')}
 icon={<Zap className="w-8 h-8 text-[#5b2d8c]" />}
 reverse={false}
 badge={t('badge')}
 >
 <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-8 ">
 {t('article3.p1')}
 </p>
 <p className="text-lg text-slate-600 leading-relaxed max-w-[60ch] mb-8 ">
 {t('article3.p2')}
 </p>
 <ul className="space-y-4">
 {[t('article3.li1'), t('article3.li2'), t('article3.li3')].map((item, i) => (
 <li key={i} className="flex items-center text-slate-600 font-mono text-sm">
 <CheckCircle2 className="w-4 h-4 mr-3 text-[#5b2d8c]" />
 {item}
 </li>
 ))}
 </ul>
 </ArticleSection>
 </div>
 );
}

function ArticleSection({ index, title, subtitle, icon, reverse, children, badge }: { index: string, title: string, subtitle: string, icon: React.ReactNode, reverse: boolean, children: React.ReactNode, badge: string }) {
 return (
 <section className="flex items-center px-4 sm:px-6 lg:px-12 py-12 lg:py-24">
 <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center min-w-0">
 
 {/* Visual Area */}
 <div className={`lg:col-span-5 w-full h-[40vh] lg:h-[60vh] ${reverse ? 'lg:order-2' : 'lg:order-1'} min-w-0`}>
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="w-full h-full"
 >
 <div className="w-full h-full bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all relative group overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-transparent to-transparent z-10 flex flex-col justify-end p-8 lg:p-10 pointer-events-none">
 <div className="w-14 h-14 bg-slate-50/80 rounded-2xl flex items-center justify-center mb-6 border border-slate-200 shadow-xl backdrop-blur-md">
 {icon}
 </div>
 <h3 className="text-2xl font-bold text-slate-900 mb-3 ">{title}</h3>
 <p className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">{index} — {badge}</p>
 </div>
 </div>
 </motion.div>
 </div>

 {/* Content Area */}
 <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : 'lg:order-2'} min-w-0`}>
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
 className="flex flex-col items-start"
 >
 <div className="text-[#5b2d8c] font-mono text-sm tracking-widest mb-8 flex items-center gap-4 w-full">
 <span className=" ">{index}</span>
 <div className="h-px bg-slate-100 flex-1 max-w-[100px]"></div>
 </div>
 
 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mb-6 leading-[1.1] ">
 {title}
 </h2>
 
 <div className="bg-slate-50/40 border border-slate-200 shadow-sm/80 rounded-full px-4 py-2 inline-flex items-center gap-3 mb-10 backdrop-blur-md">
 <div className="w-1.5 h-1.5 rounded-full bg-[#5b2d8c] animate-pulse shadow-[0_0_10px_#5b2d8c]"></div>
 <p className="text-xs font-mono tracking-widest text-slate-700 uppercase ">
 {subtitle}
 </p>
 </div>
 
 <div className="flex flex-col">
 {children}
 </div>
 </motion.div>
 </div>

 </div>
 </section>
 );
}
