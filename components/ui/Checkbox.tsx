'use client';

import React, { forwardRef } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, checked, onChange, disabled, className = '', error = false, ...props }, ref) => {
    
    const reactId = React.useId();
    const generatedId = id || reactId;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e.target.checked);
    };

    return (
      <div className={`flex items-start gap-2 ${className}`}>
        <div className="flex items-center h-5">
          <input
            id={generatedId}
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className={`w-4 h-4 rounded focus:ring-[#1A6FD4] ${
              error 
                ? 'border-[#DE350B] text-[#DE350B]' 
                : 'border-[#D4E5F7] text-[#1A6FD4] accent-[#1A6FD4]'
            } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            {...props}
          />
        </div>
        {label && (
          <label 
            htmlFor={generatedId} 
            className={`text-sm ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${error ? 'text-[#DE350B]' : 'text-[#1E3A5C]'}`}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
