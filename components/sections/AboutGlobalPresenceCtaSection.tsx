import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function AboutGlobalPresenceCtaSection() {
  const t = useTranslations('About');

  return (
    <section className="relative py-32 lg:py-40 bg-slate-900 border-y border-slate-800 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center w-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[3rem] p-10 lg:p-16 hover:-translate-y-1 transition-all duration-500"
        >
          <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mb-8 border border-blue-400/30 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
            <Globe className="w-12 h-12 text-blue-400" />
          </div>
          
          <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-blue-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            GLOBAL PRESENCE
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
            {t('global_cta.title_line1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
              {t('global_cta.title_line2')}
            </span>
          </h2>
          
          <article className="prose prose-lg max-w-2xl text-slate-300 font-light mb-12 leading-relaxed text-center">
            <p className="text-xl mb-4">
              {t('global_cta.p1')}
            </p>
            <p className="text-lg opacity-80">
              {t('global_cta.p2')}
            </p>
          </article>
          
          <Link href="/news" className="inline-block">
            <Button variant="primary" className="px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-blue-500/25 transition-all gap-3 bg-blue-600 hover:bg-blue-500 text-white font-medium border-0">
              {t('global_cta.button')}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
