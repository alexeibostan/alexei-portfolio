export type JobEntry = {
  period: string;
  company: string;
  role: string;
  description: string;
};

export const professionalJourney: JobEntry[] = [
  {
    period: "Nov 2021 - Present",
    company: "Deliverect",
    role: "Senior Software Engineer",
    description: "Recently promoted to Senior Software Engineer. Initially worked on marketing products in Next.js and built the first iteration of Deliverect's design system. Now contributing to both frontend and backend development for Pulse analytics dashboard, using Python, FastAPI, Celery, and various databases (PostgreSQL, MongoDB, BigQuery). Leading technical initiatives and mentoring team members.",
  },
  {
    period: "2024-Present",
    company: "Bostan Software Developments",
    role: "Founder & Owner",
    description: "Started a software consultancy company collaborating with a University customer on innovating digital solutions for chemical engineering processes, specifically in P&ID digitalization. Using VueJS, Tailwind CSS, shadcn-vue, vue-query, KonvaJS.",
  },
  {
    period: "May 2020 - Oct 2021",
    company: "Kirey Group (Unicredit)",
    role: "Frontend Developer",
    description: "Upgraded a consumer finance application from Angular 7 to Angular 8. Became the go-to person for the frontend on the consumer finance application. Refactored several pages to use more RxJS and reduce bugs.",
  },
  {
    period: "Jul 2016 - Nov 2019",
    company: "Mobilesoft",
    role: "Frontend Developer",
    description: "Started an application with Angular 2-7 and grew it to the main digital platform of Igea Banca. Used techniques as code splitting to reduce the bundle size, RxJs, and Reactive forms. Worked on small projects with NodeJS and MongoDB, and several hybrid mobile apps with Ionic and Appcelerator Titanium.",
  }
]; 