"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main" role="main" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
