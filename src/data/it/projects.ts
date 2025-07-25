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
    type: "Dashboard di Analisi",
    period: "2023 - Presente",
    description: "Come Senior Software Engineer, aiuto a sviluppare questa dashboard di analisi che fornisce approfondimenti in tempo reale sulle prestazioni dei ristoranti. Lavoro sia sui componenti frontend (Next.js/React) che backend (Python/FastAPI) con dati memorizzati su PostgreSQL, MongoDB e BigQuery.",
    skills: ["Next.js", "React", "Python", "FastAPI", "PostgreSQL", "MongoDB", "BigQuery"],
    role: "SE",
  },
  {
    company: "Deliverect",
    name: "Deliverect Design System",
    type: "Libreria di Componenti",
    period: "2022 - 2023",
    description: "Ho iniziato la prima iterazione del design system di Deliverect con componenti basati su Radix UI, vanilla-extract-css e storybook per un flusso di lavoro di sviluppo migliorato e coerenza UI.",
    skills: ["React.js", "TypeScript", "Radix UI", "vanilla-extract-css", "Storybook"],
    role: "FE",
  },
  {
    company: "Bostan Software Developments",
    name: "P&ID Digitalization Solution",
    type: "App Web",
    period: "2024 - Presente",
    description: "Soluzione digitale innovativa per processi di ingegneria chimica, specificamente nella digitalizzazione P&ID. Progetto di collaborazione universitaria utilizzando stack Vue.js moderno.",
    skills: ["Vue.js", "Tailwind CSS", "shadcn-vue", "vue-query", "KonvaJS"],
    role: "FE",
  },
  {
    company: "Kirey Group",
    name: "Consumer Finance Application",
    type: "App Web",
    period: "Mag 2020 - Ott 2021",
    description: "Ho aggiornato un'applicazione di finanza al consumo da Angular 7 ad Angular 8. Ho refactorizzato le pagine per utilizzare più RxJS e ridurre i bug.",
    skills: ["Angular 8", "TypeScript", "RxJS", "Angular Material"],
    role: "FE",
  },
  {
    company: "Mobilesoft",
    name: "Igea Banca Digital Platform",
    type: "App Web",
    period: "2017-2019",
    description: "Ho iniziato un'applicazione con Angular 2-7 e l'ho fatta crescere fino a diventare la principale piattaforma digitale di Igea Banca. Ho utilizzato tecniche come il code splitting per ridurre la dimensione del bundle.",
    skills: ["Angular 2-7", "TypeScript", "RxJS", "Reactive Forms"],
    role: "FE",
  }
];
