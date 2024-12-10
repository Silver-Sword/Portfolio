import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";

import { getFeaturedProjects } from "./projects/projectPreviews";
import { getFeaturedPosts } from "./blog/blogPreviews";
import { INCLUDE_BLOGS } from "./vars";

const projects = getFeaturedProjects();
const blogPosts = getFeaturedPosts();

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
        <p className="text-2xl text-muted-foreground mb-6">
          Software Developer
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/Silver-Sword"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-110"
            title="Silver-Sword on GitHub"
          >
            <Github className="h-8 w-8" aria-label="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/chris4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-110"
            title="LinkedIn - Chris Gittings"
          >
            <Linkedin className="h-8 w-8" aria-label="LinkedIn" />
          </a>
          <a
            href="mailto:chrisgittingsucf@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-110"
            title="Email Chris Gittings"
          >
            <Mail className="h-8 w-8" aria-label="Email" />
          </a>
        </div>
      </section>

      <section id="about">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <p className="max-w-2xl mx-auto text-center text-lg">
          Hi 👋 I'm Chris! I am a competitive programmer and software engineer
          with a Bachelor's in Computer Science from the University of Central
          Florida. I am drawn towards backend development and indie game
          development.
        </p>
      </section>

      <section id="projects">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-gray-500 hover:underline text-lg"
            title="Visit Project Page"
          >
            View all projects
          </Link>
        </div>
      </section>

      {INCLUDE_BLOGS && (
        <section id="blog">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="text-gray-500 hover:underline text-lg"
              title="Visit Blog Page"
            >
              View all blog posts
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
