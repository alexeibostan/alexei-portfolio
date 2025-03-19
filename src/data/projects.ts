export type Project = {
  company: string;
  name: string;
  type: string;
  period: string;
  description: string;
  skills: string[];
  role: string;
};

export const projects: Project[] = [
  {
    company: "Deliverect",
    name: "Pulse by Deliverect",
    type: "Analytics Dashboard",
    period: "2023 - Present",
    description: "As Senior Software Engineer, I help develop this analytics dashboard providing real-time insights into restaurant performance. Working on both frontend (Next.js/React) and backend (Python/FastAPI) components with data stored across PostgreSQL, MongoDB, and BigQuery.",
    skills: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "MongoDB", "BigQuery"],
    role: "SE",
  },
  {
    company: "Deliverect",
    name: "Deliverect Design System",
    type: "Component Library",
    period: "2022 - 2023",
    description: "Started the first iteration of Deliverect's design system with components based on Radix UI, vanilla-extract-css and storybook for improved development workflow and UI consistency.",
    skills: ["React.js", "TypeScript", "Radix UI", "vanilla-extract-css", "Storybook"],
    role: "FE",
  },
  {
    company: "Bostan Software Developments",
    name: "P&ID Digitalization Solution",
    type: "Web App",
    period: "2024 - Present",
    description: "Innovative digital solution for chemical engineering processes, specifically in P&ID digitalization. University collaboration project using modern Vue.js stack.",
    skills: ["Vue.js", "Tailwind CSS", "shadcn-vue", "vue-query", "KonvaJS"],
    role: "FE",
  },
  {
    company: "Kirey Group",
    name: "Consumer Finance Application",
    type: "Web App",
    period: "May 2020 - Oct 2021",
    description: "Upgraded a consumer finance application from Angular 7 to Angular 8. Refactored pages to use more RxJS and reduce bugs.",
    skills: ["Angular 8", "TypeScript", "RxJS", "Angular Material"],
    role: "FE",
  },
  {
    company: "Mobilesoft",
    name: "Igea Banca Digital Platform",
    type: "Web App",
    period: "2017-2019",
    description: "Started an application with Angular 2-7 and grew it to the main digital platform of Igea Banca. Used techniques as code splitting to reduce the bundle size.",
    skills: ["Angular 2-7", "TypeScript", "RxJS", "Reactive Forms"],
    role: "FE",
  }
]; 