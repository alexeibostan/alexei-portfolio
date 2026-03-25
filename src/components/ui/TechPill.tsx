interface TechPillProps {
  name: string;
  category?: string;
  size?: 'sm' | 'md';
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Frontend: { bg: 'rgba(126,231,135,0.1)', text: '#7ee787', border: 'rgba(126,231,135,0.15)' },
  Backend: { bg: 'rgba(88,166,255,0.1)', text: '#58a6ff', border: 'rgba(88,166,255,0.15)' },
  Libraries: { bg: 'rgba(196,149,106,0.1)', text: '#c4956a', border: 'rgba(196,149,106,0.15)' },
  Tools: { bg: 'rgba(210,168,255,0.1)', text: '#d2a8ff', border: 'rgba(210,168,255,0.15)' },
  Testing: { bg: 'rgba(88,166,255,0.1)', text: '#58a6ff', border: 'rgba(88,166,255,0.15)' },
  Mobile: { bg: 'rgba(210,168,255,0.1)', text: '#d2a8ff', border: 'rgba(210,168,255,0.15)' },
  default: { bg: 'rgba(255,255,255,0.04)', text: 'rgba(255,255,255,0.5)', border: 'rgba(255,255,255,0.08)' },
};

export function TechPill({ name, category, size = 'sm' }: TechPillProps) {
  const colors = categoryColors[category ?? 'default'] ?? categoryColors.default;
  const sizeClasses = size === 'sm' ? 'text-[9px] px-2 py-0.5' : 'text-[10px] px-2.5 py-1';

  return (
    <span
      className={`font-mono-brand ${sizeClasses} rounded-full inline-block`}
      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
    >
      {name}
    </span>
  );
}
