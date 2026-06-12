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

const brands = [
  "EC-Council", "Certiport", "MTN Nigeria", "First Bank", "Cisco Systems", "CompTIA"
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  function formatStatValue(val: string) {
    const numPart = val.match(/[\d\.]+[K]?/)?.[0] || "";
    const symbolPart = val.replace(numPart, "");
    return (
      <>
        {numPart}
        <span className="text-neon-red">{symbolPart}</span>
      </>
    );
  }

  return (
    <section className="font-sora-custom relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden text-center px-[5%] py-16 sm:py-24 bg-black">
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
        
        .bg-sea-green-hover:hover { background-color: #20B2AA !important; opacity: 0.9; }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Slideshow background */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.src})`,
            opacity: i === current ? 0.12 : 0,
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[3px] rounded-full transition-all duration-300 ${i === current ? "w-6 bg-sea-green" : "w-3 bg-white/40"}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[960px] mx-auto flex flex-col items-center w-full">
        <p className="font-mono text-[9px] tracking-[3px] uppercase text-sea-green mb-8">
          — Cisco Authorized Training Partner · Ilorin, Nigeria —
        </p>

        <h1 className="text-center text-[clamp(1.8rem,5vw,4.2rem)] text-white font-semibold leading-[1.15] tracking-tight max-w-[850px] mb-6">
          Enterprise Core<br className="hidden sm:block" />{" "}
          <span className="text-sea-green font-sora-custom">Networking</span>,<br className="hidden sm:block" />{" "}
          Cybersecurity Training &<br className="hidden sm:block" />{" "}
          <span className="text-neon-red font-sora-custom">Solution</span> Company.
        </h1>

        <p className="text-[clamp(.85rem,1.2vw,1.1rem)] text-white/70 max-w-[650px] mb-10 leading-relaxed px-4 sm:px-0">
          We are a team of talented professionals with a lot of expertise in networking and security solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10 px-4 sm:px-0">
          {pills.map((pill) => (
            <span key={pill} className="font-mono text-[10px] tracking-[1.2px] uppercase px-4 py-2 rounded-full border border-sea-green/30 text-sea-green bg-sea-green/10">
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4 sm:px-0">
          <Link
            href="/about"
            className="w-full sm:w-auto sm:min-w-[210px] text-center bg-sea-green bg-sea-green-hover text-white font-bold text-[14px] px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(32,178,170,0.3)] hover:-translate-y-0.5 hover:shadow-[0_4px_25px_rgba(32,178,170,0.5)] transition-all duration-300 font-sora-custom"
          >
            Learn More About Sec-Concepts
          </Link>
          <Link
            href="/programs"
            className="w-full sm:w-auto sm:min-w-[210px] text-center bg-transparent border border-white text-white font-bold text-[14px] px-8 py-4 rounded-lg hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 font-sora-custom"
          >
            Learn More About Training
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center w-full mt-16 pt-10 border-t border-white/05 gap-y-6 sm:gap-y-0">
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 min-w-[130px] px-6 py-2 border-r-0 sm:border-r border-white/05 last:border-r-0 text-center">
              <div className="font-extrabold text-[1.8rem] sm:text-[2.2rem] text-white tracking-tight">
                {formatStatValue(stat.value)}
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[1.2px] text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certified & Trusted By Marquee */}
        <div className="w-full mt-16 pt-8 border-t border-white/05 overflow-hidden relative">
          <p className="font-mono text-[9px] uppercase tracking-[3px] text-gray-300 mb-6 text-center">
            Certified & Trusted By
          </p>
          <div className="relative w-full flex items-center overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
            
            <div className="marquee-container flex items-center gap-8 sm:gap-12 py-2">
              {[...brands, ...brands, ...brands].map((brand, idx) => (
                <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
                  <span className="font-semibold text-white/60 tracking-wider text-xs sm:text-sm font-sora-custom">
                    {brand}
                  </span>
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-neon-red rounded-full shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}