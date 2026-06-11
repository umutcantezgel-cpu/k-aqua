"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerLocationsSection() {
  const t = useTranslations('Career');

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
              <Sparkles className="w-4 h-4" />
              {t('Locations.title')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Where we work
            </h2>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-10">
              {t('Locations.subtitle')}
            </p>
            
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{t('Locations.hq_title')}</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Technologiepark<br />
                  61440 Oberursel<br />
                  Germany
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/50 shadow-sm flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 to-slate-50"></div>
            <div className="text-slate-400 font-bold text-sm uppercase tracking-widest relative z-10">{t('Locations.map_placeholder')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
