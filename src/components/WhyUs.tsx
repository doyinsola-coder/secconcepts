import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const reasons = [
  {
    title: "Exam-Mapped Curriculum",
    text: "Every module aligns directly with official exam blueprints from Cisco, CompTIA, EC-Council, and Microsoft. Nothing irrelevant, nothing missing.",
    icon: (
      <svg className="w-5 h-5 text-[#20B2AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Hands-On Lab Access",
    text: "Real Cisco equipment and virtual lab environments. Practice live configurations and build the muscle memory that makes the difference.",
    icon: (
      <svg className="w-5 h-5 text-[#20B2AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Certified Expert Instructors",
    text: "CCIE, CCNP, CISSP certified trainers who still work in the field. They bring real incidents and war stories into every session.",
    icon: (
      <svg className="w-5 h-5 text-[#20B2AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    text: "Weekday, weekend, and fully self-paced options. Learn around your full-time job without sacrificing quality or instructor access.",
    icon: (
      <svg className="w-5 h-5 text-[#20B2AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Practice Exams Included",
    text: "Timed practice tests that mirror the real exam. Identify weak areas, improve systematically, walk in on exam day with confidence.",
    icon: (
      <svg className="w-5 h-5 text-[#20B2AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Post-Training Support",
    text: "Alumni community, weekly Q&A sessions, and continued mentor access after course completion. We don't vanish after you pay.",
    icon: (
      <svg className="w-5 h-5 text-[#20B2AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className={`${sora.className} py-24 px-[5%] bg-white`}>
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono text-[10px] text-[#20B2AA] uppercase tracking-[2.5px] flex items-center gap-2 mb-4">
          <span className="w-6 h-[2px] bg-[#FF073A] rounded shrink-0" />
          Why Choose Us
        </p>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-extrabold text-[#0d1b2a] tracking-tight leading-[1.15] mb-4">
          Training That Delivers <span className="text-[#20B2AA]">Real</span><br />
          <span className="text-[#20B2AA]">Exam Results</span>
        </h2>
        <p className="text-gray-500 text-[1.05rem] max-w-[560px] leading-[1.7] mb-12">
          We don't teach theory for theory's sake. Every session is designed to get you certified and job-ready.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-[#20B2AA]/30 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#20B2AA]/10 flex items-center justify-center mb-5">
                {r.icon}
              </div>
              <h3 className="font-bold text-[#0d1b2a] text-[15px] mb-2">{r.title}</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}