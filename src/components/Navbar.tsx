'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="group flex flex-col">
                    <span className="text-2xl font-serif font-bold tracking-widest text-white group-hover:text-accent transition-colors">POLAT & DURMUŞ</span>
                </Link>

                <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
                    <Link href="#about" className="text-gray-300 hover:text-white transition-colors uppercase text-xs">{t.navbar.about}</Link>
                    <Link href="#practice-areas" className="text-gray-300 hover:text-white transition-colors uppercase text-xs">{t.navbar.practice_areas}</Link>
                    <Link href="#global" className="text-gray-300 hover:text-white transition-colors uppercase text-xs">{t.navbar.global_reach}</Link>
                    <Link href="#contact" className="px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all uppercase text-xs rounded-sm">{t.navbar.contact}</Link>
                    <button
                        onClick={toggleLanguage}
                        className="text-gray-300 hover:text-white transition-colors font-semibold"
                    >
                        {language === 'en' ? 'TR' : 'EN'}
                    </button>
                </div>
            </div>
        </nav>
    );
}
