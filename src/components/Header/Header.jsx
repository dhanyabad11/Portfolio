import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    const isActive = (path) => {
        if (path === "/" && location.pathname === "/") return true;
        if (path !== "/" && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className="py-12 pb-8 border-b border-border-light">
            <div className="px-8 flex justify-between items-center flex-wrap gap-8">
                <Link
                    to="/"
                    className="text-4xl font-normal text-text-primary tracking-tight hover:text-primary transition-colors duration-300"
                >
                    Dhanyabad behera. and i am fucking dumb
                </Link>
                <nav className="flex gap-10 items-center flex-wrap">
                    <Link
                        to="/"
                        className={`text-lg font-normal transition-all duration-300 focus:outline-2 focus:outline-primary focus:outline-offset-2 focus:rounded-sm ${
                            isActive("/")
                                ? "text-primary border-b-2 border-primary"
                                : "text-text-secondary hover:text-primary hover:opacity-80"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/projects"
                        className={`text-lg font-normal transition-all duration-300 focus:outline-2 focus:outline-primary focus:outline-offset-2 focus:rounded-sm ${
                            isActive("/projects")
                                ? "text-primary border-b-2 border-primary"
                                : "text-text-secondary hover:text-primary hover:opacity-80"
                        }`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/blog"
                        className={`text-lg font-normal transition-all duration-300 focus:outline-2 focus:outline-primary focus:outline-offset-2 focus:rounded-sm ${
                            isActive("/blog")
                                ? "text-primary border-b-2 border-primary"
                                : "text-text-secondary hover:text-primary hover:opacity-80"
                        }`}
                    >
                        Blog
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
