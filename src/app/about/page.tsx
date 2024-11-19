import { Badge } from "@/components/ui/badge";
import { Timeline, TimelineItem } from "@/components/ui/timeline";

import FavoriteSection from "./FavoriteSection";

export default function About() {
  const workExperience = [
    {
      date: "May 2024 - Aug 2024",
      title: "Software Engineering Intern",
      company: "Statsig",
      description: [
        "Designed and deployed a TypeScript service to satisfy customer SLAs, connecting customers to their data in 2-3 seconds instead of 1-2 minutes",
        "Created a TypeScript service that sped up the regeneration of customer data by 300%",
        "Converted a TypeScript API into Rust to utilize Rust’s inherent parallel functionality, saving Statsig $20/day",
      ],
    },
    {
      date: "Sep 2020 - May 2024",
      title: "Competitive Programming Team Member",
      company: "University of Central Florida",
      description: [
        "Collaborated in programming teams of three to solve 8-12 problems in 5 hour practice contests",
        "Studied 100+ advanced data structures and algorithms, like dynamic connectivity, treaps, and Minkowski sums",
        "Solved 1000+ problems using Java and C++ with an average program length of 100-200 lines",
      ],
    },
    {
      date: "May 2023 - Jul 2023",
      title: "Teaching Assistant",
      company: "University of Central Florida",
      description: [
        "Lectured on data structures and competitive programming problem solutions",
        "Supported students in fixing and improving their competitive programming solutions",
        "Collaborated on creating problems and data for contest problems with other Teaching Assistants",
      ],
    },
    {
      date: "May 2022 - Jul 2022",
      title: "Machine Learning Researcher",
      company: "University of Central Florida REU",
      description: [
        "Investigated computer vision and machine learning algorithms for detecting fallen people in static images",
        "Collected an image database of 30,000+ images using Google scraping tools",
        "Developed image classification in Python with >95% accuracy using algorithms like ResNet and VGG19",
      ],
    },
    {
      date: "Jun 2021 - Oct 2021",
      title: "Software Development Freelancer",
      company: "Upwork and Parker Dewey",
      description: [
        "Created a Visual Basic application to automate PowerPoint to .mp4 conversions",
        "Designed a Google Sheet dashboard to automate filtering data using fluctuating criteria",
      ],
    },
    {
      date: "May 2018 - Aug 2019 (Seasonal)",
      title: "Software Engineering Intern",
      company: "Lockheed Martin",
      description: [
        "Automated heuristic text matching between text files and variable file types using Python",
        "Improved the runtime of in-house Visual Basic applications by over 96%",
        "Designed internal websites using Confluence, HTML, and CSS",
      ],
    },
  ];

  const skills = {
    languages: [
      "C",
      "C++",
      "C#",
      "CSS",
      "Haskell",
      "HTML",
      "Java",
      "JavaScript",
      "Python",
      "Rust",
      "TypeScript",
      "Visual Basic",
    ],
    frameworks: ["Next.js", "Node.js", "React", "React Native", "Tailwind CSS"],
    tools: [
      "Firebase",
      "Git",
      "Github",
      "Google Suite",
      "Graphite",
      "Jira",
      "Linux",
      "Microsoft Office",
      "Unity",
      "VS Code",
    ],
  };

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">About</h1>
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          Hi there! Welcome to my Portfolio! I'm a passionate software engineer
          with a love problem solving and learning. I specialize in backend
          development and advanced knowledge of algorithms and data structures.
          I also have a blossoming love for indie game development.
          <br />
          <br />
          As a software engineer, I've interned at Statsig and Lockheed Martin.
          I have also been on my University's competitive programming team for
          the past four years and have competed in the ACM ICPC Southeast USA
          regional competition as well as online on sites like Codeforces and
          CodeChef.
          <br />
          <br />
          I am about to graduate with a degree in Computer Science and I'm
          excited to apply my skills to real-world problems. When I'm not
          coding, you can find me exploring new technologies, playing video
          games, or diving into a good book.
          <br />
          <br />
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-medium mb-2 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <Timeline>
          {workExperience.map((job, index) => (
            <TimelineItem key={index}>
              <TimelineItem.Header>
                <TimelineItem.Title>{job.title}</TimelineItem.Title>
                <TimelineItem.Subtitle>{job.company}</TimelineItem.Subtitle>
              </TimelineItem.Header>
              <TimelineItem.Content>
                <p className="text-sm text-muted-foreground mb-2">{job.date}</p>
                <ul className="list-disc list-inside space-y-1">
                  {job.description.map((item, index) => (
                    <li key={index} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </TimelineItem.Content>
            </TimelineItem>
          ))}
        </Timeline>
      </section>

      <FavoriteSection />
    </div>
  );
}
