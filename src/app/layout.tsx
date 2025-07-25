import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://alexeibostan.com'),
  title: {
    template: '%s | Alexei Bostan',
    default: 'Alexei Bostan – Senior Software Engineer & Tech Lead',
  },
  description: "Senior Software Engineer with 8+ years building scalable web applications with React, Next.js, Python & FastAPI. Technical leader specializing in enterprise solutions.",
  keywords: "Senior Software Engineer, React Developer, Next.js Expert, Python Developer, FastAPI, Technical Lead, Full Stack Developer, JavaScript, TypeScript, Web Development",
  authors: [{ name: "Alexei Bostan" }],
  creator: "Alexei Bostan",
  publisher: "Alexei Bostan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

// Root layout for static export - just passes children through
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}