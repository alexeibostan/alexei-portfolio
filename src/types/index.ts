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
  skills: string[];
  role: string;
};

export type JobEntry = {
  period: string;
  company: string;
  role: string;
  description: string;
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
};