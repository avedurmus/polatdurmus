'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { content, Content } from '@/lib/content';

type Language = 'en' | 'tr';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('tr'); // Default to TR as requested implicitly by "Turkish page missing"

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'tr' : 'en');
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
