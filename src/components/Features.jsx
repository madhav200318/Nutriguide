import { useState } from 'react';
import { FEATURES } from '../data/constants';

export default function Features() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="features" className="bg-forest text-cream relative">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-lg mb-16">
          <p className="text-sprout text-sm font-semibold tracking-wide mb-4">What Nutriguide does</p>
          <h2 className="font-display text-4xl leading-tight">Every log becomes a little more understanding.</h2>
          <p id="feature-status" className="mt-4 text-sm text-cream/70" aria-live="polite">
            {hovered === null ? 'Hover a card to highlight it.' : `Viewing: ${FEATURES[hovered].title}`}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-cream/10 rounded-2xl overflow-hidden">
          {FEATURES.map((f, i) => (
            <div key={f.title} onMouseOver={() => setHovered(i)} onMouseOut={() => setHovered(null)}
              className={`bg-forest p-8 hover:bg-pine transition-colors ${hovered === i ? 'ring-2 ring-inset ring-sprout bg-pine' : ''}`}>
              {f.icon}
              <h3 className="font-display text-lg mt-5">{f.title}</h3>
              <p className="mt-2 text-cream/65 text-[0.92rem] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
