
import React from 'react';
import PracticeAreaClient from '@/components/PracticeAreaClient';
import { getPracticeAreaBySlugRaw } from '@/sanity/queries';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const sanityData = await getPracticeAreaBySlugRaw(slug).catch(() => null);

    return <PracticeAreaClient slug={slug} sanityData={sanityData} />;
}
