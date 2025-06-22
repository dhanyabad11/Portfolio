import Container from '../../components/Container/Container'
import BlogCard from '../../components/BlogCard/BlogCard'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "JavaScript", "Frontend"],
      slug: "getting-started-with-react-hooks",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for creating robust and scalable REST APIs using Node.js and Express. Covers authentication, error handling, and database optimization.",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["Node.js", "API", "Backend"],
      slug: "building-scalable-apis-nodejs",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A detailed comparison of CSS Grid and Flexbox, with practical examples and use cases to help you choose the right layout method for your projects.",
      date: "2023-12-22",
      readTime: "6 min read",
      tags: ["CSS", "Layout", "Frontend"],
      slug: "css-grid-vs-flexbox",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Introduction to TypeScript",
      excerpt: "Why TypeScript is becoming essential for modern JavaScript development. Learn the basics and see how it can improve your code quality and developer experience.",
      date: "2023-12-10",
      readTime: "10 min read",
      tags: ["TypeScript", "JavaScript", "Development"],
      slug: "introduction-to-typescript",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  return (
    <main className="py-16">
      <Container>
        <div className="mb-12">
          <h1 className="text-4xl font-normal text-text-primary mb-6 tracking-tight">
            Blog
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Thoughts, tutorials, and insights about web development, technology, and software engineering.
          </p>
        </div>
        
        <div className="space-y-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default Blog