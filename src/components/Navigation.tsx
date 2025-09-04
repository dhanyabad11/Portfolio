"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/research", label: "Research" },
        { href: "/blog", label: "Blog" },
        { href: "/releases", label: "Releases" },
    ];

    return (
        <header className="bg-white shadow-sm border-b">
            <nav className="max-w-6xl mx-auto px-8 py-6">
                <div className="flex justify-content items-center">
                    <Link
                        href="/"
                        className="text-3xl font-bold text-gray-900 hover:text-gray-700 no-underline name-font"
                    ></Link>

                    <div className="flex space-x-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-xl transition-colors no-underline hover:underline ${
                                    pathname === item.href
                                        ? "text-accent-700 font-medium"
                                        : "text-accent-700 hover:text-blue-700"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;
