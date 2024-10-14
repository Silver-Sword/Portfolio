'use client'

import Image from 'next/image'
import { User, Users } from 'lucide-react'
import Link from 'next/link';

import { PROJECTS } from './projectPreviews';

const projects = PROJECTS;

export default function Projects() {

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <Image
              src={project.image}
              alt={project.alt}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                {project.isTeamProject ? (
                  <Users className="h-5 w-5 text-primary" aria-label="Team Project" />
                ) : (
                  <User className="h-5 w-5 text-primary" aria-label="Individual Project" />
                )}
              </div>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span key={index} className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}