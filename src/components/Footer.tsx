"use client";

import Image from "next/image";
import Link from "next/link";

const courses = [
  { label: "CCNA 200-301", href: "/#courses" },
  { label: "CCNP ENCOR", href: "/#courses" },
  { label: "CCNP ENSLD", href: "/#courses" },
  { label: "CCNP SCOR", href: "/#courses" },
  { label: "SOC Analyst", href: "/#courses" },
  { label: "Linux LPIC-1", href: "/#courses" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Instructors", href: "/about#team" },
  { label: "Student Reviews", href: "/#reviews" },
  { label: "Contact Us", href: "/contact" },
  { label: "Live Website ↗", href: "https://trainwithsec.com", external: true },
];

const connect = [
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Twitter / X", href: "https://x.com/aliyuthayo", external: true },
  { label: "YouTube", href: "https://youtube.com", external: true },
  { label: "WhatsApp Group", href: "https://wa.me/2348039134906", external: true },
  { label: "Newsletter", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="font-sora-custom bg-black border-t border-white/10 px-[5%] pt-16 pb-8">
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
      `}} />

      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 no-underline min-w-0">
              <Image
                src="/logo.png"
                alt="logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div className="min-w-0">
                <p className="truncate text-base font-extrabold text-white">
                  Sec Concept <span className="text-white">Networks</span>
                </p>
                <p className="truncate text-[9px] text-sea-green font-bold tracking-wider mt-0.5 uppercase">
                  Networking · Cybersecurity · Cloud
                </p>
              </div>
            </div>

            <p className="text-white/60 text-[13px] leading-relaxed max-w-[320px]">
              Cisco Authorized Training Partner delivering exam-mapped networking and cybersecurity training in Ilorin, Nigeria.
            </p>

            <div className="flex flex-col gap-2.5">
              <a href="tel:+2348039134906" className="flex items-center gap-2 text-white/60 text-[13px] hover:text-white transition-colors no-underline">
                <span className="text-neon-red">📞</span> +234 8039 134 906
              </a>
              <a href="mailto:info@trainwithsec.com" className="flex items-center gap-2 text-white/60 text-[13px] hover:text-white transition-colors no-underline">
                <span className="text-sea-green">✉</span> info@trainwithsec.com
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[2.5px] text-sea-green font-bold mb-6">Courses</h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {courses.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 text-[13px] hover:text-white transition-colors no-underline font-sora-custom">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[2.5px] text-sea-green font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/60 text-[13px] hover:text-white transition-colors no-underline font-sora-custom"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[2.5px] text-sea-green font-bold mb-6">Connect</h4>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/60 text-[13px] hover:text-white transition-colors no-underline font-sora-custom"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-[11px] font-mono">
          <span className="flex items-center gap-1.5 font-sora-custom">
            © 2026 Sec Concept Networks. All rights reserved.
            <span className="text-neon-red font-bold text-sm select-none">•</span>
          </span>
          <span className="font-sora-custom">Cisco®, CCNA®, CCNP®, CCIE® are trademarks of Cisco Systems, Inc.</span>
        </div>

      </div>
    </footer>
  );
}