import Link from "next/link";

const stats = [
  { n: "6", label: "Programs Available" },
  { n: "4–8", label: "Months Duration", accent: true },
  { n: "150+", label: "Certifications Offered" },
  { n: "25+", label: "Years Experience", accent: true },
];

const programs = [
  {
    track: "Track 01 · Networking", icon: "🌐", accentColor: "#0e7c5a",
    title: "Computer Networking & Server Administration",
    desc: "Install, manage, configure and secure computer & server networks. Ideal for those entering IT infrastructure, network administration, or systems management roles.",
    duration: "6 Months", modules: "3 Modules", certs: "CCNA · Windows Server · Linux",
    tags: ["CCNA 200-301", "Windows Server Hybrid Admin", "LPIC-1 Linux"],
    price: "₦1,500,000", priceSub: "All 3 modules · Lab access included",
    btnColor: "#0e7c5a",
  },
  {
    track: "Track 02 · Advanced Networking", icon: "🏗️", accentColor: "#1a56db",
    title: "Core Infrastructure Network Professional",
    desc: "Install, manage, configure, automate and secure core networks infrastructure. CCNP Enterprise preparation with advanced routing, SD-WAN, and automation.",
    duration: "8 Months", modules: "5 Modules", certs: "CCNP Enterprise",
    tags: ["CCNA 200-301", "Windows Server", "ENCOR 350-401", "ENARSI 300-410", "Linux Admin"],
    price: "₦2,500,000", priceSub: "Modules 1-5 · Optional modules available",
    btnColor: "#1a56db",
  },
  {
    track: "Track 03 · Cybersecurity Defense", icon: "🛡️", accentColor: "#9333ea",
    title: "Cybersecurity SOC | Defender | Blue Team | Forensic Analyst",
    desc: "Analyse, protect and defend internet-connected devices from malicious attacks. Master SIEM, threat detection, incident response, and digital forensics.",
    duration: "8 Months", modules: "4 Core + 14 Electives", certs: "CompTIA · EC-Council",
    tags: ["Security+", "CySA+", "EC-Council ECSA", "CNDv3", "SIEM Analytics"],
    price: "₦3,000,000", priceSub: "Modules 1-4 + chosen electives",
    btnColor: "#9333ea",
  },
  {
    track: "Track 04 · Offensive Security", icon: "⚔️", accentColor: "#e74c3c",
    title: "Cybersecurity Offensive | Red Team | Penetration Testing",
    desc: "Proactively find and exploit vulnerabilities through penetration testing, red teaming, and ethical hacking. CEH, OSCP, and advanced evasion techniques.",
    duration: "8 Months", modules: "4 Core Modules", certs: "CEH · OSCP · PEN-300",
    tags: ["CEH v13", "OSCP (PEN-200)", "PEN-300", "Network Fundamentals"],
    price: "₦3,000,000", priceSub: "Modules 1-4 · Advanced labs",
    btnColor: "#e74c3c",
  },
  {
    track: "Track 05 · Cloud Security", icon: "☁️", accentColor: "#0ea5e9",
    title: "Cybersecurity Cloud Security Professional",
    desc: "Consolidate protection of cloud-based networks for streamlined, continuous monitoring. AWS, Azure, and cloud security architecture from ground up.",
    duration: "4 Months", modules: "3 Modules", certs: "Cloud Security Architecture",
    tags: ["Intro to Networks", "Security Essentials", "Cloud Security Architecture"],
    price: "₦2,000,000", priceSub: "Modules 1-3 · Cloud lab environment",
    btnColor: "#0ea5e9",
  },
  {
    track: "Track 06 · GRC & Administration", icon: "🔒", accentColor: "#d97706",
    title: "Cybersecurity Administration Professional",
    desc: "Cover all digital security needs — Governance, Risk and Compliance. CISSP, CISA, and ISC² CC for leadership-level cybersecurity professionals.",
    duration: "4 Months", modules: "3 Modules", certs: "CISSP · CISA · ISC² CC",
    tags: ["ISC² CC", "CISA", "CISSP"],
    price: "₦2,000,000", priceSub: "Modules 1-3 · GRC focus",
    btnColor: "#d97706",
  },
];

const comparison = [
  { name: "Computer Networking & Server Admin", track: "NETWORKING", trackColor: "#dcfce7", trackText: "#166534", duration: "6 months", certs: "CCNA · Windows Server · Linux", fee: "₦1.5M" },
  { name: "Core Infrastructure Network Professional", track: "NETWORKING", trackColor: "#dcfce7", trackText: "#166534", duration: "8 months", certs: "CCNP Enterprise (ENCOR + ENARSI)", fee: "₦2.5M" },
  { name: "SOC | Defender | Blue Team | Forensic", track: "BLUE TEAM", trackColor: "#fce7f3", trackText: "#9d174d", duration: "8 months", certs: "Security+ · CySA+ · CNDv3 · ECSA", fee: "₦3.0M" },
  { name: "Offensive | Red Team | Pen Testing", track: "RED TEAM", trackColor: "#fee2e2", trackText: "#991b1b", duration: "8 months", certs: "CEH v13 · OSCP · PEN-300", fee: "₦3.0M" },
  { name: "Cloud Security Professional", track: "CLOUD", trackColor: "#e0f2fe", trackText: "#0369a1", duration: "4 months", certs: "Cloud Security Architecture", fee: "₦2.0M" },
  { name: "Cybersecurity Administration Professional", track: "GRC", trackColor: "#fef9c3", trackText: "#854d0e", duration: "4 months", certs: "ISC² CC · CISA · CISSP", fee: "₦2.0M" },
];

const bootcampFeatures = [
  "In-person (Ilorin, Kwara State) or live online",
  "Instructor-led daily sessions",
  "Real-time lab access with expert guidance",
  "20+ years experienced instructors",
  "On-demand resource library access",
];

const selfPacedFeatures = [
  "Open enrolment — start any time",
  "Extended course access period",
  "Complete training on your own schedule",
  "Full access to recorded lectures and labs",
  "Progress tracking and assessments",
];

const benefits = [
  { icon: "✈️", title: "Airport & Park Transfer", desc: "Free pickup and drop-off upon arrival and departure from the airport or motor park." },
  { icon: "🚌", title: "Daily Transport", desc: "Daily transport services to-and-from the training center for all registered participants." },
  { icon: "🏠", title: "Accommodation", desc: "Comfortable accommodation for all participants — both male and female — during the training period." },
  { icon: "☕", title: "Meals & Beverages", desc: "Complimentary coffee, tea, and beverages in both home and training center. Meals arranged with house chef." },
  { icon: "⚽", title: "Sporting Facilities", desc: "Indoor and outdoor sporting facilities available to all participants for wellness and relaxation." },
  { icon: "🔬", title: "Lab Equipment", desc: "Mandatory host configuration and software installed at no additional cost on day one." },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a2e1f]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a2e1f] to-[#134d33] px-[5%] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-[800px]">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-white/60 border border-white/20 px-3 py-1 rounded-full mb-6">Training Tracks</span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white leading-tight mb-4">
            6 Career-Defining<br /><span className="text-[#e74c3c]">Certification Programs</span>
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-[600px] mb-8">
            From Network Fundamentals to Advanced Red-Team Operations — choose a structured multi-month program designed for real job outcomes. All programs include lab equipment, mentoring, and exam preparation.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/contact" className="bg-[#e74c3c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#c0392b] transition">Enroll in a Program →</Link>
            <a href="#compare" className="bg-white text-[#0a2e1f] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition">Compare Programs ↓</a>
          </div>
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className={`font-extrabold text-[2rem] leading-none ${s.accent ? "text-[#e74c3c]" : "text-white"}`}>{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-4">All Programs</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3">Choose Your Career Track</h2>
          <p className="text-[#1e4d35] text-[15px] max-w-[560px] leading-relaxed mb-10">Each program is a structured bundle of courses, labs, and exam preparation — designed to take you from beginner to job-ready.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title} className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200 flex flex-col">
                <div className="h-1" style={{ background: p.accentColor }} />
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl p-2 rounded-xl" style={{ background: p.accentColor + "18" }}>{p.icon}</div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[1.5px] mb-1" style={{ color: p.accentColor }}>{p.track}</p>
                      <h3 className="font-bold text-[#0a2e1f] text-[14px] leading-snug">{p.title}</h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-3 text-[12px] text-[#6b7280] py-2 border-y border-[#f3f4f6]">
                    <span>⏱ {p.duration}</span>
                    <span>📋 {p.modules}</span>
                    <span>🏅 {p.certs}</span>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-[#9ca3af] mb-2">Certifications Covered</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] font-mono bg-[#f3f4f6] text-[#374151] px-2 py-0.5 rounded border border-[#e5e7eb]">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <div>
                      <div className="font-extrabold text-[#0a2e1f] text-[20px]">{p.price}</div>
                      <div className="font-mono text-[10px] text-[#9ca3af]">{p.priceSub}</div>
                    </div>
                    <Link href="/contact" className="text-white text-[12px] font-bold px-4 py-2 rounded-lg transition hover:opacity-90" style={{ background: p.btnColor }}>
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-20 px-[5%] bg-[#f4faf7]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-4">Side-by-Side</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-2">Program Comparison</h2>
          <p className="text-[#4b5563] text-[15px] mb-8">Click any row to see full program details.</p>
          <div className="rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0a2e1f] text-white">
                  {["Program", "Track", "Duration", "Core Certs", "Fee", "Bootcamp", "Self-Paced"].map((h) => (
                    <th key={h} className="font-mono text-[10px] uppercase tracking-[1.5px] px-4 py-4 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.name} className={`border-t border-[#f3f4f6] hover:bg-[#f0faf5] cursor-pointer transition ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                    <td className="px-4 py-4 font-bold text-[#0a2e1f] text-[13px]">{row.name}</td>
                    <td className="px-4 py-4">
                      <span className="font-mono text-[10px] font-bold px-2 py-1 rounded" style={{ background: row.trackColor, color: row.trackText }}>{row.track}</span>
                    </td>
                    <td className="px-4 py-4 text-[#4b5563]">{row.duration}</td>
                    <td className="px-4 py-4 text-[#4b5563] text-[12px]">{row.certs}</td>
                    <td className="px-4 py-4 font-bold text-[#0e7c5a]">{row.fee}</td>
                    <td className="px-4 py-4 text-[#0e7c5a] font-bold">✓</td>
                    <td className="px-4 py-4 text-[#0e7c5a] font-bold">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flexible Training Options */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-4">How We Deliver</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3">Flexible Training Options</h2>
          <p className="text-[#4b5563] text-[15px] mb-10">Choose the format that fits your schedule, location, and learning style.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🏕️", title: "Sec-Concepts BootCamp", desc: "In-person and online instructor-led live, interactive training led by industry experts with 20+ years of experience. Gain exam readiness with real-time Q&A in a focused learning environment.", features: bootcampFeatures },
              { icon: "⏱️", title: "Self-Paced Training", desc: "Engineered to accommodate your busy schedule while providing a high-quality learning experience. Open enrolment — start when you're ready, progress at your own pace.", features: selfPacedFeatures },
            ].map((opt) => (
              <div key={opt.title} className="border border-[#e5e7eb] rounded-2xl p-8">
                <div className="text-3xl mb-4">{opt.icon}</div>
                <h3 className="font-bold text-[#0a2e1f] text-[18px] mb-3">{opt.title}</h3>
                <p className="text-[#4b5563] text-[14px] leading-relaxed mb-5">{opt.desc}</p>
                <ul className="space-y-2">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px] text-[#374151]">
                      <span className="text-[#0e7c5a] font-bold shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-[5%] bg-[#f4faf7]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-4">What's Included</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3">Participant Benefits & Freebies</h2>
          <p className="text-[#4b5563] text-[15px] mb-10">For in-person (BootCamp) participants arriving in Ilorin, we take care of everything.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-[#e5e7eb] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-[#0a2e1f] text-[15px] mb-2">{b.title}</h3>
                <p className="text-[#4b5563] text-[13px] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] bg-gradient-to-br from-[#e74c3c] to-[#c0392b] text-center">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-3">Ready to Begin Your Certification Journey?</h2>
        <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8">Talk to our team and get personalised guidance on the best program for your career goals and current skill level.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/enroll" className="bg-white text-[#0e7c5a] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition">Enroll Now →</Link>
          <Link href="/#courses" className="border border-white/30 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition">Browse Individual Courses</Link>
        </div>
      </section>

    </div>
  );
}