"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Menu", href: "/menu" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Book a table", href: "/book-a-table" },
  ];

  return (
    <section>
      {/* Desktop Nav */}
      <div className="hidden md:flex bg-black w-fit rounded-[12px]">
        <ul className="flex mx-[25px] my-[15px] items-center">
          <li className="font-[playfair] text-[20px]/[1]">
            <Link href="/">
              <p>
                Premium <br /> Govedina
              </p>
            </Link>
          </li>
          <div className="ml-[30px] flex gap-[15px] items-center">
            {navLinks.map((item, index) => (
              <li key={index} className="text-[18px] font-mono">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </div>
        </ul>
      </div>

      {/* Mobile Nav */}
      {/* Mobile Nav */}
      <div className="bg-transparent md:hidden">
        <div className="flex justify-between items-center p-[15px]">
          <Link href="/" className="font-[playfair] text-[20px]/[1]">
            Premium <br /> Govedina
          </Link>
          <button
            className="text-white bg-black/5 backdrop-blur-sm rounded-full p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Overlay background */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-black/50 backdrop-blur-md text-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button Inside */}
          <div className="flex justify-end p-4">
            <button
              className="text-white bg-white/10 p-2 rounded-full backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-col items-center justify-center px-6 space-y-4">
            {navLinks.map((item, index) => (
              <li key={index} className="text-lg">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
