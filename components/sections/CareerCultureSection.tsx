"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerCultureSection() {
 const t = useTranslations('Career');

 const items = [
 {
 icon: Users,
 title: t('Culture.items.0.title'),
 desc: t('Culture.items.0.desc')
 },
 {
 icon: Lightbulb,
 title: t('Culture.items.1.title'),
 desc: t('Culture.items.1.desc')
 },
 {
 icon: TrendingUp,
 title: t('Culture.items.2.title'),
 desc: t('Culture.items.2.desc')
 }
 ];

 return (
 <section className="py-32 bg-slate-50">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="mb-16"
 >
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 ">{t('Culture.title')}</h2>
 <p className="text-xl text-slate-600 max-w-2xl font-light ">
 {t('Culture.subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {items.map((item, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: idx * 0.1 }}
 viewport={{ once: true }}
 className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
 >
 <item.icon className="w-10 h-10 text-[#8c30eb] mb-6" strokeWidth={1.5} />
 <h3 className="text-xl font-medium text-slate-900 mb-4 ">{item.title}</h3>
 <p className="text-slate-600 font-light leading-relaxed ">{item.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
