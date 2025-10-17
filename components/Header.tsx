import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <nav className="container mx-auto max-w-4xl px-4 py-4">
                <div className="flex gap-6">
                    <Link href="/" className="hover:underline">
                        About
                    </Link>
                    <Link href="/projects" className="hover:underline">
                        Projects
                    </Link>
                    <Link href="/blog" className="hover:underline">
                        Blog
                    </Link>
                </div>
            </nav>
        </header>
    );
}
