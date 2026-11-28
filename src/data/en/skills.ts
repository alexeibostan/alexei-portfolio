import type { Skill } from '@/types';

// Kept short on purpose: ~12 skills grouped by depth reads more senior than a long list with year counters.
export const skills: Skill[] = [
  { name: "TypeScript", depth: "daily", contextLine: "Since Angular 2 made it standard. Strict mode advocate across every project since the start of my career." },
  { name: "React", depth: "daily", contextLine: "Used across every role since Deliverect, from component libraries to the full DraughtsAI platform." },
  { name: "Next.js", depth: "daily", contextLine: "My go-to framework for production apps: Tenpu, Pulse, and this portfolio." },
  { name: "Node.js", depth: "daily", contextLine: "Server-side foundation for DraughtsAI and multiple Bostan Software projects." },
  { name: "tRPC", depth: "daily", contextLine: "Type-safe API layer for the Tenpu procurement platform." },
  { name: "PostgreSQL", depth: "daily", contextLine: "Primary relational database across Tenpu and Deliverect projects." },
  { name: "Tailwind CSS", depth: "daily", contextLine: "Rapid styling across Tenpu, Bostan Software projects, and this portfolio." },
  { name: "Python", depth: "production", contextLine: "Backend work at Deliverect: FastAPI, Celery, data pipelines." },
  { name: "FastAPI", depth: "production", contextLine: "API services behind the Pulse analytics platform at Deliverect." },
  { name: "Vue.js", depth: "production", contextLine: "Building a P&ID digitalization tool for chemical engineering at Bostan Software." },
  { name: "Docker", depth: "production", contextLine: "Containerized deployments at Deliverect and Tenpu." },
  { name: "Angular", depth: "earlier", contextLine: "Foundation of my early career. Consumer finance at Kirey Group and digital banking at Mobilesoft." },
  { name: "RxJS", depth: "earlier", contextLine: "Reactive data flows across Angular apps at Kirey Group and Mobilesoft." },
];
