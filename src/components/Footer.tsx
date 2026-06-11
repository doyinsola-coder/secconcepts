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
  { label: "Instructors", href: "/team" },
  { label: "Student Reviews", href: "/#reviews" },
  { label: "Contact Us", href: "/contact" },
  { label: "Live Website ↗", href: "https://trainwithsec.com", external: true },
];

const connect = [
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Twitter / X", href: "https://x.com", external: true },
  { label: "YouTube", href: "https://youtube.com", external: true },
  { label: "WhatsApp Group", href: "https://wa.me/2348039134906", external: true },
  { label: "Newsletter", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071a10] px-[5%] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">

          {/* Brand */}
          <div className="flex flex-col gap-6">
           <Image src="/logo.png" alt="Sec Concept Networks" width={160} height={80} className="object-contain object-left brightness-125" />
            <div className="flex flex-col gap-2">
              <a href="tel:+2348039134906" className="flex items-center gap-2 text-white/50 text-[13px] hover:text-white transition-colors no-underline">
                <span className="text-[#e74c3c]">📞</span> +234 8039 134 906
              </a>
              <a href="mailto:info@trainwithsec.com" className="flex items-center gap-2 text-white/50 text-[13px] hover:text-white transition-colors no-underline">
                <span>✉</span> info@trainwithsec.com
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[2px] text-white font-bold mb-5">Courses</h4>
            <ul className="flex flex-col gap-3">
              {courses.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/45 text-[13px] hover:text-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[2px] text-white font-bold mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/45 text-[13px] hover:text-white transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[2px] text-white font-bold mb-5">Connect</h4>
            <ul className="flex flex-col gap-3">
              {connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-white/45 text-[13px] hover:text-white transition-colors no-underline"
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-[12px] font-mono">
          <span>© 2026 Sec Concept Networks. All rights reserved.</span>
          <span>Cisco®, CCNA®, CCNP®, CCIE® are trademarks of Cisco Systems, Inc.</span>
        </div>

      </div>
    </footer>
  );
}