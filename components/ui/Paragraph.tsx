import React from 'react';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
  className?: string;
}

export function Paragraph({
  children,
  size = 'base',
  muted = false,
  className = '',
  ...props
}: ParagraphProps) {
  let baseStyles = '';
  switch (size) {
    case 'sm':
      baseStyles = 'text-sm';
      break;
    case 'base':
      baseStyles = 'text-base leading-relaxed';
      break;
    case 'lg':
      baseStyles = 'text-lg';
      break;
  }

  const textColor = muted ? 'text-[#4A7299]' : 'text-[#0C1929]';

  return (
    <p className={`${baseStyles} ${textColor} ${className}`.trim()} {...props}>
      {children}
    </p>
  );
}
