"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, TrendingUp, Sparkles } from "lucide-react";
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
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
            <Sparkles className="w-4 h-4" />
            {t('Culture.title')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Our DNA
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            {t('Culture.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center mb-8">
                <item.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
