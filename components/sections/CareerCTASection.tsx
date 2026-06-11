"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from '@/components/ui/Button';

export function CareerCTASection() {
  const t = useTranslations('Career');

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            Get in touch
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            {t('CTA.title')}
          </h2>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-12">
            {t('CTA.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="mailto:andrea.nickel@k-aqua.de" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20">
                <Mail className="w-5 h-5 mr-2" />
                {t('CTA.btn_email')}
              </Button>
            </a>
            <a href="tel:+4960859868410" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full rounded-full h-14 px-8 text-base border-slate-200 hover:bg-slate-50">
                <Phone className="w-5 h-5 mr-2" />
                {t('CTA.btn_call')}
              </Button>
            </a>
          </div>

          <div className="mt-16 inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-slate-400 bg-slate-50 px-6 py-3 rounded-full border border-slate-100">
            {t('CTA.contact_prefix')}: andrea.nickel@k-aqua.de <span className="mx-2">•</span> +49 (0)60 85 / 9868-410
          </div>
        </motion.div>
      </div>
    </section>
  );
}
