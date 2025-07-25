export type JobEntry = {
  period: string;
  company: string;
  role: string;
  description: string;
};

export const professionalJourney: JobEntry[] = [
  {
    period: "Noi 2021 - Prezent",
    company: "Deliverect",
    role: "Senior Software Engineer",
    description: "Recent promovat la Senior Software Engineer. Inițial am lucrat la produse de marketing în Next.js și am construit prima iterație a sistemului de design Deliverect. Acum contribui atât la dezvoltarea frontend cât și backend pentru dashboard-ul de analiză Pulse, folosind Python, FastAPI, Celery și diverse baze de date (PostgreSQL, MongoDB, BigQuery). Conduc inițiative tehnice și mentorez membrii echipei.",
  },
  {
    period: "2024-Prezent",
    company: "Bostan Software Developments",
    role: "Proprietar și Consultant Part-time",
    description: "Am început o companie de consultanță software colaborând cu un client universitar pentru inovarea soluțiilor digitale pentru procesele de inginerie chimică, specific în digitalizarea P&ID. Folosind VueJS, Tailwind CSS, shadcn-vue, vue-query, KonvaJS.",
  },
  {
    period: "Mai 2020 - Oct 2021",
    company: "Kirey Group (Unicredit)",
    role: "Frontend Developer",
    description: "Am upgradeat o aplicație de finanțare pentru consumatori de la Angular 7 la Angular 8. Am devenit persoana de referință pentru frontend-ul aplicației de finanțare pentru consumatori. Am refactorizat mai multe pagini pentru a folosi mai mult RxJS și a reduce bug-urile.",
  },
  {
    period: "Iul 2016 - Noi 2019",
    company: "Mobilesoft",
    role: "Frontend Developer",
    description: "Am început o aplicație cu Angular 2-7 și am crescut-o până la principala platformă digitală a Igea Banca. Am folosit tehnici precum code splitting pentru a reduce dimensiunea bundle-ului, RxJs și Reactive forms. Am lucrat la proiecte mici cu NodeJS și MongoDB, și mai multe aplicații mobile hibrid cu Ionic și Appcelerator Titanium.",
  }
];
