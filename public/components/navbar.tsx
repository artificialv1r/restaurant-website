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
      <div className="bg-transparent md:hidden">
        <div className="flex justify-between items-center p-[20px]">
          <Link href="/" className="font-[playfair] text-[20px]/[1]">
            Premium <br /> Govedina
          </Link>
          <button className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M4 6h16M4 12h16m-7 6h7"/></svg>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <ul className="flex items-center justify-between p-4 text-white">
            {navLinks.map((item, index) => (
              <li key={index} className="py-1">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
