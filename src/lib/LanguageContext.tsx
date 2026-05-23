'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { content, Content } from '@/lib/content';
import { usePathname, useRouter } from 'next/navigation';

type Language = 'en' | 'tr';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    // Determine language based on pathname
    const isEn = pathname ? pathname.startsWith('/en') : false;
    const [language, setLanguage] = useState<Language>(isEn ? 'en' : 'tr');

    // Sync language state with URL pathname updates
    useEffect(() => {
        const currentIsEn = pathname ? pathname.startsWith('/en') : false;
        setLanguage(currentIsEn ? 'en' : 'tr');
    }, [pathname]);

    const toggleLanguage = () => {
        if (!pathname) return;
        if (language === 'en') {
            // Switch to TR: remove "/en" from start of path, e.g. "/en/practice/slug" -> "/practice/slug"
            let newPath = pathname.replace(/^\/en/, '');
            // Ensure empty path becomes root "/"
            if (newPath === '') {
                newPath = '/';
            }
            router.push(newPath);
        } else {
            // Switch to EN: prepend "/en", e.g. "/practice/slug" -> "/en/practice/slug"
            const newPath = pathname === '/' ? '/en' : `/en${pathname}`;
            router.push(newPath);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: content[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
