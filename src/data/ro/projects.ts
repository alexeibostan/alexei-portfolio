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
    type: "Dashboard de Analiză",
    period: "2023 - Prezent",
    description: "Ca Senior Software Engineer, ajut la dezvoltarea acestui dashboard de analiză care oferă perspective în timp real asupra performanței restaurantelor. Lucrez atât la componente frontend (Next.js/React) cât și backend (Python/FastAPI) cu date stocate în PostgreSQL, MongoDB și BigQuery.",
    skills: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "MongoDB", "BigQuery"],
    role: "SE",
  },
  {
    company: "Deliverect",
    name: "Deliverect Design System",
    type: "Bibliotecă de Componente",
    period: "2022 - 2023",
    description: "Am început prima iterație a sistemului de design Deliverect cu componente bazate pe Radix UI, vanilla-extract-css și storybook pentru un flux de lucru de dezvoltare îmbunătățit și consistența UI.",
    skills: ["React.js", "TypeScript", "Radix UI", "vanilla-extract-css", "Storybook"],
    role: "FE",
  },
  {
    company: "Bostan Software Developments",
    name: "P&ID Digitalization Solution",
    type: "Aplicație Web",
    period: "2024 - Prezent",
    description: "Soluție digitală inovatoare pentru procesele de inginerie chimică, specific în digitalizarea P&ID. Proiect de colaborare universitară folosind stack-ul Vue.js modern.",
    skills: ["Vue.js", "Tailwind CSS", "shadcn-vue", "vue-query", "KonvaJS"],
    role: "FE",
  },
  {
    company: "Kirey Group",
    name: "Consumer Finance Application",
    type: "Aplicație Web",
    period: "Mai 2020 - Oct 2021",
    description: "Am upgradeat o aplicație de finanțare pentru consumatori de la Angular 7 la Angular 8. Am refactorizat paginile pentru a folosi mai mult RxJS și a reduce bug-urile.",
    skills: ["Angular 8", "TypeScript", "RxJS", "Angular Material"],
    role: "FE",
  },
  {
    company: "Mobilesoft",
    name: "Igea Banca Digital Platform",
    type: "Aplicație Web",
    period: "2017-2019",
    description: "Am început o aplicație cu Angular 2-7 și am crescut-o până la principala platformă digitală a Igea Banca. Am folosit tehnici precum code splitting pentru a reduce dimensiunea bundle-ului.",
    skills: ["Angular 2-7", "TypeScript", "RxJS", "Reactive Forms"],
    role: "FE",
  }
];
