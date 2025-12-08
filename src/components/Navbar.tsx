import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-foreground">
                    POLAT & <span className="text-accent">DURMUŞ</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
                    <Link href="#practice-areas" className="hover:text-accent transition-colors">Practice Areas</Link>
                    <Link href="#global" className="hover:text-accent transition-colors">Global Reach</Link>
                    <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors pointer-events-none opacity-50">
                        EN / TR
                    </button>
                </div>
            </div>
        </nav>
    );
}
