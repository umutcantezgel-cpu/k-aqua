"use client";

import { motion } from "framer-motion";
import { Heart, Coffee, BookOpen, Clock, MapPin, Award, Sparkles } from "lucide-react";
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
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
      
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
            {t('Benefits.title')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Why join us?
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            {t('Benefits.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
