// Reusable pill button used across the whole app
const VARIANTS = {
  clay: 'bg-clay hover:bg-clayd text-cream',
  leaf: 'bg-leaf hover:bg-forest text-cream',
  forest: 'bg-forest hover:bg-pine text-cream',
  soft: 'bg-moss hover:bg-mossd text-forest',
  outline: 'bg-paper border border-forest/20 hover:bg-moss text-forest',
  danger: 'bg-clay/10 hover:bg-clay hover:text-cream text-clayd',
};
const SIZES = { sm: 'text-xs px-3.5 py-1.5', md: 'text-sm px-5 py-2.5', lg: 'px-7 py-3.5' };

export default function Button({ variant = 'clay', size = 'md', as: Tag = 'button', className = '', children, ...props }) {
  const type = Tag === 'button' ? { type: props.type || 'button' } : {};
  return (
    <Tag {...type} {...props}
      className={`${VARIANTS[variant]} ${SIZES[size]} font-medium rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}>
      {children}
    </Tag>
  );
}
