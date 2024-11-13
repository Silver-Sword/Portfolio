'use client'

import { PROJECTS } from './projectPreviews';
import { ProjectCard } from '@/components/ProjectCard';

const projects = PROJECTS;
export default function Projects() {

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>
    </div>
  )
}