import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Body from "./Body";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Alexei Bostan - Senior Software Engineer",
  description: "Senior Software Engineer with 8+ years of experience specializing in frontend and backend technologies including React, Next.js, Python, and FastAPI.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <Body>
        {children}
      </Body>
    </html>
  );
}
