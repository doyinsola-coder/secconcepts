"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  { src: "https://res.cloudinary.com/decgjhtlb/image/upload/v1781114020/WhatsApp_Image_2026-06-10_at_10.45.56_AM_kakdik.jpg", caption: "Enterprise Network Infrastructure" },
  { src: "https://res.cloudinary.com/decgjhtlb/image/upload/v1781114020/WhatsApp_Image_2026-06-10_at_10.45.21_AM_v98dqc.jpg", caption: "Cybersecurity Operations" },
  { src: "https://res.cloudinary.com/decgjhtlb/image/upload/v1781114020/WhatsApp_Image_2026-06-10_at_10.44.41_AM_nuxvpr.jpg", caption: "Advanced Routing & Switching" },
  { src: "https://res.cloudinary.com/decgjhtlb/image/upload/v1781114020/WhatsApp_Image_2026-06-10_at_10.44.58_AM_urw4wv.jpg", caption: "Penetration Testing & Red Team" },
  { src: "https://res.cloudinary.com/decgjhtlb/image/upload/v1781114020/WhatsApp_Image_2026-06-10_at_10.45.38_AM_ndhqwi.jpg", caption: "SD-WAN & Cloud Networking" },
  { src: "https://res.cloudinary.com/decgjhtlb/image/upload/v1781114020/WhatsApp_Image_2026-06-10_at_10.44.41_AM_nuxvpr.jpg", caption: "SOC & Threat Intelligence" },
  { src: "https://res.cloudinary.com/decgjhtlb/image/upload/v1781114020/WhatsApp_Image_2026-06-10_at_10.45.38_AM_ndhqwi.jpg", caption: "Linux & Server Administration" },
];

const pills = ["CCNA & CCNP", "Cybersecurity", "Penetration Testing", "Cloud Security", "Server Administration"];

const stats = [
  { value: "150+", label: "Certifications Offered" },
  { value: "96%", label: "Exam Pass Rate" },
  { value: "25+", label: "Years Experience" },
  { value: "2.4K+", label: "Students Trained" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden text-center px-[5%] py-24">
      {/* Slideshow background */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.src})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-300 ${i === current ? "w-6 bg-[#0e7c5a]" : "w-3 bg-white/40"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[960px] mx-auto flex flex-col items-center">
        <p className="font-mono text-[10px] tracking-[3px] uppercase text-white/40 mb-8">
          — Cisco Authorized Training Partner · Ilorin, Nigeria —
        </p>

        <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-extrabold text-white leading-[1.08] tracking-[-2px] mb-4">
          Enterprise{" "}
          <span className="text-[#0e7c5a] border-b-2 border-[#0e7c5a]">Core Networking</span>,
          <br />
          Cybersecurity{" "}
          <span className="text-[#e74c3c]">Training</span> & Solution Company.
        </h1>

        <div className="w-16 h-[2px] bg-gradient-to-r from-[#0e7c5a] to-[#e74c3c] rounded my-6" />

        <p className="font-mono text-[clamp(.72rem,1.1vw,.88rem)] text-white/40 tracking-[3px] uppercase max-w-[700px] mb-10 leading-loose">
          We are a team of talented professionals with a lot of expertise in networking and security solutions
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {pills.map((pill) => (
            <span key={pill} className="font-mono text-[10px] tracking-[1.2px] uppercase px-4 py-1.5 rounded-full border border-[#0e7c5a]/40 text-white/55 bg-[#0e7c5a]/07">
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <Link
            href="/about"
            className="min-w-[210px] text-center bg-gradient-to-br from-[#0e7c5a] to-[#095e42] text-white font-bold text-[15px] px-9 py-4 rounded-lg shadow-[0_4px_28px_rgba(14,124,90,.35)] hover:-translate-y-0.5 transition-transform"
          >
            Learn More About<br />Sec-Concepts Networks
          </Link>
          <Link
            href="/programs"
            className="min-w-[210px] text-center bg-gradient-to-br from-[#e74c3c] to-[#c0392b] text-white font-bold text-[15px] px-9 py-4 rounded-lg shadow-[0_4px_28px_rgba(231,76,60,.3)] hover:-translate-y-0.5 transition-transform"
          >
            Learn More About<br />Training
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center w-full mt-16 pt-10 border-t border-white/07">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[130px] px-6 py-2 border-r border-white/07 last:border-r-0 text-center">
              <div className="font-extrabold text-[2rem] text-white tracking-[-1px]">{stat.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-[1.2px] text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}