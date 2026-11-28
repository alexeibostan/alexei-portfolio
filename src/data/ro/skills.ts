import type { Skill } from '@/types';

// Kept short on purpose: ~12 skills grouped by depth reads more senior than a long list with year counters.
export const skills: Skill[] = [
  { name: "TypeScript", depth: "daily", contextLine: "De când Angular 2 l-a făcut standard. Susținător al strict mode în fiecare proiect de la începutul carierei." },
  { name: "React", depth: "daily", contextLine: "Folosit în fiecare rol de la Deliverect, de la biblioteci de componente la platforma completă DraughtsAI." },
  { name: "Next.js", depth: "daily", contextLine: "Framework-ul meu preferat pentru aplicații în producție: Tenpu, Pulse și acest portfolio." },
  { name: "Node.js", depth: "daily", contextLine: "Fundația server-side pentru DraughtsAI și multiple proiecte Bostan Software." },
  { name: "tRPC", depth: "daily", contextLine: "Nivel API type-safe pentru platforma de achiziții Tenpu." },
  { name: "PostgreSQL", depth: "daily", contextLine: "Bază de date relațională principală în proiectele Tenpu și Deliverect." },
  { name: "Tailwind CSS", depth: "daily", contextLine: "Stilizare rapidă la Tenpu, proiecte Bostan Software și acest portfolio." },
  { name: "Python", depth: "production", contextLine: "Lucru backend la Deliverect: FastAPI, Celery, pipeline-uri de date." },
  { name: "FastAPI", depth: "production", contextLine: "Servicii API în spatele platformei analitice Pulse la Deliverect." },
  { name: "Vue.js", depth: "production", contextLine: "Construirea unui instrument de digitalizare P&ID pentru inginerie chimică la Bostan Software." },
  { name: "Docker", depth: "production", contextLine: "Implementări containerizate la Deliverect și Tenpu." },
  { name: "Angular", depth: "earlier", contextLine: "Baza carierei mele timpurii. Finanțe de consum la Kirey Group și banking digital la Mobilesoft." },
  { name: "RxJS", depth: "earlier", contextLine: "Fluxuri de date reactive în aplicațiile Angular la Kirey Group și Mobilesoft." },
];
