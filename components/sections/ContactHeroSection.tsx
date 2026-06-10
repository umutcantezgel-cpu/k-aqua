import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ContactHeroSection() {
 const t = useTranslations('Contact.Hero');

 return (
 <section className="relative min-h-[90vh] w-full overflow-hidden bg-white flex items-center pt-24 pb-20">
 <div className="absolute inset-0 z-0 bg-slate-50 opacity-50"></div>
 
 <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 w-full">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
 <div className="lg:col-span-8">
 <motion.div 
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
 >
 <h1 
 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-slate-900 tracking-tighter leading-[1.05] mb-8 "
 dangerouslySetInnerHTML={{ __html: t.raw('title') }} 
 />
 </motion.div>
 
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-[45ch] font-medium "
 >
 {t('subtitle')}
 </motion.p>
 </div>
 
 <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
 >
 <MagneticButton 
 onClick={() => document.getElementById('contact-ops')?.scrollIntoView({ behavior: 'smooth' })}
 className="px-10 py-6 text-lg bg-slate-900 text-white hover:bg-blue-600 hover:text-white transition-colors"
 >
 {t('button')} <ArrowDown className="ml-3 w-5 h-5" />
 </MagneticButton>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 );
}
