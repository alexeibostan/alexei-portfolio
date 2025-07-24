import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales } from '@/i18n';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Alexei Bostan - Senior Software Engineer",
  description: "Senior Software Engineer with 8+ years of experience specializing in frontend and backend technologies including React, Next.js, Python, and FastAPI.",
  icons: {
    icon: [
      { url: `${process.env.BASE_PATH}/favicon.ico`, sizes: "any" },
      { url: `${process.env.BASE_PATH}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${process.env.BASE_PATH}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    ],
    apple: { url: `${process.env.BASE_PATH}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" },
    other: [
      { url: `${process.env.BASE_PATH}/android-chrome-192x192.png`, sizes: "192x192", type: "image/png" },
      { url: `${process.env.BASE_PATH}/android-chrome-512x512.png`, sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: `${process.env.BASE_PATH}/site.webmanifest`,
};

// Generate static params for all locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}