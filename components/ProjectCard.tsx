import { Project } from "../types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-gray-400 transition-all duration-300">
            <h3 className="font-retro text-2xl tracking-wide uppercase mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            {project.link && project.link !== "#" && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-medium px-4 py-2 border border-gray-300 rounded hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                    View Project →
                </a>
            )}
        </article>
    );
}
