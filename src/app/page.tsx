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
                <p></p>

                <p></p>

                <p>
                    <em>Last updated on 30th August 2024.</em> I can be reached at{" "}
                    <Link href="mailto:dhanyabad11@gmail.com">dhanyabad11@gmail.com</Link>.
                </p>
            </div>

            <div className="mt-16">
                <h2>Blog posts</h2>
                <ul className="list-disc list-inside space-y-6 ml-8"></ul>
            </div>
        </div>
    );
}
