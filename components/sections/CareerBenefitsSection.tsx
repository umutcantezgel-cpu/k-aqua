"use client";

import { motion } from "framer-motion";
import { Heart, Coffee, BookOpen, Clock, MapPin, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerBenefitsSection() {
 const t = useTranslations('Career');

 const benefits = [
 { icon: Heart, title: t('Benefits.items.0.title'), desc: t('Benefits.items.0.desc') },
 { icon: BookOpen, title: t('Benefits.items.1.title'), desc: t('Benefits.items.1.desc') },
 { icon: Clock, title: t('Benefits.items.2.title'), desc: t('Benefits.items.2.desc') },
 { icon: MapPin, title: t('Benefits.items.3.title'), desc: t('Benefits.items.3.desc') },
 { icon: Coffee, title: t('Benefits.items.4.title'), desc: t('Benefits.items.4.desc') },
 { icon: Award, title: t('Benefits.items.5.title'), desc: t('Benefits.items.5.desc') }
 ];

 return (
 <section className="py-32 bg-slate-50 border-t border-slate-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="mb-16"
 >
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 ">{t('Benefits.title')}</h2>
 <p className="text-xl text-slate-600 max-w-2xl font-light ">
 {t('Benefits.subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 {benefits.map((benefit, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: i * 0.1 }}
 viewport={{ once: true }}
 className="flex gap-4"
 >
 <div className="flex-shrink-0 mt-1">
 <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center">
 <benefit.icon className="w-5 h-5 text-[#8c30eb]" strokeWidth={1.5} />
 </div>
 </div>
 <div className="min-w-0">
 <h3 className="text-lg font-medium text-slate-900 mb-2 ">{benefit.title}</h3>
 <p className="text-slate-600 font-light leading-relaxed ">{benefit.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
