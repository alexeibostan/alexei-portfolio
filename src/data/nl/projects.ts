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
    period: "2023 - Heden",
    description: "Als Senior Software Engineer help ik bij het ontwikkelen van dit analytics dashboard dat real-time inzichten biedt in restaurantprestaties. Werk aan zowel frontend (Next.js/React) als backend (Python/FastAPI) componenten met data opgeslagen in PostgreSQL, MongoDB en BigQuery.",
    skills: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "MongoDB", "BigQuery"],
    role: "SE",
  },
  {
    company: "Deliverect",
    name: "Deliverect Design System",
    type: "Component Bibliotheek",
    period: "2022 - 2023",
    description: "Begon de eerste iteratie van Deliverect's design systeem met componenten gebaseerd op Radix UI, vanilla-extract-css en storybook voor verbeterde ontwikkelworkflow en UI consistentie.",
    skills: ["React.js", "TypeScript", "Radix UI", "vanilla-extract-css", "Storybook"],
    role: "FE",
  },
  {
    company: "Bostan Software Developments",
    name: "P&ID Digitalization Solution",
    type: "Web App",
    period: "2024 - Heden",
    description: "Innovatieve digitale oplossing voor chemische technische processen, specifiek in P&ID digitalisering. Universitaire samenwerkingsproject met moderne Vue.js stack.",
    skills: ["Vue.js", "Tailwind CSS", "shadcn-vue", "vue-query", "KonvaJS"],
    role: "FE",
  },
  {
    company: "Kirey Group",
    name: "Consumer Finance Application",
    type: "Web App",
    period: "Mei 2020 - Okt 2021",
    description: "Een consumentenfinancieringsapplicatie geüpgraded van Angular 7 naar Angular 8. Pagina's gerefactord om meer RxJS te gebruiken en bugs te verminderen.",
    skills: ["Angular 8", "TypeScript", "RxJS", "Angular Material"],
    role: "FE",
  },
  {
    company: "Mobilesoft",
    name: "Igea Banca Digital Platform",
    type: "Web App",
    period: "2017-2019",
    description: "Een applicatie gestart met Angular 2-7 en liet deze groeien tot het hoofddigitale platform van Igea Banca. Technieken gebruikt zoals code splitting om de bundle grootte te verkleinen.",
    skills: ["Angular 2-7", "TypeScript", "RxJS", "Reactive Forms"],
    role: "FE",
  }
];
