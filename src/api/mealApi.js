// Data layer for CRUD. Primary store: JSON Server (db.json) on port 3001.
// If the server isn't running, it transparently falls back to browser Local Storage
// so the app never breaks during a demo.
const BASE = 'http://localhost:3001/meals';
const LS_KEY = 'nutriguideMeals';

const SEED = [
  { id: 1, name: 'Oatmeal & berries', mealType: 'Breakfast', diet: 'Veg', kcal: 290, protein: 9, carbs: 52, fat: 6 },
  { id: 2, name: 'Grilled chicken bowl', mealType: 'Lunch', diet: 'Non-Veg', kcal: 480, protein: 42, carbs: 38, fat: 14 },
  { id: 3, name: 'Spinach & lentil salad', mealType: 'Dinner', diet: 'Vegan', kcal: 310, protein: 18, carbs: 34, fat: 9 },
];

let useLocal = false;
export const storageMode = () => (useLocal ? 'Local Storage' : 'JSON Server');

const readLocal = () => {
  try { const v = JSON.parse(localStorage.getItem(LS_KEY)); if (Array.isArray(v)) return v; } catch { /* ignore */ }
  localStorage.setItem(LS_KEY, JSON.stringify(SEED));
  return SEED;
};
const writeLocal = (list) => localStorage.setItem(LS_KEY, JSON.stringify(list));

async function request(url, options) {
  const res = await fetch(url, { headers: { 'Content-Type': 'application/json' }, ...options });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json().catch(() => null);
}

// READ
export async function getMeals() {
  try { const data = await request(BASE); useLocal = false; return data; }
  catch { useLocal = true; return readLocal(); }
}

// CREATE
export async function createMeal(meal) {
  if (!useLocal) {
    try { return await request(BASE, { method: 'POST', body: JSON.stringify(meal) }); }
    catch { useLocal = true; }
  }
  const created = { ...meal, id: Date.now() };
  writeLocal([...readLocal(), created]);
  return created;
}

// UPDATE
export async function updateMeal(id, meal) {
  if (!useLocal) {
    try { return await request(`${BASE}/${id}`, { method: 'PUT', body: JSON.stringify(meal) }); }
    catch { useLocal = true; }
  }
  const updated = { ...meal, id };
  writeLocal(readLocal().map((m) => (m.id === id ? updated : m)));
  return updated;
}

// DELETE
export async function deleteMeal(id) {
  if (!useLocal) {
    try { await request(`${BASE}/${id}`, { method: 'DELETE' }); return; }
    catch { useLocal = true; }
  }
  writeLocal(readLocal().filter((m) => m.id !== id));
}
