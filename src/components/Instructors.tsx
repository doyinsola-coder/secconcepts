"use client";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instructors = [
  {
    name: "Aliyu Azeez Omotayo",
    role: "CEO & Principal Consultant",
    subtitle: "CCIE R&S · MCSE · 150+ CERTIFICATIONS",
    bio: "25+ years in networking and security across Nigeria, South Africa, France, and the USA. Degrees in Mathematics and Information Networks from the USA. Member of CPN and Accredited Management Trainer (CMD).",
    initials: "AAO",
    highlight: true,
  },
  {
    name: "Ogundeji Olubukunmi",
    role: "Chief Operating Officer",
    subtitle: "CCNP · CISCO ASA · FIREPOWER",
    bio: "Expert in designing and securing enterprise network infrastructures. Proficient in Cisco ASA, Firepower, Catalyst switches, ISR routers, VPNs, and cloud integration across AWS and Azure.",
    initials: "OOB",
  },
  {
    name: "Akinyemi Adebayo",
    role: "Chief Technical Officer",
    subtitle: "CCNP · MENG ELECTRICAL ENGINEERING",
    bio: "Telecom engineer with 20+ years in designing, installing, and maintaining telecommunication and computer networks. Involved in National and World Bank-assisted projects as System Integrator and Project Manager.",
    initials: "AA",
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
          Experienced and well-trained professionals ready to handle your challenges.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8">
          {instructors.map((inst) => (
            <div
              key={inst.name}
              className={`p-8 bg-[#0d0d0f] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between ${
                inst.highlight
                  ? "border-2 border-[#20B2AA] shadow-[0_4px_25px_rgba(32,178,170,0.15)]"
                  : "border border-white/5"
              }`}
            >
              <div>
                {/* Initials Circle */}
                <div className="w-16 h-16 rounded-full bg-[#20B2AA] flex items-center justify-center text-lg font-extrabold text-white mb-6 mx-auto shadow-[0_4px_12px_rgba(32,178,170,0.3)]">
                  {inst.initials}
                </div>

                {/* Info Block */}
                <div className="flex flex-col items-start">
                  <span className="text-[9px] font-bold font-mono tracking-wider bg-[#20B2AA] text-white px-2.5 py-1 rounded mb-4 uppercase">
                    {inst.role}
                  </span>
                  <h3 className="font-extrabold text-white text-lg mb-1">{inst.name}</h3>
                  <p className="text-[10px] text-[#20B2AA] font-bold tracking-wider uppercase mb-4">{inst.subtitle}</p>
                  <p className="text-[13px] text-white/70 leading-relaxed mb-2">{inst.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}