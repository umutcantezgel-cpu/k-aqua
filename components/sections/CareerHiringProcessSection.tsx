"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerHiringProcessSection() {
  const t = useTranslations('Career');

  const steps = [
    { num: "01", title: t('HiringProcess.items.0.title'), desc: t('HiringProcess.items.0.desc') },
    { num: "02", title: t('HiringProcess.items.1.title'), desc: t('HiringProcess.items.1.desc') },
    { num: "03", title: t('HiringProcess.items.2.title'), desc: t('HiringProcess.items.2.desc') },
    { num: "04", title: t('HiringProcess.items.3.title'), desc: t('HiringProcess.items.3.desc') }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
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
            {t('HiringProcess.title')}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            How we hire
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            {t('HiringProcess.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-slate-200/50" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all relative z-10"
            >
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg font-bold mb-8">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
