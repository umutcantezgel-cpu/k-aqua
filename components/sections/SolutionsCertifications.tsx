"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { Award, FileCheck, Globe2, BadgeCheck } from 'lucide-react';

export default function SolutionsCertifications() {
 const t = useTranslations('Solutions');

 const certifications = [
 {
 title: t("Certifications.dinTitle"),
 description: t("Certifications.dinDesc"),
 icon: Award
 },
 {
 title: t("Certifications.isoTitle"),
 description: t("Certifications.isoDesc"),
 icon: Globe2
 },
 {
 title: t("Certifications.dvgwTitle"),
 description: t("Certifications.dvgwDesc"),
 icon: FileCheck
 },
 {
 title: t("Certifications.skzTitle"),
 description: t("Certifications.skzDesc"),
 icon: BadgeCheck
 }
 ];

 return (
 <section className="relative py-32 lg:py-48 bg-white border-t border-slate-200/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="text-center mb-16 md:mb-24"
 >
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 ">
 {t("Certifications.title")}
 </h2>
 <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light ">
 {t("Certifications.subtitle")}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
 {certifications.map((cert, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all text-center flex flex-col items-center justify-center aspect-square min-w-0"
 >
 <div className="p-4 bg-white rounded-full mb-6 border border-slate-200 shadow-sm">
 <cert.icon className="w-10 h-10 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 tracking-tight ">
 {cert.title}
 </h3>
 <p className="text-sm text-slate-600 leading-relaxed ">
 {cert.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
