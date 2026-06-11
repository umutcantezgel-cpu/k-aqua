"use client";

import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerManifestoSection() {
  const t = useTranslations('Career');

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-8">
            <Sparkles className="w-4 h-4" />
            {t('Manifesto.title')}
          </div>
          
          <Quote className="w-12 h-12 text-white/20 mb-6" />
          
          <p className="text-4xl md:text-6xl font-semibold text-white leading-[1.1] tracking-tight mb-8">
            {t('Manifesto.quote')}
          </p>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl">
            {t('Manifesto.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
