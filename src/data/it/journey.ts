export type JobEntry = {
  period: string;
  company: string;
  role: string;
  description: string;
};

export const professionalJourney: JobEntry[] = [
  {
    period: "Nov 2021 - Presente",
    company: "Deliverect",
    role: "Senior Software Engineer",
    description: "Recentemente promosso a Senior Software Engineer. Inizialmente ho lavorato su prodotti di marketing in Next.js e ho costruito la prima iterazione del design system di Deliverect. Ora contribuisco sia allo sviluppo frontend che backend per la dashboard di analisi Pulse, utilizzando Python, FastAPI, Celery e vari database (PostgreSQL, MongoDB, BigQuery). Guido iniziative tecniche e mentoro i membri del team.",
  },
  {
    period: "2024-Presente",
    company: "Bostan Software Developments",
    role: "Proprietario e Consulente Part-time",
    description: "Ho avviato un'azienda di consulenza software collaborando con un cliente universitario per innovare soluzioni digitali per processi di ingegneria chimica, specificamente nella digitalizzazione P&ID. Utilizzando VueJS, Tailwind CSS, shadcn-vue, vue-query, KonvaJS.",
  },
  {
    period: "Mag 2020 - Ott 2021",
    company: "Kirey Group (Unicredit)",
    role: "Frontend Developer",
    description: "Ho aggiornato un'applicazione di finanza al consumo da Angular 7 ad Angular 8. Sono diventato il punto di riferimento per il frontend dell'applicazione di finanza al consumo. Ho refactorizzato diverse pagine per utilizzare più RxJS e ridurre i bug.",
  },
  {
    period: "Lug 2016 - Nov 2019",
    company: "Mobilesoft",
    role: "Frontend Developer",
    description: "Ho iniziato un'applicazione con Angular 2-7 e l'ho fatta crescere fino a diventare la principale piattaforma digitale di Igea Banca. Ho utilizzato tecniche come il code splitting per ridurre la dimensione del bundle, RxJs e Reactive forms. Ho lavorato su piccoli progetti con NodeJS e MongoDB, e diverse app mobili ibride con Ionic e Appcelerator Titanium.",
  }
];
