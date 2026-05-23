
import React from 'react';
import PracticeAreaClient from '@/components/PracticeAreaClient';
import { getPracticeAreaBySlugRaw, getAllPracticeAreas } from '@/sanity/queries';
import { content } from '@/lib/content';
import { Metadata } from 'next';

export async function getMetadataForPracticeArea(slug: string, language: 'en' | 'tr'): Promise<Metadata> {
    const sanityData = await getPracticeAreaBySlugRaw(slug).catch(() => null);

    const t = content[language];
    
    // Try to find in Sanity first, then fallback to static content
    const sanityArea = sanityData ? {
        title: language === 'tr' ? sanityData.title_tr : sanityData.title_en,
        description: language === 'tr' ? sanityData.description_tr : sanityData.description_en,
    } : null;

    const staticArea = t.practice_areas.items.find(item => item.slug === slug);

    const area = (sanityArea && sanityArea.title) ? sanityArea : staticArea;

    if (!area) {
        return {
            title: language === 'en' ? "Practice Area | Polat & Durmuş Law Firm" : "Uzmanlık Alanı | Polat & Durmuş Hukuk Bürosu",
            description: language === 'en' ? "Explore our comprehensive legal solutions." : "Hukuki danışmanlık ve uzmanlık alanlarımızı inceleyin.",
        };
    }

    return {
        title: `${area.title} | Polat & Durmuş Law Firm`,
        description: area.description,
        alternates: {
            canonical: language === 'en' 
                ? `https://polatdurmus.com/en/practice/${slug}` 
                : `https://polatdurmus.com/practice/${slug}`,
        }
    };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    return getMetadataForPracticeArea(slug, 'tr');
}

export async function generateStaticParams() {
    const sanityAreas = await getAllPracticeAreas().catch(() => []);
    
    // Combine static and sanity slugs to ensure all are pre-rendered
    const staticSlugs = content.tr.practice_areas.items.map(item => item.slug);
    const sanitySlugs = sanityAreas.map((item: any) => item.slug);
    
    const allSlugs = Array.from(new Set([...staticSlugs, ...sanitySlugs]));
    
    return allSlugs.map(slug => ({
        slug: slug,
    }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const sanityData = await getPracticeAreaBySlugRaw(slug).catch(() => null);

    return <PracticeAreaClient slug={slug} sanityData={sanityData} />;
}
