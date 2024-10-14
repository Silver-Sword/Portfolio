import Image from 'next/image'
import Link from 'next/link'
import { User, Users, Github, Linkedin, Mail } from 'lucide-react'
import { getFeaturedProjects } from './projects/projectPreviews';

const projects = getFeaturedProjects();

const INCLUDE_BLOGS = false;
const blogPosts = [
  { id: 1, title: 'Blog Post 1', description: 'Short description of Blog Post 1', image: '/placeholder.svg?height=200&width=300' },
  { id: 2, title: 'Blog Post 2', description: 'Short description of Blog Post 2', image: '/placeholder.svg?height=200&width=300' },
  { id: 3, title: 'Blog Post 3', description: 'Short description of Blog Post 3', image: '/placeholder.svg?height=200&width=300' },
]

export default function Home() {
  return (
    <div className="space-y-16">
      <section id="home" className="text-center pt-16">
        <Image
          src="/sleeping dragon.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">Chris Gittings</h1>
        <p className="text-2xl text-muted-foreground mb-6">Software Developer</p>
        <div className="flex justify-center space-x-4">
        <a href="https://github.com/Silver-Sword" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github className="h-8 w-8" aria-label="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/chris4/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="h-8 w-8" aria-label="LinkedIn" />
          </a>
          <a href="mailto:chrisgittingsucf@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail className="h-8 w-8" aria-label="Email" />
          </a>
        </div>
      </section>

      <section id="about">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-lg">
          Hi 👋 I'm Chris. I am a competitive programmer and software engineer pursuing a Bachelor's in Computer Science at 
          the University of Central Florida graduating in December 2024. 
          I am drawn towards backend development and indie game development.
        </p>
      </section>

      <section id="projects">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/`} className="block group">
              <div className="border rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.isTeamProject ? (
                      <Users className="h-5 w-5 text-primary" aria-label="Team Project" />
                    ) : (
                      <User className="h-5 w-5 text-primary" aria-label="Individual Project" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-gray-500 hover:underline text-lg">View all projects</Link>
        </div>
      </section>

      { INCLUDE_BLOGS && <section id="blog">
        <h2 className="text-3xl font-semibold mb-6 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="block group">
              <div className="border rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground">{post.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/blog" className="text-gray-500 hover:underline text-lg">View all blog posts</Link>
        </div>
      </section> }
    </div>
  )
}