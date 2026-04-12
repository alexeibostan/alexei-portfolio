interface TechPillProps {
  name: string;
  category?: string;
  size?: 'sm' | 'md';
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Frontend:  { bg: 'bg-secondary/10',     text: 'text-secondary',     border: 'border-secondary/15' },
  Backend:   { bg: 'bg-accent/10',        text: 'text-accent',        border: 'border-accent/15' },
  Libraries: { bg: 'bg-primary/10',       text: 'text-primary',       border: 'border-primary/15' },
  Tools:     { bg: 'bg-accent-purple/10', text: 'text-accent-purple', border: 'border-accent-purple/15' },
  Testing:   { bg: 'bg-accent/10',        text: 'text-accent',        border: 'border-accent/15' },
  Mobile:    { bg: 'bg-accent-purple/10', text: 'text-accent-purple', border: 'border-accent-purple/15' },
  default:   { bg: 'bg-white/[0.04]',     text: 'text-white/50',      border: 'border-white/[0.08]' },
};

export function TechPill({ name, category, size = 'sm' }: TechPillProps) {
  const colors = categoryColors[category ?? 'default'] ?? categoryColors.default;
  const sizeClasses = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-[11px] px-2.5 py-1';

  return (
    <span
      className={`font-mono-brand ${sizeClasses} rounded-full inline-block border ${colors.bg} ${colors.text} ${colors.border}`}
    >
      {name}
    </span>
  );
}
