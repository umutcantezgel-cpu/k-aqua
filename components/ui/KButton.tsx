import React, { ReactNode } from 'react';
import { Link } from '@/i18n/routing';

export interface KButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function KButton({ children, variant = 'primary', icon, href, onClick, size = 'md' }: KButtonProps) {
  const cls = `k-btn k-btn--${variant} k-btn--${size}`;
  const inner = (
    <React.Fragment>
      {children}
      {icon ? icon : null}
    </React.Fragment>
  );

  if (href) {
    if (href.startsWith('http')) {
      return (
        <a className={cls} href={href} target="_blank" rel="noreferrer">
          {inner}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
