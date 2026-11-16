import { useEffect, useState } from 'react';
import { DIETS, MEAL_TYPES } from '../data/constants';
import { estimateMacros } from '../utils/nutrition';
import Button from './ui/Button';
import Field from './ui/Field';

const EMPTY = { name: '', mealType: 'Breakfast', diet: 'Veg', kcal: '', protein: '', carbs: '', fat: '' };

// Controlled form: text, number, select dropdown and radio inputs. Used for both Create and Update.
export default function MealForm({ editing, onSubmit, onCancel, notify }) {
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    setForm(editing ? {
      name: editing.name, mealType: editing.mealType, diet: editing.diet,
      kcal: String(editing.kcal), protein: String(editing.protein), carbs: String(editing.carbs), fat: String(editing.fat),
    } : EMPTY);
  }, [editing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const name = form.name.trim();
  const est = name.length > 1 ? estimateMacros(name) : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 2) { notify('Please enter a food name (2+ characters).', true); return; }
    const num = (v) => Math.max(0, parseFloat(v) || 0);
    const auto = form.kcal === '' ? estimateMacros(name) : null; // blank calories -> estimate like Part 1
    onSubmit({
      name, mealType: form.mealType, diet: form.diet,
      kcal: auto ? auto.kcal : num(form.kcal),
      protein: auto ? auto.protein : num(form.protein),
      carbs: auto ? auto.carbs : num(form.carbs),
      fat: auto ? auto.fat : num(form.fat),
    });
    if (!editing) setForm(EMPTY);
  };

  return (
    <form id="log-form" onSubmit={handleSubmit} className="mb-5 space-y-3">
      {editing && (
        <p className="text-xs font-semibold text-clayd bg-clay/10 px-4 py-2 rounded-xl">Editing “{editing.name}” — change anything and press Update.</p>
      )}
      <Field label="Food name" htmlFor="food-input">
        <input id="food-input" name="name" type="text" maxLength={40} required value={form.name} onChange={handleChange}
          placeholder="e.g. Grilled salmon" className="ng-input" />
        <p id="food-hint" className="text-xs text-ink/50 mt-1.5" aria-live="polite">
          {form.name.length}/40 characters{est ? ` · estimated ~${est.kcal} kcal` : ''}
        </p>
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Meal type" htmlFor="mealType">
          <select id="mealType" name="mealType" value={form.mealType} onChange={handleChange} className="ng-input">
            {MEAL_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Calories (kcal)" htmlFor="kcal">
          <input id="kcal" name="kcal" type="number" min="0" value={form.kcal} onChange={handleChange} placeholder="auto" className="ng-input" />
        </Field>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[['protein', 'Protein g'], ['carbs', 'Carbs g'], ['fat', 'Fat g']].map(([k, label]) => (
          <Field key={k} label={label} htmlFor={k}>
            <input id={k} name={k} type="number" min="0" value={form[k]} onChange={handleChange} placeholder="0" className="ng-input" />
          </Field>
        ))}
      </div>

      <fieldset>
        <legend className="ng-label">Diet type</legend>
        <div className="flex flex-wrap gap-2">
          {DIETS.map((d) => (
            <label key={d} className={`flex items-center gap-2 text-sm px-3.5 py-1.5 rounded-full border cursor-pointer transition-colors ${
              form.diet === d ? 'bg-moss border-leaf text-forest font-medium' : 'bg-cream border-forest/15 text-ink/70 hover:bg-moss/60'}`}>
              <input type="radio" name="diet" value={d} checked={form.diet === d} onChange={handleChange} className="ng-radio" />
              {d}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex gap-2 pt-1">
        <Button type="submit" variant="leaf" className="flex-1">{editing ? 'Update meal' : 'Add meal'}</Button>
        {editing && <Button variant="outline" onClick={onCancel}>Cancel</Button>}
      </div>
    </form>
  );
}
