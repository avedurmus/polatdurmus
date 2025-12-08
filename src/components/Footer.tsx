import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-primary text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-serif text-white mb-4">POLAT & DURMUŞ</h3>
                        <p className="text-sm text-gray-400">
                            Law & Consultancy Firm
                        </p>
                        <p className="mt-4 text-xs text-gray-500">
                            Providing elite legal services in International Law, Real Estate, and Commercial matters.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="#practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link></li>
                            <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-3 text-sm">
                            <p>
                                <span className="block text-gray-500 text-xs">Address</span>
                                Yalı Mah. Topselvi Cad. No:100<br />
                                Mai Residence K:14 D:124<br />
                                Kartal, İstanbul
                            </p>
                            <p>
                                <span className="block text-gray-500 text-xs">Phone</span>
                                <a href="tel:05304322025" className="hover:text-accent transition-colors">0530 432 20 25</a>
                            </p>
                            <p>
                                <span className="block text-gray-500 text-xs">Email</span>
                                <a href="mailto:emre@asilhukuk.net" className="hover:text-accent transition-colors">emre@asilhukuk.net</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Polat & Durmuş Law Firm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
