import Link from "next/link";

const stats = [
  { n: "40+", label: "Courses" },
  { n: "96%", label: "Pass Rate" },
  { n: "2.4K+", label: "Graduates" },
];

const values = [
  { title: "Innovation", desc: "We embrace cutting-edge technology to deliver creative and forward-thinking ICT solutions that prepare students for tomorrow's challenges.", color: "#0e7c5a" },
  { title: "Empowerment", desc: "We equip individuals and organizations with skills and tools for lasting success in the ever-evolving ICT landscape.", color: "#e74c3c" },
  { title: "Excellence", desc: "We strive for the highest standards in training quality, customer service, and student outcomes — evidenced by our 96% first-attempt pass rate.", color: "#0e7c5a" },
  { title: "Adaptability", desc: "Flexible, practical solutions tailored to the evolving needs of the IT industry. Weekend, weekday, online, and in-person options.", color: "#0e7c5a" },
];

const team = [
  { name: "Aliyu Azeez Omotayo", role: "CEO & Principal Consultant", certs: "CCIE R&S · MCSE · 150+ Certifications", bio: "25+ years in networking and security across Nigeria, South Africa, France, and the USA. Degrees in Mathematics and Information Networks from the USA. Member of CPN and Accredited Management Trainer (CMD).", initials: "AAO", color: "#0e7c5a" },
  { name: "Ogundeji O. Bukunmi", role: "Chief Operating Officer", certs: "CCNP · Cisco ASA · Firepower", bio: "Expert in designing and securing enterprise network infrastructures. Proficient in Cisco ASA, Firepower, Catalyst switches, ISR routers, VPNs, and cloud integration across AWS and Azure.", initials: "OOB", color: "#134d33" },
  { name: "Akinyemi Adebayo", role: "Chief Technical Officer", certs: "CCNP · MEng Electrical Engineering", bio: "Telecom engineer with 20+ years in designing, installing, and maintaining telecommunication and computer networks. Involved in National and World Bank-assisted projects as System Integrator and Project Manager.", initials: "AA", color: "#095e42" },
  { name: "Ayo-Famola Ayodeji", role: "Business Development Manager", certs: "MBA (UniLorin) · ACCA Affiliate", bio: "MBA with specialization in marketing & HR from University of Ilorin. 10+ years growing SMEs through business promotion and marketing. ACCA affiliate member currently heading business development.", initials: "AFA", color: "#1a9470" },
];

const certifications = [
  "Cisco CCNA / CCNP / CCIE", "CompTIA Network+ / Security+ / CySA+", "EC-Council CEH / ECSA / CNDv3",
  "ISC² CISSP / CC", "ISACA CISA", "Microsoft AZ-700", "LPIC-1 Linux", "OffSec OSCP / PEN-300",
  "AWS Security", "CASP+ / Pentest+",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a2e1f]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a2e1f] to-[#134d33] px-[5%] py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-white/50 border border-white/20 px-3 py-1 rounded-full mb-6">Our Story</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold text-white leading-tight mb-5">
            Empowering Nigeria's ICT Professionals
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed mb-4">
            At Sec Concepts Networks, our passion for empowering individuals and organizations through cutting-edge ICT solutions drives everything we do. We bridge the gap between technology and opportunity — delivering world-class networking, cybersecurity, and training solutions across Nigeria and beyond.
          </p>
          <p className="text-white/60 text-[14px] leading-relaxed mb-8">
            Our vision: provide practical, flexible, and innovative ICT tools that solve real-world challenges. Whether you're mastering Cisco CCNA or securing cloud infrastructure, we are here to support your success.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/#courses" className="bg-[#e74c3c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#c0392b] transition">Explore Courses →</Link>
            <Link href="/contact" className="bg-white text-[#0a2e1f] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition">Contact Us</Link>
          </div>
          <div className="flex gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl px-5 py-4 text-center border border-white/10">
                <div className="font-extrabold text-[1.8rem] text-[#e74c3c]">{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[1.5px] text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CEO image placeholder */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden bg-white/10 border border-white/10 aspect-[4/3] flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 text-white/30">
              <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-dashed border-white/20 flex items-center justify-center text-3xl font-bold text-white/40">AAO</div>
              <p className="font-mono text-[11px] uppercase tracking-[1.5px]">CEO Photo</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-3 shadow-lg">
            <p className="font-bold text-[#0a2e1f] text-[13px]">ALIYU Azeez Omotayo</p>
            <p className="font-mono text-[10px] text-[#0e7c5a]">Principal Consultant & CEO</p>
            <p className="font-mono text-[10px] text-[#5a8a72]">Sec Concept Networks</p>
          </div>
        </div>
      </section>

      {/* CEO Letter */}
      <section className="py-20 px-[5%] bg-[#f4faf7]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-4">From the CEO</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-tight">A Letter from<br />Our Founder</h2>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] border-l-4 border-l-[#e74c3c] shadow-sm">
            <p className="text-[#374151] text-[15px] leading-relaxed mb-5">
              At Sec-Concepts Networks, our passion for empowering individuals and organizations through cutting-edge ICT solutions drives everything we do. We are committed to bridging the gap between technology and opportunity, delivering world-class networking, cybersecurity, and training solutions across Nigeria and beyond.
            </p>
            <p className="text-[#374151] text-[15px] leading-relaxed mb-8">
              Our vision is simple yet bold: to provide practical, flexible, and innovative ICT tools that solve real-world challenges. As we look to the future, we remain dedicated to fostering academic excellence, equipping professionals for modern careers, and building a smarter, safer digital world.
            </p>
            <div className="border-t border-[#e5e7eb] pt-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#eaf6f1] border-2 border-dashed border-[#b8dece] flex items-center justify-center font-bold text-[#0e7c5a] text-[13px]">AAO</div>
              <div>
                <p className="font-bold text-[#0a2e1f] text-[15px]">ALIYU Azeez Omotayo</p>
                <p className="font-mono text-[11px] text-[#5a8a72]">Principal Consultant & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-4">Core Values</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-10">What Drives Everything We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="border border-[#e5e7eb] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="h-[160px] bg-[#f3f4f6] flex items-center justify-center border-b border-[#e5e7eb]">
                  <div className="w-16 h-16 rounded-full bg-[#e5e7eb] border-2 border-dashed border-[#d1d5db] flex items-center justify-center text-[#9ca3af] text-xs font-mono uppercase tracking-wider">Image</div>
                </div>
                <div className="p-5">
                  <div className="w-1 h-5 rounded mb-3" style={{ background: v.color }} />
                  <h3 className="font-bold text-[#0a2e1f] text-[15px] mb-2">{v.title}</h3>
                  <p className="text-[#4b5563] text-[13px] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-[5%] bg-[#f4faf7]">
        <div className="max-w-[1200px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-4">Leadership</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-3">Meet Our Expert Team</h2>
          <p className="text-[#4b5563] text-[15px] mb-10">Experience and well-trained professionals ready to handle your challenges.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all">
                {/* Placeholder image */}
                <div className="h-[200px] bg-gradient-to-br from-[#e5e7eb] to-[#d1d5db] flex items-center justify-center relative">
                  <div className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center font-extrabold text-xl text-white" style={{ background: m.color }}>
                    {m.initials}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#0e7c5a] text-white font-mono text-[9px] uppercase tracking-[1.5px] px-2.5 py-1 rounded">
                    {m.role}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0a2e1f] text-[16px] mb-1">{m.name}</h3>
                  <p className="font-mono text-[10px] text-[#0e7c5a] uppercase tracking-[1px] mb-3">{m.certs}</p>
                  <p className="text-[13px] text-[#4b5563] leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-[5%] bg-[#f4faf7] text-center">
        <div className="max-w-[900px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-[#0e7c5a] border border-[#b8dece] px-3 py-1 rounded-full mb-6">Certification Partners</span>
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold mb-8">Globally Recognized Certifications</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((c) => (
              <span key={c} className="text-[13px] font-mono text-[#0a2e1f] border border-[#b8dece] px-4 py-2 rounded-lg hover:bg-[#eaf6f1] transition cursor-default">{c}</span>
            ))}
          </div>
          <p className="font-mono text-[11px] text-[#9ca3af] mt-8">Cisco Networking Academy Authorized Training Partner · EC-Council Accredited Training Center · Ilorin, Nigeria · RC1270765</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] bg-gradient-to-br from-[#e74c3c] to-[#c0392b] text-center">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-3">Take the Next Step in Your ICT Career Today</h2>
        <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8">Join 2,400+ certified professionals who trained with Sec Concept Networks. Expert-led, hands-on, and aligned to the latest Cisco, CompTIA, and EC-Council exam blueprints.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/enroll" className="bg-white/15 border border-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/25 transition">→ Enroll Now — July 2026 Cohort</Link>
          <Link href="/#courses" className="bg-white text-[#c0392b] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition">Browse All Courses</Link>
        </div>
      </section>

    </div>
  );
}