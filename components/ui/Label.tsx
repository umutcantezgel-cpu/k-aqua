import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

export function Label({ children, htmlFor, required = false, className = '' }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`inline-block text-sm font-medium text-[#0C1929] ${className}`.trim()}>
      {children}
      {required && <span className="text-[#DE350B] ml-1">*</span>}
    </label>
  );
}
