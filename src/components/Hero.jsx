import { MARQUEE } from '../data/constants';
import Button from './ui/Button';

const Stat = ({ value, label }) => (
  <div>
    <p className="font-display text-2xl text-forest">{value}</p>
    <p className="text-xs mt-0.5">{label}</p>
  </div>
);

function MarqueeRow({ hidden }) {
  return (
    <div className="flex items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {MARQUEE.map((w) => (
        <span key={w} className="contents"><span>{w}</span><span className="opacity-40">·</span></span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <svg className="absolute -top-10 -right-16 w-[420px] h-auto text-leaf/[0.14] pointer-events-none hidden sm:block" viewBox="0 0 400 400" fill="none" aria-hidden="true">
        <path d="M200 40c60 40 92 92 92 148 0 60-40 108-92 122-52-14-92-62-92-122 0-56 32-108 92-148Z" stroke="currentColor" strokeWidth="3" />
        <path d="M200 48v262" stroke="currentColor" strokeWidth="2" />
        <path d="M200 110c-30 6-52 24-64 46M200 110c30 6 52 24 64 46M200 180c-34 6-58 26-72 52M200 180c34 6 58 26 72 52M200 250c-30 6-50 22-62 44M200 250c30 6 50 22 62 44" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute -bottom-16 -left-20 w-[320px] h-auto text-sprout/[0.16] pointer-events-none hidden sm:block" viewBox="0 0 300 300" fill="none" aria-hidden="true">
        <path d="M150 30c45 30 69 69 69 111 0 45-30 81-69 92-39-11-69-47-69-92 0-42 24-81 69-111Z" stroke="currentColor" strokeWidth="3" />
        <path d="M150 36v197" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-[1.1fr,0.9fr] gap-14 items-center relative">
        <div>
          <p className="text-clayd text-sm font-semibold tracking-wide mb-5">Diet &amp; nutrition tracking</p>
          <h1 className="font-display text-[2.9rem] leading-[1.06] sm:text-[3.6rem] sm:leading-[1.05] text-forest">
            Know what's<br /> actually on<br /> your plate.
          </h1>
          <p className="mt-7 text-lg text-ink/75 max-w-md leading-relaxed">
            Log your meals in seconds. Nutriguide reads your intake, finds the nutrients you're missing, and tells you exactly what to eat next — matched to your goals and what you like.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button as="a" href="#signup" size="lg">Start tracking free</Button>
            <a href="#how" className="flex items-center gap-2 text-forest font-medium underline-grow pb-0.5">
              See how it works
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-forest/70">
            <Stat value="38" label="nutrients tracked" />
            <div className="w-px h-9 bg-forest/15" />
            <Stat value="3 sec" label="to log a meal" />
            <div className="w-px h-9 bg-forest/15" />
            <Stat value="1:1" label="personalised plan" />
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[300px] sm:w-[340px] float-slow">
            <svg viewBox="0 0 300 300" className="w-full h-auto">
              <circle cx="150" cy="150" r="128" fill="#FBF8F1" />
              <circle cx="150" cy="150" r="128" fill="none" stroke="#1F3A2E" strokeOpacity="0.08" strokeWidth="1" />
              <g className="ring-chart">
                <circle cx="150" cy="150" r="104" fill="none" stroke="#E4E9D8" strokeWidth="20" />
                <circle className="ring-seg" cx="150" cy="150" r="104" fill="none" stroke="#4C7A54" strokeWidth="20" strokeDasharray="653" strokeDashoffset="392" />
                <circle className="ring-seg" cx="150" cy="150" r="104" fill="none" stroke="#C1642E" strokeWidth="20" strokeDasharray="653" strokeDashoffset="522" transform="rotate(94 150 150)" />
                <circle className="ring-seg" cx="150" cy="150" r="104" fill="none" stroke="#7FA463" strokeWidth="20" strokeDasharray="653" strokeDashoffset="588" transform="rotate(154 150 150)" />
              </g>
              <text x="150" y="142" textAnchor="middle" className="font-display" fontSize="30" fill="#1F3A2E">86%</text>
              <text x="150" y="164" textAnchor="middle" fontSize="11" fill="#1F3A2E" opacity="0.6" fontFamily="Inter, sans-serif">of goals met today</text>
            </svg>
            <div className="absolute -left-6 bottom-6 bg-forest text-cream rounded-2xl px-4 py-3 shadow-lg shadow-forest/20 hidden sm:block">
              <p className="text-[0.65rem] uppercase tracking-wide opacity-70">Missing today</p>
              <p className="text-sm font-medium mt-0.5">Iron, Vitamin D</p>
            </div>
            <div className="absolute -right-4 top-2 bg-paper border border-forest/10 rounded-2xl px-4 py-3 shadow-md hidden sm:block">
              <p className="text-[0.65rem] uppercase tracking-wide text-forest/60">Suggested</p>
              <p className="text-sm font-medium text-forest mt-0.5">Add spinach + lentils</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-forest/10 bg-moss/60 py-3.5 overflow-hidden">
        <div className="marquee-track text-forest/60 text-sm font-medium whitespace-nowrap">
          <MarqueeRow />
          <MarqueeRow hidden />
        </div>
      </div>
    </section>
  );
}
