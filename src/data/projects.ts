export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A full-stack application built to solve a real-world problem. Replace this with a short explanation of what the system does.",
    technologies: ["PHP", "JavaScript", "SQL", "REST API"],
    image: "/projects/project-one.png",
    github: "https://github.com/Icrenice",
  },
  {
    title: "Project Two",
    description:
      "A backend-focused system with APIs, persistent data, and application logic.",
    technologies: ["Node.js", "TypeScript", "SQL", "Docker"],
    image: "/projects/project-two.png",
    github: "https://github.com/Icrenice",
  },
];