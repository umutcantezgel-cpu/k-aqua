import React from 'react';
import { PlayCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServiceInstallationProtocolsSection() {
 const t = useTranslations('Service.InstallationProtocols');
 
 const protocols = [
 {
 title: t('protocols.0.title'),
 subtitle: t('protocols.0.subtitle'),
 desc: t('protocols.0.desc'),
 url: "https://www.youtube.com/watch?v=d56p048YB2o&t=20s"
 },
 {
 title: t('protocols.1.title'),
 subtitle: t('protocols.1.subtitle'),
 desc: t('protocols.1.desc'),
 url: "https://www.youtube.com/watch?v=yD99teROIKc&t=59s"
 },
 {
 title: t('protocols.2.title'),
 subtitle: t('protocols.2.subtitle'),
 desc: t('protocols.2.desc'),
 url: "https://www.youtube.com/watch?v=ob2wMFZgm0k"
 },
 {
 title: t('protocols.3.title'),
 subtitle: t('protocols.3.subtitle'),
 desc: t('protocols.3.desc'),
 url: "https://www.youtube.com/watch?v=Ws7-whaL-q8&t=43s"
 }
 ];

 return (
 <section className="py-24 bg-white border-b border-slate-100">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="mb-16 max-w-3xl">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('title')}
 </h2>
 <p className="text-lg text-slate-600 leading-relaxed ">
 {t('description')}
 </p>
 </div>

 <div className="flex flex-col gap-12">
 {protocols.map((protocol, idx) => (
 <article 
 key={idx} 
 className="group flex flex-col lg:flex-row bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-primary min-w-0"
 >
 <div className="lg:w-1/2 relative bg-slate-200 min-h-[300px] lg:min-h-full flex items-center justify-center p-12 overflow-hidden">
 <a href={protocol.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20 focus:outline-none">
 <span className="sr-only">Watch {protocol.title}</span>
 </a>
 
 {/* Abstract placeholder mimicking video thumbnail */}
 <div className="absolute inset-0 bg-slate-800 opacity-5 group-hover:opacity-10 transition-opacity duration-700"></div>
 
 <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 text-slate-900">
 <PlayCircle className="w-8 h-8" />
 </div>
 </div>
 
 <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center min-w-0">
 <p className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">{t('modulePrefix')} 0{idx + 1} — {protocol.subtitle}</p>
 <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 tracking-tight ">{protocol.title}</h3>
 <p className="text-slate-600 leading-relaxed text-base ">
 {protocol.desc}
 </p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>
 );
}
