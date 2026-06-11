const reasons = [
  {
    title: "Exam-Mapped Curriculum",
    text: "Every module aligns directly with official exam blueprints from Cisco, CompTIA, EC-Council, and Microsoft. Nothing irrelevant, nothing missing.",
    highlight: true,
  },
  {
    title: "Hands-On Lab Access",
    text: "Real Cisco equipment and virtual lab environments. Practice live configurations and build the muscle memory that makes the difference.",
  },
  {
    title: "Certified Expert Instructors",
    text: "CCIE, CCNP, CISSP certified trainers who still work in the field. They bring real incidents and war stories into every session.",
  },
  {
    title: "Flexible Scheduling",
    text: "Weekday, weekend, and fully self-paced options. Learn around your full-time job without sacrificing quality or instructor access.",
    highlight: true,
  },
  {
    title: "Practice Exams Included",
    text: "Timed practice tests that mirror the real exam. Identify weak areas, improve systematically, walk in on exam day with confidence.",
  },
  {
    title: "Post-Training Support",
    text: "Alumni community, weekly Q&A sessions, and continued mentor access after course completion. We don't vanish after you pay.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 px-[5%]">
      <div className="max-w-[1200px] mx-auto">
        <p className="font-mono text-[11px] text-[#0e7c5a] uppercase tracking-[2px] flex items-center gap-2 mb-4 before:content-[''] before:w-6 before:h-[2px] before:bg-[#0e7c5a] before:rounded">
          Why Choose Us
        </p>
        <h2 className="text-[clamp(1.9rem,3.2vw,2.7rem)] font-extrabold text-[#0a2e1f] tracking-[-1px] leading-[1.15] mb-3">
          Training That Delivers<br />Real Exam Results
        </h2>
        <p className="text-[#1e4d35] text-[1.05rem] max-w-[560px] leading-[1.7] mb-12">
          We don't teach theory for theory's sake. Every session is designed to get you certified and job-ready.
        </p>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`p-6 rounded-xl border transition-all hover:-translate-y-1 hover:shadow-lg ${
                r.highlight
                  ? "border-t-2 border-t-[#e74c3c] border-x-[#b8dece] border-b-[#b8dece] border"
                  : "border-[#b8dece]"
              }`}
            >
              <div className="w-9 h-9 rounded-lg bg-[#eaf6f1] flex items-center justify-center mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0e7c5a]" />
              </div>
              <h3 className="font-bold text-[#0a2e1f] text-[15px] mb-2">{r.title}</h3>
              <p className="text-[13px] text-[#1e4d35] leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}