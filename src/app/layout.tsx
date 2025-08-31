import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const crimsonText = Crimson_Text({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    style: ["normal", "italic"],
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "dhanyabad11 - Developer / Tinkerer / Absurdist",
    description: "Personal portfolio and blog of a hobbyist software developer and tinkerer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${crimsonText.className} ${inter.variable}`}>
                <div className="min-h-screen bg-gray-50">
                    <Navigation />
                    <main className="max-w-6xl mx-auto px-8 py-12">{children}</main>
                </div>
            </body>
        </html>
    );
}
