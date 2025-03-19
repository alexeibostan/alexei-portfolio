import { Project, projects } from './projects';

// Group projects by company
export function getProjectsByCompany(): Record<string, Project[]> {
  const projectsByCompany: Record<string, Project[]> = {};
  
  projects.forEach(project => {
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