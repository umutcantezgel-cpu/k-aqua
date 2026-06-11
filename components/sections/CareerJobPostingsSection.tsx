"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
    <section id="open-roles" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
              <Sparkles className="w-4 h-4" />
              {t('JobPostings.title')}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Open Roles
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-2xl">
              {t('JobPostings.subtitle')}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col md:flex-row md:items-center justify-between bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-3 text-sm text-slate-600 font-medium tracking-wide">
                  <span className="bg-slate-100 px-4 py-1.5 rounded-full">{job.dept}</span>
                  <span className="bg-slate-100 px-4 py-1.5 rounded-full">{job.type}</span>
                  <span className="bg-slate-100 px-4 py-1.5 rounded-full">{job.location}</span>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex-shrink-0">
                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
