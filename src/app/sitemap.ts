import { MetadataRoute } from 'next';
import { getAllPracticeAreas } from '@/sanity/queries';
import { content } from '@/lib/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://polatdurmus.com';
    
    // Fetch all practice areas from Sanity to list them dynamically
    const sanityAreas = await getAllPracticeAreas().catch(() => []);
    
    // Combine static and sanity slugs to ensure all are in sitemap
    const staticSlugs = content.tr.practice_areas.items.map(item => item.slug);
    const sanitySlugs = sanityAreas.map((item: any) => item.slug);
    const allSlugs = Array.from(new Set([...staticSlugs, ...sanitySlugs]));
    
    const staticPages = [
        // Turkish Pages
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/randevu`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        // English Pages
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/en/randevu`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    const trPracticePages = allSlugs.map(slug => ({
        url: `${baseUrl}/practice/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const enPracticePages = allSlugs.map(slug => ({
        url: `${baseUrl}/en/practice/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...trPracticePages, ...enPracticePages];
}
