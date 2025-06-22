function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-border-light rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-text-secondary mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
          >
            View Code
          </a>
          <a 
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark transition-colors duration-300 font-medium"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard