import { ProjectProperties } from "./ProjectProperties";

export const PROJECTS: ProjectProperties[] = [
  {
    id: 1,
    title: "Tune Tracer",
    type: "Web App",
    description:
      "A Google Docs style composition tool. Make music with collaborators in real-time.",
    image: "/project-images/tune-tracer-logo-small.png",
    alt: "Tune Tracer Logo: The music notation for an eighth rest.",
    skills: ["TypeScript", "Firebase", "Jira"],
    isTeamProject: true,
    isFeatured: true,
    links: {
      github: "https://github.com/Silver-Sword/Tune-Tracer",
    },
  },
  {
    id: 2,
    title: "Subliminal",
    type: "Video Game",
    description:
      "RPG video game blending point and click adventures with fast paced combat.",
    image: "/project-images/subliminal-sample-3.png",
    alt: "A screenshot from Subliminal of the main character attacking a slime creature.",
    skills: ["C#", "Unity", "Jira"],
    isTeamProject: true,
    isFeatured: true,
    links: {
      github: "https://github.com/kaedenle/CAP4053--Subliminal",
      youtube: "https://youtu.be/y8J5yYUdjnU?si=VhVZxYEI34tQrfp5&t=8484",
    },
  },
  {
    id: 3,
    title: "Wordlify",
    type: "Web App",
    description:
      "Compete with your friends in Wordle, online! Guess the word before your friends do.",
    image: "/project-images/wordlify.gif",
    alt: "An animated gif of the word Wordlify",
    skills: ["TypeScript", "Firebase", "Thunder Client"],
    isTeamProject: true,
    isFeatured: true,
    links: {
      github: "https://github.com/arundeegutla/shellhacks2024",
      site: "shellhacks24.web.app/",
    },
  },
  {
    id: 4,
    title: "MegaBites",
    type: "Mobile App",
    description:
      "A cooking social media Android app. Compiles your saved and created recipes and allows you to time your cooking.",
    image: "/project-images/megabites-logo.png",
    alt: "The MegaBites logo: a dinner plate with a red notification bell in the corner.",
    skills: ["React Native", "JavaScript", "Jira"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      github: "https://github.com/Silver-Sword/MegaBites",
    },
  },
  {
    id: 5,
    title: "Quantum Key Distribution Research Paper",
    type: "Research Paper",
    description:
      "A research paper on Noise Resistance in Quantum Key Distribution Protocols, a analysis of error in quantum computing communication.",
    image: "/project-images/qkd-image.png",
    alt: "A diagram of a quantum key distribution protocol.",
    skills: ["Python", "Research", "Quantum Computing"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      paper:
        "https://drive.google.com/file/d/1T2LSIi4lhwbD7ztjSyHlBxFoXOqN81OD/view?usp=drive_link",
    },
  },
  {
    id: 6,
    title: "GMO Corporations Case Study",
    type: "Research Paper",
    description:
      "A case study on the business practices of GMO corporations and their impact on the environment in Missouri.",
    image: "/project-images/gmo-image.jpg",
    alt: "A DNA helix composed of fruits and vegetables",
    skills: ["Python", "LaTeX", "Research"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      paper:
        "https://drive.google.com/file/d/1zyQd2kivcRPiF9otlUeA7JjVKVCWUkym/view?usp=sharing",
    },
  },
  {
    id: 7,
    title: "Alchemy",
    type: "Video Game",
    description: "Mix items and create increasingly complex entities.",
    image: "/project-images/elements.jpg",
    alt: "Four tiles with the elements of fire, water, earth, and air surrounding a lotus tile on a wooden surface.",
    skills: ["Java", "Eclipse", "Github"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      github: "https://github.com/Silver-Sword/Alchemy",
    },
  },
  {
    id: 8,
    title: "Competitive Programming Training",
    type: "Collection of Solutions",
    description:
      "A collection of solutions to competitive programming problems from Codeforces and other similar sites.",
    image: "/project-images/programming.webp",
    alt: "A black screen with vertical lines of green numbers and letters",
    skills: ["C++", "Java", "Algorithms", "Data Structures"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      github: "https://github.com/Silver-Sword/Competitive-Programming-Samples",
    },
  },
  {
    id: 9,
    title: "Personal Portfolio Website",
    type: "Web App",
    description:
      "The very website you are viewing. A personal portfolio website to showcase my work and highlights.",
    image: "/project-images/portfolio.jpg",
    alt: "A colorful portfolio container.",
    skills: ["React", "Next.js", "Tailwind CSS"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      github: "https://github.com/Silver-Sword/Silver-Sword.github.io",
      site: "https://silver-sword.github.io/",
    },
  },
  {
    id: 10,
    title: "Privacy-Conscious Fall Dectection Machine Learning Research",
    type: "Research Poster",
    description:
      "A research poster on detecting fallen people in static images using machine learning and Python.",
    image: "/project-images/fallen-person.jpg",
    alt: "Several clipart images of older individuals in various stages of falling.",
    skills: ["Python", "Machine Learning", "Computer Vision"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      site: "https://iotreu.cs.ucf.edu/wp-content/uploads/2023/05/Gittings_Chris_REU_Poster_Sum22.pdf",
    },
  },
  {
    id: 11,
    title: "Dynamic Connectivity Paper",
    type: "Research Paper",
    description:
      "A exploratory paper on Dynamic Connectivity, a data structure used in graph theory.",
    image: "/project-images/dynamic-connectivity-image.png",
    alt: "A artistically rendered graph.",
    skills: ["C++", "Data Structures", "Algorithms"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      paper:
        "https://drive.google.com/file/d/1HASUOMZgv2qnuIYckaLrlmD8RH_dc5SG/view?usp=sharing",
    },
  },
  {
    id: 12,
    title: "Splay Tree and Link Cut Tree Paper",
    type: "Research Paper",
    description:
      "A research paper on Splay Trees and Link Cut Trees, two data structures used in graph theory.",
    image: "/project-images/tree.jpg",
    alt: "A tree",
    skills: ["C++", "Data Structures", "Algorithms"],
    isTeamProject: false,
    isFeatured: false,
    links: {
      paper:
        "https://drive.google.com/file/d/1CT5CMdqIiQxkxC3VmARE5qlg90l7X48N/view?usp=sharing",
    },
  },
];

export function getFeaturedProjects(): ProjectProperties[] {
  return PROJECTS.filter((project) => project.isFeatured);
}
