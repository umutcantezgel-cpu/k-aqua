import React from 'react';
import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  filled?: boolean;
  children?: React.ReactNode;
}

export function Icon({ name, size = 'md', className, filled = false, children, ...props }: IconProps) {
  let sizeClass = '';
  switch (size) {
    case 'sm':
      sizeClass = 'text-[16px] w-4 h-4'; // Material Symbol Font Size
      break;
    case 'md':
      sizeClass = 'text-[24px] w-6 h-6';
      break;
    case 'lg':
      sizeClass = 'text-[32px] w-8 h-8';
      break;
    case 'xl':
      sizeClass = 'text-[48px] w-12 h-12';
      break;
  }

  return (
    <span
      className={cn(
        "material-symbols-outlined inline-flex items-center justify-center leading-none",
        { "material-symbols-filled": filled }, 
        sizeClass,
        className
      )}
      style={{
        fontVariationSettings: filled
          ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
          : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
      }}
      aria-hidden="true"
      {...props}
    >
      {name || children}
    </span>
  );
}
