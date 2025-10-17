export default function Footer() {
    return (
        <footer className="container mx-auto max-w-4xl px-4 py-8 mt-16 border-t border-gray-200">
            <div className="text-sm text-gray-500">
                © {new Date().getFullYear()} Dhanyabad Behera
            </div>
        </footer>
    );
}
