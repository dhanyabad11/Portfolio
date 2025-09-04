"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
    ];

    return (
        <header className="bg-white shadow-sm border-b">
            <nav className="max-w-6xl mx-auto px-8 py-6">
                <div className="flex justify-center items-center">
                    <div className="flex space-x-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-xl transition-colors no-underline hover:underline ${
                                    pathname === item.href
                                        ? "text-accent-700 font-medium"
                                        : "text-accent-700 hover:text-accent-900"
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
