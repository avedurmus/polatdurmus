export type ChatOption = {
    id: string;
    label: string;
    nextStep?: string;
    action?: 'contact' | 'link';
};

export type ChatStep = {
    id: string;
    message: string;
    options?: ChatOption[];
};

export const chatFlow: Record<string, ChatStep> = {
    start: {
        id: 'start',
        message: "Merhaba! Polat & Durmuş Hukuk Bürosu'na hoş geldiniz. Size nasıl yardımcı olabilirim?",
        options: [
            { id: 'services', label: 'Hizmetlerimiz Hakkında Bilgi', nextStep: 'services' },
            { id: 'contact', label: 'Avukatla Görüşmek İstiyorum', action: 'contact' },
        ],
    },
    services: {
        id: 'services',
        message: "Hangi hukuk alanı hakkında bilgi almak istersiniz?",
        options: [
            { id: 'ceza', label: 'Ceza Hukuku', nextStep: 'ceza_info' },
            { id: 'bosanma', label: 'Boşanma ve Aile Hukuku', nextStep: 'bosanma_info' },
            { id: 'miras', label: 'Miras Hukuku', nextStep: 'miras_info' },
            { id: 'gayrimenkul', label: 'Gayrimenkul Hukuku', nextStep: 'gayrimenkul_info' },
            { id: 'back', label: '⬅️ Ana Menüye Dön', nextStep: 'start' },
        ],
    },
    ceza_info: {
        id: 'ceza_info',
        message: "Ceza hukuku ekibimiz, soruşturma ve kovuşturma aşamalarında müvekkillerimizin haklarını titizlikle savunmaktadır. Ağır ceza davaları, ekonomik suçlar ve bilişim suçları konularında uzmanız.",
        options: [
            { id: 'contact_ceza', label: 'Bu Konuda Destek Al', action: 'contact' },
            { id: 'back_services', label: '⬅️ Diğer Hizmetler', nextStep: 'services' },
        ],
    },
    bosanma_info: {
        id: 'bosanma_info',
        message: "Boşanma, velayet, nafaka ve mal paylaşımı davalarında size hukuki destek sağlıyoruz. Sürecin en az yıpranmayla tamamlanması ve haklarınızın korunması önceliğimizdir.",
        options: [
            { id: 'contact_bosanma', label: 'Bu Konuda Destek Al', action: 'contact' },
            { id: 'back_services', label: '⬅️ Diğer Hizmetler', nextStep: 'services' },
        ],
    },
    miras_info: {
        id: 'miras_info',
        message: "Miras paylaşımı, vasiyetname hazırlanması ve saklı pay davalarında uzman kadromuzla yanınızdayız. Geleceğinizi ve haklarınızı güvence altına almanıza yardımcı oluyoruz.",
        options: [
            { id: 'contact_miras', label: 'Bu Konuda Destek Al', action: 'contact' },
            { id: 'back_services', label: '⬅️ Diğer Hizmetler', nextStep: 'services' },
        ],
    },
    gayrimenkul_info: {
        id: 'gayrimenkul_info',
        message: "Gayrimenkul alım-satımı, kiralama uyuşmazlıkları, tapu iptal ve tescil davalarında danışmanlık ve dava takibi hizmeti sunuyoruz. Yatırımlarınızı hukuki güvence altına alıyoruz.",
        options: [
            { id: 'contact_gayrimenkul', label: 'Bu Konuda Destek Al', action: 'contact' },
            { id: 'back_services', label: '⬅️ Diğer Hizmetler', nextStep: 'services' },
        ],
    },
};
