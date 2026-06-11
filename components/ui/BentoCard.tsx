import React, { ReactNode, CSSProperties } from 'react';

export interface BentoCardProps {
  children?: ReactNode;
  span?: number;
  tint?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function BentoCard({ children, span = 1, tint = false, className = '', style }: BentoCardProps) {
  return (
    <div className={`k-card ${tint ? 'k-card--tint' : ''} ${className}`}
      style={{ gridColumn: `span ${span}`, ...style }}>
      {children}
    </div>
  );
}
