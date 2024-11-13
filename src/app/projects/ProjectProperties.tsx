export type ProjectLink = {
  github?: string;
  youtube?: string;
  paper?: string;
  site?: string;
};

export type ProjectProperties = {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  alt: string;
  skills: string[];
  isTeamProject: boolean;
  isFeatured: boolean;
  links: ProjectLink;
};
