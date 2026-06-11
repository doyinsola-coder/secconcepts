import Link from "next/link";

const reviews = [
  {
    text: "Passed CCNP ENCOR first attempt with a 904. The labs here are harder than the real exam — exactly what you want. Best training investment of my career.",
    name: "Tunde Ekezie", role: "Network Engineer · Airtel Nigeria", initials: "TE", color: "#0e7c5a",
  },
  {
    text: "The ENSLD wireless design course is unmatched. I went from basic Wi-Fi troubleshooting to designing multi-site enterprise wireless networks from scratch.",
    name: "Fatima Okafor", role: "Wireless Architect · MTN Nigeria", initials: "FO", color: "#095e42",
  },
  {
    text: "Instructors don't just read slides — they've done this for real and explain WHY things work. That depth is what separates Sec Concept Networks from everyone else.",
    name: "Chidi Balogun", role: "Senior NetOps · First Bank", initials: "CB", color: "#c0392b",
  },
  {
    text: "I enrolled for the SOC Analyst track with zero cybersecurity background. Eight months later I landed a blue team role at a fintech. The support from instructors was incredible.",
    name: "Amaka Osei", role: "SOC Analyst · Flutterwave", initials: "AO", color: "#134d33",
  },
  {
    text: "The CCNA bootcamp was intense but worth every naira. The physical lab setup with real Cisco gear gave me muscle memory that no simulator can replicate.",
    name: "Ibrahim Musa", role: "Network Admin · Glo Nigeria", initials: "IM", color: "#0e7c5a",
  },
  {
    text: "Sec Concept's pen testing track is world-class. I cleared CEH and OSCP within six months of finishing the course. The red team labs are exceptionally realistic.",
    name: "Seun Adeyemi", role: "Penetration Tester · Sterling Bank", initials: "SA", color: "#c0392b",
  },
];

const stats = [
  { n: "2,400+", label: "Certified Graduates" },
  { n: "96%", label: "First-Attempt Pass Rate" },
  { n: "25+", label: "Years of Excellence" },
  { n: "150+", label: "Certifications Offered" },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a2e1f]">

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0a2e1f] to-[#134d33] px-[5%] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-[700px] mx-auto">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[2px] text-white/50 border border-white/20 px-3 py-1 rounded-full mb-6">Student Reviews</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold text-white leading-tight mb-5">
            Results Speak<br />for Themselves
          </h1>
          <p className="text-white/70 text-[15px] leading-relaxed mb-10">
            2,400+ certified professionals trained. Here's what some of them say.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl px-4 py-4 border border-white/10">
                <div className="font-extrabold text-[1.6rem] text-[#e74c3c]">{s.n}</div>
                <div className="font-mono text-[10px] uppercase tracking-[1.2px] text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section id="reviews" className="py-20 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-[#f4faf7] border border-[#b8dece] rounded-2xl p-6 relative hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                {/* Quote mark */}
                <span className="absolute top-5 right-6 text-[4rem] leading-none text-[#0e7c5a]/10 font-serif select-none">"</span>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#e74c3c] text-[15px]">★</span>)}
                </div>

                <p className="text-[13px] text-[#1e4d35] leading-relaxed mb-6 italic">"{r.text}"</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[12px] shrink-0" style={{ background: r.color }}>
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-bold text-[#0a2e1f] text-[14px]">{r.name}</div>
                    <div className="font-mono text-[11px] text-[#5a8a72]">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block border-2 border-[#0e7c5a] text-[#0e7c5a] font-bold text-[14px] px-8 py-3.5 rounded-lg hover:bg-[#eaf6f1] transition">
              Join 2,400+ Certified Graduates →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] bg-gradient-to-br from-[#e74c3c] to-[#c0392b] text-center">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-3">Ready to Write Your Success Story?</h2>
        <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8">Join thousands of certified professionals. Expert-led, hands-on training aligned to Cisco, CompTIA, and EC-Council blueprints.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/enroll" className="bg-white/15 border border-white/20 text-white font-bold px-6 py-3 rounded-lg hover:bg-white/25 transition">→ Enroll Now — July 2026 Cohort</Link>
          <Link href="/#courses" className="bg-white text-[#c0392b] font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition">Browse All Courses</Link>
        </div>
      </section>

    </div>
  );
}