"use client";

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Snowflake, Flame, Factory, Sprout } from 'lucide-react';

export default function SolutionsApplications() {
 const t = useTranslations('Solutions');

 const applications = [
 {
 id: "commercial",
 title: t("Applications.commercialTitle"),
 icon: Building2,
 description: t("Applications.commercialDesc"),
 },
 {
 id: "hvac",
 title: t("Applications.hvacTitle"),
 icon: Snowflake,
 description: t("Applications.hvacDesc"),
 },
 {
 id: "heating",
 title: t("Applications.heatingTitle"),
 icon: Flame,
 description: t("Applications.heatingDesc"),
 },
 {
 id: "industrial",
 title: t("Applications.industrialTitle"),
 icon: Factory,
 description: t("Applications.industrialDesc"),
 },
 {
 id: "agriculture",
 title: t("Applications.agricultureTitle"),
 icon: Sprout,
 description: t("Applications.agricultureDesc"),
 }
 ];

 const [activeTab, setActiveTab] = useState(applications[0].id);

 const currentApp = applications.find(app => app.id === activeTab)!;

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
 {t("Applications.title")}
 </h2>
 <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light ">
 {t("Applications.subtitle")}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
 <div className="lg:col-span-5 flex flex-col gap-4">
 {applications.map((app) => (
 <button
 key={app.id}
 onClick={() => setActiveTab(app.id)}
 className={`text-left px-8 py-6 rounded-2xl border transition-all duration-300 flex items-center gap-6 min-w-0 ${
 activeTab === app.id
 ? "bg-[#5b2d8c] border-[#5b2d8c] text-white shadow-md"
 : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
 }`}
 >
 <app.icon className={`w-6 h-6 flex-shrink-0 ${activeTab === app.id ? "text-white" : "text-[#5b2d8c]"}`} strokeWidth={2} />
 <span className={`text-lg sm:text-xl font-semibold tracking-tight ${activeTab === app.id ? "text-white" : "text-slate-900"}`}>
 {app.title}
 </span>
 </button>
 ))}
 </div>

 <div className="lg:col-span-7">
 <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-10 lg:p-16 h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden">
 <AnimatePresence mode="wait">
 <motion.div
 key={currentApp.id}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -20 }}
 transition={{ duration: 0.4, ease: "easeOut" }}
 className="relative z-10"
 >
 <div className="inline-flex items-center justify-center p-5 bg-white rounded-2xl mb-8 border border-slate-200 shadow-sm">
 <currentApp.icon className="w-10 h-10 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6 ">
 {currentApp.title}
 </h3>
 <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl ">
 {currentApp.description}
 </p>
 </motion.div>
 </AnimatePresence>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
