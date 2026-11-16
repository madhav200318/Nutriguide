import MealItem from './MealItem';

export default function MealList({ meals, total, editingId, onEdit, onDelete, loading }) {
  if (loading) return <p className="text-sm text-ink/45 italic">Loading meals…</p>;
  return (
    <>
      <ul id="log-list" className="space-y-2.5 min-h-[9rem]">
        {meals.slice().reverse().map((m) => (
          <MealItem key={m.id} meal={m} isEditing={m.id === editingId} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </ul>
      {meals.length === 0 && (
        <p id="log-empty" className="text-sm text-ink/45 italic">
          {total === 0 ? 'Nothing logged yet — add a meal above.' : 'No meals match your search.'}
        </p>
      )}
    </>
  );
}
