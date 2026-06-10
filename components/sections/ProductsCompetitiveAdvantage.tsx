"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductsCompetitiveAdvantage() {
 const t = useTranslations('Products');
 
 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 bg-slate-50 border-t border-slate-200">
 <div className="max-w-6xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6 }}
 className="mb-16"
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('CompetitiveAdvantage.title')}
 </h2>
 <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl ">
 {t('CompetitiveAdvantage.subtitle')}
 </p>
 </motion.div>

 <div className="overflow-x-auto pb-8">
 <table className="w-full text-left border-collapse min-w-[800px]">
 <thead>
 <tr>
 <th className="py-6 px-6 font-mono text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200 bg-white rounded-tl-xl ">{t('CompetitiveAdvantage.table.feature')}</th>
 <th className="py-6 px-6 font-mono text-xs uppercase tracking-widest text-[#6c5194] border-b border-slate-200 bg-[#6c5194]/5 font-bold ">K-Aqua PP-R/RCT</th>
 <th className="py-6 px-6 font-mono text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200 bg-white ">Copper</th>
 <th className="py-6 px-6 font-mono text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200 bg-white ">PEX</th>
 <th className="py-6 px-6 font-mono text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200 bg-white rounded-tr-xl ">Steel / Galvanized</th>
 </tr>
 </thead>
 <tbody className="bg-white">
 {[
 { feature: t('CompetitiveAdvantage.table.rows.joining'), k: "Polyfusion (Homogeneous)", c: "Soldering/Press (Mechanical)", p: "Crimp/Expansion (Mechanical)", s: "Threaded/Welded" },
 { feature: t('CompetitiveAdvantage.table.rows.corrosion'), k: "Absolute", c: "Prone to pitting", p: "High", s: "Highly prone to rusting" },
 { feature: t('CompetitiveAdvantage.table.rows.scale'), k: "None (Smooth bore)", c: "Moderate", p: "None", s: "Severe over time" },
 { feature: t('CompetitiveAdvantage.table.rows.thermal'), k: "Excellent (Low heat loss)", c: "Poor (Requires heavy insulation)", p: "Good", s: "Poor" },
 { feature: t('CompetitiveAdvantage.table.rows.acoustic'), k: "High (Absorbs water hammer)", c: "Low (Transmits noise)", p: "Medium", s: "Low" },
 { feature: t('CompetitiveAdvantage.table.rows.lifespan'), k: "50+ Years", c: "20-50 Years", p: "30-50 Years", s: "15-30 Years" }
 ].map((row, i) => (
 <tr key={i} className="group border-b border-slate-100 last:border-none hover:bg-slate-50/50 transition-colors">
 <td className="py-5 px-6 font-medium text-slate-900 border-r border-slate-100 ">{row.feature}</td>
 <td className="py-5 px-6 font-medium text-[#6c5194] bg-[#6c5194]/5 border-r border-slate-100 ">{row.k}</td>
 <td className="py-5 px-6 text-slate-600 font-light border-r border-slate-100 ">{row.c}</td>
 <td className="py-5 px-6 text-slate-600 font-light border-r border-slate-100 ">{row.p}</td>
 <td className="py-5 px-6 text-slate-600 font-light ">{row.s}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>
 );
}
