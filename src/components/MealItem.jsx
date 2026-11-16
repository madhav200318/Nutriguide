import Button from './ui/Button';

const DOT = { Veg: 'bg-leaf', 'Non-Veg': 'bg-clay', Vegan: 'bg-sprout' };

// One record in the list, with Update (edit) and Delete actions
export default function MealItem({ meal, isEditing, onEdit, onDelete }) {
  return (
    <li className={`bg-cream/70 border rounded-xl px-4 py-3 ${isEditing ? 'border-clay ring-1 ring-clay/40' : 'border-forest/10'}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm text-ink/80 font-medium truncate">{meal.name}</p>
          <p className="text-[0.7rem] text-ink/55 mt-0.5 flex items-center gap-1.5 flex-wrap">
            <span className={`inline-block w-2 h-2 rounded-full ${DOT[meal.diet] || 'bg-leaf'}`} />
            {meal.diet} · {meal.mealType} · P {Math.round(meal.protein)}g · C {Math.round(meal.carbs)}g · F {Math.round(meal.fat)}g
          </p>
        </div>
        <span className="text-xs font-medium text-leaf whitespace-nowrap">{Math.round(meal.kcal)} kcal</span>
      </div>
      <div className="flex gap-2 mt-2.5">
        <Button size="sm" variant="soft" onClick={() => onEdit(meal)} aria-label={`Edit ${meal.name}`}>Edit</Button>
        <Button size="sm" variant="danger" onClick={() => onDelete(meal)} aria-label={`Delete ${meal.name}`}>Delete</Button>
      </div>
    </li>
  );
}
