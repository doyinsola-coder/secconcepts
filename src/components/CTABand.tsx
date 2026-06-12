"use client";

import Link from "next/link";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function CTABand() {
  return (
    <section className={`${sora.className} py-20 px-[5%] bg-[#20B2AA] text-center relative overflow-hidden`}>
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08] z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
        }}
      />

      <div className="relative z-10 max-w-[700px] mx-auto flex flex-col items-center">
        <h2 className="text-[clamp(2rem,4.5vw,2.8rem)] font-extrabold text-white leading-tight tracking-tight mb-5">
          Ready to Write Your Success<br />Story?
        </h2>
        <p className="text-white/95 text-[15px] leading-relaxed max-w-[550px] mb-8">
          Join thousands of certified professionals. Expert-led, hands-on training
          aligned to Cisco, CompTIA, and EC-Council blueprints.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/enroll"
            className="bg-[#FF073A] text-white font-bold text-[14px] px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(255,7,58,0.25)] hover:shadow-[0_4px_25px_rgba(255,7,58,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            &rarr; Enroll Now — July 2026 Cohort
          </Link>
          <Link
            href="/#courses"
            className="bg-transparent border border-white text-white font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            Browse All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}