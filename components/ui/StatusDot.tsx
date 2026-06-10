import React from 'react';

export default function StatusDot({ active = false }: { active?: boolean }) {
  return (
    <div className={`w-2 h-2 rounded-full shrink-0 ${active ? 'bg-primary' : 'bg-slate-300'}`} />
  );
}
