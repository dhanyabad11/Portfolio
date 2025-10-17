import Head from "next/head";
import posts from "../data/posts";

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog — Minimal</title>
            </Head>

            <div className="space-y-8">
                <h1 className="font-heading text-4xl font-light">Blog</h1>
                <ul className="space-y-6">
                    {posts.map((post) => (
                        <li key={post.id} className="border-b border-gray-200 pb-6">
                            <a
                                href={`#/posts/${post.slug}`}
                                className="font-heading text-lg font-light hover:underline"
                            >
                                {post.title}
                            </a>
                            <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-gray-500">
                    (This is a placeholder list. Add dynamic routes for full blog pages.)
                </p>
            </div>
        </>
    );
}
