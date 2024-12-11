import { ProjectProperties } from "@/app/projects/ProjectProperties";

import Image from "next/image";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ExternalIcon from "@/components/ui/ExternalIcon";

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
    <div className="mb-5">
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-60 object-cover rounded-lg shadow-sm"
      />
      <div className="mt-2">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>{" "}
          <div className="flex space-x-2">
            {links.github && (
              <ExternalIcon
                url={links.github}
                title={`GitHub Repository - ${title}`}
                size={40}
              />
            )}
            {links.youtube && (
              <ExternalIcon
                url={links.youtube}
                size={40}
                title={`YouTube Demo - ${title}`}
                override="youtube"
              />
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
              <ExternalIcon
                url={links.site}
                title={`Project Website - ${title}`}
                size={40}
                override="sharethis"
              />
            )}
          </div>
        </div>

        <div className="text-muted-foreground mb-4">
          <Badge variant="outline">{type.trim()}</Badge> {description}
        </div>
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
