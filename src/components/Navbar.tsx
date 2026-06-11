"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Courses", href: "/#courses", scrollTo: "courses" },
  { label: "Programs", href: "/programs" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Reviews", href: "/reviews", scrollTo: "reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function handleNavClick(e: React.MouseEvent, scrollTo?: string) {
    if (!scrollTo) return;
    e.preventDefault();
    const el = document.getElementById(scrollTo);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  function isActive(href: string) {
    if (href.startsWith("/#")) return false; // scroll links never get underline from route
    return pathname === href;
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-[#b8dece] h-[72px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0e7c5a] via-[#e74c3c] to-[#0e7c5a]" />

        <Link
          href="/"
          className="flex items-center gap-3 md:gap-4 no-underline min-w-0"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={64}
            height={64}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />
          <div className="min-w-0">
            <p className="truncate text-base font-extrabold text-[#0a2e1f] md:text-2xl">
              Sec Concept <span className="text-[#0e7c5a]">Networks</span>
            </p>
            <p className="truncate text-[10px] text-[#5a8a72] mt-0.5 md:text-sm">
              Networking · Cybersecurity · Cloud Security
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5 md:gap-7 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.scrollTo)}
                className={`text-sm font-medium no-underline transition-colors pb-1 border-b-2 ${
                  isActive(link.href)
                    ? "text-[#0e7c5a] border-[#0e7c5a]"
                    : "text-[#1e4d35] border-transparent hover:text-[#0e7c5a]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-[#0e7c5a] text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-[#095e42] transition-colors whitespace-nowrap"
            >
              Enroll Now →
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={open ? "true" : "false"}
          type="button"
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-6 h-0.5 bg-[#0a2e1f] rounded block transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0a2e1f] rounded block transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-[#0a2e1f] rounded block transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-[#b8dece] shadow-lg z-50 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.scrollTo)}
              className="py-3 text-sm font-medium text-[#1e4d35] no-underline border-b border-[#e6f4ee]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/enroll"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full justify-center bg-[#0e7c5a] text-white text-sm font-bold px-5 py-3 rounded-lg no-underline hover:bg-[#095e42] transition-colors"
          >
            Enroll Now →
          </Link>
        </div>
      )}
    </>
  );
}
