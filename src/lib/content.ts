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
        book_appointment: string;
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
            slug: string;
            description: string;
            content: string;
            image: string;
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
            subtitle: "Strategic Legal Partners. Global Reach.",
            description: "Delivering sophisticated legal counsel in International Trade, Investment Arbitration, and Cross-Border Real Estate for a discerning global clientele.",
            cta_consult: "Request Consultation",
            cta_expertise: "Our Expertise",
        },
        navbar: {
            home: "Home",
            practice_areas: "Expertise",
            global_reach: "International Desk",
            contact: "Contact",

            about: "The Firm",
            book_appointment: "Book Appointment",
        },
        contact: {
            title: "Contact Us",
            subtitle: "Connect with our legal team for a confidential consultation.",
            form: {
                name: "Full Name",
                email: "Email Address",
                phone: "Phone Number",
                message: "How can we assist you?",
                submit: "Submit Inquiry",
            },
            info: {
                address_title: "Headquarters",
                address_value: ["Yalı Mah. Topselvi Cad. No:100", "Mai Residence K:14 D:124", "Kartal, Istanbul, Turkiye"],
                phone_title: "Phone",
                email_title: "Email",
            }
        },
        about: {
            title: "The Firm",
            subtitle: "Bridging the gap between Turkish opportunities and global investors.",
            description_1: "Polat & Durmuş is a premier law firm established to serve as a strategic bridge for international clients operating in Turkiye. We combine the agility of a boutique firm with the sophistication of a global consultancy, ensuring that every legal challenge is met with precision and localized expertise.",
            description_2: "Our practice is founded on the principles of integrity, foresight, and unwavering dedication. From protecting foreign direct investments to navigating complex regulatory landscapes, we serve as trusted advisors to multinational corporations and private investors alike. We do not just represent you; we champion your interests in a complex legal environment.",
            stats: [
                { label: "Combined Experience", value: "20+ Years" },
                { label: "Practice Areas", value: "12+" },
                { label: "Global Reach", value: "Europe & MENA" },
            ]
        },
        practice_areas: {
            title: "Areas of Practice",
            subtitle: "Comprehensive legal solutions tailored for the complex needs of international business and private wealth.",
            items: [
                {
                    title: "International Dispute Resolution",
                    slug: "international-dispute-resolution",
                    description: "Expert representation in cross-border commercial disputes, arbitration, and enforcement of foreign judgments in Turkiye.",
                    content: "We provide high-stakes representation in international commercial arbitration and cross-border litigation. Our team is experienced in enforcing foreign court judgments and arbitral awards in Turkey, navigating the complexities of the New York Convention and Turkish International Private Law. We represent clients in disputes arising from construction contracts, international trade, and investment treaties.",
                    image: "/images/international-dispute.jpg"
                },
                {
                    title: "Foreign Direct Investment",
                    slug: "foreign-direct-investment",
                    description: "Strategic guidance for international investors entering the Turkish market, including corporate structuring and regulatory compliance.",
                    content: "Polat & Durmuş serves as the primary legal partner for foreign companies establishing a presence in Turkey. We advise on the most suitable entity structures (JSC, LLC, Branch Office), draft shareholders' agreements to protect minority/majority rights, and ensure full compliance with Turkish Foreign Direct Investment Law. Our services extend to obtaining necessary permits, tax structuring, and labor law compliance.",
                    image: "/images/foreign-investment.jpg"
                },
                {
                    title: "Real Estate & Citizenship",
                    slug: "real-estate-citizenship",
                    description: "End-to-end legal management for high-value real estate acquisitions and Citizenship by Investment (CBI) programs.",
                    content: "We offer a 'concierge' legal service for international real estate investors. From due diligence (title deed checks, encumbrances) to purchase agreement negotiation and final title transfer, we secure your investment. Furthermore, we specialize in the Turkish Citizenship by Investment program, guiding high-net-worth individuals through the legal eligibility, investment, and application process with a 100% compliance focus.",
                    image: "/images/real-estate.jpg"
                },
                {
                    title: "Maritime & Transport Law",
                    slug: "maritime-transport-law",
                    description: "Specialized counsel for logistics companies, insurers, and carriers regarding maritime claims and transport regulations.",
                    content: "Our maritime practice covers charterparty disputes, cargo claims, marine insurance, and ship arrest procedures in Turkish ports. We advise P&I Clubs, logistics companies, and freight forwarders on CMR Convention liabilities and local transport regulations. We understand the time-critical nature of maritime trade and provide rapid legal intervention.",
                    image: "/images/maritime-law.jpg"
                },
                {
                    title: "Corporate & M&A",
                    slug: "corporate-ma",
                    description: "Advising on mergers, acquisitions, joint ventures, and corporate governance for foreign and domestic entities.",
                    content: "We facilitate complex M&A transactions, offering comprehensive legal due diligence, share purchase agreement (SPA) drafting, and competition board filings. Our corporate retainer services ensure that your day-to-day business operations—from contract management to board resolutions—comply with the Turkish Commercial Code.",
                    image: "/images/corporate-ma.jpg"
                },
                {
                    title: "Real Estate Asset Management",
                    slug: "real-estate-asset-management",
                    description: "Legal oversight of property portfolios, including lease structuring, tenant relations, and asset protection.",
                    content: "For investors with multiple properties, we provide ongoing legal asset management. This includes drafting \"corporate-standard\" commercial lease agreements, managing rent reviews, and handling eviction proceedings swiftly when necessary. We treat your real estate portfolio as a business, minimizing legal risks and maximizing stability.",
                    image: "/images/asset-management.jpg"
                }
            ]
        },
        footer: {
            brand_desc: "Polat & Durmuş Law Firm | Istanbul",
            quick_links: "Navigation",
            contact_title: "Contact",
            rights: "All rights reserved. Attorney Advertising.",
        }
    },
    tr: {
        hero: {
            title_suffix: "DURMUŞ",
            subtitle: "Stratejik Çözüm Ortağınız. Küresel Vizyon.",
            description: "Uluslararası Ticaret, Yatırım Tahkimi ve Sınır Ötesi Gayrimenkul alanlarında seçkin müvekkiller için sofistike hukuki çözümler.",
            cta_consult: "Danışmanlık Talep Et",
            cta_expertise: "Uzmanlıklarımız",
        },
        navbar: {
            home: "Ana Sayfa",
            practice_areas: "Uzmanlıklar",
            global_reach: "Uluslararası Desk",
            contact: "İletişim",

            about: "Büromuz",
            book_appointment: "Randevu Al",
        },
        contact: {
            title: "Bize Ulaşın",
            subtitle: "Gizlilik esaslı ön görüşme için hukuk ekibimizle iletişime geçin.",
            form: {
                name: "Ad Soyad",
                email: "E-posta Adresi",
                phone: "Telefon Numarası",
                message: "Size nasıl yardımcı olabiliriz?",
                submit: "Gönder",
            },
            info: {
                address_title: "Merkez Ofis",
                address_value: ["Yalı Mah. Topselvi Cad. No:100", "Mai Residence K:14 D:124", "Kartal, İstanbul"],
                phone_title: "Telefon",
                email_title: "E-posta",
            }
        },
        about: {
            title: "Büromuz Hakkında",
            subtitle: "Türkiye'deki fırsatları küresel yatırımcılarla buluşturan stratejik köprünüz.",
            description_1: "Polat & Durmuş, Türkiye'de faaliyet gösteren uluslararası müvekkillere stratejik bir köprü görevi görmek üzere kurulmuş seçkin bir hukuk bürosudur. Butik bir firmanın çevikliğini küresel bir danışmanlık firmasının sofistike yapısıyla birleştirerek, her türlü hukuki zorluğu hassasiyet ve yerel uzmanlıkla karşılıyoruz.",
            description_2: "Pratiğimiz dürüstlük, öngörü ve sarsılmaz bir adanmışlık ilkelerine dayanmaktadır. Yabancı doğrudan yatırımların korunmasından karmaşık mevzuat süreçlerinin yönetilmesine kadar, çok uluslu şirketlere ve bireysel yatırımcılara güvenilir danışmanlar olarak hizmet veriyoruz. Sadece temsilciniz değil, karmaşık hukuk düzeninde menfaatlerinizin savunucusuyuz.",
            stats: [
                { label: "Toplam Tecrübe", value: "20+ Yıl" },
                { label: "Uzmanlık Alanı", value: "12+" },
                { label: "Küresel Erişim", value: "Avrupa & ODKA" },
            ]
        },
        practice_areas: {
            title: "Çalışma Alanlarımız",
            subtitle: "Uluslararası ticaretin ve özel varlık yönetiminin karmaşık ihtiyaçlarına yönelik kapsamlı hukuki çözümler.",
            items: [
                {
                    title: "Uluslararası Uyuşmazlık Çözümü",
                    slug: "international-dispute-resolution",
                    description: "Sınır ötesi ticari ihtilaflar, tahkim ve yabancı mahkeme kararlarının Türkiye'de tanınması/tenfizi süreçlerinde uzman temsil.",
                    content: "Uluslararası ticari tahkim ve sınır ötesi davalarda üst düzey temsil sunuyoruz. Yabancı mahkeme ve hakem kararlarının Türkiye'de tanınması ve tenfizi süreçlerinde, New York Konvansiyonu ve MÖHUK konusundaki derin tecrübemizle hareket ediyoruz. İnşaat sözleşmeleri, uluslararası satım ve yatırım anlaşmazlıklarında müvekkillerimizin haklarını koruyoruz.",
                    image: "/images/international-dispute.jpg"
                },
                {
                    title: "Yabancı Doğrudan Yatırımlar",
                    slug: "foreign-direct-investment",
                    description: "Türkiye pazarına giren uluslararası yatırımcılar için şirket kuruluşu, ortak girişimler ve mevzuat uyumu konusunda stratejik rehberlik.",
                    content: "Polat & Durmuş, Türkiye'de faaliyet göstermek isteyen yabancı şirketlerin birincil hukuki çözüm ortağıdır. En uygun şirket yapısının (A.Ş., Ltd., Şube) belirlenmesinden, azınlık/çoğunluk haklarını koruyan hissedarlar sözleşmelerinin (SHA) hazırlanmasına kadar tüm süreçte yanınızdayız. Çalışma izinleri, vergi yapılandırması ve teşvik mevzuatı konularında kapsamlı danışmanlık veriyoruz.",
                    image: "/images/foreign-investment.jpg"
                },
                {
                    title: "Gayrimenkul ve Vatandaşlık",
                    slug: "real-estate-citizenship",
                    description: "Yüksek değerli gayrimenkul alımları ve Yatırım Yoluyla Türk Vatandaşlığı (CBI) programları için uçtan uca hukuki yönetim.",
                    content: "Uluslararası gayrimenkul yatırımcıları için 'concierge' standartlarında hukuki hizmet sunuyoruz. Gayrimenkulün hukuki risk analizinden (due diligence) satış sözleşmesi müzakerelerine ve tapu devrine kadar yatırımınızı güvence altına alıyoruz. Ayrıca, Yatırım Yoluyla Türk Vatandaşlığı programında %100 uyumluluk odaklı yaklaşımımızla, başvuru sürecinin her aşamasında rehberlik ediyoruz.",
                    image: "/images/real-estate.jpg"
                },
                {
                    title: "Deniz Ticareti ve Taşıma",
                    slug: "maritime-transport-law",
                    description: "Lojistik şirketleri, sigortacılar ve taşıyıcılar için denizcilik alacakları ve taşıma hukuku regülasyonları konusunda uzman danışmanlık.",
                    content: "Deniz ticareti pratiğimiz; çarter sözleşmeleri, yük hasar talepleri, deniz sigortaları ve gemi tutuklama prosedürlerini kapsar. P&I Kulüpleri, lojistik firmaları ve taşıyıcılar için CMR Konvansiyonu ve yerel taşıma mevzuatı kapsamında danışmanlık veriyoruz. Ticaretin zamanla yarıştığını biliyor, hukuki sorunlara hızlı ve etkili müdahalelerle yaklaşıyoruz.",
                    image: "/images/maritime-law.jpg"
                },
                {
                    title: "Şirketler Hukuku ve Birleşmeler",
                    slug: "corporate-ma",
                    description: "Yerli ve yabancı şirketler için birleşme, devralma, ortak girişimler ve kurumsal yönetim danışmanlığı.",
                    content: "Karmaşık birleşme ve devralma (M&A) işlemlerinde, hukuki inceleme (due diligence), hisse devir sözleşmesi (SPA) hazırlığı ve rekabet kurulu bildirimleri konularında hizmet veriyoruz. Kurumsal yönetim danışmanlığımızla, şirketinizin günlük operasyonlarının ve yönetim kurulu kararlarının Türk Ticaret Kanunu'na tam uyumlu olmasını sağlıyoruz.",
                    image: "/images/corporate-ma.jpg"
                },
                {
                    title: "Gayrimenkul Varlık Yönetimi",
                    slug: "real-estate-asset-management",
                    description: "Gayrimenkul portföylerinin hukuki denetimi, kira sözleşmelerinin yapılandırılması ve varlık koruma stratejileri.",
                    content: "Birden fazla mülkü olan yatırımcılar için sürekli hukuki varlık yönetimi sağlıyoruz. Kurumsal standartlarda kira sözleşmelerinin hazırlanması, kira artış süreçlerinin yönetimi ve gerektiğinde tahliye süreçlerinin hızlıca yürütülmesi konularında uzmanız. Gayrimenkul portföyünüzü bir işletme titizliğiyle ele alıyor, hukuki riskleri minimize ediyoruz.",
                    image: "/images/asset-management.jpg"
                }
            ]
        },
        footer: {
            brand_desc: "Polat & Durmuş Hukuk Bürosu | İstanbul",
            quick_links: "Menü",
            contact_title: "İletişim",
            rights: "Tüm hakları saklıdır. Avukatlık reklam yasağına uygundur.",
        }
    }
};
