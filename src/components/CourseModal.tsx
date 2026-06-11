"use client";

import { useEffect } from "react";

type Course = {
  id: string;
  title: string;
  code: string;
  duration: string;
  price: string;
  priceSub: string;
  description: string;
  tags: string[];
  modules: string[];
  level: string;
};

const courses: Course[] = [
  {
    id: "ensld",
    title: "Designing Cisco Enterprise Wireless Networks (ENSLD)",
    code: "Exam: 300-420 ENSLD",
    duration: "40+ hrs · 20 Labs · 3 Practice Exams",
    price: "Contact for pricing",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "The definitive wireless design course — architecting, planning and deploying scalable Cisco wireless infrastructure. Aligned precisely to the 300-420 ENSLD exam blueprint.",
    tags: ["Wireless Design", "RF Planning", "Roaming", "High Availability"],
    modules: [
      "Wireless Network Design Fundamentals",
      "RF Signal & Antenna Theory",
      "High Availability & Roaming Design",
      "Cisco DNA Spaces & Analytics",
      "Security Design for Wireless",
      "Practice Exam Sessions",
    ],
    level: "Professional",
  },
  {
    id: "encor",
    title: "Implementing Cisco Enterprise Core Technologies (ENCOR)",
    code: "Exam: 350-401 ENCOR",
    duration: "55+ hrs · 30 Labs",
    price: "₦550,000",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "Mandatory CCNP core. Dual-stack, virtualization, network assurance, security, and Python automation.",
    tags: ["SD-Access", "BGP", "QoS", "Python"],
    modules: [
      "Enterprise Network Architecture",
      "Virtualization & SD-Access",
      "Routing Protocols (OSPF, BGP)",
      "QoS & Network Assurance",
      "Security Fundamentals",
      "Python Network Automation",
    ],
    level: "Professional",
  },
  {
    id: "enarsi",
    title: "Implementing Cisco Enterprise Advanced Routing & Services (ENARSI)",
    code: "Exam: 300-410 ENARSI",
    duration: "45+ hrs · 22 Labs",
    price: "₦550,000",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "Advanced routing technologies, Layer 3, VPN services, infrastructure security and services.",
    tags: ["OSPF", "BGP", "MPLS", "VRF"],
    modules: [
      "Advanced EIGRP & OSPF",
      "BGP Policy & Attributes",
      "MPLS & VRF Fundamentals",
      "IP Services & Multicast",
      "Infrastructure Security",
      "VPN Technologies",
    ],
    level: "Professional",
  },
  {
    id: "sdwan",
    title: "Implementing Cisco SD-WAN Solutions (ENSDWI)",
    code: "Exam: 300-415 ENSDWI",
    duration: "38+ hrs · 15 Labs",
    price: "₦750,000",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "Deploy Cisco Catalyst SD-WAN end-to-end. vManage, controllers, policies, QoS, segmentation.",
    tags: ["vManage", "OMP", "ZTP", "Segmentation"],
    modules: [
      "SD-WAN Architecture Overview",
      "vManage & Controllers Setup",
      "Zero Touch Provisioning",
      "Routing Policies & OMP",
      "QoS & Application Awareness",
      "Security & Segmentation",
    ],
    level: "Professional",
  },
  {
    id: "scor",
    title: "Implementing & Operating Cisco Security Core Technologies (SCOR)",
    code: "Exam: 350-701 SCOR",
    duration: "50+ hrs · 22 Labs",
    price: "₦650,000",
    priceSub: "3 months · Bootcamp & Self-Paced",
    description:
      "CCNP Security core. Network security, cloud security, endpoint protection, and Cisco Secure Access.",
    tags: ["Firepower", "ISE", "VPNs", "Cloud Sec"],
    modules: [
      "Network Security Fundamentals",
      "Cisco Firepower NGFW",
      "Identity Services Engine (ISE)",
      "VPN Technologies",
      "Cloud Security Architecture",
      "Endpoint & Email Security",
    ],
    level: "Professional",
  },
  {
    id: "sncf",
    title: "Securing Networks with Cisco Firewalls (SNCF)",
    code: "Exam: 300-710 SNCF",
    duration: "40+ hrs · 18 Labs",
    price: "₦550,000",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "Deploy, manage and troubleshoot Cisco Firepower NGFW and NGIPS solutions in enterprise environments.",
    tags: ["Firepower NGFW", "FMC", "IPS Policy", "SSL Decrypt"],
    modules: [
      "Firepower Architecture & Deployment",
      "FMC Policy Management",
      "Intrusion Prevention (NGIPS)",
      "SSL/TLS Decryption",
      "High Availability & Clustering",
      "Troubleshooting & Reporting",
    ],
    level: "Professional",
  },
  {
    id: "soc",
    title:
      "Cyber Security Analyst | SOC | Defender | Blue Team | Forensic Analyst",
    code: "Career Track",
    duration: "80+ hrs",
    price: "₦500,000",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "Comprehensive SOC analyst career track. Analyze, protect and defend against cybercriminal attacks.",
    tags: ["SIEM", "Threat Intel", "DFIR", "Blue Team"],
    modules: [
      "SOC Operations & Workflow",
      "SIEM Platforms & Log Analysis",
      "Threat Intelligence & Hunting",
      "Incident Response (DFIR)",
      "Malware Analysis Basics",
      "Forensic Investigation",
    ],
    level: "Cybersecurity",
  },
  {
    id: "pentest",
    title:
      "Cybersecurity Offensive | Penetration Testing | Red Team Professional",
    code: "Career Track",
    duration: "70+ hrs",
    price: "₦1,000,000",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "Master ethical hacking, penetration testing and red team operations against real-world infrastructure.",
    tags: ["Pen Testing", "Red Team", "Exploit Dev", "Reporting"],
    modules: [
      "Ethical Hacking Fundamentals",
      "Reconnaissance & OSINT",
      "Vulnerability Scanning & Exploitation",
      "Web Application Testing",
      "Post-Exploitation & Pivoting",
      "Red Team Reporting",
    ],
    level: "Cybersecurity",
  },
  {
    id: "linux",
    title: "Linux Fundamentals & Administration (LPIC-1)",
    code: "Certification: LPIC-1",
    duration: "50+ hrs · 20 Labs",
    price: "₦300,000",
    priceSub: "2 months · Bootcamp & Self-Paced",
    description:
      "Command-line mastery, Linux installation, configuration, maintenance tasks and scripting fundamentals.",
    tags: ["CLI Mastery", "Shell Script", "File Systems", "Networking"],
    modules: [
      "Linux Installation & Architecture",
      "File System & Permissions",
      "Shell Scripting Basics",
      "Package Management",
      "Networking & Services",
      "System Maintenance & Logs",
    ],
    level: "Server Mgmt",
  },
];

export default function CourseModal({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl w-full max-w-[600px] max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0a2e1f] p-6 rounded-t-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#0e7c5a] mb-2 block">
                {course.code}
              </span>
              <h2 className="text-white font-extrabold text-[17px] leading-snug">
                {course.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-white/50 hover:text-white text-2xl leading-none mt-1 shrink-0"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div className="flex gap-4 text-sm">
            <span className="bg-[#eaf6f1] text-[#0e7c5a] font-mono text-[11px] px-3 py-1.5 rounded-lg">
              ⏱ {course.duration}
            </span>
            <span className="bg-[#eaf6f1] text-[#0e7c5a] font-mono text-[11px] px-3 py-1.5 rounded-lg">
              📋 {course.level}
            </span>
          </div>

          <p className="text-[#1e4d35] text-[14px] leading-relaxed">
            {course.description}
          </p>

          <div>
            <h3 className="font-extrabold text-[#0a2e1f] text-[13px] uppercase tracking-wider mb-3">
              Course Modules
            </h3>
            <ul className="space-y-2">
              {course.modules.map((mod, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[13px] text-[#1e4d35]"
                >
                  <span className="font-mono text-[#0e7c5a] text-[11px] mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  {mod}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-[#b8dece]">
            <div>
              <div className="font-extrabold text-[#0a2e1f] text-[20px]">
                {course.price}
              </div>
              <div className="font-mono text-[11px] text-[#5a8a72] mt-0.5">
                {course.priceSub}
              </div>
            </div>
            <a
              href="/enroll"
              className="bg-[#0e7c5a] text-white font-bold text-[13px] px-5 py-2.5 rounded-lg hover:bg-[#095e42] transition-colors"
            >
              Enroll Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
