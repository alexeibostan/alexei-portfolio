import type { Skill } from '@/types';

// Kept short on purpose: ~12 skills grouped by depth reads more senior than a long list with year counters.
export const skills: Skill[] = [
  { name: "TypeScript", depth: "daily", contextLine: "Sinds Angular 2 het standaard maakte. Strict mode voorstander in elk project sinds het begin van mijn carrière." },
  { name: "React", depth: "daily", contextLine: "Gebruikt in elke rol sinds Deliverect, van componentbibliotheken tot het volledige DraughtsAI-platform." },
  { name: "Next.js", depth: "daily", contextLine: "Mijn favoriete framework voor productie-apps: Tenpu, Pulse en dit portfolio." },
  { name: "Node.js", depth: "daily", contextLine: "Server-side basis voor DraughtsAI en meerdere Bostan Software-projecten." },
  { name: "tRPC", depth: "daily", contextLine: "Type-safe API-laag voor het Tenpu-inkoopplatform." },
  { name: "PostgreSQL", depth: "daily", contextLine: "Primaire relationele database bij Tenpu- en Deliverect-projecten." },
  { name: "Tailwind CSS", depth: "daily", contextLine: "Snelle styling bij Tenpu, Bostan Software-projecten en dit portfolio." },
  { name: "Python", depth: "production", contextLine: "Backend werk bij Deliverect: FastAPI, Celery, datapipelines." },
  { name: "FastAPI", depth: "production", contextLine: "API-services achter het Pulse-analyseplatform bij Deliverect." },
  { name: "Vue.js", depth: "production", contextLine: "Een P&ID-digitaliseringstool bouwen voor chemische techniek bij Bostan Software." },
  { name: "Docker", depth: "production", contextLine: "Gecontaineriseerde deployments bij Deliverect en Tenpu." },
  { name: "Angular", depth: "earlier", contextLine: "De basis van mijn vroege carrière. Consumentenfinanciering bij Kirey Group en digitaal bankieren bij Mobilesoft." },
  { name: "RxJS", depth: "earlier", contextLine: "Reactieve datastromen in Angular-apps bij Kirey Group en Mobilesoft." },
];
