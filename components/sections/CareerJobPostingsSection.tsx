"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerJobPostingsSection() {
 const t = useTranslations('Career');

 const jobs = [
 { title: t('JobPostings.items.0.title'), dept: t('JobPostings.items.0.dept'), type: t('JobPostings.items.0.type'), location: t('JobPostings.items.0.location') },
 { title: t('JobPostings.items.1.title'), dept: t('JobPostings.items.1.dept'), type: t('JobPostings.items.1.type'), location: t('JobPostings.items.1.location') },
 { title: t('JobPostings.items.2.title'), dept: t('JobPostings.items.2.dept'), type: t('JobPostings.items.2.type'), location: t('JobPostings.items.2.location') },
 { title: t('JobPostings.items.3.title'), dept: t('JobPostings.items.3.dept'), type: t('JobPostings.items.3.type'), location: t('JobPostings.items.3.location') }
 ];

 return (
 <section id="open-roles" className="py-32 bg-slate-50 border-t border-slate-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
 >
 <div>
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 ">{t('JobPostings.title')}</h2>
 <p className="text-xl text-slate-600 font-light max-w-2xl ">
 {t('JobPostings.subtitle')}
 </p>
 </div>
 </motion.div>

 <div className="flex flex-col gap-4">
 {jobs.map((job, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: i * 0.1 }}
 viewport={{ once: true }}
 className="group flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border border-slate-200 rounded-xl hover:border-[#8c30eb]/30 transition-colors cursor-pointer"
 >
 <div className="min-w-0">
 <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-[#8c30eb] transition-colors ">{job.title}</h3>
 <div className="flex flex-wrap gap-3 text-sm text-slate-500 font-light">
 <span className="bg-slate-100 px-3 py-1 rounded-full ">{job.dept}</span>
 <span className="bg-slate-100 px-3 py-1 rounded-full ">{job.type}</span>
 <span className="bg-slate-100 px-3 py-1 rounded-full ">{job.location}</span>
 </div>
 </div>
 <div className="mt-6 md:mt-0">
 <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#8c30eb] group-hover:border-[#8c30eb] transition-colors">
 <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
 </div>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
