'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-950 text-gray-400 py-20 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-white mb-6 block">
                            POLAT & <span className="text-accent">DURMUŞ</span>
                        </Link>
                        <p className="text-sm font-light leading-relaxed mb-6">
                            {t.footer.brand_desc}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif mb-6">{t.footer.quick_links}</h4>
                        <ul className="space-y-3 text-sm font-light">
                            <li><Link href="/" className="hover:text-accent transition-colors">{t.navbar.home}</Link></li>
                            <li><Link href="#practice-areas" className="hover:text-accent transition-colors">{t.navbar.practice_areas}</Link></li>
                            <li><Link href="#about" className="hover:text-accent transition-colors">{t.navbar.about}</Link></li>
                            <li><Link href="#contact" className="hover:text-accent transition-colors">{t.navbar.contact}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-serif mb-6">{t.footer.contact_title}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-light">
                            <div>
                                <span className="block text-accent text-xs uppercase tracking-wider mb-2">Address</span>
                                <p className="leading-relaxed text-gray-300">
                                    Yalı Mah. Topselvi Cad. No:100<br />
                                    Mai Residence K:14 D:124<br />
                                    Kartal, İstanbul
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <span className="block text-accent text-xs uppercase tracking-wider mb-2">Phone</span>
                                    <a href="tel:05304322025" className="hover:text-white transition-colors block text-gray-300">0530 432 20 25</a>
                                </div>
                                <div>
                                    <span className="block text-accent text-xs uppercase tracking-wider mb-2">Email</span>
                                    <a href="mailto:emre@asilhukuk.net" className="hover:text-white transition-colors block text-gray-300">emre@asilhukuk.net</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-gray-600">
                    <p>© {new Date().getFullYear()} Polat & Durmuş Law Firm. {t.footer.rights}</p>
                    <div className="flex space-x-4">
                        <Link href="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gray-400">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
