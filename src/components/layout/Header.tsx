"use client";

import { useState } from "react";
import Link from "next/link";
import { Instagram, Linkedin, Menu, X, Github } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-[#325080]">
              Alexei Bostan
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              Skills
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#325080] hover:underline px-3 py-2 text-sm font-medium"
            >
              About
            </Link>
          </nav>

          {/* Social Media Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/alexandre.lord1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#E1306C] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexei-bostan-6706b6a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0077B5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alexeibostan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              Skills
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#325080] hover:bg-gray-50"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </div>
          <div className="px-5 py-3 border-t border-gray-200 flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/alexandre.lord1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#E1306C]"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexei-bostan-6706b6a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0077B5]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/alexeibostan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
