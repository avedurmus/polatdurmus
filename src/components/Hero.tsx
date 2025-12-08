'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Gradient/Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950 opacity-90 z-0" />

            {/* Abstract Elite Visual Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid.svg')] bg-center" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-secondary font-medium tracking-widest text-sm md:text-base mb-6 uppercase">
                    {t.hero.subtitle}
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                    POLAT & <span className="text-accent">{t.hero.title_suffix}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    {t.hero.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-white hover:text-primary transition-all duration-300 min-w-[160px]"
                    >
                        {t.hero.cta_consult}
                    </Link>
                    <Link
                        href="#practice-areas"
                        className="px-8 py-4 border border-gray-600 text-white font-medium rounded-sm hover:border-accent hover:text-accent transition-all duration-300 min-w-[160px]"
                    >
                        {t.hero.cta_expertise}
                    </Link>
                </div>
            </div>
        </section>
    );
}
