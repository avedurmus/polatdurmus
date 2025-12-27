
import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: 'Polat & Durmuş Law & Consultancy Firm',
        alternateName: ['Polat & Durmuş Hukuk Bürosu', 'Polat Durmuş Attorney Partnership'],
        url: 'https://polatdurmus.com',
        logo: 'https://polatdurmus.com/logo.png',
        description: 'Polat & Durmuş provides expert legal consultancy in International Law, Commercial Law, Corporate Law, and Dispute Resolution in Istanbul.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Yalı Mah. Topselvi Cad. No:100, Mai Residence K:14 D:124',
            addressLocality: 'Kartal',
            addressRegion: 'İstanbul',
            postalCode: '34873',
            addressCountry: 'TR'
        },
        telephone: '+905304322025',
        email: 'emre@asilhukuk.net',
        priceRange: '$$',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00'
            }
        ],
        areaServed: [
            {
                '@type': 'City',
                name: 'Istanbul'
            },
            {
                '@type': 'Country',
                name: 'Turkey'
            },
            {
                '@type': 'Place',
                name: 'Europe'
            },
            {
                '@type': 'Place',
                name: 'MENA Region'
            }
        ],
        knowsLanguage: ["Turkish", "English"],
        sameAs: []
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
