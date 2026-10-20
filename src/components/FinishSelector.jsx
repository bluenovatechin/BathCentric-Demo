import { useState } from 'react';

const finishes = [
  { id: 'matte-black', name: 'Matte Black', className: 'matte-black' },
  { id: 'brushed-brass', name: 'Brushed Brass / Gold', className: 'brushed-brass' },
  { id: 'chrome', name: 'Polished Chrome', className: 'chrome' },
  { id: 'rose-gold', name: 'Brushed Rose Gold', className: 'rose-gold' },
  { id: 'gunmetal', name: 'Gunmetal Grey', className: 'gunmetal' }
];

export default function FinishSelector({ defaultFinish = 'Matte Black', onSelect }) {
  const [selected, setSelected] = useState(defaultFinish);

  const handleSelect = (name) => {
    setSelected(name);
    if (onSelect) onSelect(name);
  };

  return (
    <div style={{ margin: '2rem 0' }}>
      <div className="form-label">
        Available Hardware Finishes: <strong style={{ color: 'var(--color-accent-dark)' }}>{selected}</strong>
      </div>
      <div className="finish-selector-grid">
        {finishes.map((f) => (
          <div
            key={f.id}
            className={`finish-option ${selected === f.name ? 'selected' : ''}`}
            onClick={() => handleSelect(f.name)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelect(f.name)}
          >
            <div className={`finish-circle ${f.className}`} />
            <div className="finish-name">{f.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
