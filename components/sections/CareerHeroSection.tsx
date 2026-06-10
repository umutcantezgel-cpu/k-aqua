"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  },
};

export function CareerHeroSection() {
  const t = useTranslations('Career');

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center items-start bg-slate-50 pt-24 pb-16 overflow-hidden">
      {/* Premium ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50 blur-[100px]" />
        <div className="absolute -top-[10%] right-[10%] w-[50%] h-[50%] bg-gradient-to-bl from-sky-300/10 to-transparent blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-blue-400/5 to-transparent blur-[120px] rounded-full mix-blend-multiply" />
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl w-full min-w-0 max-w-full flex flex-col"
        >
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-8">
            <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-balance text-slate-900 w-full min-w-0 max-w-full overflow-hidden">
              {t('Hero.title_1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500">{t('Hero.title_2')}</span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-12">
            <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-slate-600 font-light leading-relaxed max-w-2xl text-balance w-full min-w-0 max-w-full overflow-hidden">
              {t('Hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden">
            <a 
              href="#open-roles" 
              className="inline-flex items-center justify-center bg-white/60 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-slate-900 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all px-8 py-4 rounded-full text-base sm:text-lg font-medium ring-1 ring-black/[0.02]"
            >
              {t('Hero.cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
