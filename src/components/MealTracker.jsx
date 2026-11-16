import { useEffect, useMemo, useState } from 'react';
import { MEAL_TYPES, QUICK_ADD } from '../data/constants';
import { createMeal, deleteMeal, getMeals, storageMode, updateMeal } from '../api/mealApi';
import { fmtKcal, sumMeals } from '../utils/nutrition';
import MealForm from './MealForm';
import MealList from './MealList';
import MacroChart from './charts/MacroChart';
import TrendChart from './charts/TrendChart';
import NutrientBars from './charts/NutrientBars';
import Button from './ui/Button';

// "Try it" section: full CRUD meal log + live charts
export default function MealTracker({ notify }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState('JSON Server');
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  // READ
  useEffect(() => {
    getMeals().then((data) => { setMeals(data); setSource(storageMode()); setLoading(false); });
  }, []);

  // CREATE / UPDATE
  const handleSave = async (data) => {
    try {
      if (editing) {
        const saved = await updateMeal(editing.id, data);
        setMeals((list) => list.map((m) => (m.id === saved.id ? saved : m)));
        notify(`Updated ${saved.name} · ${Math.round(saved.kcal)} kcal`);
        setEditing(null);
      } else {
        const saved = await createMeal(data);
        setMeals((list) => [...list, saved]);
        notify(`Logged ${saved.name} · ${Math.round(saved.kcal)} kcal`);
      }
      setSource(storageMode());
    } catch { notify('Could not save that meal. Please try again.', true); }
  };

  // DELETE
  const handleDelete = async (meal) => {
    if (!window.confirm(`Delete “${meal.name}”?`)) return;
    try {
      await deleteMeal(meal.id);
      setMeals((list) => list.filter((m) => m.id !== meal.id));
      if (editing?.id === meal.id) setEditing(null);
      notify(`Deleted ${meal.name}`);
      setSource(storageMode());
    } catch { notify('Could not delete that meal.', true); }
  };

  const totals = useMemo(() => sumMeals(meals), [meals]);

  // SEARCH (bonus): filters by name / diet as you type, plus meal-type dropdown
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return meals.filter((m) =>
      (typeFilter === 'All' || m.mealType === typeFilter) &&
      (!q || m.name.toLowerCase().includes(q) || m.diet.toLowerCase().includes(q)));
  }, [meals, query, typeFilter]);

  return (
    <section id="demo" className="max-w-6xl mx-auto px-6 py-24">
      <div className="max-w-lg mb-4">
        <p className="text-leaf text-sm font-semibold tracking-wide mb-4">Try it</p>
        <h2 className="font-display text-4xl text-forest leading-tight">Log a meal. Watch the picture update.</h2>
        <p className="mt-4 text-ink/70 leading-relaxed">This is a working dashboard — add, edit, search and delete meals below and the charts respond immediately. Every change is saved to your database.</p>
      </div>

      <div className="mt-10 bg-paper border border-forest/10 rounded-[1.75rem] shadow-xl shadow-forest/10 overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-forest/10 bg-moss/40">
          <span className="w-2.5 h-2.5 rounded-full bg-clay/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-sprout/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-leaf/70" />
          <span className="ml-3 text-xs text-forest/50 font-medium">nutriguide.app/dashboard</span>
          <span className="ml-auto text-[0.65rem] font-semibold uppercase tracking-wide text-leaf bg-moss px-2.5 py-1 rounded-full">DB: {source}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.3fr] gap-0">
          {/* LOG PANEL */}
          <div className="p-7 sm:p-8 border-b lg:border-b-0 lg:border-r border-forest/10">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-lg text-forest">Today's log</h3>
              <span id="calorie-total" className="text-sm font-semibold text-leaf bg-moss px-3 py-1 rounded-full">{fmtKcal(totals.calories)}</span>
            </div>

            <MealForm editing={editing} onSubmit={handleSave} onCancel={() => setEditing(null)} notify={notify} />

            <div className="flex flex-wrap gap-2 mb-6">
              {QUICK_ADD.map((q) => (
                <Button key={q.name} variant="soft" size="sm" className="quick-add" onClick={() => handleSave(q)} disabled={!!editing}>{q.name}</Button>
              ))}
            </div>

            <div className="flex gap-2 mb-4">
              <label htmlFor="search" className="sr-only">Search meals</label>
              <input id="search" type="search" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Search meals…" className="ng-input flex-1 min-w-0" />
              <label htmlFor="typeFilter" className="sr-only">Filter by meal type</label>
              <select id="typeFilter" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="ng-input w-auto">
                <option>All</option>
                {MEAL_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <p className="text-xs text-ink/50 mb-3">Showing {visible.length} of {meals.length} meals</p>

            <MealList meals={visible} total={meals.length} editingId={editing?.id} loading={loading}
              onEdit={setEditing} onDelete={handleDelete} />
          </div>

          {/* CHARTS PANEL */}
          <div className="p-7 sm:p-8 bg-cream/60">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-forest/60 uppercase tracking-wide mb-3">Macro balance</p>
                <div className="relative h-40"><MacroChart totals={totals} /></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-forest/60 uppercase tracking-wide mb-3">7-day calories</p>
                <div className="relative h-40"><TrendChart todayTotal={totals.calories} /></div>
              </div>
            </div>
            <div className="mt-7">
              <p className="text-xs font-semibold text-forest/60 uppercase tracking-wide mb-4">Nutrient gaps vs. your goal</p>
              <NutrientBars mealCount={meals.length} />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink/40">Meals are stored in db.json via JSON Server (with an automatic Local Storage fallback if the server is offline).</p>
      <p className="mt-2 text-xs text-ink/40">The nutrition charts above use the HTML5 Canvas API.</p>
    </section>
  );
}
