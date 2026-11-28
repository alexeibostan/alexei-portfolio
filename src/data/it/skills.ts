import type { Skill } from '@/types';

// Kept short on purpose: ~12 skills grouped by depth reads more senior than a long list with year counters.
export const skills: Skill[] = [
  { name: "TypeScript", depth: "daily", contextLine: "Da quando Angular 2 lo ha reso standard. Sostenitore dello strict mode in ogni progetto dall'inizio della mia carriera." },
  { name: "React", depth: "daily", contextLine: "Utilizzato in ogni ruolo da Deliverect, dalle librerie di componenti all'intera piattaforma DraughtsAI." },
  { name: "Next.js", depth: "daily", contextLine: "Il mio framework preferito per app in produzione: Tenpu, Pulse e questo portfolio." },
  { name: "Node.js", depth: "daily", contextLine: "Base server-side per DraughtsAI e molteplici progetti Bostan Software." },
  { name: "tRPC", depth: "daily", contextLine: "Livello API type-safe per la piattaforma di procurement Tenpu." },
  { name: "PostgreSQL", depth: "daily", contextLine: "Database relazionale principale nei progetti Tenpu e Deliverect." },
  { name: "Tailwind CSS", depth: "daily", contextLine: "Styling rapido per Tenpu, progetti Bostan Software e questo portfolio." },
  { name: "Python", depth: "production", contextLine: "Lavoro backend presso Deliverect: FastAPI, Celery, pipeline dati." },
  { name: "FastAPI", depth: "production", contextLine: "Servizi API dietro la piattaforma analitica Pulse presso Deliverect." },
  { name: "Vue.js", depth: "production", contextLine: "Sviluppo di uno strumento di digitalizzazione P&ID per ingegneria chimica presso Bostan Software." },
  { name: "Docker", depth: "production", contextLine: "Deployment containerizzati presso Deliverect e Tenpu." },
  { name: "Angular", depth: "earlier", contextLine: "Le fondamenta della mia carriera iniziale. Finanza al consumo in Kirey Group e banca digitale in Mobilesoft." },
  { name: "RxJS", depth: "earlier", contextLine: "Flussi di dati reattivi nelle app Angular presso Kirey Group e Mobilesoft." },
];
