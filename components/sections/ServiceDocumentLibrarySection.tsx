import React from 'react';
import { Download, FileText, Wrench, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServiceDocumentLibrarySection() {
 const t = useTranslations('Service.DocumentLibrary');
 
 const documents = [
 {
 title: t('docs.0.title'),
 category: t('docs.0.category'),
 icon: <FileText className="w-5 h-5 text-slate-700" />,
 description: t('docs.0.description'),
 url: "https://www.k-aqua.de/PDF/K-Aqua_Product_Range_en.pdf",
 },
 {
 title: t('docs.1.title'),
 category: t('docs.1.category'),
 icon: <Wrench className="w-5 h-5 text-slate-700" />,
 description: t('docs.1.description'),
 url: "https://www.k-aqua.de/PDF/K-Aqua_Product_Features_en.pdf",
 },
 {
 title: t('docs.2.title'),
 category: t('docs.2.category'),
 icon: <ShieldCheck className="w-5 h-5 text-slate-700" />,
 description: t('docs.2.description'),
 url: "https://www.k-aqua.de/PDF/K-Aqua_Quality_Assurance_en.pdf",
 }
 ];

 return (
 <section id="downloads" className="py-24 bg-white border-b border-slate-100">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="mb-16 max-w-3xl">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('title')}
 </h2>
 <p className="text-lg text-slate-600 leading-relaxed ">
 {t('description')}
 </p>
 </div>

 <div className="grid grid-cols-1 gap-6">
 {documents.map((doc, idx) => (
 <div key={idx} className="group relative flex flex-col md:flex-row items-start md:items-center justify-between bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 md:mb-0">
 <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm shrink-0">
 {doc.icon}
 </div>
 <div className="min-w-0">
 <div className="flex items-center gap-3 mb-2">
 <h3 className="text-xl font-bold text-slate-900 tracking-tight ">{doc.title}</h3>
 <span className="px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full uppercase tracking-wide ">
 {doc.category}
 </span>
 </div>
 <p className="text-slate-600 leading-relaxed max-w-3xl text-sm md:text-base ">
 {doc.description}
 </p>
 </div>
 </div>
 <a 
 href={doc.url}
 target="_blank"
 rel="noopener noreferrer"
 className="shrink-0 flex items-center gap-2 bg-white border border-slate-300 hover:border-slate-400 text-slate-900 px-6 py-3 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
 >
 <Download className="w-4 h-4" />
 <span>{t('download')}</span>
 </a>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
