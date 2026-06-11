"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Globe, FlaskConical } from 'lucide-react';
import { useTranslations } from 'next-intl';

const getArticles = (t: any) => [
 {
 id: 1,
 title: t('articles.article1.title'),
 category: t('articles.article1.category'),
 date: t('articles.article1.date'),
 icon: <FlaskConical className="w-5 h-5" />,
 summary: t('articles.article1.summary')
 },
 {
 id: 2,
 title: t('articles.article2.title'),
 category: t('articles.article2.category'),
 date: t('articles.article2.date'),
 icon: <Globe className="w-5 h-5" />,
 summary: t('articles.article2.summary')
 },
 {
 id: 3,
 title: t('articles.article3.title'),
 category: t('articles.article3.category'),
 date: t('articles.article3.date'),
 icon: <Leaf className="w-5 h-5" />,
 summary: t('articles.article3.summary')
 },
 {
 id: 4,
 title: t('articles.article4.title'),
 category: t('articles.article4.category'),
 date: t('articles.article4.date'),
 icon: <FlaskConical className="w-5 h-5" />,
 summary: t('articles.article4.summary')
 },
 {
 id: 5,
 title: t('articles.article5.title'),
 category: t('articles.article5.category'),
 date: t('articles.article5.date'),
 icon: <Globe className="w-5 h-5" />,
 summary: t('articles.article5.summary')
 },
 {
 id: 6,
 title: t('articles.article6.title'),
 category: t('articles.article6.category'),
 date: t('articles.article6.date'),
 icon: <Leaf className="w-5 h-5" />,
 summary: t('articles.article6.summary')
 },
 {
 id: 7,
 title: t('articles.article7.title'),
 category: t('articles.article7.category'),
 date: t('articles.article7.date'),
 icon: <FlaskConical className="w-5 h-5" />,
 summary: t('articles.article7.summary')
 },
 {
 id: 8,
 title: t('articles.article8.title'),
 category: t('articles.article8.category'),
 date: t('articles.article8.date'),
 icon: <Globe className="w-5 h-5" />,
 summary: t('articles.article8.summary')
 },
 {
 id: 9,
 title: t('articles.article9.title'),
 category: t('articles.article9.category'),
 date: t('articles.article9.date'),
 icon: <Leaf className="w-5 h-5" />,
 summary: t('articles.article9.summary')
 },
 {
 id: 10,
 title: t('articles.article10.title'),
 category: t('articles.article10.category'),
 date: t('articles.article10.date'),
 icon: <FlaskConical className="w-5 h-5" />,
 summary: t('articles.article10.summary')
 },
 {
 id: 11,
 title: t('articles.article11.title'),
 category: t('articles.article11.category'),
 date: t('articles.article11.date'),
 icon: <Globe className="w-5 h-5" />,
 summary: t('articles.article11.summary')
 },
 {
 id: 12,
 title: t('articles.article12.title'),
 category: t('articles.article12.category'),
 date: t('articles.article12.date'),
 icon: <Leaf className="w-5 h-5" />,
 summary: t('articles.article12.summary')
 }
];

export default function NewsGridSection() {
 const t = useTranslations('News.GridSection');
 const articles = getArticles(t);

 return (
 <section className="py-24 px-4 sm:px-6 lg:px-12 bg-white">
 <div className="max-w-[1440px] mx-auto min-w-0">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-16 flex flex-col items-start"
 >
 <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 ">
 {t('title')}
 </h2>
 <p className="text-xl text-slate-600 max-w-2xl font-light ">
 {t('subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {articles.map((article, index) => (
 <motion.article 
 key={article.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.5, delay: index * 0.05 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col cursor-pointer min-w-0"
 >
 <div className="flex items-center justify-between mb-6">
 <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
 {article.icon}
 <span>{article.category}</span>
 </div>
 <span className="text-sm font-mono text-slate-500 ">{article.date}</span>
 </div>
 
 <h3 className="text-2xl font-semibold text-slate-900 mb-4 leading-tight group-hover:text-[#5b2d8c] transition-colors ">
 {article.title}
 </h3>
 
 <p className="text-slate-600 font-light mb-8 flex-grow ">
 {article.summary}
 </p>
 
 <div className="flex items-center text-sm font-semibold text-slate-900 mt-auto group-hover:text-[#5b2d8c] transition-colors">
 {t('readArticle')}
 <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
 </div>
 </motion.article>
 ))}
 </div>
 </div>
 </section>
 );
}
