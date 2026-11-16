import { useState } from 'react';

// HTML5 File API card
function FileCard() {
  const [info, setInfo] = useState('No file selected.');
  const handleChange = (e) => {
    const file = e.target.files[0];
    setInfo(file ? `${file.name} selected · ${Math.max(1, Math.round(file.size / 1024))} KB` : 'No file selected.');
  };
  return (
    <div className="bg-moss/60 border border-forest/10 rounded-3xl p-7">
      <p className="text-xs font-semibold text-clay uppercase tracking-wide">Food label</p>
      <h3 className="font-display text-2xl text-forest mt-2">Add a food label</h3>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed">Choose a nutrition label or food image from your device.</p>
      <label htmlFor="food-file" className="inline-block mt-5 bg-forest hover:bg-pine text-cream font-medium px-5 py-2.5 rounded-full cursor-pointer transition-colors">Choose file</label>
      <input id="food-file" type="file" accept="image/*,.pdf" className="sr-only" onChange={handleChange} />
      <p id="file-output" className="mt-3 text-sm text-forest leading-relaxed min-h-[1.5rem]" aria-live="polite">{info}</p>
    </div>
  );
}

// HTML5 Video card (place Sample_Video.mp4 in /public)
function VideoCard() {
  return (
    <div className="bg-paper border border-forest/10 rounded-3xl p-7">
      <p className="text-xs font-semibold text-clay uppercase tracking-wide">Nutrition guide</p>
      <h3 className="font-display text-2xl text-forest mt-2">Small habits, healthier meals.</h3>
      <p className="mt-2 text-sm text-ink/70 leading-relaxed mb-5">A short guide to simple everyday nutrition habits.</p>
      <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
        <video className="w-full h-full object-contain" controls preload="metadata" playsInline title="Nutrition Guide Video">
          <source src="/Sample_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default function Journal() {
  return (
    <section id="journal" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-[0.7fr,1fr] gap-14">
        <div>
          <p className="text-clayd text-sm font-semibold tracking-wide mb-4">From the journal</p>
          <h2 className="font-display text-3xl text-forest leading-tight">Notes on eating well, not just eating less.</h2>
          <a href="#" className="inline-flex items-center gap-2 mt-6 text-forest font-medium underline-grow pb-0.5">
            Read more entries
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
          </a>
        </div>
        <article className="prose prose-headings:font-display prose-headings:text-forest prose-p:text-ink/75 prose-a:text-clay max-w-none bg-paper border border-forest/10 rounded-3xl p-8 sm:p-10">
          <h3>Why "nutrient gaps" matter more than calorie counts</h3>
          <p>Most tracking apps stop at a calorie total, which tells you almost nothing about whether a diet is actually working. Two people can eat the same number of calories and end up with completely different outcomes, because one of them is quietly low on iron, fibre, or vitamin D week after week.</p>
          <p>Nutriguide was built around a simple idea: track the nutrients that actually affect how you feel, not just the number that affects the scale. When a gap shows up three weeks running, that's a pattern worth acting on — and worth a specific, edible suggestion rather than a lecture.</p>
          <blockquote>A single low day rarely matters. A pattern almost always does.</blockquote>
          <p>That's the difference we try to surface — quietly, in the background, every time you log a meal.</p>
        </article>
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <FileCard />
        <VideoCard />
      </div>
    </section>
  );
}
