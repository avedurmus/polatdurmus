'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { content } from '@/lib/content';
import { useLanguage } from '@/lib/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
    const { language } = useLanguage();
    // Unwrap params using React.use() or async/await in a Server Component, 
    // but since this is a Client Component (due to useLanguage), we rely on the prop.
    // However, Next.js 15+ allows async params in client components.
    // For safety in this hybrid setup, we'll assume we grab the slug.

    // Changing to a simpler approach: Client component can't easily read async params without `use`.
    // Let's rely on finding the item.

    // Hack: getting slug from window or context is hard in purely client comp without hydration issues.
    // Better: This should be a Server Component that passes data to a Client Component.
    // But our language context is client-side.
    // Strategy: We will render the content based on the slug.

    const [slug, setSlug] = React.useState<string | null>(null);

    React.useEffect(() => {
        // Simple client-side slug manual extraction for now or use `useParams`
        // But `useParams` is cleaner
        const path = window.location.pathname;
        const parts = path.split('/');
        const lastPart = parts[parts.length - 1];
        setSlug(lastPart);
    }, []);

    if (!slug) return <div className="min-h-screen bg-primary" />; // Loading state

    const t = content[language];
    const area = t.practice_areas.items.find(item => item.slug === slug);

    if (!area) {
        // Ideally trigger notFound() but we are on client
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
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />
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
                        {/* We render simple text for now, could be markdown */}
                        <p>{(area as any).content}</p>
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
