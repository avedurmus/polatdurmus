import { Scale, Globe, Building2, Key, Shield, Briefcase } from 'lucide-react';

const areas = [
    {
        title: "International Law",
        description: "Expert guidance in cross-border disputes, transportation law, and international trade regulations.",
        icon: Globe
    },
    {
        title: "Asset Protection",
        description: "Comprehensive strategies for protecting and developing assets within Turkey for international investors.",
        icon: Shield
    },
    {
        title: "Real Estate Law",
        description: "Complete management of rental properties, eviction processes, and real estate investment legalities.",
        icon: Building2
    },
    {
        title: "Infrastructure & Transport",
        description: "Legal support for large-scale infrastructure projects and maritime/land transportation compliance.",
        icon: Briefcase
    },
    {
        title: "Commercial Law",
        description: "Tailored corporate solutions including mergers, acquisitions, and contract management.",
        icon: Scale
    },
    {
        title: "Rental Management",
        description: "End-to-end legal oversight of tenant relationships and regulatory compliance.",
        icon: Key
    }
];

export default function PracticeAreas() {
    return (
        <section id="practice-areas" className="py-24 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary dark:text-white mb-4">
                        Practice Areas
                    </h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
                    <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        We specialize in complex legal matters requiring a sophisticated understanding of both Turkish and International law.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="group p-8 border border-gray-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 rounded-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-primary/5 text-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                <area.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-primary dark:text-white mb-3">
                                {area.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                {area.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
