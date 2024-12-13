import Image from "next/image";

import { ProjectProperties } from "@/app/projects/ProjectProperties";
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
    <div className="flex flex-col h-full mb-5">
      <div className="relative w-full pt-[55%] rounded-lg overflow-hidden shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
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
              <ExternalIcon
                url={links.paper}
                title={`Research Paper - ${title}`}
                size={40}
                override="paper"
              />
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
