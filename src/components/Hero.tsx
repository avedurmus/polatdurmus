'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Gradient */}
            {/* Background Image & Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900/90 z-10" />
            </div>

            {/* Elegant Noise/Grain Overlay for Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('/noise.svg')]" />

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
                <div className="mb-8 inline-block">
                    <span className="py-1 px-3 border border-gray-600 text-gray-300 text-[10px] md:text-xs tracking-[0.2em] uppercase rounded-sm">
                        {t.hero.subtitle}
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white mb-8 leading-tight tracking-tight">
                    POLAT <span className="text-accent">&</span> {t.hero.title_suffix}
                </h1>

                <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                    {t.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-accent text-primary font-bold tracking-wide rounded-sm hover:bg-white transition-all duration-300 min-w-[180px] shadow-lg shadow-accent/20"
                    >
                        {t.hero.cta_consult}
                    </Link>
                    <Link
                        href="#practice-areas"
                        className="px-8 py-4 border border-gray-500 text-gray-300 font-medium tracking-wide rounded-sm hover:border-white hover:text-white transition-all duration-300 min-w-[180px]"
                    >
                        {t.hero.cta_expertise}
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
            </div>
        </section>
    );
}
