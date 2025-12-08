export type Content = {
    hero: {
        title_suffix: string;
        subtitle: string;
        description: string;
        cta_consult: string;
        cta_expertise: string;
    };
    navbar: {
        home: string;
        practice_areas: string;
        global_reach: string;
        contact: string;
    };
    practice_areas: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
        }[];
    };
    footer: {
        brand_desc: string;
        quick_links: string;
        contact_title: string;
        rights: string;
    };
};

export const content: Record<'en' | 'tr', Content> = {
    en: {
        hero: {
            title_suffix: "DURMUŞ",
            subtitle: "Global Vision. Local Excellence.",
            description: "Providing sophisticated legal solutions in International Law, Asset Protection, and Real Estate for a discerning global clientele.",
            cta_consult: "Consult Us",
            cta_expertise: "Our Expertise",
        },
        navbar: {
            home: "Home",
            practice_areas: "Practice Areas",
            global_reach: "Global Reach",
            contact: "Contact",
        },
        practice_areas: {
            title: "Practice Areas",
            subtitle: "We specialize in complex legal matters requiring a sophisticated understanding of both Turkish and International law.",
            items: [
                { title: "International Law", description: "Expert guidance in cross-border disputes, transportation law, and international trade regulations." },
                { title: "Asset Protection", description: "Comprehensive strategies for protecting and developing assets within Turkey for international investors." },
                { title: "Real Estate Law", description: "Complete management of rental properties, eviction processes, and real estate investment legalities." },
                { title: "Infrastructure & Transport", description: "Legal support for large-scale infrastructure projects and maritime/land transportation compliance." },
                { title: "Commercial Law", description: "Tailored corporate solutions including mergers, acquisitions, and contract management." },
                { title: "Rental Management", description: "End-to-end legal oversight of tenant relationships and regulatory compliance." }
            ]
        },
        footer: {
            brand_desc: "Providing elite legal services in International Law, Real Estate, and Commercial matters.",
            quick_links: "Quick Links",
            contact_title: "Contact",
            rights: "All rights reserved.",
        }
    },
    tr: {
        hero: {
            title_suffix: "DURMUŞ",
            subtitle: "Küresel Vizyon. Yerel Mükemmellik.",
            description: "Uluslararası Hukuk, Varlık Koruma ve Gayrimenkul alanlarında seçkin müvekkiller için sofistike hukuki çözümler sunuyoruz.",
            cta_consult: "Danışmanlık Al",
            cta_expertise: "Uzmanlıklarımız",
        },
        navbar: {
            home: "Ana Sayfa",
            practice_areas: "Uzmanlık Alanları",
            global_reach: "Küresel Erişim",
            contact: "İletişim",
        },
        practice_areas: {
            title: "Uzmanlık Alanlarımız",
            subtitle: "Türk ve Uluslararası hukukun karmaşık yapısında uzmanlaşmış kadromuzla yanınızdayız.",
            items: [
                { title: "Uluslararası Hukuk", description: "Sınır ötesi uyuşmazlıklar, taşıma hukuku ve uluslararası ticaret düzenlemelerinde uzman rehberlik." },
                { title: "Varlık Koruma", description: "Yatırımcılar için Türkiye'deki varlıkların korunması ve geliştirilmesine yönelik kapsamlı stratejiler." },
                { title: "Gayrimenkul Hukuku", description: "Kiralama süreçleri, tahliye davaları ve gayrimenkul yatırımlarının hukuki yönetimi." },
                { title: "Altyapı ve Taşıma", description: "Büyük ölçekli altyapı projeleri ve deniz/kara taşımacılığı uyumluluğu için hukuki destek." },
                { title: "Ticaret Hukuku", description: "Birleşme, devralma ve sözleşme yönetimi dahil olmak üzere özel kurumsal çözümler." },
                { title: "Kira Yönetimi", description: "Kiracı ilişkileri ve yasal uyumluluğun uçtan uca hukuki denetimi." }
            ]
        },
        footer: {
            brand_desc: "Uluslararası Hukuk, Gayrimenkul ve Ticaret alanlarında seçkin hukuki hizmetler.",
            quick_links: "Hızlı Bağlantılar",
            contact_title: "İletişim",
            rights: "Tüm hakları saklıdır.",
        }
    }
};
