import type { Project } from './en/projects';

// Group projects by company
export async function getProjectsByCompany(locale: string = 'en'): Promise<Record<string, Project[]>> {
  // Statically import the localized data based on locale
  let projects;
  switch (locale) {
    case 'nl':
      projects = (await import('./nl/projects')).projects;
      break;
    case 'it':
      projects = (await import('./it/projects')).projects;
      break;
    case 'ro':
      projects = (await import('./ro/projects')).projects;
      break;
    default:
      projects = (await import('./en/projects')).projects;
      break;
  }
  
  const projectsByCompany: Record<string, Project[]> = {};
  
  projects.forEach((project: Project) => {
    if (!projectsByCompany[project.company]) {
      projectsByCompany[project.company] = [];
    }
    projectsByCompany[project.company].push(project);
  });
  
  return projectsByCompany;
}

// Company website URLs
export const companyWebsites: Record<string, string> = {
  "Deliverect": "https://www.deliverect.com",
  "Kirey Group": "https://www.kireygroup.com",
  "Dedagroup - MC Engineering": "https://www.dedagroup.it",
  "Mobilesoft": "https://www.mobilesoft.it"
};

// Company colors for UI elements
export const companyColors: Record<string, string> = {
  "Deliverect": "border-l-[#325080]",
  "Bostan Software Developments": "border-l-[#4CAF50]",
  "Kirey Group": "border-l-[#e16642]",
  "Dedagroup - MC Engineering": "border-l-[#c18f68]",
  "Mobilesoft": "border-l-[#7494be]",
}; 