import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  const favorites = {
    games: [
      { name: "Portal 2", link: "https://store.steampowered.com/app/620/Portal_2/" },
      { name: "Stanley Parable", link: "https://store.steampowered.com/app/221910/The_Stanley_Parable/" },
      { name: "Noita", link: "https://store.steampowered.com/app/881100/Noita/" },
      { name: "Control", link: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/" },
      { name: "Antichamber", link: "https://store.steampowered.com/app/219890/Antichamber/" },
    ],
    books: [
      { name: "Mother of Learning", link: "https://www.royalroad.com/fiction/21220/mother-of-learning" },
      { name: "Bobiverse Series", link: "https://www.goodreads.com/series/192752-bobiverse" },
      { name: "The Murderbot Diaries Series", link: "https://www.goodreads.com/series/191900-the-murderbot-diaries" },
      { name: "Cradle Series", link: "https://www.goodreads.com/series/192821-cradle" },
      { name: "Ready Player One", link: "https://www.goodreads.com/book/show/9969571-ready-player-one" },
    ],
    algorithms: [
      { name: "Tries", link: "https://en.wikipedia.org/wiki/Trie" },
      { name: "Segment Trees", link: "https://en.wikipedia.org/wiki/Segment_tree" },
      { name: "Heavy-Light Decomposition (HLD)", link: "https://cp-algorithms.com/graph/hld.html" },
      { name: "Aho Corasick", link: "https://cp-algorithms.com/string/aho_corasick.html" },
      { name: "Dynamic Connectivity", link: "https://en.wikipedia.org/wiki/Dynamic_connectivity" },
    ],
  }

  const workExperience = [
    { 
      date: "May 2024 - Aug 2024", 
      title: "Software Engineering Intern", 
      company: "Statsig", 
      description: [
        "Designed and deployed a TypeScript service to satisfy customer SLAs, connecting customers to their data in 2-3 seconds instead of 1-2 minutes",
        "Created a TypeScript service that sped up the regeneration of customer data by 300%",
        "Converted a TypeScript API into Rust to utilize Rust’s inherent parallel functionality, saving Statsig $20/day"
      ]
    },
    { 
        date: "Sep 2020 - May 2024", 
        title: "Competitive Programming Team Member", 
        company: "University of Central Florida", 
        description: [
            "Collaborated in programming teams of three to solve 8-12 problems in 5 hour practice contests",
            "Studied 100+ advanced data structures and algorithms, like dynamic connectivity, treaps, and Minkowski sums",
            "Solved 1000+ problems using Java and C++ with an average program length of 100-200 lines",
        ]
      },
      { 
        date: "May 2022 - Jul 2022", 
        title: "Machine Learning Researcher", 
        company: "University of Central Florida REU", 
        description: [
            "Investigated computer vision and machine learning algorithms for detecting fallen people in static images",
            "Collected an image database of 30,000+ images using Google scraping tools",
            "Developed image classification in Python with >95% accuracy using algorithms like ResNet and VGG19",
        ]
      },
      { 
        date: "May 2018 - Aug 2019 (Seasonal)", 
        title: "Software Engineering Intern", 
        company: "Lockheed Martin", 
        description: [
            "Automated heuristic text matching between text files and variable file types using Python",
            "Improved the runtime of in-house Visual Basic applications by over 96%",
            "Designed internal websites using Confluence, HTML, and CSS",
        ]
      },
  ]

  const skills = {
    languages: ["C", "C++", "C#", "CSS", "Haskell", "HTML", "Java", "JavaScript", "Python", "Rust", "TypeScript", "Visual Basic"],
    frameworks: ["Next.js", "Node.js", "React", "React Native", "Tailwind CSS"],
    tools: ["Firebase", "Git", "Github", "Google Suite", "Graphite", "Jira", "Linux", "Microsoft Office", "Unity", "VS Code"],
  }

  return (
    <div className="space-y-12">
      <section>
      <h1 className="text-4xl font-bold mb-8 text-center">About</h1>
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg">
          Hi there! Welcome to my Portfolio! I'm a passionate software engineer with a love problem solving and learning. 
          I am about to graduate with a degree in Computer Science and I'm excited to apply my skills to real-world problems. 
          When I'm not coding, you can find me exploring new technologies, playing video games, or diving into a good book.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-medium mb-2 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
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
                    <li key={index} className="text-sm">{item}</li>
                  ))}
                </ul>
              </TimelineItem.Content>
            </TimelineItem>
          ))}
        </Timeline>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">My Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(favorites).map(([category, items]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="capitalize">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside">
                  {items.map((item, index) => (
                    <li key={index} className="mb-2">
                      <Link href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {item.name}
                        <ExternalLink className="inline-block ml-1 w-4 h-4" />
                      </Link>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}