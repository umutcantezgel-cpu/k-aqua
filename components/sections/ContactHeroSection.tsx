"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ContactHeroSection() {
  const t = useTranslations('Contact.Hero');
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] h-auto w-full overflow-hidden flex items-center justify-center bg-[#fafafa]">
      {/* Abstract Map/Grid Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-[0.15]">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#fafafa_70%)] z-10"
        />
        <div className="w-[200%] h-[200%] absolute inset-0 bg-[linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_rotateZ(-45deg)_translateY(-20%)] origin-center" />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-48 h-48 bg-slate-300 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-slate-200 rounded-full blur-[100px]"
        />
      </div>

      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full min-w-0 flex flex-col items-center text-center mt-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-6xl overflow-hidden mb-8 flex justify-center"
        >
          <h1 
            className="text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-tight text-slate-900 break-words hyphens-auto font-medium"
            dangerouslySetInnerHTML={{ __html: t.raw('title') }} 
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mb-16"
        >
          <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-slate-600 leading-relaxed max-w-2xl font-light tracking-wide">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full overflow-hidden flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-slate-200 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
            <MagneticButton 
              onClick={() => document.getElementById('contact-ops')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative px-10 py-6 text-xl bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors duration-500 flex items-center justify-center gap-4 overflow-hidden"
            >
              <span className="relative z-10 font-medium">{t('button')}</span>
              <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Floating Map Pin Micro-interaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-10 hidden lg:flex items-center gap-3 px-5 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-white shadow-xl shadow-slate-200/50"
        >
          <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium text-slate-900 uppercase tracking-widest">Global</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
