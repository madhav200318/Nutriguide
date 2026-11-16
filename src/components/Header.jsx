import { useRef, useState } from 'react';
import { NAV_LINKS } from '../data/constants';
import Button from './ui/Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <header className="sticky top-0 z-50 bg-moss/80 backdrop-blur border-b border-forest/15">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
            <path d="M15 27C9 27 4 22 4 15.5 4 9.5 8.5 4.5 15 3c1.5 5 3 9-1 13-2.5 2.5-6 3-6 3s2.5 3.5 7 3.5c6 0 9-5 9-10.5C24 6.5 20 3 15 3" stroke="#1F3A2E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-display text-[1.45rem] tracking-tight text-forest">Nutriguide</span>
        </a>

        <ul className="hidden md:flex items-center gap-9 text-[0.95rem] text-forest/80">
          {NAV_LINKS.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="underline-grow pb-0.5 hover:text-forest">{label}</a></li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <a href="#" className="text-[0.95rem] text-forest/80 hover:text-forest underline-grow pb-0.5">Log in</a>
          <Button as="a" href="#signup" variant="forest">Start tracking free</Button>
        </div>

        <button id="menu-btn" className="md:hidden p-2 -mr-2 text-forest" aria-controls="mobile-menu"
          aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
          )}
        </button>
      </nav>

      <div id="mobile-menu" ref={menuRef} className="md:hidden overflow-hidden"
        style={{ maxHeight: open ? (menuRef.current?.scrollHeight || 400) : 0, opacity: open ? 1 : 0 }}>
        <ul className="px-6 pb-6 flex flex-col gap-4 text-forest border-t border-forest/10 pt-4">
          {NAV_LINKS.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} className="block py-1" onClick={() => setOpen(false)}>{label}</a></li>
          ))}
          <li><a href="#" className="block py-1" onClick={() => setOpen(false)}>Log in</a></li>
          <li><a href="#signup" className="inline-block bg-forest text-cream px-5 py-2.5 rounded-full mt-1" onClick={() => setOpen(false)}>Start tracking free</a></li>
        </ul>
      </div>
    </header>
  );
}
