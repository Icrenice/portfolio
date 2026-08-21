export type Project = {
  title: string;
  context: string;
  period?: string;
  description: string;
  contribution: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "Event Synchronization Platform",
    context: "Graduation Internship",
    period: "Feb 2026 — Jul 2026",
    description:
      "A modular event synchronization system for WordPress that ingests data from multiple ticketing providers, normalizes it into a canonical event model, and exposes consistent event data to WordPress and headless frontends.",
    contribution:
      "Designed and developed the synchronization architecture, including provider adapters, mappers, repositories, scheduled synchronization, webhooks, custom database persistence, and GraphQL integration.",
    technologies: [
      "PHP",
      "WordPress",
      "Composer",
      "REST APIs",
      "WPGraphQL",
      "SQL",
      "Webhooks",
      "Cron",
      "PHPUnit",
      "Docker",
    ],
  },

  {
    title: "Fitness Leveling",
    context: "1st Place · School Competition",
    period: "Sep 2024 — Jan 2025",
    description:
      "An AI-powered cross-platform fitness application that motivates users through personalized daily quests, progress tracking, streaks, and social competition.",
    contribution:
      "Built in a two-person team with shared full-stack responsibility. My main technical contributions included OpenAI-powered quest generation, backend architecture, scheduling logic, API integration and testing, while also contributing to the React Native mobile application.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MySQL",
      "OpenAI",
      "REST APIs",
      "GitHub Actions",
    ],
  },

  {
    title: "Zoo Management API",
    context: "Software Engineering Project",
    description:
      "A .NET application for managing animals, enclosures, categories, and zoo operations through a REST API with persistent relational data and domain-specific business logic.",
    contribution:
      "Implemented the ASP.NET Core application, REST endpoints, Entity Framework data layer, domain logic, database modelling, API documentation, and automated tests.",
    technologies: [
      "C#",
      "ASP.NET Core",
      "REST APIs",
      "Entity Framework",
      "SQL Server",
      "Testing",
    ],
    github: "https://github.com/Icrenice/Csharp-eindopdracht",
  },
];