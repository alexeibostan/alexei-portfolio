type SaMetadata = Record<string, string | number | boolean>;
type SaEventFn = ((name: string, metadata?: SaMetadata) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    sa_event?: SaEventFn;
  }
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");

function saEvent(name: string, metadata?: SaMetadata): void {
  if (typeof window === "undefined") return;
  // Official Simple Analytics queue stub — latest.js drains .q when it loads,
  // so events fired before the script is ready are not lost.
  window.sa_event =
    window.sa_event ||
    function (...args: unknown[]) {
      const fn = window.sa_event as SaEventFn;
      if (fn.q) {
        fn.q.push(args);
      } else {
        fn.q = [args];
      }
    };
  if (metadata) {
    window.sa_event(name, metadata);
  } else {
    window.sa_event(name);
  }
}

export type SocialNetwork = "email" | "linkedin" | "github" | "instagram";

export const analytics = {
  socialClick: (network: SocialNetwork) => saEvent(`social_click_${network}`),
  resumeDownload: () => saEvent("resume_download"),
  outboundClick: (site: string, url: string) =>
    saEvent(`outbound_click_${slugify(site)}`, { url }),
  languageAutoRedirect: (to: string, from: string) =>
    saEvent(`language_auto_redirect_${to}`, { from }),
  projectView: (projectName: string) =>
    saEvent(`project_view_${slugify(projectName)}`),
  skillView: (skillName: string) => saEvent(`skill_view_${slugify(skillName)}`),
};
