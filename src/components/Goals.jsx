import { useState } from 'react';
import { GOALS, GOAL_POINTS, PREFS } from '../data/constants';
import Chip from './ui/Chip';
import Button from './ui/Button';

const KEY = 'nutriguideGoal';
const load = () => { try { return localStorage.getItem(KEY) || ''; } catch { return ''; } };

export default function Goals() {
  const [goal, setGoal] = useState('Muscle gain');
  const [prefs, setPrefs] = useState(['Gluten-free']);
  const [focus, setFocus] = useState('');          // text being typed
  const [saved, setSaved] = useState(load);        // HTML5 Local Storage API
  const [msg, setMsg] = useState('');

  const togglePref = (p) => setPrefs((list) => (list.includes(p) ? list.filter((x) => x !== p) : [...list, p]));

  const save = () => {
    const v = focus.trim();
    if (!v) { setMsg('Please enter a nutrition focus first.'); return; }
    try { localStorage.setItem(KEY, v); } catch { /* storage unavailable */ }
    setSaved(v); setMsg(''); setFocus('');
  };

  return (
    <section id="goals" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-display text-4xl text-forest leading-tight">Built around your goals, not a generic diet.</h2>
          <p className="mt-5 text-ink/70 leading-relaxed max-w-md">Tell Nutriguide what you're working towards and what you'll actually eat. Recommendations only ever come from that intersection.</p>
          <ul className="mt-9 space-y-4">
            {GOAL_POINTS.map((t) => (
              <li key={t} className="flex items-start gap-3">
                <svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E7A4C" strokeWidth="2"><path d="M20 6 9 17l-5-5" /></svg>
                <span className="text-ink/80">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-moss/60 rounded-3xl p-8 sm:p-10 border border-forest/10">
          <p className="text-sm font-semibold text-forest/70 mb-4">Choose what applies to you</p>
          <div className="flex flex-wrap gap-2.5 mb-8">
            {GOALS.map((g) => <Chip key={g} active={goal === g} onClick={() => setGoal(g)}>{g}</Chip>)}
          </div>
          <p className="text-sm font-semibold text-forest/70 mb-4">Dietary preferences</p>
          <div className="flex flex-wrap gap-2.5">
            {PREFS.map((p) => <Chip key={p} active={prefs.includes(p)} onClick={() => togglePref(p)}>{p}</Chip>)}
          </div>

          <div className="mt-8 pt-7 border-t border-forest/10">
            <p className="text-sm font-semibold text-forest/70 mb-3">Save your nutrition focus</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input id="goal-input" type="text" placeholder="e.g. Eat more protein" value={focus}
                onChange={(e) => setFocus(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && save()}
                className="min-w-0 flex-1 bg-paper border border-forest/15 text-ink text-sm px-4 py-2.5 rounded-full outline-none focus:border-leaf" />
              <Button variant="leaf" onClick={save}>Save</Button>
            </div>
            <p id="saved-goal" className="mt-3 text-sm text-forest leading-relaxed min-h-[1.5rem]" aria-live="polite">
              {msg || (saved ? `Saved focus: ${saved}` : 'No saved focus yet.')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
