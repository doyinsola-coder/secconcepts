"use client";

import { useState } from "react";
import Link from "next/link";
import CourseModal from "./CourseModal";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const categories = [
  { label: "All Courses", value: "all" },
  { label: "Special Job Role", value: "jobrole" },
  { label: "Computer Networking", value: "networking" },
  { label: "Infrastructure Security", value: "infra-sec" },
  { label: "Information Security", value: "info-sec" },
  { label: "Core Networking", value: "core-net" },
];

const courses = [
  { id: "encor", cat: "core-net", level: "Professional", levelColor: "bg-[#20B2AA] text-white", duration: "55+ hrs · 30 Labs", code: "Exam: 350-401 ENCOR", title: "Implementing Cisco Enterprise Core Technologies (ENCOR)", desc: "Mandatory CCNP core. Dual-stack, virtualization, network assurance, security, and Python automation.", tags: ["SD-Access", "BGP", "QoS", "Python"], price: "₦650,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75" },
  { id: "enarsi", cat: "core-net", level: "Professional", levelColor: "bg-[#20B2AA] text-white", duration: "45+ hrs · 22 Labs", code: "Exam: 300-410 ENARSI", title: "Implementing Cisco Enterprise Advanced Routing & Services (ENARSI)", desc: "Advanced routing technologies, Layer 3, VPN services, infrastructure security and services.", tags: ["OSPF", "BGP", "MPLS", "VRF"], price: "₦550,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=75" },
  { id: "sdwan", cat: "core-net", level: "Professional", levelColor: "bg-[#20B2AA] text-white", duration: "38+ hrs · 15 Labs", code: "Exam: 300-415 ENSDWI", title: "Implementing Cisco SD-WAN Solutions (ENSDWI)", desc: "Deploy Cisco Catalyst SD-WAN end-to-end. vManage, controllers, policies, QoS, segmentation.", tags: ["vManage", "OMP", "ZTP", "Segmentation"], price: "₦750,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=75" },
  { id: "scor", cat: "infra-sec", level: "Professional", levelColor: "bg-[#20B2AA] text-white", duration: "50+ hrs · 22 Labs", code: "Exam: 350-701 SCOR", title: "Implementing & Operating Cisco Security Core Technologies (SCOR)", desc: "CCNP Security core. Network security, cloud security, endpoint protection, and Cisco Secure Access.", tags: ["Firepower", "ISE", "VPNs", "Cloud Sec"], price: "₦650,000", priceSub: "3 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=75" },
  { id: "sncf", cat: "infra-sec", level: "Professional", levelColor: "bg-[#20B2AA] text-white", duration: "40+ hrs · 18 Labs", code: "Exam: 300-710 SNCF", title: "Securing Networks with Cisco Firewalls (SNCF)", desc: "Deploy, manage and troubleshoot Cisco Firepower NGFW and NGIPS in enterprise environments.", tags: ["Firepower NGFW", "FMC", "IPS Policy", "SSL Decrypt"], price: "₦550,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=75" },
  { id: "soc", cat: "info-sec jobrole", level: "Cybersecurity", levelColor: "bg-[#FF073A] text-white", duration: "80+ hrs", code: "Career Track", title: "Cyber Security Analyst | SOC | Defender | Blue Team | Forensic Analyst", desc: "Comprehensive SOC analyst career track. Analyze, protect and defend against cybercriminal attacks.", tags: ["SIEM", "Threat Intel", "DFIR", "Blue Team"], price: "₦500,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=75" },
  { id: "pentest", cat: "info-sec jobrole", level: "Cybersecurity", levelColor: "bg-[#FF073A] text-white", duration: "70+ hrs", code: "Career Track", title: "Cybersecurity Offensive | Penetration Testing | Red Team Professional", desc: "Master ethical hacking, penetration testing and red team operations against real-world infrastructure.", tags: ["Pen Testing", "Red Team", "Exploit Dev", "Reporting"], price: "₦1,000,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=75" },
  { id: "linux", cat: "jobrole", level: "Server Mgmt", levelColor: "bg-[#20B2AA] text-white", duration: "50+ hrs · 20 Labs", code: "Certification: LPIC-1", title: "Linux Fundamentals & Administration (LPIC-1)", desc: "Command-line mastery, Linux installation, configuration, maintenance tasks and scripting fundamentals.", tags: ["CLI Mastery", "Shell Script", "File Systems", "Networking"], price: "₦300,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=75" },
  
  // Track 01 to 07 under 'jobrole' (Special Job Role)
  { id: "track1", cat: "networking jobrole", level: "Career Track", levelColor: "bg-[#20B2AA] text-white", duration: "6 Months", code: "Track 01", title: "Computer Networking & Server Administration", desc: "Install, manage, configure and secure computer & server networks. Ideal for those entering IT infrastructure, network administration, or systems management roles.", tags: ["CCNA 200-301", "Windows Server", "LPIC-1 Linux"], price: "₦1,500,000", priceSub: "All 3 modules · Lab access included", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75" },
  { id: "track2", cat: "core-net jobrole", level: "Career Track", levelColor: "bg-[#20B2AA] text-white", duration: "8 Months", code: "Track 02", title: "Core Infrastructure Network Professional", desc: "Install, manage, configure, automate and secure core networks infrastructure. CCNP Enterprise preparation with advanced routing, SD-WAN, and automation.", tags: ["CCNA", "ENCOR 350-401", "ENARSI 300-410"], price: "₦2,500,000", priceSub: "Modules 1-5 · Lab access included", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=75" },
  { id: "track3", cat: "info-sec jobrole", level: "Career Track", levelColor: "bg-[#20B2AA] text-white", duration: "8 Months", code: "Track 03", title: "Cybersecurity SOC | Defender | Blue Team | Forensic Analyst", desc: "Analyse, protect and defend internet-connected devices from malicious attacks. Master SIEM, threat detection, incident response, and digital forensics.", tags: ["Security+", "CySA+", "ECSA", "CNDv3", "SIEM"], price: "₦3,000,000", priceSub: "Modules 1-4 + chosen electives", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=75" },
  { id: "track4", cat: "info-sec jobrole", level: "Career Track", levelColor: "bg-[#FF073A] text-white", duration: "8 Months", code: "Track 04", title: "Cybersecurity Offensive | Red Team | Penetration Testing", desc: "Proactively find and exploit vulnerabilities through penetration testing, red teaming, and ethical hacking. CEH, OSCP, and advanced evasion techniques.", tags: ["CEH v13", "OSCP", "PEN-300", "Red Team"], price: "₦3,000,000", priceSub: "Modules 1-4 · Advanced labs", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=75" },
  { id: "track5", cat: "infra-sec jobrole", level: "Career Track", levelColor: "bg-[#20B2AA] text-white", duration: "4 Months", code: "Track 05", title: "Cybersecurity Cloud Security Professional", desc: "Consolidate protection of cloud-based networks for streamlined, continuous monitoring. AWS, Azure, and cloud security architecture from ground up.", tags: ["Intro to Networks", "Security Essentials", "Cloud Security"], price: "₦2,000,000", priceSub: "Modules 1-3 · Cloud lab environment", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=75" },
  { id: "track6", cat: "info-sec jobrole", level: "Career Track", levelColor: "bg-[#20B2AA] text-white", duration: "4 Months", code: "Track 06", title: "Cybersecurity Administration Professional", desc: "Cover all digital security needs — Governance, Risk and Compliance. CISSP, CISA, and ISC² CC for leadership-level cybersecurity professionals.", tags: ["ISC² CC", "CISA", "CISSP", "GRC"], price: "₦2,000,000", priceSub: "Modules 1-3 · GRC focus", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=75" },
  { 
    id: "track7", 
    cat: "info-sec jobrole", 
    level: "Career Track", 
    levelColor: "bg-[#20B2AA] text-white", 
    duration: "8 Months", 
    code: "Track 07", 
    title: "Cybersecurity SOC | Defender | Blue Team | Forensic Analyst", 
    desc: "Analyse, Protect and Defend internet-connected devices and services from malicious attacks by CYBERCRIMINALS.", 
    tags: ["SOC Defender", "Continuous Monitoring", "Incident Response", "Active Defense"], 
    price: "₦3,000,000", 
    priceSub: "Training Fee covers Module 1 — 4", 
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=75",
    extendedDesc: "Security teams failing to adapt to the new realities facing hybridized organizations risk employing outmoded tactics. This course teaches you continuous monitoring, balancing cloud & on-premises security, and advanced defense adaptation to prevent attacks and detect adversaries with actionable techniques.",
    requirements: "CPU: 64-bit Intel i5/i7 (8th Gen or newer) or AMD equivalent. x64-bit, 2.0+ GHz. Host setup/software configuration done at start at no extra cost."
  },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalId, setModalId] = useState<string | null>(null);

  const filtered = courses.filter((c) =>
    activeTab === "all" ? true : c.cat.includes(activeTab)
  );

  return (
    <section id="courses" className={`${sora.className} py-24 px-[5%] bg-[#f9fafb]`}>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <p className="font-mono text-[10px] text-[#20B2AA] uppercase tracking-[2.5px] flex items-center gap-2 mb-4 before:content-[''] before:w-6 before:h-[2px] before:bg-[#20B2AA] before:rounded justify-center">
          Our Full Curriculum
        </p>
        <h2 className="text-center text-[clamp(1.9rem,3.2vw,2.7rem)] font-extrabold text-[#0d1b2a] tracking-tight leading-[1.15] mb-4">
          40+ Courses Across <span className="text-[#20B2AA]">4</span><br className="hidden md:block" />
          <span className="text-[#20B2AA]">Specialist Tracks</span>
        </h2>
        <p className="text-center text-gray-500 text-[1.05rem] max-w-[600px] leading-[1.7] mb-8">
          Every course is mapped to official exam blueprints from Cisco, CompTIA, EC-Council, and Microsoft.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`text-[12px] font-bold uppercase tracking-wider px-6 py-2.5 rounded-full border transition-all duration-300 ${
                activeTab === cat.value
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-500 border-gray-200 hover:border-[#20B2AA] hover:text-[#20B2AA]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8 w-full">
          {filtered.map((course) => (
            <div
              key={course.id}
              onClick={() => setModalId(course.id)}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:border-[#20B2AA]/30 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className={`absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-[1px] px-2.5 py-1.5 rounded ${course.levelColor}`}>
                    {course.level}
                  </span>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/85 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                    ⏱ {course.duration}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <p className="font-mono text-[10px] text-[#FF073A] uppercase tracking-[1px] font-bold mb-2">{course.code}</p>
                  <h3 className="font-bold text-[#0d1b2a] text-[15px] leading-snug mb-3">{course.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{course.desc}</p>
                  
                  {course.extendedDesc && (
                    <p className="text-[12.5px] text-gray-400 italic leading-relaxed mb-4 border-l-2 border-[#20B2AA]/30 pl-3">
                      {course.extendedDesc}
                    </p>
                  )}

                  {course.requirements && (
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-[11px] text-gray-500 mb-4 leading-normal font-sans">
                      <strong className="text-[#0d1b2a] block mb-0.5">💻 PC Requirements:</strong>
                      {course.requirements}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[9px] font-semibold bg-[#20B2AA]/10 text-[#20B2AA] px-2.5 py-1 rounded border border-[#20B2AA]/20">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 bg-white">
                <div>
                  <div className="font-extrabold text-[#0d1b2a] text-[16px]">{course.price}</div>
                  <div className="font-mono text-[10px] text-gray-400 mt-0.5">{course.priceSub}</div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setModalId(course.id); }}
                  className="text-[#20B2AA] hover:text-[#20B2AA]/85 text-[13px] font-bold flex items-center gap-1 transition-colors bg-transparent border-none cursor-pointer"
                >
                  Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="inline-block bg-[#20B2AA] text-white font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-[#20B2AA]/90 shadow-[0_4px_20px_rgba(32,178,170,0.25)] hover:shadow-[0_4px_25px_rgba(32,178,170,0.4)] hover:-translate-y-0.5 transition-all duration-300">
            View All 40+ Courses — Speak to an Advisor →
          </Link>
        </div>
      </div>

      {modalId && <CourseModal id={modalId} onClose={() => setModalId(null)} />}
    </section>
  );
}