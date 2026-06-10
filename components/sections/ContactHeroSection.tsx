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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center pt-32 pb-24 bg-[#fafafa]">
      {/* Exquisite Ambient Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] bg-gradient-to-bl from-blue-200/40 via-sky-100/30 to-transparent rounded-full blur-[120px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] sm:w-[40vw] sm:h-[40vw] bg-gradient-to-tr from-slate-200/40 via-blue-50/40 to-transparent rounded-full blur-[100px]" 
        />
        {/* Subtle noise overlay for premium texture */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
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
              <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] bg-white/60 backdrop-blur-xl">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse"></span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-800">Contact Us</span>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-8">
                <h1 
                  className="text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-balance text-slate-900"
                  dangerouslySetInnerHTML={{ __html: t.raw('title') }} 
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden">
                <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-slate-600 leading-relaxed max-w-2xl text-balance font-light tracking-wide">
                  {t('subtitle')}
                </p>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 xl:col-span-4 w-full min-w-0 max-w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="w-full relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-100/50 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative p-8 sm:p-12 rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_24px_80px_rgba(0,0,0,0.04)] flex flex-col items-center sm:items-start text-center sm:text-left transition-all duration-700 hover:shadow-[0_32px_100px_rgba(0,0,0,0.08)] hover:bg-white/90">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center mb-10 shadow-lg shadow-blue-600/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 ease-easeOut">
                  <ArrowDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4 text-balance tracking-tight">Ready to talk?</h3>
                <p className="text-slate-500 mb-10 text-balance font-light leading-relaxed text-lg">Scroll down to explore our specialized contact options and reach out to the right team.</p>
                <MagneticButton 
                  onClick={() => document.getElementById('contact-ops')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-5 text-base sm:text-lg bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.25)] flex items-center justify-center group/btn font-medium"
                >
                  {t('button')} 
                  <motion.span 
                    className="ml-3 inline-flex"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  >
                    <ArrowDown className="w-5 h-5 opacity-70 group-hover/btn:opacity-100 transition-opacity" />
                  </motion.span>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
