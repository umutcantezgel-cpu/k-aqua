import React from 'react';
import { Heading } from '@/components/ui/Heading';

interface FormGroupProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormGroup({ title, children, className = '' }: FormGroupProps) {
  return (
    <fieldset className={`flex flex-col gap-2 ${className}`.trim()}>
      {title && (
        <legend className="block w-full mb-6">
          <Heading variant="h4" responsive={false}>{title}</Heading>
        </legend>
      )}
      <div className="flex flex-col">
        {children}
      </div>
    </fieldset>
  );
}
