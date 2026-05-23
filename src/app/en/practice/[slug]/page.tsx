import React from 'react';
import Page, { getMetadataForPracticeArea, generateStaticParams } from '../../../practice/[slug]/page';
import { Metadata } from 'next';

export { generateStaticParams };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    return getMetadataForPracticeArea(slug, 'en');
}

export default Page;
