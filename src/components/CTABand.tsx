import Link from "next/link";

export default function CTABand() {
  return (
    <section className="py-20 px-[5%] bg-gradient-to-br from-[#e74c3c] to-[#c0392b] text-center relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-mono text-[8rem] font-black text-white/5 uppercase tracking-widest whitespace-nowrap">
          ICT Career
        </span>
      </div>

      <div className="relative z-10 max-w-[640px] mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[3px] text-white/50 mb-6">
          Limited Seats Per Cohort
        </p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-tight tracking-[-1px] mb-5">
          Take the Next Step in<br />
          Your <span className="text-white/20">ICT Career</span> Today
        </h2>
        <p className="text-white/75 text-[15px] leading-relaxed mb-8">
          Join 2,400+ certified professionals who trained with Sec Concept Networks.
          Expert-led, hands-on, and aligned to the latest Cisco, CompTIA, and EC-Council exam blueprints.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/enroll"
            className="bg-white/15 hover:bg-white/25 text-white font-bold text-[14px] px-7 py-3.5 rounded-lg border border-white/20 transition-all"
          >
            → Enroll Now — July 2026 Cohort
          </Link>
          <Link
            href="/#courses"
            className="bg-white text-[#c0392b] font-bold text-[14px] px-7 py-3.5 rounded-lg hover:bg-white/90 transition-all"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}