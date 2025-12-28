'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { useEffect, useState } from 'react';

export default function BookingPage() {
    const { language } = useLanguage();
    // Using a state to ensure client-side rendering for the widget
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="pt-32 pb-12 min-h-screen bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary dark:text-white mb-6">
                        {language === 'tr' ? 'Randevu Alın' : 'Book a Consultation'}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {language === 'tr'
                            ? 'Müsaitlik durumuna göre size en uygun zamanı seçerek doğrudan online görüşme planlayın.'
                            : 'Schedule a direct online consultation by selecting a time that works best for you.'}
                    </p>
                </div>

                <div className="w-full h-[700px] border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
                    <iframe
                        src="https://calendly.com/av-edurmus/30min?hide_gdpr_banner=1"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        title="Calendly Scheduling Page"
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
