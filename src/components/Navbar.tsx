"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Courses", href: "/courses" },
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
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap');
        .font-sora-custom {
          font-family: 'Sora', sans-serif !important;
        }
        .text-sea-green { color: #20B2AA !important; }
        .bg-sea-green { background-color: #20B2AA !important; }
        .border-sea-green { border-color: #20B2AA !important; }
        .text-neon-red { color: #FF073A !important; }
        .bg-neon-red { background-color: #FF073A !important; }
        .border-neon-red { border-color: #FF073A !important; }
        
        .text-sea-green-hover:hover { color: #20B2AA !important; }
        .bg-neon-red-hover:hover { background-color: #FF073A !important; opacity: 0.9; }
        .border-sea-green-hover:hover { border-color: #20B2AA !important; opacity: 0.8; }
      `}} />

      <nav className="font-sora-custom sticky top-0 z-50 bg-black border-b border-sea-green h-[72px] flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 right-0 h-[3px]" />

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
            <p className="truncate text-base font-extrabold text-white md:text-2xl font-sora-custom">
              Sec Concept <span className="text-white">Networks</span>
            </p>
            <p className="truncate text-[8px] text-sea-green font-bold tracking-widest mt-0.5 uppercase font-sora-custom">
  Networking · Cybersecurity · Cloud
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
                className={`text-sm font-semibold no-underline transition-colors pb-1 border-b-2 text-sea-green-hover font-sora-custom ${
                  isActive(link.href)
                    ? "text-white border-sea-green"
                    : "text-white/80 border-transparent hover:border-sea-green-hover"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-neon-red bg-neon-red-hover text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,7,58,0.4)] whitespace-nowrap font-sora-custom"
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
            className={`w-6 h-0.5 bg-white rounded block transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded block transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded block transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="font-sora-custom md:hidden fixed top-[72px] left-0 right-0 bg-black border-b border-sea-green shadow-2xl z-50 px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.scrollTo);
                setOpen(false); // Close the mobile drawer on link click
              }}
              className={`py-3 text-sm font-medium no-underline border-b border-white/10 transition-colors text-sea-green-hover font-sora-custom ${
                isActive(link.href)
                  ? "text-sea-green border-sea-green"
                  : "text-white/85"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full justify-center bg-neon-red bg-neon-red-hover text-white text-sm font-bold px-5 py-3 rounded-lg no-underline hover:shadow-[0_0_15px_rgba(255,7,58,0.4)] transition-all duration-300 font-sora-custom"
          >
            Enroll Now →
          </Link>
        </div>
      )}
    </>
  );
}