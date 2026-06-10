"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ContactHeroSection() {
  const t = useTranslations('Contact.Hero');

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center pt-32 pb-24 bg-slate-50">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-gradient-to-bl from-purple-100/40 via-blue-100/20 to-transparent rounded-full blur-[100px] transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-tr from-slate-200/40 via-purple-50/20 to-transparent rounded-full blur-[100px] transform -translate-x-1/4 translate-y-1/4" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full min-w-0 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 xl:col-span-8 w-full min-w-0 max-w-full">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-start w-full min-w-0 max-w-full"
            >
              <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
                <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-white/50 backdrop-blur-md mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-700">Contact Us</span>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
                <h1 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 tracking-tight leading-[1.05] mb-8 text-balance"
                  dangerouslySetInnerHTML={{ __html: t.raw('title') }} 
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl text-balance font-medium">
                  {t('subtitle')}
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 xl:col-span-4 w-full min-w-0 max-w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="w-full relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative p-8 sm:p-10 rounded-[2rem] bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-500 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:bg-white/60">
                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-white/80 shadow-sm">
                  <ArrowDown className="w-6 h-6 text-[#5b2d8c]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-balance tracking-tight">Ready to talk?</h3>
                <p className="text-slate-600 mb-8 text-balance font-medium leading-relaxed">Scroll down to see our contact options and reach out to the right team.</p>
                <MagneticButton 
                  onClick={() => document.getElementById('contact-ops')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-5 text-base sm:text-lg bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center"
                >
                  {t('button')} <ArrowDown className="ml-2 w-5 h-5" />
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
