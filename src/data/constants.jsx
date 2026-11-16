export const NAV_LINKS = [
  ['how', 'How it works'], ['demo', 'Try it'], ['features', 'Features'], ['goals', 'Built for you'], ['journal', 'Journal'],
];

export const MARQUEE = ['Protein', 'Fibre', 'Iron', 'Vitamin D', 'Omega-3', 'Calcium', 'Folate', 'Magnesium', 'Vitamin B12', 'Potassium', 'Zinc'];

export const STEPS = [
  { n: '01', title: 'Log what you eat', text: 'Search a food, snap a plate, or pick from your recent meals. Nutriguide breaks each entry down into calories, macros, and micronutrients automatically.' },
  { n: '02', title: 'See your real intake', text: "A daily and weekly view shows exactly where you're consistent, and where a pattern is quietly forming — like chronic low fibre or too little iron." },
  { n: '03', title: 'Get matched foods', text: 'Recommendations are built from your gaps, your stated goal, and your preferences — vegetarian, allergies, dislikes — never a generic meal plan.' },
];

export const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
export const DIETS = ['Veg', 'Non-Veg', 'Vegan'];

export const QUICK_ADD = [
  { name: 'Oatmeal & berries', mealType: 'Breakfast', diet: 'Veg', kcal: 290, protein: 9, carbs: 52, fat: 6 },
  { name: 'Grilled chicken bowl', mealType: 'Lunch', diet: 'Non-Veg', kcal: 480, protein: 42, carbs: 38, fat: 14 },
  { name: 'Spinach & lentil salad', mealType: 'Dinner', diet: 'Vegan', kcal: 310, protein: 18, carbs: 34, fat: 9 },
  { name: 'Greek yoghurt & nuts', mealType: 'Snack', diet: 'Veg', kcal: 220, protein: 14, carbs: 12, fat: 11 },
];

export const TREND_BASE = [1620, 1840, 1710, 1950, 1780, 2010];
export const TREND_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'];

// base %, % gained per logged meal, bar colour
export const NUTRIENTS = [
  { key: 'fibre', label: 'Fibre', base: 62, step: 3, color: 'bg-leaf' },
  { key: 'iron', label: 'Iron', base: 41, step: 6, color: 'bg-clay' },
  { key: 'vitd', label: 'Vitamin D', base: 28, step: 6, color: 'bg-clay' },
  { key: 'calcium', label: 'Calcium', base: 74, step: 3, color: 'bg-leaf' },
];

const ico = (children) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7FA463" strokeWidth="1.6">{children}</svg>
);
export const FEATURES = [
  { title: 'Fast food logging', text: 'A searchable database of whole foods and packaged products, plus your own saved meals for one-tap logging.',
    icon: ico(<><path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="M14 3v5h5" /><path d="M8 13h8M8 17h5" /></>) },
  { title: 'Pattern detection', text: 'Nutriguide looks across weeks, not single days, to flag recurring gaps — like low fibre most weekdays but not weekends.',
    icon: ico(<><path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z" /><path d="M12 8v5l3 2" /></>) },
  { title: 'Nutrient gap analysis', text: 'Every vitamin and mineral is compared against your personal target, not a generic recommended daily value.',
    icon: ico(<path d="M3 12h4l3 8 4-16 3 8h4" />) },
  { title: 'Personalised recommendations', text: 'Suggestions are drawn from foods that close your specific gaps while respecting your diet and allergies.',
    icon: ico(<><path d="M12 2 3 7l9 5 9-5-9-5Z" /><path d="M3 17l9 5 9-5M3 12l9 5 9-5" /></>) },
  { title: 'Trends over time', text: 'Watch how your intake shifts week over week as you adjust, so progress is visible, not just implied.',
    icon: ico(<><path d="M4 4v16h16" /><path d="M8 15l3-4 3 3 4-6" /></>) },
  { title: 'Built around your goals', text: 'Set a goal — lose weight, build muscle, manage a condition, or simply eat better — and every recommendation adjusts to it.',
    icon: ico(<path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c2 0 3.3 1 5.5 3 2.2-2 3.5-3 5.5-3 3.5 0 6 3.5 4 7.5C19 16.65 12 21 12 21Z" />) },
];

export const GOALS = ['Weight loss', 'Muscle gain', 'General wellness', 'Managing a condition'];
export const PREFS = ['Vegetarian', 'Vegan', 'Gluten-free', 'Nut allergy', 'Lactose-free'];
export const GOAL_POINTS = [
  'Weight management, muscle gain, or maintenance goals with adjusted targets',
  'Condition-aware tracking — for example lower sodium or managed sugar intake',
  'Dietary preferences and restrictions respected in every suggestion',
];
