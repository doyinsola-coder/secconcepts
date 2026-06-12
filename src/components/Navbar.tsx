"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
    if (href.startsWith("/#")) return false; 
    return pathname === href;
  }

  return (
    <>
      <nav className={`${sora.className} sticky top-0 z-50 bg-black border-b border-[#20B2AA] h-[72px] flex items-center justify-between px-4 sm:px-6 lg:px-8`}>
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
            <p className="truncate text-base font-extrabold text-white md:text-2xl">
              Sec Concept <span className="text-white">Networks</span>
            </p>
            <p className="truncate text-[10px] text-[#20B2AA] font-bold tracking-wider mt-0.5 md:text-sm uppercase">
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
                className={`text-sm font-semibold no-underline transition-colors pb-1 border-b-2 ${
                  isActive(link.href)
                    ? "text-white border-[#20B2AA]"
                    : "text-white/80 border-transparent hover:text-[#20B2AA] hover:border-[#20B2AA]/50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-[#FF073A] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#FF073A]/90 hover:shadow-[0_0_15px_rgba(255,7,58,0.4)] transition-all duration-300 whitespace-nowrap"
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
        <div className={`${sora.className} md:hidden fixed top-[72px] left-0 right-0 bg-black border-b border-[#20B2AA] shadow-2xl z-50 px-6 py-6 flex flex-col gap-2`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.scrollTo)}
              className={`py-3 text-sm font-medium no-underline border-b border-white/10 transition-colors ${
                isActive(link.href)
                  ? "text-[#20B2AA] border-b border-[#20B2AA]"
                  : "text-white/85 hover:text-[#20B2AA]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => open(false)}
            className="mt-4 inline-flex w-full justify-center bg-[#FF073A] text-white text-sm font-bold px-5 py-3 rounded-lg no-underline hover:bg-[#FF073A]/90 hover:shadow-[0_0_15px_rgba(255,7,58,0.4)] transition-all duration-300"
          >
            Enroll Now →
          </Link>
        </div>
      )}
    </>
  );
}