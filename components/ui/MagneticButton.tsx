"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'div';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function MagneticButton({ children, className, as = 'button', type, disabled, ...props }: MagneticButtonProps) {
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = as === 'div' ? motion.div : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-md font-semibold transition-colors duration-300 shadow-flat-plus hover:shadow-flat-plus-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary overflow-hidden",
        className
      )}
      type={as === 'button' ? type : undefined}
      disabled={as === 'button' ? disabled : undefined}
      {...(props as any)}
    >
      <span className="relative z-10 flex items-center">{children}</span>
      <div className="absolute inset-0 bg-secondary opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </Component>
  );
}
