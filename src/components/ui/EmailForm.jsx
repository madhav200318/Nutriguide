import { useState } from 'react';
import Button from './Button';

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Reusable validated e-mail form (signup + footer newsletter)
export default function EmailForm({ id, variant = 'signup', notify }) {
  const [email, setEmail] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [joined, setJoined] = useState(false);
  const isSignup = variant === 'signup';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRe.test(email.trim())) {
      setInvalid(true);
      notify('Please enter a valid email address.', true);
      return;
    }
    setInvalid(false);
    notify("You're on the list, " + email.trim() + '!');
    if (isSignup) setJoined(true);
    setEmail('');
  };

  return (
    <form id={id} noValidate onSubmit={handleSubmit}
      className={isSignup ? 'mt-9 flex flex-col sm:flex-row gap-3 max-w-md mx-auto' : 'flex gap-2'}>
      <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
      <input id={`${id}-email`} type="email" required={isSignup} placeholder="you@example.com"
        value={email} onChange={(e) => setEmail(e.target.value)}
        className={isSignup
          ? `flex-1 bg-cream/95 placeholder:text-ink/40 text-ink px-5 py-3.5 rounded-full border focus:border-clay outline-none ${invalid ? 'border-red-500 border-2' : 'border-cream/0'}`
          : `min-w-0 flex-1 bg-forest/60 border placeholder:text-cream/40 text-cream text-sm px-4 py-2.5 rounded-full outline-none focus:border-cream/50 ${invalid ? 'border-red-500 border-2' : 'border-cream/15'}`} />
      {isSignup ? (
        <Button type="submit" size="lg" className="whitespace-nowrap">{joined ? "You're on the list" : 'Start tracking free'}</Button>
      ) : (
        <button type="submit" aria-label="Subscribe"
          className="bg-clay hover:bg-clayd shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#F7F2E7" strokeWidth="1.8"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
        </button>
      )}
    </form>
  );
}
