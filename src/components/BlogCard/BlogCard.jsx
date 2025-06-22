function BlogCard({ post }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <article className="bg-white border border-border-light rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="aspect-video md:aspect-square overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
            <time dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          
          <h2 className="text-2xl font-medium text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h2>
          
          <p className="text-text-secondary mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-text-secondary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href={`/blog/${post.slug}`}
            className="text-primary hover:text-primary-dark transition-colors duration-300 font-medium inline-flex items-center gap-2"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}

export default BlogCard