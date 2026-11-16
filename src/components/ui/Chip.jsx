// Selectable pill (goal / dietary preference)
export default function Chip({ active, onClick, children }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active}
      className={`text-sm px-4 py-2 rounded-full transition-colors ${
        active ? 'bg-forest text-cream' : 'bg-paper border border-forest/15 text-forest hover:bg-moss'}`}>
      {children}
    </button>
  );
}
