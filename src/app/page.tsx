import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="prose prose-lg max-w-none">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-16 mb-16">
                <div className="flex-1">
                    <h1 className="text-6xl font-bold mb-8 name-font">Dhanyabad Behera</h1>
                    <p className="italic-subtitle mb-12">Developer / Tinkerer / Absurdist</p>

                    <div className="space-y-8">
                        <p>I am a hobbyist software developer and a tinkerer.</p>

                        <p>
                            For a brief period, I was in the academia—at the Middlesex University,
                            London—doing research, from where I obtained a BSc. in Computer Science
                            (2008) and a PhD in Artificial Intelligence & Computational Linguistics
                            (2011).
                        </p>

                        <p>
                            In 2013, I started the tech team at{" "}
                            <Link href="https://zerodha.com">Zerodha</Link>, now India's largest
                            stock broker, where I have been the CTO ever since. At Zerodha, we have
                            an <Link href="#">unconventional team</Link> and we work on interesting
                            financial technology projects.
                        </p>

                        <p>
                            I volunteer at several non-profit organisations, including the following
                            ones that I co-founded:
                        </p>

                        <ul className="list-disc list-inside space-y-4 ml-8">
                            <li>
                                <Link href="#" className="font-medium">
                                    FOSS United Foundation
                                </Link>{" "}
                                — started in 2020 to promote Free and Open Source Software
                                communities and activities in India.
                            </li>
                            <li>
                                <Link href="#" className="font-medium">
                                    Rainmatter Foundation
                                </Link>{" "}
                                — started in 2020 to back initiatives and projects in India focusing
                                on ecological preservation and climate action.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="lg:w-72 flex justify-center lg:justify-end mt-12 lg:mt-0">
                    <div className="w-56 h-56 relative">
                        <Image
                            src="/Profile-picture2.png"
                            alt="Profile Photo"
                            fill
                            className="rounded-full object-cover shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="border-t pt-12 space-y-8">
                <p>
                    The period brings back intense bittersweet nostalgia—the discovery of code, the
                    excitement of connecting to the world over dialup Internet, the gratification of
                    relentless experimentation by trial and error. The heyday of guest books, web
                    rings, CGI scripts, and Matt's FormMail. I loved every bit of it. I keep this
                    website online as a reminder of that past.
                </p>

                <p>
                    I am fortunate to be in a position where what I do every day is exactly what I
                    have unconditionally enjoyed doing for more than 25 years now—writing software,
                    tinkering, and experimenting.
                </p>

                <p>
                    <em>Last updated on 30th August 2024.</em> I can be reached at{" "}
                    <Link href="mailto:dhanyabad11@gmail.com">dhanyabad11@gmail.com</Link>.
                </p>
            </div>

            <div className="mt-16">
                <h2>Blog posts</h2>
                <ul className="list-disc list-inside space-y-6 ml-8">
                    <li>
                        <div className="text-gray-600 text-lg">19 May 2025</div>
                        <Link href="/blog/mcp-seems-viral" className="font-medium text-xl">
                            MCP seems viral
                        </Link>
                    </li>
                    <li>
                        <div className="text-gray-600 text-lg">29 Jan 2025</div>
                        <Link href="/blog/deepseek-ai-sovereignty" className="font-medium text-xl">
                            DeepSeek, AI sovereignty, and India
                        </Link>
                    </li>
                    <li>
                        <div className="text-gray-600 text-lg">02 Oct 2024</div>
                        <Link href="/blog/doid" className="font-medium text-xl">
                            Decentralised Open Indexes for Discovery (DOID)
                        </Link>
                    </li>
                    <li>
                        <div className="text-gray-600 text-lg">24 Jul 2024</div>
                        <Link href="/blog/software-in-discipline" className="font-medium text-xl">
                            On software as an "in-discipline"
                        </Link>
                    </li>
                    <li>
                        <div className="text-gray-600 text-lg">13 May 2023</div>
                        <Link href="/blog/this-time-different" className="font-medium text-xl">
                            This time, it feels different
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
