'use client';

import React from 'react';
import { content } from '@/lib/content';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { PortableText } from '@portabletext/react';

export default function PracticeAreaClient({ slug, sanityData }: { slug: string, sanityData?: any }) {
    const { language } = useLanguage();

    const t = content[language];
    // Try to find in Sanity data first, then fallback to static content
    const sanityArea = sanityData ? {
        title: language === 'tr' ? sanityData.title_tr : sanityData.title_en,
        description: language === 'tr' ? sanityData.description_tr : sanityData.description_en,
        content: language === 'tr' ? sanityData.content_tr : sanityData.content_en,
        image: sanityData.image,
        slug: sanityData.slug
    } : null;

    const staticArea = t.practice_areas.items.find(item => item.slug === slug);

    // Prioritize sanityData if it exists and has content
    const area = (sanityArea && sanityArea.title) ? sanityArea : staticArea;

    if (!area) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-primary dark:text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">404</h1>
                    <p className="mb-8">Practice Area Not Found</p>
                    <Link href="/" className="text-accent hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20">
            {/* Header */}
            <header className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Fallback color if image fails or while loading */}
                    <div className="absolute inset-0 bg-slate-900" />
                    {(area as any).image && (
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transform scale-105"
                            style={{ backgroundImage: `url('${(area as any).image}')` }}
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
                </div>
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none z-10" />
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/#practice-areas" className="inline-flex items-center text-accent hover:text-white transition-colors mb-6 text-sm uppercase tracking-wider font-medium">
                        <ArrowLeft size={16} className="mr-2" />
                        {language === 'en' ? 'Back to Practice Areas' : 'Uzmanlık Alanlarına Dön'}
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight max-w-4xl">
                        {area.title}
                    </h1>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="bg-white dark:bg-slate-900 shadow-xl rounded-sm p-8 md:p-12 border-t-4 border-accent max-w-4xl">
                    <p className="text-xl md:text-2xl text-primary dark:text-white font-serif mb-8 leading-relaxed opacity-90">
                        {area.description}
                    </p>

                    <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-light leading-loose">
                        {/* Check if content is Portable Text (array) or string */}
                        {Array.isArray((area as any).content) ? (
                            <PortableText value={(area as any).content} />
                        ) : (
                            <p>{(area as any).content}</p>
                        )}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <h3 className="text-lg font-serif text-primary dark:text-white mb-6">
                            {language === 'en' ? 'Key Services' : 'Temel Hizmetler'}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle size={20} className="text-accent mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {language === 'en' ? 'Comprehensive legal oversight & strategic planning' : 'Kapsamlı hukuki denetim ve stratejik planlama'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 flex justify-end">
                        <Link
                            href="/#contact"
                            className="px-8 py-4 bg-primary text-white font-bold rounded-sm hover:bg-accent transition-colors shadow-lg"
                        >
                            {language === 'en' ? 'Consult Our Team' : 'Ekibimize Danışın'}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
