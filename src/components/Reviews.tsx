"use client";

import Link from "next/link";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const reviews = [
  {
    text: "Passed CCNP ENCOR first attempt with a 904. The labs here are harder than the real exam — exactly what you want. Best training investment of my career.",
    name: "Tunde Ekezie", role: "Network Engineer · Airtel Nigeria", initials: "TE",
  },
  {
    text: "The ENSLD wireless design course is unmatched. I went from basic Wi-Fi troubleshooting to designing multi-site enterprise wireless networks from scratch.",
    name: "Fatima Okafor", role: "Wireless Architect · MTN Nigeria", initials: "FO",
  },
  {
    text: "Instructors don't just read slides — they've done this for real and explain WHY things work. That depth is what separates Sec Concept Networks from everyone else.",
    name: "Chidi Balogun", role: "Senior NetOps · First Bank", initials: "CB",
  },
  {
    text: "I enrolled for the SOC Analyst track with zero cybersecurity background. Eight months later I landed a blue team role at a fintech. The support from instructors was incredible.",
    name: "Amaka Osei", role: "SOC Analyst · Flutterwave", initials: "AO",
  },
  {
    text: "The CCNA bootcamp was intense but worth every naira. The physical lab setup with real Cisco gear gave me muscle memory that no simulator can replicate.",
    name: "Ibrahim Musa", role: "Network Admin · Glo Nigeria", initials: "IM",
  },
  {
    text: "Sec Concept's pen testing track is world-class. I cleared CEH and OSCP within six months of finishing the course. The red team labs are exceptionally realistic.",
    name: "Seun Adeyemi", role: "Penetration Tester · Sterling Bank", initials: "SA",
  },
];

const stats = [
  { n: "2,400+", label: "Certified Graduates" },
  { n: "96%", label: "First-Attempt Pass Rate" },
  { n: "25+", label: "Years of Excellence" },
  { n: "150+", label: "Certifications Offered" },
];

export default function ReviewsPage() {
  function formatStatValue(val: string) {
    const numPart = val.match(/[\d,]+/)?.[0] || "";
    const symbolPart = val.replace(numPart, "");
    return (
      <>
        {numPart}
        <span className="text-[#FF073A]">{symbolPart}</span>
      </>
    );
  }

  return (
    <div className={`${sora.className} min-h-screen bg-white text-black`}>

      {/* Hero */}
      <section className="bg-white px-[5%] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative max-w-[800px] mx-auto flex flex-col items-center">
          <span className="inline-block font-mono text-[10px] uppercase tracking-[2.5px] text-[#20B2AA] border border-[#20B2AA]/30 bg-[#20B2AA]/5 px-4 py-1.5 rounded-full mb-6">
            Student Reviews
          </span>
          <h1 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold text-[#0d1b2a] leading-tight mb-5 tracking-tight">
            Results Speak <span className="text-[#20B2AA]">for Themselves</span>
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-[500px]">
            2,400+ certified professionals trained. Here's what some of them say.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-xl px-4 py-6 border border-gray-100 border-b-4 border-b-[#FF073A] shadow-sm flex flex-col items-center">
                <div className="font-extrabold text-[1.8rem] text-black tracking-tight">
                  {formatStatValue(s.n)}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[1.2px] text-gray-400 mt-2 text-center">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section id="reviews" className="py-20 px-[5%] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white border border-gray-100 rounded-2xl p-6 relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm flex flex-col justify-between">
                {/* Quote mark */}
                <span className="absolute top-5 right-6 text-[4.5rem] leading-none text-[#FF073A]/10 font-serif select-none">"</span>

                <div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#FF073A] text-[15px]">★</span>
                    ))}
                  </div>
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-6 italic">"{r.text}"</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-[12px] shrink-0 bg-black shadow-sm">
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0d1b2a] text-[14px]">{r.name}</div>
                    <div className="font-mono text-[10px] text-gray-400 mt-0.5">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-[#FF073A] text-white font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-[#FF073A]/90 hover:shadow-[0_4px_20px_rgba(255,7,58,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Join 2,400+ Certified Graduates →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-[5%] bg-gradient-to-br from-[#FF073A] to-[#d90431] text-center">
        <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white mb-4 tracking-tight">Ready to Write Your Success Story?</h2>
        <p className="text-white/80 text-[15px] max-w-[500px] mx-auto mb-8 leading-relaxed">Join thousands of certified professionals. Expert-led, hands-on training aligned to Cisco, CompTIA, and EC-Council blueprints.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/enroll" className="bg-white text-[#FF073A] font-bold px-6 py-4 rounded-lg hover:bg-white/95 transition-colors">
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