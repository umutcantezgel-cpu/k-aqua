'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Icon } from '@/components/ui/Icon';
import { motion } from 'framer-motion';

export default function LocalizedNotFound() {
  const t = useTranslations('Global.NotFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-surface-base text-on-surface">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8"
      >
        <Icon name="search_off" className="text-[48px]" />
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-tighter"
      >
        {t('title')}
      </motion.h1>
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold text-foreground mb-6"
      >
        {t('subtitle')}
      </motion.h2>
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-text-secondary text-lg max-w-md mb-10 text-balance"
      >
        {t('desc')}
      </motion.p>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link href="/" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 px-8 rounded-full hover:bg-primary-hover transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300">
          <Icon name="home" className="text-[20px]" /> {t('home')}
        </Link>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-900 font-bold py-4 px-8 rounded-full hover:bg-slate-50 transition-colors shadow-sm hover:shadow-md hover:-translate-y-1 transform duration-300">
          <Icon name="mail" className="text-[20px]" /> {t('contact')}
        </Link>
      </motion.div>
    </div>
  );
}
