"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronRight, Phone, Mail, User } from 'lucide-react';
import { chatFlow, ChatStep, ChatOption } from '@/lib/chatbot-data';

type Message = {
    id: string;
    text: string;
    sender: 'bot' | 'user';
    type?: 'text' | 'options' | 'form';
    options?: ChatOption[];
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentStep, setCurrentStep] = useState<string>('start');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Form State
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', note: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        if (messages.length === 0 && isOpen) {
            addBotMessage(chatFlow['start']);
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const addBotMessage = (step: ChatStep) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    text: step.message,
                    sender: 'bot',
                    type: step.options ? 'options' : 'text',
                    options: step.options,
                },
            ]);
            setIsTyping(false);
            setCurrentStep(step.id);
        }, 600);
    };

    const handleOptionClick = (option: ChatOption) => {
        setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), text: option.label, sender: 'user' },
        ]);

        if (option.action === 'contact') {
            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: Date.now().toString(),
                        text: "Size ulaşabilmemiz için lütfen iletişim bilgilerinizi bırakın.",
                        sender: 'bot',
                        type: 'form',
                    },
                ]);
            }, 500);
        } else if (option.nextStep && chatFlow[option.nextStep]) {
            addBotMessage(chatFlow[option.nextStep]);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);

        // Simulate API call
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    text: `Teşekkürler ${formData.name}. Bilgileriniz alındı. En kısa sürede sizinle iletişime geçeceğiz.`,
                    sender: 'bot'
                },
            ]);
            setFormSubmitted(false);
            // Reset to start after a delay or just leave it
            setTimeout(() => {
                addBotMessage({
                    id: 'reset',
                    message: 'Başka bir konuda yardımcı olabilir miyim?',
                    options: chatFlow['start'].options
                })
            }, 2000)
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 w-[350px] md:w-[380px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="bg-slate-900 dark:bg-slate-950 p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                    <span className="text-xl">⚖️</span>
                                </div>
                                <div>
                                    <h3 className="font-playfair font-semibold">Polat & Durmuş</h3>
                                    <p className="text-xs text-slate-300 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Asistan Çevrimiçi
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                                aria-label="Kapat"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-4 overflow-y-auto bg-slate-50 dark:bg-slate-900/50 space-y-4 max-h-[400px]">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-slate-900 text-white rounded-tr-sm'
                                                : 'bg-white dark:bg-slate-800 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-tl-sm'
                                            }`}
                                    >
                                        <p>{msg.text}</p>

                                        {msg.type === 'options' && msg.options && (
                                            <div className="mt-3 space-y-2">
                                                {msg.options.map((opt) => (
                                                    <button
                                                        key={opt.id}
                                                        onClick={() => handleOptionClick(opt)}
                                                        className="w-full text-left px-3 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors flex items-center justify-between group text-slate-700 dark:text-slate-200"
                                                    >
                                                        {opt.label}
                                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {msg.type === 'form' && !formSubmitted && (
                                            <form onSubmit={handleFormSubmit} className="mt-3 space-y-2">
                                                <div className="relative">
                                                    <User size={14} className="absolute left-3 top-2.5 text-slate-400" />
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Adınız Soyadınız"
                                                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Phone size={14} className="absolute left-3 top-2.5 text-slate-400" />
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="Telefon Numaranız"
                                                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Mail size={14} className="absolute left-3 top-2.5 text-slate-400" />
                                                    <input
                                                        type="email"
                                                        placeholder="E-posta Adresiniz (Opsiyonel)"
                                                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-500"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="w-full bg-slate-900 dark:bg-slate-700 text-white py-2 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    Gönder <Send size={12} />
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 dark:border-slate-700">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Footer / Input Placeholder or Branding */}
                        <div className="p-3 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-center">
                            <p className="text-[10px] text-slate-400">Polat & Durmuş Hukuk ve Danışmanlık</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all"
                aria-label="Chatbot"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
}
