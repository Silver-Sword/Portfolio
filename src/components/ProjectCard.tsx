import { ProjectProperties } from "@/app/projects/ProjectProperties";

import Image from "next/image";
import { User, Users, Github, Youtube, FileText, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  id,
  title,
  type,
  description,
  image,
  skills,
  isTeamProject,
  links,
}: ProjectProperties) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>{" "}
          <div className="flex space-x-2">
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-transform hover:scale-110"
                title={`GitHub Repository - ${title}`}
              >
                <Github className="h-5 w-5" aria-label="GitHub Repository" />
              </a>
            )}
            {links.youtube && (
              <a
                href={links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-transform hover:scale-110"
                title={`YouTube Demo - ${title}`}
              >
                <Youtube className="h-5 w-5" aria-label="YouTube Demo" />
              </a>
            )}
            {links.paper && (
              <a
                href={links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-transform hover:scale-110"
                title={`Research Paper - ${title}`}
              >
                <FileText className="h-5 w-5" aria-label="Research Paper" />
              </a>
            )}
            {links.site && (
              <a
                href={links.site}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-transform hover:scale-110"
                title={`Project Website - ${title}`}
              >
                <Globe className="h-5 w-5" aria-label="Project Website" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground mb-4">
          <Badge variant="outline">{type.trim()}</Badge> | {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
