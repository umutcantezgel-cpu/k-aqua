import React from 'react';
import { Label } from '@/components/ui/Label';

interface FormFieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
  helperText?: string;
}

export function FormField({ label, error, children, required, helperText }: FormFieldProps) {
  // We attach error state manually if children are custom inputs that accept error prop
  const childrenWithError = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      // @ts-ignore - injecting error prop dynamically
      return React.cloneElement(child, { error: !!error, helperText: error || helperText });
    }
    return child;
  });

  return (
    <div className="mb-6">
      <Label required={required} className="mb-2">
        {label}
      </Label>
      {childrenWithError}
    </div>
  );
}
