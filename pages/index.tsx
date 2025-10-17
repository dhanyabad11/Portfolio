import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Dhanyabad Behera — Portfolio</title>
                <meta name="description" content="Portfolio of Dhanyabad Behera" />
            </Head>

            <div className="space-y-16">
                <section id="about" className="space-y-4">
                    <h1 className="font-heading text-4xl font-light tracking-tight">
                        Hi — I'm Dhanyabad Behera
                    </h1>
                    <p className="text-base text-gray-600">
                        A short one-line description about what you do. Keep it crisp and minimal.
                    </p>
                </section>

                <section id="projects" className="space-y-4">
                    <h2 className="font-heading text-2xl font-light">Projects</h2>
                    <p className="text-sm text-gray-600">
                        <a href="/projects" className="underline hover:text-gray-900 transition">
                            See projects
                        </a>
                    </p>
                </section>

                <section id="blog" className="space-y-4">
                    <h2 className="font-heading text-2xl font-light">Blog</h2>
                    <p className="text-sm text-gray-600">
                        <a href="/blog" className="underline hover:text-gray-900 transition">
                            Read posts
                        </a>
                    </p>
                </section>
            </div>
        </>
    );
}
