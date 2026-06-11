import React, { ReactNode } from 'react';

export interface EyebrowProps {
  children?: ReactNode;
}

export function Eyebrow({ children }: EyebrowProps) {
  return <p className="k-eyebrow">{children}</p>;
}
