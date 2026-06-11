"use client";

const instructors = [
  {
    name: "Adebayo Okafor",
    role: "Lead Instructor · Enterprise Networks",
    bio: "Senior Network Architect with 14 years designing enterprise networks across telecoms and banking in Nigeria and West Africa.",
    certs: ["CCIE ENT #58421", "CCNP Enterprise", "Cisco ATP"],
    initials: "AO",
    color: "#0e7c5a",
  },
  {
    name: "Ngozi Eze",
    role: "Cybersecurity Instructor · Red & Blue Team",
    bio: "Active security engineer specialising in SOC operations, incident response, and penetration testing for financial institutions.",
    certs: ["CISSP", "CEH", "CompTIA CySA+"],
    initials: "NE",
    color: "#c0392b",
  },
  {
    name: "Emeka Nwosu",
    role: "Cloud & Security Instructor",
    bio: "Cloud architect and security specialist with certifications across AWS, Azure, and Cisco security platforms.",
    certs: ["CCNP Security", "AWS Security", "Azure Administrator"],
    initials: "EN",
    color: "#095e42",
  },
];

export default function Instructors() {
  return (
    <section id="team" className="py-24 px-[5%] bg-[#f4faf7]">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono text-[11px] text-[#0e7c5a] uppercase tracking-[2px] flex items-center gap-2 mb-4 before:content-[''] before:w-6 before:h-[2px] before:bg-[#0e7c5a] before:rounded">
          Expert Faculty
        </p>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-extrabold text-[#0a2e1f] tracking-[-1px] leading-[1.15] mb-3">
          Learn from People Who<br />Do the Work Every Day
        </h2>
        <p className="text-[#1e4d35] text-[1.05rem] max-w-[560px] leading-[1.7] mb-12">
          Not academics. Not retired engineers. Active practitioners who configure Cisco gear, respond to incidents, and design networks for enterprise clients every week.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {instructors.map((inst) => (
            <div key={inst.name} className="bg-white border border-[#b8dece] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-200">

              {/* ── Avatar placeholder ── */}
              <div
                className="h-[240px] flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: inst.color + "18" }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-extrabold text-white shadow-md"
                  style={{ backgroundColor: inst.color }}
                >
                  {inst.initials}
                </div>
                <span
                  className="text-[11px] font-mono uppercase tracking-widest"
                  style={{ color: inst.color }}
                >
                  Instructor
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-extrabold text-[#0a2e1f] text-[16px]">{inst.name}</h3>
                <p className="text-[12px] text-[#0e7c5a] font-mono mb-3">{inst.role}</p>
                <p className="text-[13px] text-[#1e4d35] leading-relaxed mb-4">{inst.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {inst.certs.map((cert) => (
                    <span key={cert} className="font-mono text-[10px] bg-[#eaf6f1] text-[#095e42] px-2.5 py-1 rounded border border-[#b8dece]">
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