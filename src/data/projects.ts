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
  demo?: string;
  links?: {
  label: string;
  href: string;
}[];
};

export const projects: Project[] = [
  {
    title: "Event Sync Plugin",
    context: "Graduation Internship · Eagerly",
    description:
      "A provider-independent event synchronization platform for WordPress, designed to normalize event data from multiple ticketing systems into a canonical internal model and expose it consistently to headless frontends through GraphQL.",

    contribution:
      "Analyzed the existing event architecture and designed and implemented a layered replacement around an Event Core Model. Built provider adapters, API clients and mappers, custom database persistence, synchronization strategies, WordPress integration and WPGraphQL exposure, supported by automated and acceptance testing.",

    technologies: [
      "PHP",
      "WordPress",
      "Composer",
      "MySQL",
      "REST APIs",
      "WPGraphQL",
      "Webhooks",
      "SOAP",
      "Cron",
      "PHPUnit"
    ],
    image: "/projects/Event-sync/c2 event-sync.png",
    links: [
      {
        label: "Architecture",
        href: "/projects/event-sync/c2 event-sync.png",
      },
      {
        label: "Components",
        href: "/projects/event-sync/c3 event-sync.png",
      },
      {
        label: "Data Model",
        href: "/projects/event-sync/erd event-sync.png",
      },
      {
        label: "Code Structure",
        href: "/projects/event-sync/c4 event-sync.png",
      },
    ],
  },

  {
    title: "Fitness Leveling",
    context: "1st Place · School Competition",
    period: "Sep 2024 — Jan 2025",
    description:
      "An AI powered crossplatform fitness application that motivates users through personalized daily quests, progress tracking, streaks, and social competition.",
    contribution:
      "Built in a two person team with shared full stack responsibility. My main technical contributions included OpenAI powered quest generation, backend architecture, scheduling logic, API integration and testing, while also contributing to the React Native mobile application.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "MySQL",
      "OpenAI",
      "REST APIs",
      "GitHub Actions",
      "CRON Jobs",
      ],
    image: "/projects/fitness-leveling/logo.png",
    demo: "/projects/fitness-leveling/demo.mp4",
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
    image: "projects/zoo-api/zoo-magemant-diagram.png",
  },
];