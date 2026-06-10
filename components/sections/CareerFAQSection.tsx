"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerFAQSection() {
 const t = useTranslations('Career');
 const [openIdx, setOpenIdx] = useState<number | null>(0);

 const faqs = [
 { q: t('FAQ.items.0.q'), a: t('FAQ.items.0.a') },
 { q: t('FAQ.items.1.q'), a: t('FAQ.items.1.a') },
 { q: t('FAQ.items.2.q'), a: t('FAQ.items.2.a') },
 { q: t('FAQ.items.3.q'), a: t('FAQ.items.3.a') }
 ];

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="max-w-4xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="mb-12 text-center"
 >
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 ">{t('FAQ.title')}</h2>
 </motion.div>

 <div className="space-y-4">
 {faqs.map((faq, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: i * 0.1 }}
 viewport={{ once: true }}
 className="bg-white border border-slate-200 rounded-xl overflow-hidden"
 >
 <button
 onClick={() => setOpenIdx(openIdx === i ? null : i)}
 className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
 >
 <span className="font-medium text-slate-900 ">{faq.q}</span>
 <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
 </button>
 {openIdx === i && (
 <div className="px-6 pb-6 text-slate-600 font-light leading-relaxed ">
 {faq.a}
 </div>
 )}
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
