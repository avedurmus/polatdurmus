'use client';

import { Scale, Globe, Building2, Key, Shield, Briefcase } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';

const items = [Globe, Briefcase, Building2, Shield, Scale, Key];

export default function PracticeAreas({ sanityData = [] }: { sanityData?: any[] }) {
    const { t, language } = useLanguage();

    // Mapping for filtered sanity items to display format
    const sanityItems = sanityData?.map(item => ({
        title: language === 'tr' ? item.title_tr : item.title_en,
        description: language === 'tr' ? item.description_tr : item.description_en,
        slug: item.slug,
        image: item.image
    })).filter(item => item.title); // Filter out items without title in current language

    // Use Sanity items if available, otherwise fallback to static content
    const displayItems = sanityItems && sanityItems.length > 0 ? sanityItems : t.practice_areas.items;

    return (
        <section id="practice-areas" className="py-32 bg-slate-50 dark:bg-slate-950/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-accent text-sm tracking-widest uppercase font-medium">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary dark:text-white mt-4 mb-6">
                        {t.practice_areas.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        {t.practice_areas.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayItems.map((area, index) => {
                        const Icon = items[index % items.length]; // Cycle through icons
                        const slug = (area as any).slug;
                        return (
                            <Link href={`/practice/${slug}`} key={index} className="block group">
                                <div
                                    className="h-full p-10 bg-white dark:bg-slate-900 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 dark:border-slate-800"
                                >
                                    <div className="w-14 h-14 bg-gray-50 dark:bg-slate-800 mb-8 flex items-center justify-center rounded-sm text-primary dark:text-white group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                                        <Icon strokeWidth={1.5} size={28} />
                                    </div>
                                    <h3 className="text-2xl font-serif text-primary dark:text-white mb-4 group-hover:text-accent transition-colors">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                                        {area.description}
                                    </p>
                                    <div className="mt-6 flex items-center text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-widest">
                                        {language === 'en' ? 'Read More' : 'Detaylı İncele'}
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
