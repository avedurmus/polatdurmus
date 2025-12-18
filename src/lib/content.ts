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

        about: string;
    };
    contact: {
        title: string;
        subtitle: string;
        form: {
            name: string;
            email: string;
            phone: string;
            message: string;
            submit: string;
        };
        info: {
            address_title: string;
            address_value: string[];
            phone_title: string;
            email_title: string;
        };
    };
    about: {
        title: string;
        subtitle: string;
        description_1: string;
        description_2: string;
        stats: {
            label: string;
            value: string;
        }[];
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

            about: "About Us",
        },
        contact: {
            title: "Contact Us",
            subtitle: "Get in touch with our expert legal team for a consultation.",
            form: {
                name: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                message: "Your Message",
                submit: "Send Message",
            },
            info: {
                address_title: "Visit Us",
                address_value: ["Yalı Mah. Topselvi Cad. No:100", "Mai Residence K:14 D:124", "Kartal, İstanbul"],
                phone_title: "Call Us",
                email_title: "Email Us",
            }
        },
        about: {
            title: "About Polat & Durmuş",
            subtitle: "A legacy of legal excellence bridging local expertise with global vision.",
            description_1: "Polat & Durmuş Law Firm was established to provide world-class legal services to a diverse portfolio of international and domestic clients. We combine deep local knowledge of the Turkish legal landscape with a broad international perspective, allowing us to navigate complex cross-border matters with precision and authority.",
            description_2: "Our firm is built on the pillars of integrity, strategic thinking, and unwavering dedication to our clients' success. Whether representing multinational corporations in high-stakes arbitration or guiding individual investors through real estate acquisitions, we approach every case with the same level of rigor and commitment. We don't just interpret the law; we leverage it to create opportunities and secure assets.",
            stats: [
                { label: "Combined Experience", value: "20+ Years" },
                { label: "Practice Areas", value: "12+" },
                { label: "Global Partners", value: "30+" },
            ]
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
            subtitle: "Küresel Vizyon. Yerelden Globale.",
            description: "Uluslararası Hukuk, Varlık Koruma ve Gayrimenkul alanlarında seçkin müvekkiller için sofistike hukuki çözümler sunuyoruz.",
            cta_consult: "Danışmanlık Al",
            cta_expertise: "Uzmanlıklarımız",
        },
        navbar: {
            home: "Ana Sayfa",
            practice_areas: "Uzmanlık Alanları",
            global_reach: "Küresel Erişim",
            contact: "İletişim",

            about: "Hakkımızda",
        },
        contact: {
            title: "İletişim",
            subtitle: "Uzman hukuk ekibimizle görüşmek için bize ulaşın.",
            form: {
                name: "Ad Soyad",
                email: "E-posta Adresi",
                phone: "Telefon Numarası",
                message: "Mesajınız",
                submit: "Mesaj Gönder",
            },
            info: {
                address_title: "Adres",
                address_value: ["Yalı Mah. Topselvi Cad. No:100", "Mai Residence K:14 D:124", "Kartal, İstanbul"],
                phone_title: "Telefon",
                email_title: "E-posta",
            }
        },
        about: {
            title: "Polat & Durmuş Hakkında",
            subtitle: "Yerel uzmanlığı küresel vizyonla birleştiren bir hukuki mükemmeliyet mirası.",
            description_1: "Polat & Durmuş Hukuk Bürosu, uluslararası ve yerli müvekkillerine dünya standartlarında hukuki hizmet sunmak amacıyla kurulmuştur. Türk hukuk sistemine dair derinlemesine bilgimizi, geniş bir uluslararası perspektifle harmanlayarak, karmaşık sınır ötesi meseleleri hassasiyet ve yetkinlikle yönetiyoruz.",
            description_2: "Büromuz; dürüstlük, stratejik düşünme ve müvekkil başarısına sarsılmaz bağlılık temelleri üzerine inşa edilmiştir. İster çok uluslu şirketleri yüksek riskli tahkim süreçlerinde temsil edelim, ister bireysel yatırımcılara gayrimenkul alımlarında rehberlik edelim, her davaya aynı titizlik ve kararlılıkla yaklaşıyoruz. Hukuku sadece yorumlamıyor; onu fırsatlar yaratmak ve varlıkları güvence altına almak için bir araç olarak kullanıyoruz.",
            stats: [
                { label: "Toplam Tecrübe", value: "20+ Yıl" },
                { label: "Uzmanlık Alanı", value: "12+" },
                { label: "Küresel Partner", value: "30+" },
            ]
        },
        practice_areas: {
            title: "Uzmanlık Alanlarımız",
            subtitle: "Türk ve Uluslararası hukukun karmaşık yapısında uzmanlaşmış kadromuzla yanınızdayız.",
            items: [
                { title: "Uluslararası Hukuk", description: "Sınır ötesi ticari uyuşmazlıklar, uluslararası tahkim süreçleri ve çok uluslu şirketlerin hukuki danışmanlığı konusunda uzmanlaşmış ekibimizle küresel çözüm ortaklığı sunuyoruz." },
                { title: "Varlık Koruma", description: "Yabancı ve yerli yatırımcıların Türkiye’deki mal varlıklarının hukuki güvenliği, vergi planlaması ve risk yönetimi konularında stratejik danışmanlık hizmetleri sağlıyoruz." },
                { title: "Gayrimenkul Hukuku", description: "Gayrimenkul alım-satım süreçleri, inşaat projelerinin hukuki altyapısı, kentsel dönüşüm ve imar hukuku konularında kapsamlı hukuki destek veriyoruz." },
                { title: "Altyapı ve Taşıma", description: "Büyük ölçekli altyapı projeleri, deniz ve kara taşımacılığı hukuku ile lojistik sektörüne yönelik regülasyon uyumluluğu konularında deneyimli kadromuzla hizmetinizdeyiz." },
                { title: "Ticaret Hukuku", description: "Şirketler hukuku, birleşme ve devralmalar, ticari sözleşmelerin hazırlanması ve müzakeresi süreçlerinde kurumsal müvekkillerimize özel çözümler üretiyoruz." },
                { title: "Kira Yönetimi", description: "Ticari ve konut kiralama süreçlerinin yönetimi, kira sözleşmelerinin düzenlenmesi ve kiracı-kiralayan uyuşmazlıklarının çözümü konusunda profesyonel destek sağlıyoruz." }
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
