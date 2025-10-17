import Head from "next/head";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects — Minimal</title>
            </Head>

            <div className="space-y-8">
                <h1 className="font-heading text-4xl font-light">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}
