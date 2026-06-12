"use client";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instructors = [
  {
    name: "Adebayo Okafor",
    role: "Lead Instructor · Enterprise Networks",
    bio: "Senior Network Architect with 14 years designing enterprise networks across telecoms and banking in Nigeria and West Africa.",
    certs: ["CCIE ENT #58421", "CCNP Enterprise", "Cisco ATP"],
    initials: "AO",
  },
  {
    name: "Ngozi Eze",
    role: "Cybersecurity Instructor · Red & Blue Team",
    bio: "Active security engineer specialising in SOC operations, incident response, and penetration testing for financial institutions.",
    certs: ["CISSP", "CEH", "CompTIA CySA+"],
    initials: "NE",
    highlight: true,
  },
  {
    name: "Emeka Nwosu",
    role: "Cloud & Security Instructor",
    bio: "Cloud architect and security specialist with certifications across AWS, Azure, and Cisco security platforms.",
    certs: ["CCNP Security", "AWS Security", "Azure Administrator"],
    initials: "EN",
  },
];

export default function Instructors() {
  return (
    <section id="team" className={`${sora.className} py-24 px-[5%] bg-black`}>
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono text-[10px] text-[#20B2AA] uppercase tracking-[2.5px] flex items-center gap-2 mb-4">
          <span className="w-6 h-[2px] bg-[#FF073A] rounded shrink-0" />
          Expert Faculty
        </p>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
          Learn from People Who <span className="text-[#20B2AA]">Do the</span><br className="hidden md:block" />
          <span className="text-[#20B2AA]">Work Every Day</span>
        </h2>
        <p className="text-white/60 text-[1.05rem] max-w-[600px] leading-[1.7] mb-12">
          Not academics. Not retired engineers. Active practitioners who configure Cisco gear, respond to incidents, and design networks for enterprise clients every week.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className={`p-8 bg-[#0d0d0f] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
                inst.highlight
                  ? "border-2 border-[#20B2AA] shadow-[0_4px_25px_rgba(32,178,170,0.15)]"
                  : "border border-white/5"
              }`}
            >
              {/* Initials Circle */}
              <div className="w-14 h-14 rounded-full bg-[#20B2AA] flex items-center justify-center text-lg font-extrabold text-white mb-6 shadow-[0_4px_12px_rgba(32,178,170,0.3)]">
                {inst.initials}
              </div>

              {/* Info Block */}
              <div className="flex flex-col">
                <span className="text-[10px] font-bold font-mono tracking-widest text-[#FF073A] uppercase mb-2">
                  Instructor
                </span>
                <h3 className="font-extrabold text-white text-lg mb-1">{inst.name}</h3>
                <p className="text-[12px] text-[#20B2AA] font-semibold mb-4">{inst.role}</p>
                <p className="text-[13px] text-white/70 leading-relaxed mb-5">{inst.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {inst.certs.map((cert) => (
                    <span
                      key={cert}
                      className="font-mono text-[9px] font-semibold bg-[#20B2AA]/5 text-[#20B2AA] px-2.5 py-1.5 rounded border border-[#20B2AA]/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}