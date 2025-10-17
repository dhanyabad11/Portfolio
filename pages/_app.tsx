import type { AppProps } from "next/app";
import { Playfair_Display, Lora } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-heading",
});

const lora = Lora({
    subsets: ["latin"],
    variable: "--font-body",
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${playfairDisplay.variable} ${lora.variable} font-body`}>
            <Header />
            <main className="container mx-auto max-w-4xl px-4 py-12">
                <Component {...pageProps} />
            </main>
            <Footer />
        </div>
    );
}
