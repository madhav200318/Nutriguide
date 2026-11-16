import { NUTRIENTS } from '../../data/constants';

// Bars nudge upward with every meal logged, capped at 100%
export default function NutrientBars({ mealCount }) {
  return (
    <div className="space-y-3.5" id="nutrient-bars">
      {NUTRIENTS.map((n) => {
        const pct = Math.min(100, n.base + mealCount * n.step);
        return (
          <div key={n.key}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-ink/70 font-medium">{n.label}</span>
              <span className="text-ink/50">{pct}%</span>
            </div>
            <div className="h-2 bg-moss rounded-full overflow-hidden">
              <div className={`h-full ${n.color} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
