import { useState } from 'react';
import { STEPS } from '../data/constants';
import Button from './ui/Button';

// HTML5 Geolocation API card
function LocationCard() {
  const [text, setText] = useState('Location not requested yet.');

  const handleClick = () => {
    if (!navigator.geolocation) { setText('Geolocation is not supported by this browser.'); return; }
    setText('Getting your location...');
    navigator.geolocation.getCurrentPosition(
      (p) => setText(`Latitude: ${p.coords.latitude.toFixed(5)} · Longitude: ${p.coords.longitude.toFixed(5)}`),
      () => setText('Location permission was denied or unavailable.')
    );
  };

  return (
    <div className="mt-14 bg-moss/60 border border-forest/10 rounded-3xl p-6 sm:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <p className="text-xs font-semibold text-clay uppercase tracking-wide">Personalize your experience</p>
          <h3 className="font-display text-2xl text-forest mt-2">Use your location</h3>
          <p className="mt-2 text-sm text-ink/70">See your current latitude and longitude when you allow location access.</p>
          <p id="location-output" className="mt-3 text-sm text-forest leading-relaxed" aria-live="polite">{text}</p>
        </div>
        <Button onClick={handleClick} className="shrink-0">Get my location</Button>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how" className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-lg mb-16">
        <h2 className="font-display text-4xl text-forest leading-tight">From plate to plan, in three steps.</h2>
        <p className="mt-4 text-ink/70 leading-relaxed">No barcode scanner needed, no forced calorie math. Nutriguide does the nutritional reasoning so you can just eat and see.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-x-10 gap-y-14">
        {STEPS.map((s, i) => (
          <article key={s.n} className={`relative pl-0 ${i > 0 ? 'md:border-l md:border-forest/10 md:pl-10' : ''}`}>
            <p className="font-display text-5xl text-leaf/80">{s.n}</p>
            <h3 className="font-display text-xl text-forest mt-5">{s.title}</h3>
            <p className="mt-3 text-ink/70 leading-relaxed text-[0.95rem]">{s.text}</p>
          </article>
        ))}
      </div>
      <LocationCard />
    </section>
  );
}
