const logos = ["Cisco Systems", "CompTIA", "EC-Council", "Certiport", "MTN Nigeria", "First Bank"];

export default function TrustBand() {
  return (
    <div className="bg-[#0a2e1f] px-[5%] py-5 flex items-center gap-10 flex-wrap">
      <span className="font-mono text-[11px] text-white/30 uppercase tracking-[1.5px] whitespace-nowrap">
        Certified & trusted by
      </span>
      <div className="flex gap-3 flex-wrap items-center">
        {logos.map((logo) => (
          <span
            key={logo}
            className="font-mono text-[11px] text-white/45 uppercase tracking-[1px] px-3 py-1.5 border border-white/12 rounded hover:text-white/80 hover:border-white/35 transition-colors cursor-default"
          >
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
}