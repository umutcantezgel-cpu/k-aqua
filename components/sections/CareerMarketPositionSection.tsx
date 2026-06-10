"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Target, Shield, Droplets, Cpu } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerMarketPositionSection() {
 const t = useTranslations('Career');

 const features = [
 { icon: Globe, title: t('MarketPosition.items.0.title'), desc: t('MarketPosition.items.0.desc') },
 { icon: Zap, title: t('MarketPosition.items.1.title'), desc: t('MarketPosition.items.1.desc') },
 { icon: Target, title: t('MarketPosition.items.2.title'), desc: t('MarketPosition.items.2.desc') },
 { icon: Shield, title: t('MarketPosition.items.3.title'), desc: t('MarketPosition.items.3.desc') },
 { icon: Droplets, title: t('MarketPosition.items.4.title'), desc: t('MarketPosition.items.4.desc') },
 { icon: Cpu, title: t('MarketPosition.items.5.title'), desc: t('MarketPosition.items.5.desc') }
 ];

 return (
 <section className="py-32 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="mb-16 text-center max-w-3xl mx-auto"
 >
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6 ">{t('MarketPosition.title')}</h2>
 <p className="text-xl text-slate-600 font-light ">
 {t('MarketPosition.subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {features.map((feature, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: i * 0.05 }}
 viewport={{ once: true }}
 className="min-w-0 p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
 >
 <feature.icon className="w-8 h-8 text-[#8c30eb] mb-6" strokeWidth={1.5} />
 <h3 className="text-xl font-medium text-slate-800 mb-3 ">{feature.title}</h3>
 <p className="text-slate-600 font-light leading-relaxed ">{feature.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
