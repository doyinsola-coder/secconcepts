"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ── Social icons ──
const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100086646240938", color: "#1877F2", svg: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
  { label: "X / Twitter", href: "https://twitter.com/aliyuthayo", color: "#000", svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sec-concept-networks", color: "#0A66C2", svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></> },
  { label: "Instagram", href: "https://www.instagram.com/trainwithsec", color: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", svg: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke="currentColor" strokeWidth="2" /></> },
  { label: "WhatsApp", href: "https://wa.me/2348039134906", color: "#25D366", svg: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /> },
];

// ── Office card ──
function OfficeCard({ mapUrl, badge, name, address }: { mapUrl: string; badge: string; name: string; address: string }) {
  return (
    <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col gap-4">
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gray-200">
        <iframe src={mapUrl} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" className="absolute inset-0" />
        <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer"
          className="absolute top-3 left-3 bg-white/95 px-2 py-1.5 rounded-lg flex items-center gap-1 text-xs font-semibold text-black shadow-sm border border-gray-200 hover:bg-white transition font-sora-custom">
          Open in Maps <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
      <div>
        <span className="inline-block px-3 py-1 bg-sea-green-5 text-sea-green text-xs font-bold rounded-full border border-sea-green-20 mb-2 tracking-wider font-sora-custom">{badge}</span>
        <h3 className="text-lg font-bold text-[#0d1b2a] mb-2">{name}</h3>
        <div className="flex gap-2 text-gray-500 text-sm">
          <MapPin className="w-5 h-5 shrink-0 text-sea-green mt-0.5" />
          <p className="leading-relaxed font-sora-custom">{address}</p>
        </div>
      </div>
      <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer"
        className="text-sea-green font-semibold text-sm flex items-center gap-1.5 hover:underline font-sora-custom">
        <MapPin className="w-4 h-4" /> Get Directions
      </a>
    </motion.div>
  );
}

const offices = [
  { mapUrl: "https://maps.google.com/maps?q=7+Mary+Slessor+Street,+Asokoro,+FCT,+Abuja&t=&z=15&ie=UTF8&iwloc=&output=embed", badge: "★ MAIN CENTER", name: "Abuja Center", address: "7 Mary Slessor Street, Asokoro, FCT, Abuja." },
  { mapUrl: "https://maps.google.com/maps?q=6+Salau+Olorunshogo+Street,+Mandate+1+GRA,+Ilorin&t=&z=15&ie=UTF8&iwloc=&output=embed", badge: "BRANCH", name: "Ilorin Center I", address: "6 Salau Olorunshogo Street, Mandate 1 GRA, Ilorin, Kwara State." },
  { mapUrl: "https://maps.google.com/maps?q=Kwara+State+Library+Complex,+Ilorin&t=&z=15&ie=UTF8&iwloc=&output=embed", badge: "BRANCH", name: "Ilorin Center II", address: "Room 27, Kwara State Library Complex, Ilorin, Kwara State." },
];

const infoBar = [
  { icon: Phone, label: "Phone / Whatsapp", value: "+234 8039 134 906", href: "https://wa.me/2348039134906" },
  { icon: Mail, label: "Email", value: "info@trainwithsec.com", href: "mailto:info@trainwithsec.com" },
  { icon: Clock, label: "Response Time", value: "Within 4 Business Hours" },
  { icon: MapPin, label: "Locations", value: "Abuja & Ilorin, Nigeria" },
];

const contactDetails = [
  { icon: Phone, label: "Phone / Whatsapp", value: "+234 8039 134 906", href: "https://wa.me/2348039134906" },
  { icon: Mail, label: "Email Address", value: "info@trainwithsec.com", href: "mailto:info@trainwithsec.com" },
  { icon: Globe, label: "Website", value: "www.trainwithsec.com", href: "https://www.trainwithsec.com" },
];

const inputClass = "w-full px-4 py-3 bg-[#f9fafb] border border-gray-200 rounded-xl focus:ring-2 focus:ring-sea-green focus:border-sea-green outline-none text-black placeholder-gray-400 transition font-sora-custom";
const labelClass = "block text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1.5";

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", center: "", course: "", message: "" });
  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value });
  const isComplete = Object.values(form).every((v) => v.trim() !== "");

  const handleSend = () => {
    if (!isComplete) return;
    const text = `Hello! I'd like to enquire about a course.\n\nName: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\nPhone: ${form.phone}\nPreferred Center: ${form.center}\nCourse Interest: ${form.course}\n\nMessage: ${form.message}`;
    window.open(`https://wa.me/2348039134906?text=${encodeURIComponent(text)}`, "_blank");
  };

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
        
        .bg-sea-green-5 { background-color: rgba(32, 178, 170, 0.05) !important; }
        .bg-sea-green-10 { background-color: rgba(32, 178, 170, 0.1) !important; }
        .border-sea-green-20 { border-color: rgba(32, 178, 170, 0.2) !important; }
        .border-sea-green-30 { border-color: rgba(32, 178, 170, 0.3) !important; }
        
        .bg-neon-red-hover:hover { background-color: #FF073A !important; opacity: 0.9; }
        .bg-sea-green-hover:hover { background-color: #20B2AA !important; opacity: 0.9; }
      `}} />

      {/* Hero */}
      <section className="bg-black text-white py-20 px-4 text-center relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <motion.div className="relative max-w-5xl mx-auto space-y-6" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-sm font-semibold rounded-full border border-white/20 tracking-wider font-sora-custom">GET IN TOUCH</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Let's Start Your <span className="text-neon-red">Certification Journey</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Enrol in a course, ask about upcoming cohorts, or request a free career roadmap consultation. Our team responds within 4 business hours.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center pt-4 font-sora-custom">
            <a href="tel:+2348039134906" className="inline-flex items-center gap-2.5 justify-center py-3.5 px-7 rounded-xl font-bold text-white bg-neon-red bg-neon-red-hover hover:shadow-[0_0_15px_rgba(255,7,58,0.4)] transition w-full sm:w-auto">
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
            <a href="mailto:info@trainwithsec.com" className="inline-flex items-center gap-2.5 justify-center py-3.5 px-7 rounded-xl font-bold text-black bg-white hover:bg-stone-100 transition w-full sm:w-auto">
              <Mail className="w-5 h-5" /> Email Us
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Info bar */}
      <div className="bg-[#f9fafb] border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {infoBar.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4 p-6">
              <div className="p-3.5 rounded-xl bg-sea-green-10 border border-sea-green-20 shrink-0">
                <Icon className="w-6 h-6 text-sea-green" />
              </div>
              <div>
                <span className="block text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">{label}</span>
                {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-sea-green hover:underline font-sora-custom">{value}</a>
                  : <p className="text-sm font-bold text-black font-sora-custom">{value}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offices */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4 max-w-xl">
          <motion.p variants={fadeUp} className="inline-block px-4 py-1.5 bg-sea-green-5 text-sea-green text-xs font-bold rounded-full border border-sea-green-30 tracking-wider">OUR OFFICES</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold tracking-tight">Visit Us at Any of Our Centers</motion.h2>
          <motion.p variants={fadeUp} className="text-base text-gray-500 leading-relaxed font-sora-custom">Training delivered in-person across our Abuja and Ilorin centers, plus fully online for students nationwide.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((o) => <OfficeCard key={o.name} {...o} />)}
        </motion.div>
      </section>

      {/* Contact + Form */}
      <section className="bg-[#f9fafb] py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

          {/* Left */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="w-full lg:w-1/2 lg:sticky lg:top-10">
            <motion.span variants={fadeUp} className="inline-block px-3 py-1 bg-sea-green-5 text-sea-green text-[11px] font-bold rounded-full border border-sea-green-30 tracking-wider mb-6">DIRECT CONTACT</motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold mb-6 tracking-tight">Reach Us Directly</motion.h2>

            <motion.div variants={stagger} className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <motion.div key={label} variants={fadeUp} className="flex gap-4 items-start font-sora-custom">
                  <div className="p-3 rounded-xl bg-sea-green-10 border border-sea-green-20 shrink-0">
                    <Icon className="w-5 h-5 text-sea-green" />
                  </div>
                  <div className="pt-0.5">
                    <span className="block text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-1">{label}</span>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-sea-green hover:underline flex items-center gap-1">
                      {value} {label === "Website" && <ArrowUpRight className="w-4 h-4" />}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="bg-neon-red/5 rounded-xl p-6 border border-neon-red/15 border-l-4 border-l-neon-red mt-8">
              <p className="text-[10px] font-extrabold text-neon-red tracking-widest uppercase mb-2">★ NEXT COHORT</p>
              <h4 className="text-xl font-extrabold text-[#0d1b2a] mb-1">July 14, 2026</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-sora-custom">CCNP Enterprise — Weekend · 12 weeks</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-sm font-bold mb-3 font-sora-custom">Follow Us <span className="text-gray-400 font-medium ml-1">• #trainwithsec</span></p>
              <div className="flex flex-wrap gap-2 font-sora-custom">
                {socials.map(({ href, label, color, svg }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg text-white text-[12px] font-bold flex items-center gap-1.5 hover:opacity-90 transition shadow-sm"
                    style={{ background: color }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      {svg}
                    </svg>
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-extrabold mb-6 tracking-tight">Message Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
              {[["firstName", "First Name", "e.g. Emeka", "text"], ["lastName", "Last Name", "e.g. Okonkwo", "text"]].map(([field, label, placeholder, type]) => (
                <div key={field}>
                  <label className={labelClass}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[field as keyof typeof form]} onChange={update(field)} className={inputClass} />
                </div>
              ))}

              {[["email", "Email Address", "you@company.com", "email"], ["phone", "Phone / Whatsapp", "+234 ...", "tel"]].map(([field, label, placeholder, type]) => (
                <div key={field} className="md:col-span-2">
                  <label className={labelClass}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[field as keyof typeof form]} onChange={update(field)} className={inputClass} />
                </div>
              ))}

              <div className="md:col-span-2">
                <label className={labelClass}>Preferred Center</label>
                <select value={form.center} onChange={update("center")} className={inputClass + " appearance-none"}>
                  <option value="">Select a center...</option>
                  {["Abuja Main Center", "Ilorin Center I", "Ilorin Center II", "Online (Remote Learning)"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Course Interest</label>
                <select value={form.course} onChange={update("course")} className={inputClass + " appearance-none"}>
                  <option value="">Select a course...</option>
                  {["CCNP Enterprise Track (ENCOR + ENSLD)", "CCNA (200-301)", "CompTIA Network+", "Other / Not Listed"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={labelClass}>Message</label>
                <textarea rows={5} placeholder="Tell us about your background and certification goals..." value={form.message} onChange={update("message")} className={inputClass + " resize-y"} />
              </div>

              <div className="md:col-span-2">
                <motion.button onClick={handleSend} whileTap={isComplete ? { scale: 0.97 } : {}}
                  className={`w-full py-4 rounded-xl text-base font-bold transition font-sora-custom ${
                    isComplete 
                      ? "bg-sea-green bg-sea-green-hover text-white cursor-pointer shadow-[0_4px_20px_rgba(32,178,170,0.25)] hover:shadow-[0_4px_25px_rgba(32,178,170,0.4)]" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isComplete ? "Send" : "Complete all fields"}
                </motion.button>
                {!isComplete && <p className="text-xs text-gray-400 mt-2 text-center font-sora-custom">All fields are required before sending.</p>}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="bg-sea-green text-white py-20 px-[5%] text-center relative overflow-hidden">
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
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="relative z-10 max-w-4xl mx-auto space-y-4">
          <motion.p variants={fadeUp} className="text-white/80 text-xs font-bold tracking-wider">LIMITED SEATS PER COHORT</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl md:text-4xl font-extrabold tracking-tight">Take the next step in your ICT career</motion.h2>
          <motion.p variants={fadeUp} className="text-sm md:text-base text-white/95 max-w-2xl mx-auto font-sora-custom leading-relaxed">Join 2,400+ certified professionals. Expert-led, hands-on training aligned to Cisco, CompTIA, and EC-Council exam blueprints.</motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center pt-4 font-sora-custom">
            <Link href="/enroll" className="bg-neon-red bg-neon-red-hover text-white font-bold px-7 py-3 rounded-lg shadow-[0_4px_20px_rgba(255,7,58,0.25)] hover:shadow-[0_4px_25px_rgba(255,7,58,0.4)] hover:-translate-y-0.5 transition-all duration-300">Enroll Now</Link>
            <Link href="/#courses" className="inline-flex items-center gap-2 justify-center py-2.5 px-5 border border-white/30 rounded-lg text-sm font-bold text-white hover:bg-white/10 transition">View Courses</Link>
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}