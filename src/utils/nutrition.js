// Lightweight heuristic so free-typed foods still move the charts sensibly (ported from Part 1)
export function estimateMacros(name) {
  const lower = name.toLowerCase();
  let kcal = 260, protein = 12, carbs = 30, fat = 9;
  if (/chicken|fish|salmon|egg|paneer|tofu|yoghurt|yogurt|lentil|beans|protein/.test(lower)) { protein = 26; kcal = 340; fat = 11; carbs = 18; }
  if (/rice|bread|pasta|oat|potato|banana|fruit/.test(lower)) { carbs = 46; kcal = 300; protein = 8; fat = 5; }
  if (/salad|spinach|greens|vegetable|veg|broccoli/.test(lower)) { kcal = 180; protein = 8; carbs = 20; fat = 6; }
  if (/nuts|avocado|oil|cheese|butter/.test(lower)) { fat = 20; kcal = 320; protein = 7; carbs = 10; }
  return { kcal, protein, carbs, fat };
}

export const sumMeals = (meals) =>
  meals.reduce(
    (t, m) => ({
      calories: t.calories + Number(m.kcal || 0),
      protein: t.protein + Number(m.protein || 0),
      carbs: t.carbs + Number(m.carbs || 0),
      fat: t.fat + Number(m.fat || 0),
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

export const fmtKcal = (n) => Math.round(n).toLocaleString() + ' kcal';
