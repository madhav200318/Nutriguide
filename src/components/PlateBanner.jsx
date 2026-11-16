export default function PlateBanner() {
  return (
    <section className="bg-pine relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-[0.85fr,1.15fr] gap-12 items-center">
        <div className="text-cream">
          <p className="text-sprout text-sm font-semibold tracking-wide mb-4">What it looks like</p>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">A well-rounded plate, made visible.</h2>
          <p className="mt-5 text-cream/70 leading-relaxed max-w-sm">Nutriguide doesn't just count what's on your plate — it shows you the balance behind it, food group by food group, so gaps are obvious at a glance.</p>
        </div>

        <svg viewBox="0 0 520 360" className="w-full h-auto" role="img" aria-label="Illustration of a plate of leafy greens, broccoli, avocado, carrots, cherry tomatoes and a bowl of grains">
          <ellipse cx="230" cy="200" rx="205" ry="130" fill="#0F2417" />
          <ellipse cx="230" cy="190" rx="180" ry="112" fill="#F5F8EC" />
          <ellipse cx="230" cy="190" rx="150" ry="90" fill="#EFF4E4" />
          <g>
            <path d="M95 175c-18-22-14-52 8-66 4 26 10 40 26 52-24 4-26 8-34 14Z" fill="#3E7A4C" />
            <path d="M110 190c-22-14-28-44-12-66 10 24 20 36 38 44-16 10-18 14-26 22Z" fill="#4C8B5B" />
            <path d="M130 205c-14-20-10-46 10-58 2 22 8 34 22 44-18 4-22 6-32 14Z" fill="#3E7A4C" />
          </g>
          <g fill="#2F6B3E">
            <circle cx="210" cy="130" r="26" /><circle cx="238" cy="118" r="22" /><circle cx="184" cy="122" r="19" /><circle cx="222" cy="150" r="18" />
          </g>
          <rect x="204" y="146" width="14" height="26" rx="4" fill="#DDE6C6" />
          <g>
            <ellipse cx="345" cy="150" rx="42" ry="52" fill="#7FA463" />
            <ellipse cx="345" cy="150" rx="30" ry="40" fill="#DCE6A9" />
            <circle cx="345" cy="152" r="14" fill="#8C5A3C" />
          </g>
          <g>
            <path d="M270 235c30-6 62-2 84 12-24 18-58 26-90 22 0-12 2-24 6-34Z" fill="#D97B3C" />
            <path d="M268 232c4-6 10-6 14-2" stroke="#3E7A4C" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M264 226c4-8 12-10 18-6" stroke="#3E7A4C" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
          <g fill="#C1642E"><circle cx="150" cy="245" r="14" /><circle cx="176" cy="256" r="12" /><circle cx="160" cy="266" r="10" /></g>
          <g stroke="#3E7A4C" strokeWidth="2.5" fill="none"><path d="M150 233c2-4 6-5 9-3" /><path d="M176 246c2-4 6-5 8-3" /></g>
          <path d="M330 245c0 20-24 34-52 34s-52-14-52-34Z" fill="#B8C99C" />
          <ellipse cx="278" cy="245" rx="52" ry="16" fill="#DDE6C6" />
          <g fill="#8C5A3C" opacity="0.55">
            <circle cx="256" cy="242" r="3" /><circle cx="270" cy="238" r="3" /><circle cx="286" cy="243" r="3" />
            <circle cx="300" cy="239" r="3" /><circle cx="264" cy="248" r="3" /><circle cx="292" cy="249" r="3" />
          </g>
        </svg>
      </div>
    </section>
  );
}
