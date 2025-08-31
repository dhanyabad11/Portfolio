import Link from "next/link";

export default function Blog() {
    const blogPosts = [
        {
            date: "19 May 2025",
            title: "MCP seems viral",
            description:
                "The Model Context Protocol, its rate of adoption, nature, and implications, seem viral in nature.",
            slug: "mcp-seems-viral",
        },
        {
            date: "29 January 2025",
            title: "DeepSeek, AI sovereignty, and India",
            description:
                "DeepSeek-R1 is a breakthrough in many senses. What then, about the conversation of AI 'sovereignty' in the Indian context?",
            slug: "deepseek-ai-sovereignty",
        },
        {
            date: "2 October 2024",
            title: "Decentralised Open Indexes for Discovery (DOID)",
            description:
                "A conceptual and technical framework for resource discovery on the WWW using decentralised, open, machine-readable indexes as the building block.",
            slug: "doid",
        },
        {
            date: "24 July 2024",
            title: 'On software as an "in-discipline"',
            description:
                "Exploring the interdisciplinary nature of software development and its place in the academic world.",
            slug: "software-in-discipline",
        },
        {
            date: "13 May 2023",
            title: "This time, it feels different",
            description: "Reflections on the current state of technology and software development.",
            slug: "this-time-different",
        },
    ];

    return (
        <div className="max-w-6xl">
            <div className="flex justify-between items-start mb-12">
                <h1 className="text-5xl font-bold">Blog</h1>
                <div className="text-right space-y-3">
                    <Link href="#" className="block text-blue-600 hover:text-blue-800 text-lg">
                        E-mail update
                    </Link>
                    <Link
                        href="/rss.xml"
                        className="block text-blue-600 hover:text-blue-800 text-lg"
                    >
                        RSS feed
                    </Link>
                </div>
            </div>

            <p className="text-xl mb-12">
                I also post occasionally on the{" "}
                <Link href="https://zerodha.tech" className="text-blue-600 hover:text-blue-800">
                    zerodha.tech blog
                </Link>
                .
            </p>

            <div className="space-y-16">
                {blogPosts.map((post, index) => (
                    <article key={index} className="border-b border-gray-200 pb-12 last:border-b-0">
                        <div className="text-gray-500 mb-3 text-lg">{post.date}</div>
                        <h2 className="text-3xl font-semibold mb-4">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-xl">{post.description}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
