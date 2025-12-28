'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const { t } = useLanguage();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Determine recipient based on language or default to generic
        const recipient = 'emre@asilhukuk.net';
        const subject = `New Contact Form Submission from ${formState.name}`;
        const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0APhone: ${formState.phone}%0D%0AMessage: ${formState.message}`;

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
                        {t.contact.title}
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                    <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t.contact.subtitle}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Contact Info & Form */}
                    <div className="lg:w-1/2 space-y-12">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-sm border border-gray-100 dark:border-gray-800">
                                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                                    <Phone size={20} />
                                </div>
                                <h3 className="font-semibold text-primary dark:text-white mb-2">{t.contact.info.phone_title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    <a href="tel:05304322025" className="hover:text-accent transition-colors">0530 432 20 25</a>
                                </p>
                            </div>
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-sm border border-gray-100 dark:border-gray-800">
                                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-4">
                                    <Mail size={20} />
                                </div>
                                <h3 className="font-semibold text-primary dark:text-white mb-2">{t.contact.info.email_title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    <a href="mailto:emre@asilhukuk.net" className="hover:text-accent transition-colors">emre@asilhukuk.net</a>
                                </p>
                            </div>
                        </div>

                        {/* Address Card (Full Width) */}
                        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                            <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-primary dark:text-white mb-2">{t.contact.info.address_title}</h3>
                                <div className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                                    {t.contact.info.address_value.map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {t.contact.form.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        {t.contact.form.phone}
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formState.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {t.contact.form.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {t.contact.form.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-sm focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-4 bg-primary text-white font-medium rounded-sm hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                {t.contact.form.submit}
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="lg:w-1/2 h-[500px] lg:h-auto bg-slate-100 rounded-sm overflow-hidden relative shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.701992719809!2d29.218975200000003!3d40.900351500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac48dec79614d%3A0x3c934d7002e8fd2b!2sAsil%20Hukuk%20B%C3%BCrosu!5e0!3m2!1str!2str!4v1766920586159!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
