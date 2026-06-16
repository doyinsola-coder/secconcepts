"use client";

import Link from "next/link";

const stats = [
  { n: "7", label: "Programs Available" },
  { n: "4–8", label: "Months Duration", accent: true },
  { n: "150+", label: "Certifications Offered" },
  { n: "25+", label: "Years Experience", accent: true },
];

const programs = [
  {
    track: "Track 01 · Networking", icon: "🌐", accentColor: "#20B2AA",
    title: "Computer Networking & Server Administration",
    desc: "Install, manage, configure and secure computer & server networks. Ideal for those entering IT infrastructure, network administration, or systems management roles.",
    duration: "6 Months", modules: "3 Modules", certs: "CCNA · Windows Server · Linux",
    tags: ["CCNA 200-301", "Windows Server Hybrid Admin", "LPIC-1 Linux"],
    price: "₦1,500,000", priceSub: "All 3 modules · Lab access included",
    btnColor: "#20B2AA",
  },
  {
    track: "Track 02 · Advanced Networking", icon: "🏗️", accentColor: "#20B2AA",
    title: "Core Infrastructure Network Professional",
    desc: "Install, manage, configure, automate and secure core networks infrastructure. CCNP Enterprise preparation with advanced routing, SD-WAN, and automation.",
    duration: "8 Months", modules: "5 Modules", certs: "CCNP Enterprise",
    tags: ["CCNA 200-301", "ENCOR 350-401", "ENARSI 300-410",],
    price: "₦2,500,000", priceSub: "Modules 1-5 · Optional modules available",
    btnColor: "#20B2AA",
  },
  {
    track: "Track 03 · Cybersecurity Defense", icon: "🛡️", accentColor: "#20B2AA",
    title: "Cybersecurity SOC | Defender | Blue Team | Forensic Analyst",
    desc: "Analyse, protect and defend internet-connected devices from malicious attacks. Master SIEM, threat detection, incident response, and digital forensics.",
    duration: "8 Months", modules: "4 Core + 14 Electives", certs: "CompTIA · EC-Council",
    tags: ["Security+", "CySA+", "EC-Council ECSA", "CNDv3", "SIEM Analytics"],
    price: "₦3,000,000", priceSub: "Modules 1-4 + chosen electives",
    btnColor: "#20B2AA",
  },
  {
    track: "Track 04 · Offensive Security", icon: "⚔️", accentColor: "#FF073A",
    title: "Cybersecurity Offensive | Red Team | Penetration Testing",
    desc: "Proactively find and exploit vulnerabilities through penetration testing, red teaming, and ethical hacking. CEH, OSCP, and advanced evasion techniques.",
    duration: "8 Months", modules: "4 Core Modules", certs: "CEH · OSCP · PEN-300",
    tags: ["CEH v13", "OSCP (PEN-200)", "PEN-300", "Network Fundamentals"],
    price: "₦3,000,000", priceSub: "Modules 1-4 · Advanced labs",
    btnColor: "#FF073A",
  },
  {
    track: "Track 05 · Cloud Security", icon: "☁️", accentColor: "#20B2AA",
    title: "Cybersecurity Cloud Security Professional",
    desc: "Consolidate protection of cloud-based networks for streamlined, continuous monitoring. AWS, Azure, and cloud security architecture from ground up.",
    duration: "4 Months", modules: "3 Modules", certs: "Cloud Security Architecture",
    tags: ["Intro to Networks", "Security Essentials", "Cloud Security Architecture"],
    price: "₦2,000,000", priceSub: "Modules 1-3 · Cloud lab environment",
    btnColor: "#20B2AA",
  },
  {
    track: "Track 06 · GRC & Administration", icon: "🔒", accentColor: "#20B2AA",
    title: "Cybersecurity Administration Professional",
    desc: "Cover all digital security needs — Governance, Risk and Compliance. CISSP, CISA, and ISC² CC for leadership-level cybersecurity professionals.",
    duration: "4 Months", modules: "3 Modules", certs: "CISSP · CISA · ISC² CC",
    tags: ["ISC² CC", "CISA", "CISSP"],
    price: "₦2,000,000", priceSub: "Modules 1-3 · GRC focus",
    btnColor: "#20B2AA",
  },
  {
    track: "Track 07 · Advanced Blue Team", icon: "🛡️", accentColor: "#20B2AA",
    title: "Cybersecurity SOC | Defender | Blue Team | Forensic Analyst",
    desc: "Analyse, Protect and Defend internet-connected devices and services from malicious attacks by CYBERCRIMINALS.",
    duration: "8 Months", modules: "Modules 1–4", certs: "Blue Team Defender · SOC · Forensic",
    tags: ["SOC Defender", "Continuous Monitoring", "Incident Response", "Active Defense"],
    price: "₦3,000,000", priceSub: "Training Fee covers Module 1 — 4",
    btnColor: "#20B2AA",
    extendedDesc: "Security teams failing to adapt to the new realities facing hybridized organizations risk employing outmoded tactics. This course teaches you continuous monitoring, balancing cloud & on-premises security, and advanced defense adaptation to prevent attacks and detect adversaries with actionable techniques.",
    requirements: "CPU: 64-bit Intel i5/i7 (8th Gen or newer) or AMD equivalent. x64-bit, 2.0+ GHz. Host setup/software configuration done at start at no extra cost."
  },
];

const comparison = [
  { name: "Computer Networking & Server Admin", track: "NETWORKING", trackColor: "bg-sea-green-10", trackText: "text-sea-green", duration: "6 months", certs: "CCNA · Windows Server · Linux", fee: "₦1.5M" },
  { name: "Core Infrastructure Network Professional", track: "NETWORKING", trackColor: "bg-sea-green-10", trackText: "text-sea-green", duration: "8 months", certs: "CCNP Enterprise (ENCOR + ENARSI)", fee: "₦2.5M" },
  { name: "SOC | Defender | Blue Team | Forensic", track: "BLUE TEAM", trackColor: "bg-sea-green-10", trackText: "text-sea-green", duration: "8 months", certs: "Security+ · CySA+ · CNDv3 · ECSA", fee: "₦3.0M" },
  { name: "Offensive | Red Team | Pen Testing", track: "RED TEAM", trackColor: "bg-neon-red-10", trackText: "text-neon-red", duration: "8 months", certs: "CEH v13 · OSCP · PEN-300", fee: "₦3.0M" },
  { name: "Cloud Security Professional", track: "CLOUD", trackColor: "bg-sea-green-10", trackText: "text-sea-green", duration: "4 months", certs: "Cloud Security Architecture", fee: "₦2.0M" },
  { name: "Cybersecurity Administration Professional", track: "GRC", trackColor: "bg-sea-green-10", trackText: "text-sea-green", duration: "4 months", certs: "ISC² CC · CISA · CISSP", fee: "₦2.0M" },
  { name: "SOC | Defender | Blue Team | Forensic (T7)", track: "BLUE TEAM", trackColor: "bg-sea-green-10", trackText: "text-sea-green", duration: "8 months", certs: "Modules 1–4 Complete", fee: "₦3.0M" },
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
    <div className="font-sora-custom min-h-screen bg-white text-black">
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
        
        .bg-neon-red-hover:hover { background-color: #FF073A !important; opacity: 0.9; }
        .bg-sea-green-hover:hover { background-color: #20B2AA !important; opacity: 0.9; }
        
        .bg-sea-green-5 { background-color: rgba(32, 178, 170, 0.05) !important; }
        .bg-sea-green-10 { background-color: rgba(32, 178, 170, 0.1) !important; }
        .bg-neon-red-10 { background-color: rgba(255, 7, 58, 0.1) !important; }
        .border-sea-green-20 { border-color: rgba(32, 178, 170, 0.2) !important; }
        .border-sea-green-30 { border-color: rgba(32, 178, 170, 0.3) !important; }
      `}} />

      {/* Hero */}
      <section className="bg-black px-[5%] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-[800px]">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-6">Training Tracks</span>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold text-white leading-tight mb-4 tracking-tight">
            7 Career-Defining<br /><span className="text-neon-red">Certification Programs</span>
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-[600px] mb-8">
            From Network Fundamentals to Advanced Red-Team Operations — choose a structured multi-month program designed for real job outcomes. All programs include lab equipment, mentoring, and exam preparation.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 font-sora-custom">
            <Link href="/contact" className="bg-neon-red bg-neon-red-hover text-white font-bold px-6 py-4 rounded-lg shadow-[0_4px_20px_rgba(255,7,58,0.25)] hover:shadow-[0_4px_25px_rgba(255,7,58,0.4)] hover:-translate-y-0.5 transition-all duration-300">Enroll in a Program →</Link>
            <a href="#compare" className="bg-white text-black font-bold px-6 py-4 rounded-lg hover:bg-white/90 transition-all duration-300">Compare Programs ↓</a>
          </div>
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className={`font-extrabold text-[2.2rem] leading-none tracking-tight ${s.accent ? "text-neon-red" : "text-white"}`}>{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40 mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-4">All Programs</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3 tracking-tight">Choose Your Career Track</h2>
          <p className="text-gray-500 text-[15px] max-w-[560px] leading-relaxed mb-10 font-sora-custom">Each program is a structured bundle of courses, labs, and exam preparation — designed to take you from beginner to job-ready.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.title + p.track} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-1.5" style={{ backgroundColor: p.accentColor }} />
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl p-2.5 rounded-xl font-sora-custom" style={{ backgroundColor: p.accentColor + "18" }}>{p.icon}</div>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[1.5px] mb-1 font-bold" style={{ color: p.accentColor }}>{p.track}</p>
                        <h3 className="font-bold text-[#0d1b2a] text-[14px] leading-snug">{p.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-[13px] text-gray-500 leading-relaxed font-sora-custom">{p.desc}</p>
                    
                    {p.extendedDesc && (
                      <p className="text-[12px] text-gray-400 italic leading-relaxed font-sora-custom border-l-2 border-sea-green/30 pl-3 my-1">
                        {p.extendedDesc}
                      </p>
                    )}

                    {p.requirements && (
                      <div className="bg-gray-50 border border-gray-100/80 rounded-xl p-3 text-[11px] text-gray-500 font-sora-custom leading-normal">
                        <strong className="text-[#0d1b2a] block mb-0.5">💻 PC Requirements:</strong>
                        {p.requirements}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-4 text-[12px] text-gray-400 py-3 border-y border-gray-100 font-sora-custom">
                      <span>⏱ {p.duration}</span>
                      <span>📋 {p.modules}</span>
                      <span>🏅 {p.certs}</span>
                    </div>
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[1.5px] text-gray-400 mb-2 font-bold">Certifications Covered</p>
                      <div className="flex flex-wrap gap-1.5 font-sora-custom">
                        {p.tags.map((t) => (
                          <span key={t} className="text-[11px] font-mono bg-gray-50 text-gray-600 px-2 py-0.5 rounded border border-gray-100">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto flex items-center justify-between border-t border-gray-100/50 bg-white font-sora-custom">
                  <div>
                    <div className="font-extrabold text-[#0d1b2a] text-[20px] tracking-tight">{p.price}</div>
                    <div className="font-mono text-[10px] text-gray-400 mt-0.5">{p.priceSub}</div>
                  </div>
                  <Link href="/contact" className="text-white text-[12px] font-bold px-4 py-2 rounded-lg transition hover:opacity-90 shadow-sm" style={{ backgroundColor: p.btnColor }}>
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-20 px-[5%] bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-4">Side-by-Side</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-2 tracking-tight">Program Comparison</h2>
          <p className="text-gray-500 text-[15px] mb-8 font-sora-custom">Click any row to see full program details.</p>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-black text-white font-sora-custom">
                  {["Program", "Track", "Duration", "Core Certs", "Fee", "Bootcamp", "Self-Paced"].map((h) => (
                    <th key={h} className="font-mono text-[10px] uppercase tracking-[1.5px] px-4 py-4.5 text-left font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.name + i} className={`border-t border-gray-100 hover:bg-sea-green-5 cursor-pointer transition-colors duration-300 font-sora-custom ${i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}>
                    <td className="px-4 py-4.5 font-bold text-[#0d1b2a] text-[13px]">{row.name}</td>
                    <td className="px-4 py-4.5">
                      <span className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded ${row.trackColor} ${row.trackText}`}>{row.track}</span>
                    </td>
                    <td className="px-4 py-4.5 text-gray-500">{row.duration}</td>
                    <td className="px-4 py-4.5 text-gray-500 text-[12px]">{row.certs}</td>
                    <td className="px-4 py-4.5 font-bold text-sea-green">{row.fee}</td>
                    <td className="px-4 py-4.5 text-sea-green font-bold">✓</td>
                    <td className="px-4 py-4.5 text-sea-green font-bold">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Flexible Training Options */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-4">How We Deliver</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3 tracking-tight">Flexible Training Options</h2>
          <p className="text-gray-500 text-[15px] mb-10 font-sora-custom">Choose the format that fits your schedule, location, and learning style.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🏕️", title: "Sec-Concepts BootCamp", desc: "In-person and online instructor-led live, interactive training led by industry experts with 20+ years of experience. Gain exam readiness with real-time Q&A in a focused learning environment.", features: bootcampFeatures },
              { icon: "⏱️", title: "Self-Paced Training", desc: "Engineered to accommodate your busy schedule while providing a high-quality learning experience. Open enrolment — start when you're ready, progress at your own pace.", features: selfPacedFeatures },
            ].map((opt) => (
              <div key={opt.title} className="border border-gray-100 rounded-2xl p-8 bg-white">
                <div className="text-3xl mb-4">{opt.icon}</div>
                <h3 className="font-bold text-[#0d1b2a] text-[18px] mb-3">{opt.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-5 font-sora-custom">{opt.desc}</p>
                <ul className="space-y-2.5 p-0 m-0 list-none font-sora-custom">
                  {opt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[14px] text-gray-600">
                      <span className="text-sea-green font-bold shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-[5%] bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-4">What's Included</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3 tracking-tight">Participant Benefits & Freebies</h2>
          <p className="text-gray-500 text-[15px] mb-10 font-sora-custom">For in-person (BootCamp) participants arriving in Ilorin, we take care of everything.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm">
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-bold text-[#0d1b2a] text-[15px] mb-2">{b.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed font-sora-custom">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%] bg-gradient-to-br from-neon-red to-[#d90431] text-center">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">Ready to Begin Your Certification Journey?</h2>
        <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8 leading-relaxed font-sora-custom">Talk to our team and get personalised guidance on the best program for your career goals and current skill level.</p>
        <div className="flex flex-wrap justify-center gap-4 font-sora-custom">
          <Link href="/enroll" className="bg-white text-neon-red font-bold px-6 py-4 rounded-lg hover:bg-white/95 transition-colors shadow-lg">
            Enroll Now →
          </Link>
          <Link href="/#courses" className="bg-transparent border border-white text-white font-bold px-6 py-4 rounded-lg hover:bg-white/10 transition-colors">
            Browse Individual Courses
          </Link>
        </div>
      </section>

    </div>
  );
}