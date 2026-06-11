const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'components', 'AboutUs.tsx');
const content = `import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="py-24 px-[5%] bg-[#f7fcf9]">
      <div className="max-w-[1200px] mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 py-1 px-3 rounded-full bg-[#0e7c5a]/10 text-[#0e7c5a] text-sm font-semibold uppercase tracking-[1px]">
            About Sec Concept Networks
          </div>
          <div className="space-y-5">
            <h1 className="text-[clamp(2.3rem,4vw,3.5rem)] font-extrabold text-[#0a2e1f] leading-[1.05]">
              We build practical expertise for the next generation of network and security professionals.
            </h1>
            <p className="max-w-[720px] text-[#42524f] text-base leading-8 md:text-lg">
              Sec Concept Networks is a hands-on training company focused on Cisco, networking, cybersecurity, and cloud security. Our training blends real infrastructure labs, certification readiness, and career support so learners can move from theory to operational confidence fast.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#d8e9df] bg-white p-6 shadow-[0_14px_50px_rgba(14,124,90,0.08)]">
              <p className="text-[2rem] font-extrabold text-[#0e7c5a]">150+</p>
              <p className="mt-2 text-sm text-[#5c776d]">Certifications mapped to training paths</p>
            </div>
            <div className="rounded-3xl border border-[#d8e9df] bg-white p-6 shadow-[0_14px_50px_rgba(14,124,90,0.08)]">
              <p className="text-[2rem] font-extrabold text-[#0e7c5a]">96%</p>
              <p className="mt-2 text-sm text-[#5c776d]">Exam pass rate for our learners</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-[#d8e9df] bg-white p-6">
              <h2 className="font-bold text-[#0a2e1f] text-xl mb-3">Our Mission</h2>
              <p className="text-[#42524f] leading-7">Deliver practical, exam-aligned training that prepares students to manage enterprise networks and defend critical systems with confidence.</p>
            </div>
            <div className="rounded-3xl border border-[#d8e9df] bg-white p-6">
              <h2 className="font-bold text-[#0a2e1f] text-xl mb-3">How we teach</h2>
              <p className="text-[#42524f] leading-7">Through guided labs, live workshops, and real-world scenarios that turn concepts into job-ready skills.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/programs" className="inline-flex items-center justify-center rounded-full bg-[#0e7c5a] px-8 py-4 text-white text-sm font-bold shadow-lg shadow-[#0e7c5a]/15 hover:bg-[#095e42] transition">
              View Training Programs
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#0e7c5a] px-8 py-4 text-[#0e7c5a] text-sm font-semibold hover:bg-[#0e7c5a]/10 transition">
              Talk to an Advisor
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#d8e9df] bg-white p-6 shadow-[0_18px_70px_rgba(14,124,90,0.08)]">
          <div className="overflow-hidden rounded-[2rem] bg-[#f3faf5] shadow-inner">
            <img src="https://ui-avatars.com/api/?name=Aminu+Olawale&background=0e7c5a&color=ffffff&size=450" alt="Profile placeholder" className="w-full h-full object-cover" />
          </div>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[1px] text-[#0e7c5a]/80">Founder & Lead Instructor</p>
              <h3 className="text-2xl font-extrabold text-[#0a2e1f]">Aminu Olawale</h3>
            </div>
            <p className="text-[#42524f] leading-7">A career IT professional with over 16 years in enterprise networking and cybersecurity, Aminu leads our training delivery with practical labs and certification expertise.</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#45645a]">
              <div className="rounded-3xl bg-[#f6fcf8] p-4">
                <p className="font-bold text-lg text-[#0e7c5a]">16+</p>
                <p>Years experience</p>
              </div>
              <div className="rounded-3xl bg-[#f6fcf8] p-4">
                <p className="font-bold text-lg text-[#0e7c5a]">2.4k+</p>
                <p>Students trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(file, content, 'utf8');
console.log('AboutUs.tsx updated');
