"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Target, Shield, Droplets, Cpu, Sparkles } from "lucide-react";
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
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
            <Sparkles className="w-4 h-4" />
            {t('MarketPosition.title')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Global Impact
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            {t('MarketPosition.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center mb-8">
                <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
