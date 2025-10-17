import { Project } from "../types";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-heading text-lg font-light mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs underline hover:text-gray-900"
                >
                    View Project →
                </a>
            )}
        </article>
    );
}
