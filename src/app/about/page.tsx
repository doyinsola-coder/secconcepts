"use client";

import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_ENROLL_URL } from "@/constants/contacts";
const stats = [
  { n: "40+", label: "Courses" },
  { n: "96%", label: "Pass Rate" },
  { n: "2.4K+", label: "Graduates" },
];

const values = [
  { title: "Innovation", desc: "We embrace cutting-edge technology to deliver creative and forward-thinking ICT solutions that prepare students for tomorrow's challenges.", color: "#20B2AA", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=75" },
  { title: "Empowerment", desc: "We equip individuals and organizations with skills and tools for lasting success in the ever-evolving ICT landscape.", color: "#FF073A", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=75" },
  { title: "Excellence", desc: "We strive for the highest standards in training quality, customer service, and student outcomes — evidenced by our 96% first-attempt pass rate.", color: "#20B2AA", img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=75" },
  { title: "Adaptability", desc: "Flexible, practical solutions tailored to the evolving needs of the IT industry. Weekend, weekday, online, and in-person options.", color: "#20B2AA", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75" },
  {title: "Our Vision", desc: "To afford individuals, firms with PRACTICAL and FLEXIBLE ICT Networking, Security, Web Solutions and Training.", color: "#FF073A", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=75" }, 
  {title: "Our Mission", desc: "To empower individuals and organizations with capacity-building tools designed to significantly solve challenges faced in the IT sector.", color: "#20B2AA", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=75"   }
];

const team = [
  { name: "Aliyu Azeez Omotayo", role: "CEO & Principal Consultant", certs: "CCIE R&S · MCSE · 150+ Certifications", bio: "25+ years in networking and security across Nigeria, South Africa, France, and the USA. Degrees in Mathematics and Information Networks from the USA. Member of CPN and Accredited Management Trainer (CMD).", initials: "AAO" },
  { name: "Ogundeji Olubukunmi", role: "Chief Operating Officer", certs: "CCNP · Cisco ASA · Firepower", bio: "Expert in designing and securing enterprise network infrastructures. Proficient in Cisco ASA, Firepower, Catalyst switches, ISR routers, VPNs, and cloud integration across AWS and Azure.", initials: "OOB" },
  { name: "Akinyemi Adebayo", role: "Chief Technical Officer", certs: "CCNP · MEng Electrical Engineering", bio: "Telecom engineer with 20+ years in designing, installing, and maintaining telecommunication and computer networks. Involved in National and World Bank-assisted projects as System Integrator and Project Manager.", initials: "AA" },
  { name: "Ayo-Famola Ayodeji", role: "Business Development Manager", certs: "MBA (UniLorin) · ACCA Affiliate", bio: "MBA with specialization in marketing & HR from University of Ilorin. 10+ years growing SMEs through business promotion and marketing. ACCA affiliate member currently heading business development.", initials: "AFA" },
  { name: "Adedeji Aisha", role: "Instructor", certs: "CCNP Security · CEH · AWS Security", bio: "Cybersecurity instructor specializing in network security, ethical hacking, and cloud security. Experienced in delivering engaging training sessions and hands-on labs to help students master complex security concepts.", initials: "AA" },
  { name: "Bello AbdulRasheed", role: "COO Investment", certs: "MBA (UniLorin) · ACCA Affiliate", bio: "MBA with specialization in marketing & HR from University of Ilorin. 10+ years growing SMEs through business promotion and marketing. ACCA affiliate member currently heading business development.", initials: "BA" },
  { name: "Aliyu Shakiru", role: "Instructor", certs: "CCNP Enterprise · AWS Solutions Architect", bio: "Network and cloud instructor with expertise in Cisco enterprise technologies and AWS cloud solutions. Passionate about helping students build practical skills for modern IT careers through hands-on labs and real-world scenarios.", initials: "AS" },
  { name: "AbdulRasaq Fadlulah", role: "Instructor", certs: "CCNP Security · CompTIA CySA+", bio: "Cybersecurity instructor specializing in threat detection, incident response, and security operations. Experienced in delivering engaging training sessions and hands-on labs to help students master complex security concepts.", initials: "AF" },
];

const certifications = [
  "Cisco CCNA / CCNP / CCIE", "CompTIA Network+ / Security+ / CySA+", "EC-Council CEH / ECSA / CNDv3",
  "ISC² CISSP / CC", "ISACA CISA", "Microsoft AZ-700", "LPIC-1 Linux", "OffSec OSCP / PEN-300",
  "AWS Security", "CASP+ / Pentest+",
];

export default function AboutPage() {
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
        .border-sea-green-20 { border-color: rgba(32, 178, 170, 0.2) !important; }
        .border-sea-green-30 { border-color: rgba(32, 178, 170, 0.3) !important; }
      `}} />

      {/* Hero */}
      <section className="bg-black px-[5%] py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-6">Our Story</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold text-white leading-tight mb-5 tracking-tight">
            Empowering Nigeria's ICT Professionals
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed mb-4">
            At Sec Concepts Networks, our passion for empowering individuals and organizations through cutting-edge ICT solutions drives everything we do. We bridge the gap between technology and opportunity — delivering world-class networking, cybersecurity, and training solutions across Nigeria and beyond.
          </p>
          <p className="text-white/60 text-[14px] leading-relaxed mb-8">
            Our vision: provide practical, flexible, and innovative ICT tools that solve real-world challenges. Whether you're mastering Cisco CCNA or securing cloud infrastructure, we are here to support your success.
          </p>
          <div className="flex flex-wrap gap-4 mb-10 font-sora-custom">
            <Link href="/#courses" className="bg-neon-red bg-neon-red-hover text-white font-bold px-6 py-4 rounded-lg shadow-[0_4px_20px_rgba(255,7,58,0.25)] hover:shadow-[0_4px_25px_rgba(255,7,58,0.4)] hover:-translate-y-0.5 transition-all duration-300">Explore Courses →</Link>
            <Link href="/contact" className="bg-white text-black font-bold px-6 py-4 rounded-lg hover:bg-white/90 transition">Contact Us</Link>
          </div>
          <div className="flex gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 rounded-xl px-5 py-4 text-center border border-white/10">
                <div className="font-extrabold text-[1.8rem] text-neon-red tracking-tight">{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CEO image placeholder */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-white/30">
              <div className="w-24 h-24 rounded-full bg-sea-green flex items-center justify-center text-3xl font-bold text-white shadow-md">AAO</div>
              <p className="font-mono text-[11px] uppercase tracking-[1.5px] text-sea-green">CEO Photo</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white rounded-xl px-5 py-4 shadow-lg border border-gray-100">
            <p className="font-extrabold text-[#0d1b2a] text-[13px]">ALIYU Azeez Omotayo</p>
            <p className="font-mono text-[10px] text-sea-green mt-0.5">Principal Consultant & CEO</p>
            <p className="font-mono text-[10px] text-gray-400">Sec Concept Networks</p>
          </div>
        </div>
      </section>

      {/* CEO Letter */}
      <section className="py-20 px-[5%] bg-[#f9fafb]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-4">From the CEO</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-tight tracking-tight">A Letter from<br />Our Founder</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-gray-100 border-l-4 border-l-neon-red shadow-sm">
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              At Sec-Concepts Networks, our passion for empowering individuals and organizations through cutting-edge ICT solutions drives everything we do. We are committed to bridging the gap between technology and opportunity, delivering world-class networking, cybersecurity, and training solutions across Nigeria and beyond.
            </p>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              Our vision is simple yet bold: to provide practical, flexible, and innovative ICT tools that solve real-world challenges. As we look to the future, we remain dedicated to fostering academic excellence, equipping professionals for modern careers, and building a smarter, safer digital world.
            </p>
            <div className="border-t border-[#e5e7eb] pt-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sea-green flex items-center justify-center font-bold text-white text-[13px] shadow-sm">AAO</div>
              <div>
                <p className="font-bold text-[#0a2e1f] text-[15px]">ALIYU Azeez Omotayo</p>
                <p className="font-mono text-[11px] text-gray-400 mt-0.5">Principal Consultant & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-4 font-sora-custom">Core Values</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-10 tracking-tight">What Drives Everything We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-gray-100 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="relative h-[160px] overflow-hidden border-b border-gray-100">
                  <Image
                    src={v.img}
                    alt={v.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="w-2 h-5 rounded mb-3" style={{ background: v.color }} />
                  <h3 className="font-bold text-[#0d1b2a] text-[15px] mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-[5%] bg-black">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2px] text-sea-green border border-sea-green-30 bg-sea-green-5 px-4 py-1.5 rounded-full mb-4">Leadership</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-3 tracking-tight">Meet Our Expert Team</h2>
          <p className="text-white/60 text-[15px] mb-10">Experienced and well-trained professionals ready to handle your challenges.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m) => (
              <div
                key={m.name}
                className={`bg-[#0d0d0f] border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 ${
                  m.role.includes("CEO")
                    ? "border-sea-green shadow-[0_4px_25px_rgba(32,178,170,0.15)]"
                    : "border-white/5"
                }`}
              >
                {/* Image Placeholder */}
                <div className="h-[200px] bg-gradient-to-br from-[#121214] to-[#1c1c1f] flex items-center justify-center relative">
                  <div className="w-20 h-20 rounded-full border-4 border-[#0d0d0f] flex items-center justify-center font-extrabold text-xl text-white bg-sea-green shadow-md">
                    {m.initials}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-sea-green text-white font-mono text-[9px] uppercase tracking-[1.5px] px-2.5 py-1 rounded">
                    {m.role}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-extrabold text-white text-[16px] mb-1">{m.name}</h3>
                  <p className="font-mono text-[10px] text-sea-green uppercase tracking-[1px] mb-3">{m.certs}</p>
                  <p className="text-[13px] text-white/70 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%] bg-[#d90431] text-center">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">Take the Next Step in Your ICT Career Today</h2>
        <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8 leading-relaxed font-sora-custom">Join 2,400+ certified professionals who trained with Sec Concept Networks. Expert-led, hands-on, and aligned to the latest Cisco, CompTIA, and EC-Council exam blueprints.</p>
        <div className="flex flex-wrap justify-center gap-4 font-sora-custom">
          <Link href={WHATSAPP_ENROLL_URL}
target="_blank"
rel="noopener noreferrer" className="bg-white text-neon-red font-bold px-6 py-4 rounded-lg hover:bg-white/95 transition-colors shadow-lg">
            Enroll Now — July 2026 Cohort
          </Link>
          <Link href="/#courses" className="bg-transparent border border-white text-white font-bold px-6 py-4 rounded-lg hover:bg-white/10 transition-colors">
            Browse All Courses
          </Link>
        </div>
      </section>

    </div>
  );
}