"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Ashirwad Consultancy"
                  width={40}
                  height={40}
                />
              </div>
              <span className="text-xl font-bold text-gray-900 hidden md:block">
                Ashirwad Consultancy
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-[#000000] font-bold hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/industrial-loan"
                className="text-[#000] font-bold hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                Industrial Loan
              </Link>
              <Link
                href="/industrial-subsidy"
                className="text-[#000] font-bold hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                Industrial Subsidy
              </Link>
              <Link
                href="/about"
                className="text-[#000] font-bold hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#000] font-bold hover:text-blue-600 px-3 py-2 rounded-md text-sm transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/quick-enquiry"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-bold transition-colors duration-200"
            >
              Quick Enquiry
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/industrial-loan"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Industrial Loan
              </Link>
              <Link
                href="/industrial-subsidy"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Industrial Subsidy
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link
                  href="/quick-enquiry"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium block text-center transition-colors duration-200"
                >
                  Quick Enquiry
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
