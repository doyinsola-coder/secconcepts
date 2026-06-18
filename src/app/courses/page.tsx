import Link from "next/link";

const programs = [
  { icon: "🌐", title: "Computer Networking & Server Administration", desc: "Install, Manage, Configure, and Secure Computer & Server Networks.", duration: "6 Months", price: "₦1,500,000", color: "#20B2AA", tags: ["CCNA 200-301", "Windows Server", "LPIC-1 Linux"] },
  { icon: "🏗️", title: "Core Infrastructure Network Professional", desc: "Install, Manage, Configure, Automate and Secure Core Networks Infrastructure.", duration: "8 Months", price: "₦2,500,000", color: "#1a56db", tags: ["CCNA", "ENCOR", "ENARSI", "Windows Server", "Linux"] },
  { icon: "🛡️", title: "Cybersecurity SOC | Defender | Blue Team | Forensic Analyst", desc: "Analyse, Protect and Defend internet-connected devices from malicious attacks.", duration: "8 Months", price: "₦3,000,000", color: "#9333ea", tags: ["SOC Analyst", "CNDv3", "Security+", "CySA+", "ECSA"] },
  { icon: "⚔️", title: "Cybersecurity Offensive | Red Team | Penetration Testing", desc: "Proactively finding and Exploiting Vulnerabilities through Penetration Testing.", duration: "8 Months", price: "₦3,000,000", color: "#FF073A", tags: ["CEH v13", "PEN-200 OSCP", "PEN-300"] },
  { icon: "☁️", title: "Cybersecurity Cloud Security Professional", desc: "Consolidate protection of Cloud-Based Networks for continuous monitoring.", duration: "4 Months", price: "₦2,000,000", color: "#0ea5e9", tags: ["Intro to Networks", "Security Essentials", "Cloud Security Architecture"] },
  { icon: "🔒", title: "Cybersecurity Administration Professional", desc: "Cover all Digital Security needs — Governance, Risk, and Compliance.", duration: "4 Months", price: "₦2,000,000", color: "#d97706", tags: ["ISC² CC", "CISA", "CISSP"] },
];

const certCourses = [
  // Networking
  { cat: "Networking", title: "Implementing and Administering Cisco Solutions (CCNA 200-301)", duration: "5 Months", price: "₦650,000" },
  { cat: "Networking", title: "Microsoft Certified: Windows Server Hybrid Administrator Associate (AZ-700)", duration: "2 Months", price: "₦500,000" },
  { cat: "Networking", title: "Linux Fundamentals and Administration (LPIC-1)", duration: "2 Months", price: "₦300,000" },
  { cat: "Networking", title: "Implementing and Operating Cisco Enterprise Network Core Technologies (ENCOR 350-401)", duration: "3 Months", price: "₦600,000" },
  { cat: "Networking", title: "Implementing Cisco Enterprise Advanced Routing and Services (ENARSI 300-410)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Implementing Cisco SD-WAN Solutions (ENSDWI 300-415)", duration: "2 Months", price: "₦750,000" },
  { cat: "Networking", title: "Designing Cisco Enterprise Networks (ENSLD 300-420)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Implementing Cisco Enterprise Wireless Networks (300-430 ENWLSI)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Automating and Programming Cisco Enterprise Solutions (300-435 ENAUTO)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Designing and Implementing Cloud Connectivity (300-440 ENCC)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Designing and Implementing Enterprise Network Assurance (300-445 ENNA)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Implementing and Operating Cisco Service Provider Network Core Technologies (350-501 SPCOR)", duration: "3 Months", price: "₦750,000" },
  { cat: "Networking", title: "Implementing Cisco Service Provider Advanced Routing Solutions (300-510 SPRI)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Implementing Cisco Service Provider VPN Services (300-515 SPVI)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Designing and Implementing Cisco Service Provider Cloud Network Infrastructure (300-540 SPCNI)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Implementing and Operating Cisco Data Center Core Technologies (350-601 DCCOR)", duration: "2 Months", price: "₦750,000" },
  { cat: "Networking", title: "Designing Cisco Data Center Infrastructure (300-610 DCID)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Troubleshooting Cisco Data Center Infrastructure (300-615 DCIT)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Implementing Cisco Application Centric Infrastructure (300-620 DCACI)", duration: "2 Months", price: "₦550,000" },
  { cat: "Networking", title: "Automating and Programming Cisco Data Center Solutions (300-635 DCAUTO)", duration: "2 Months", price: "₦550,000" },

  // Infrastructure Security
  { cat: "Infrastructure Security", title: "Implementing and Operating Cisco Security Core Technologies (350-701 SCOR)", duration: "3 Months", price: "₦750,000" },
  { cat: "Infrastructure Security", title: "Implementing Secure Solutions with Virtual Private Networks (300-730 SVPN)", duration: "2 Months", price: "₦550,000" },
  { cat: "Infrastructure Security", title: "Securing Networks with Cisco Firewalls (300-710 SNCF)", duration: "2 Months", price: "₦550,000" },
  { cat: "Infrastructure Security", title: "Implementing and Configuring Cisco Identity Services Engine (300-715 SISE)", duration: "2 Months", price: "₦550,000" },
  { cat: "Infrastructure Security", title: "Securing Email with Cisco Secure Email Gateway (300-720 SESA)", duration: "2 Months", price: "₦550,000" },
  { cat: "Infrastructure Security", title: "Securing the Web with Cisco Secure Web Appliance (300-725 SWSA)", duration: "2 Months", price: "₦550,000" },
  { cat: "Infrastructure Security", title: "Designing and Implementing Secure Cloud Access for Users and Endpoints (300-740 SCAZT)", duration: "2 Months", price: "₦550,000" },
  { cat: "Infrastructure Security", title: "Designing Cisco Security Infrastructure (300-745 SDSI)", duration: "2 Months", price: "₦550,000" },

  // Blue Team
  { cat: "Blue Team", title: "Cybersecurity Associate: SOC Analyst", duration: "2 Months", price: "₦500,000" },
  { cat: "Blue Team", title: "Security Essentials: Network, Endpoint, and Cloud (SEC401)", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "EC-Council Certified Network Defender (CNDv3)", duration: "2 Months", price: "₦800,000" },
  { cat: "Blue Team", title: "Blue Team Fundamentals: Security Operations and Analysis", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "SIEM with Tactical Analytics (Detection Engineering)", duration: "2 Months", price: "₦1,200,000" },
  { cat: "Blue Team", title: "CompTIA Security+", duration: "2 Months", price: "₦600,000" },
  { cat: "Blue Team", title: "CompTIA Cyber Security Analyst+ (CySA+)", duration: "2 Months", price: "₦900,000" },
  { cat: "Blue Team", title: "EC-Council Certified Security Analyst (ECSA)", duration: "2 Months", price: "₦800,000" },
  { cat: "Blue Team", title: "Advanced Incident Response, Threat Hunting, and Digital Forensics", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Windows Forensic Analysis", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Cyber Threat Intelligence", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Cybersecurity Engineering: Advanced Threat Detection and Monitoring", duration: "2 Months", price: "₦1,200,000" },
  { cat: "Blue Team", title: "Network Monitoring and Threat Detection In-Depth", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Advanced Security Essentials - Enterprise Defender (SEC-501)", duration: "2 Months", price: "₦1,300,000" },
  { cat: "Blue Team", title: "Defensible Security Architecture: Implementing Zero Trust for the Hybrid Enterprise", duration: "2 Months", price: "₦1,200,000" },
  { cat: "Blue Team", title: "Automating Information Security with Python (SEC-573)", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "CyberDefense Pro (CySA+ V3)", duration: "2 Months", price: "₦900,000" },
  { cat: "Blue Team", title: "Advanced Network Forensics: Threat Hunting, Analysis, and Incident Response", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Enterprise Cloud Forensics and Incident Response", duration: "2 Months", price: "₦900,000" },
  { cat: "Blue Team", title: "Ransomware and Cyber Extortion", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Reverse-Engineering Malware: Malware Analysis Tools and Techniques", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Reverse-Engineering Malware: Advanced Code Analysis", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Smartphone Forensic Analysis In-Depth", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Mac and iOS Forensic Analysis and Incident Response", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Linux Incident Response & Analysis", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "EC-Council Computer Hacking Forensic Investigation (CHFI)", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Blue Team", title: "Enterprise-Class Incident Response & Threat Hunting", duration: "2 Months", price: "₦1,000,000" },

  // Red Team
  { cat: "Red Team", title: "EC-Council Certified Ethical Hacking (CEH v13)", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Penetration Testing with Kali Linux (PEN-200 / OSCP)", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Advanced Evasion Techniques and Breaching Defenses (PEN-300)", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Web App Penetration Testing and Ethical Hacking", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "IoT Penetration Testing", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Wireless Penetration Testing and Ethical Hacking", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "CompTIA Pentest+", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Advanced Penetration Testing, Exploit Writing, and Ethical Hacking", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Advanced Exploit Development for Penetration Testers", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Social Engineering for Security Professionals", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "iOS and Android Application Security Analysis and Penetration Testing", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Metasploit for Enterprise Penetration Testing", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Security Automation for Offense, Defense, and Cloud", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Defeating Advanced Adversaries – Purple Team Tactics and Kill Chain Defenses", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Advanced Purple Teaming – Adversary Emulation & Detection Engineering", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Advanced Web Attacks and Exploitation", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Windows User Mode Exploit Development", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "macOS Control Bypasses", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Advanced Windows Exploitation", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "EC-Council Certified Penetration Tester", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Red Team", title: "Enterprise Penetration Testing", duration: "2 Months", price: "₦1,000,000" },

  // Cloud Security
  { cat: "Cloud Security", title: "Cloud Security Architecture", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Cloud Penetration Testing", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Cloud Native Security and DevSecOps Automation", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "CompTIA Cloud+", duration: "2 Months", price: "₦500,000" },
  { cat: "Cloud Security", title: "Cloud Security Essentials", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Cloud Security Controls and Mitigations", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Cloud Security Threat Detection", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Offensive Cloud Foundations", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Introduction to Cloud Security", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Cloud Security for Leaders", duration: "2 Months", price: "₦1,000,000" },
  { cat: "Cloud Security", title: "Cloud Essentials (OffSec)", duration: "2 Months", price: "₦650,000" },
  { cat: "Cloud Security", title: "CompTIA Cloud Essentials+", duration: "2 Months", price: "₦600,000" },
  { cat: "Cloud Security", title: "CompTIA Cloud Essentials", duration: "2 Months", price: "₦650,000" },

  // GRC
  { cat: "GRC", title: "Certified in Cybersecurity — ISC² CC", duration: "2 Months", price: "₦500,000" },
  { cat: "GRC", title: "Certified Information Systems Auditor (CISA)", duration: "2 Months", price: "₦1,000,000" },
  { cat: "GRC", title: "Certified Information Systems Security Professional (CISSP)", duration: "2 Months", price: "₦1,200,000" },
];

const catColors: Record<string, string> = {
  Networking: "bg-[#e0fafa] text-[#178a84]",
  "Infrastructure Security": "bg-[#dbeafe] text-[#1e40af]",
  "Blue Team": "bg-[#e0e7ff] text-[#3730a3]",
  "Red Team": "bg-[#ffe0e6] text-[#FF073A]",
  "Cloud Security": "bg-[#e0f2fe] text-[#0369a1]",
  GRC: "bg-[#fef9c3] text-[#854d0e]",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a1628]">

      {/* Hero */}
      <section className="bg-[#0a1628] px-[5%] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-[800px]">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-white/50 border border-white/20 px-3 py-1 rounded-full mb-6">Full Curriculum</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold text-white leading-tight mb-5">
            40+ Courses Across<br /><span className="text-[#FF073A]">6 Specialist Tracks</span>
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed max-w-[600px] mb-8">
            Every course is mapped to official exam blueprints from Cisco, CompTIA, EC-Council, ISC², ISACA, and OffSec. Bootcamp and self-paced options available for all courses.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#FF073A] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#cc0530] transition">Enroll Now →</Link>
            <Link href="/programs" className="bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition">View Programs</Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#20B2AA] border border-[#99E0DD] px-3 py-1 rounded-full mb-4">Career Programs</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3">6 Multi-Month Programs</h2>
          <p className="text-[#4b5563] text-[15px] mb-10 max-w-[560px]">Structured bundles of courses, labs, and exam prep — designed to take you from beginner to job-ready.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p) => (
              <div key={p.title} className="border border-[#e5e7eb] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col">
                <div className="h-1" style={{ background: p.color }} />
                <div className="p-5 flex-1 flex flex-col gap-3">
                  <div className="text-2xl">{p.icon}</div>
                  <h3 className="font-bold text-[#0a1628] text-[14px] leading-snug">{p.title}</h3>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="font-mono text-[10px] bg-[#f0fefe] text-[#178a84] px-2 py-0.5 rounded border border-[#99E0DD]">{t}</span>)}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#f3f4f6]">
                    <div>
                      <div className="font-extrabold text-[#0a1628] text-[17px]">{p.price}</div>
                      <div className="font-mono text-[10px] text-[#9ca3af]">{p.duration}</div>
                    </div>
                    <Link href="/contact" className="text-white text-[12px] font-bold px-4 py-2 rounded-lg hover:opacity-90 transition" style={{ background: p.color }}>Enroll →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Courses */}
      <section className="py-20 px-[5%] bg-[#f0fefe]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#20B2AA] border border-[#99E0DD] px-3 py-1 rounded-full mb-4">Certification Courses</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3">Individual Courses</h2>
          <p className="text-[#4b5563] text-[15px] mb-8 max-w-[560px]">Bootcamp & Self-Paced. Pick any single certification course and train at your own pace.</p>

          {["Networking", "Infrastructure Security", "Blue Team", "Red Team", "Cloud Security", "GRC"].map((cat) => (
            <div key={cat} className="mb-10">
              <h3 className="font-bold text-[#0a1628] text-[16px] mb-4">
                <span className={`font-mono text-[10px] px-2.5 py-1 rounded font-bold ${catColors[cat]}`}>{cat}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {certCourses.filter((c) => c.cat === cat).map((c) => (
                  <div key={c.title} className="bg-white border border-[#99E0DD] rounded-xl p-4 hover:border-[#20B2AA] hover:shadow-sm transition-all flex flex-col gap-2">
                    <span className={`self-start font-mono text-[9px] px-2 py-0.5 rounded font-bold ${catColors[c.cat]}`}>{c.cat}</span>
                    <h4 className="font-semibold text-[#0a1628] text-[13px] leading-snug flex-1">{c.title}</h4>
                    <div className="flex items-center justify-between pt-2 border-t border-[#f0fefe]">
                      <div>
                        <div className="font-bold text-[#0a1628] text-[14px]">{c.price}</div>
                        <div className="font-mono text-[10px] text-[#9ca3af]">{c.duration}</div>
                      </div>
                      <Link href="/contact" className="bg-[#20B2AA] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#178a84] transition">Enroll</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] bg-gradient-to-br from-[#FF073A] to-[#cc0530] text-center">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-3">Not Sure Which Course to Pick?</h2>
        <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8">Talk to our team for a free career roadmap consultation. We'll match you to the right program for your goals.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-white text-[#FF073A] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition">Speak to an Advisor →</Link>
          <Link href="/programs" className="bg-white/15 border border-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/25 transition">View Programs</Link>
        </div>
      </section>

    </div>
  );
}