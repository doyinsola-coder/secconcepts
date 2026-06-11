"use client";

import { useState } from "react";
import Link from "next/link";
import CourseModal from "./CourseModal";

const categories = [
  { label: "All Courses", value: "all" },
  { label: "Special Job Role", value: "jobrole" },
  { label: "Computer Networking", value: "networking" },
  { label: "Infrastructure Security", value: "infra-sec" },
  { label: "Information Security", value: "info-sec" },
  { label: "Core Networking", value: "core-net" },
];

const courses = [
  { id: "encor", cat: "core-net", level: "Professional", levelColor: "bg-[#c8eadd] text-[#095e42]", duration: "55+ hrs · 30 Labs", code: "Exam: 350-401 ENCOR", title: "Implementing Cisco Enterprise Core Technologies (ENCOR)", desc: "Mandatory CCNP core. Dual-stack, virtualization, network assurance, security, and Python automation.", tags: ["SD-Access", "BGP", "QoS", "Python"], price: "₦550,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=75" },
  { id: "enarsi", cat: "core-net", level: "Professional", levelColor: "bg-[#c8eadd] text-[#095e42]", duration: "45+ hrs · 22 Labs", code: "Exam: 300-410 ENARSI", title: "Implementing Cisco Enterprise Advanced Routing & Services (ENARSI)", desc: "Advanced routing technologies, Layer 3, VPN services, infrastructure security and services.", tags: ["OSPF", "BGP", "MPLS", "VRF"], price: "₦550,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=75" },
  { id: "sdwan", cat: "core-net", level: "Professional", levelColor: "bg-[#c8eadd] text-[#095e42]", duration: "38+ hrs · 15 Labs", code: "Exam: 300-415 ENSDWI", title: "Implementing Cisco SD-WAN Solutions (ENSDWI)", desc: "Deploy Cisco Catalyst SD-WAN end-to-end. vManage, controllers, policies, QoS, segmentation.", tags: ["vManage", "OMP", "ZTP", "Segmentation"], price: "₦750,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=75" },
  { id: "scor", cat: "infra-sec", level: "Professional", levelColor: "bg-[#c8eadd] text-[#095e42]", duration: "50+ hrs · 22 Labs", code: "Exam: 350-701 SCOR", title: "Implementing & Operating Cisco Security Core Technologies (SCOR)", desc: "CCNP Security core. Network security, cloud security, endpoint protection, and Cisco Secure Access.", tags: ["Firepower", "ISE", "VPNs", "Cloud Sec"], price: "₦650,000", priceSub: "3 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=75" },
  { id: "sncf", cat: "infra-sec", level: "Professional", levelColor: "bg-[#c8eadd] text-[#095e42]", duration: "40+ hrs · 18 Labs", code: "Exam: 300-710 SNCF", title: "Securing Networks with Cisco Firewalls (SNCF)", desc: "Deploy, manage and troubleshoot Cisco Firepower NGFW and NGIPS in enterprise environments.", tags: ["Firepower NGFW", "FMC", "IPS Policy", "SSL Decrypt"], price: "₦550,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=75" },
  { id: "soc", cat: "info-sec jobrole", level: "Cybersecurity", levelColor: "bg-[#fce7f3] text-[#9d174d]", duration: "80+ hrs", code: "Career Track", title: "Cyber Security Analyst | SOC | Defender | Blue Team | Forensic Analyst", desc: "Comprehensive SOC analyst career track. Analyze, protect and defend against cybercriminal attacks.", tags: ["SIEM", "Threat Intel", "DFIR", "Blue Team"], price: "₦500,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&q=75" },
  { id: "pentest", cat: "info-sec jobrole", level: "Cybersecurity", levelColor: "bg-[#fce7f3] text-[#9d174d]", duration: "70+ hrs", code: "Career Track", title: "Cybersecurity Offensive | Penetration Testing | Red Team Professional", desc: "Master ethical hacking, penetration testing and red team operations against real-world infrastructure.", tags: ["Pen Testing", "Red Team", "Exploit Dev", "Reporting"], price: "₦1,000,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=75" },
  { id: "linux", cat: "jobrole", level: "Server Mgmt", levelColor: "bg-[#e0e7ff] text-[#3730a3]", duration: "50+ hrs · 20 Labs", code: "Certification: LPIC-1", title: "Linux Fundamentals & Administration (LPIC-1)", desc: "Command-line mastery, Linux installation, configuration, maintenance tasks and scripting fundamentals.", tags: ["CLI Mastery", "Shell Script", "File Systems", "Networking"], price: "₦300,000", priceSub: "2 months · Bootcamp & Self-Paced", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=75" },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [modalId, setModalId] = useState<string | null>(null);

  const filtered = courses.filter((c) =>
    activeTab === "all" ? true : c.cat.includes(activeTab)
  );

  return (
    <section id="courses" className="py-24 px-[5%] bg-[#f4faf7]">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono text-[11px] text-[#0e7c5a] uppercase tracking-[2px] flex items-center gap-2 mb-4 before:content-[''] before:w-6 before:h-[2px] before:bg-[#0e7c5a] before:rounded">
          Our Full Curriculum
        </p>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-extrabold text-[#0a2e1f] tracking-[-1px] leading-[1.15] mb-3">
          40+ Courses Across<br />4 Specialist Tracks
        </h2>
        <p className="text-[#1e4d35] text-[1.05rem] max-w-[560px] leading-[1.7] mb-8">
          Every course is mapped to official exam blueprints from Cisco, CompTIA, EC-Council, and Microsoft.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveTab(cat.value)}
              className={`text-[13px] font-semibold px-5 py-2 rounded-lg border transition-all ${
                activeTab === cat.value
                  ? "bg-[#0e7c5a] text-white border-[#0e7c5a]"
                  : "bg-white text-[#1e4d35] border-[#b8dece] hover:bg-[#0e7c5a] hover:text-white hover:border-[#0e7c5a]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
          {filtered.map((course) => (
            <div
              key={course.id}
              onClick={() => setModalId(course.id)}
              className="bg-white border border-[#b8dece] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-[#0e7c5a]/30 transition-all duration-200"
            >
              {/* Image */}
              <div className="relative h-[200px] overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/75 to-transparent" />
                <span className={`absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-[1px] px-2.5 py-1 rounded ${course.levelColor}`}>
                  {course.level}
                </span>
                <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/85 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                  ⏱ {course.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="font-mono text-[10px] text-[#5a8a72] uppercase tracking-[0.5px] mb-1">{course.code}</p>
                <h3 className="font-bold text-[#0a2e1f] text-[15px] leading-snug mb-2">{course.title}</h3>
                <p className="text-[13px] text-[#1e4d35] leading-relaxed mb-3">{course.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] bg-[#e6f4ee] text-[#1e4d35] px-2 py-0.5 rounded border border-[#b8dece]">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-[#b8dece] bg-[#f4faf7]">
                <div>
                  <div className="font-extrabold text-[#0a2e1f] text-[17px]">{course.price}</div>
                  <div className="font-mono text-[11px] text-[#5a8a72]">{course.priceSub}</div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setModalId(course.id); }}
                  className="bg-[#0e7c5a] text-white text-[13px] font-bold px-4 py-2 rounded-lg hover:bg-[#095e42] transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="inline-block border border-[#0e7c5a]/30 text-[#0e7c5a] font-bold text-[14px] px-6 py-3 rounded-lg hover:bg-[#eaf6f1] transition-colors">
            View All 40+ Courses — Speak to an Advisor →
          </Link>
        </div>
      </div>

      {modalId && <CourseModal id={modalId} onClose={() => setModalId(null)} />}
    </section>
  );
}