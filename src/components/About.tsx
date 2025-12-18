'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 dark:bg-slate-800 skew-x-12 opacity-50 z-0" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                            {t.about.title}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6 leading-tight">
                            {t.about.subtitle}
                        </h2>
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                            <p>
                                {t.about.description_1}
                            </p>
                            <p>
                                {t.about.description_2}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
                            {t.about.stats.map((stat, index) => (
                                <div key={index} className="text-center lg:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2 font-serif">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image/Visual */}
                    <div className="lg:w-1/2 w-full relative">
                        <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto rounded-sm overflow-hidden shadow-2xl">
                            {/* Placeholder for a high-quality office or team image. 
                                Using a gradient/abstract block for now to maintain aesthetic until real image provided. */}
                            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-white/10">
                                <span className="text-9xl font-serif font-black opacity-20">P&D</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <div className="text-xl font-serif italic opacity-90">
                                    "Justice is the constant and perpetual wish to render to every man his due."
                                </div>
                                <div className="mt-4 text-sm font-medium text-accent">
                                    — Justinian I
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 border-[20px] border-accent/10 rounded-full -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
