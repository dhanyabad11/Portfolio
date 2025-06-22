import ProfileImage from "../ProfileImage/ProfileImage";

function Bio() {
    return (
        <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 items-start">
                <div className="order-2 lg:order-1">
                    <p className="text-xl font-medium text-text-primary mb-8 leading-relaxed">
                        I am a passionate software developer and creative thinker.
                    </p>

                    <p className="text-lg leading-relaxed text-text-secondary mb-6 text-justify"></p>

                    <p className="text-lg leading-relaxed text-text-secondary mb-6 text-justify">
                        {" "}
                        <a
                            href="#"
                            className="text-primary hover:text-primary-dark hover:underline transition-all duration-300"
                        ></a>
                        ,
                    </p>

                    <p className="text-lg leading-relaxed text-text-secondary mb-6 text-justify">
                        I volunteer at several tech communities and contribute to open-source
                        projects, including the following organizations that I actively support:
                    </p>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                    <ProfileImage />
                </div>
            </div>
        </section>
    );
}

export default Bio;
