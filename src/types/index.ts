/**
 * Shared type definitions for the portfolio data structure
 * This ensures consistency across all locales and reduces duplication
 */

export type Project = {
  company: string;
  name: string;
  type: string;
  period: string;
  description: string;
  problem: string;
  craft: string;
  impact: string;
  skills: string[];
  role: string;
};

export type JobEntry = {
  period: string;
  company: string;
  role: string;
  description: string;
  insight: string;
};

export type Company = {
  name: string;
  period: string;
  url?: string;
};

export type Skill = {
  name: string;
  category: string;
  years: string;
  contextLine?: string;
};

export type AITool = {
  name: string;
  description: string;
  iconPath: string;
};

export type Methodology = {
  name: string;
  description?: string;
};