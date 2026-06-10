import React from 'react';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: HeadingVariant;
  responsive?: boolean;
}

export function Heading({
  children,
  variant = 'h1',
  responsive = true,
  className = '',
  id,
  ...props
}: HeadingProps) {
  const Tag = variant;

  let baseStyles = '';
  switch (variant) {
    case 'h1':
      baseStyles = responsive
        ? 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'
        : 'text-5xl font-bold leading-tight';
      break;
    case 'h2':
      baseStyles = responsive
        ? 'text-2xl md:text-3xl lg:text-4xl font-bold'
        : 'text-4xl font-bold';
      break;
    case 'h3':
      baseStyles = responsive
        ? 'text-xl md:text-2xl lg:text-3xl font-bold'
        : 'text-3xl font-bold';
      break;
    case 'h4':
      baseStyles = responsive
        ? 'text-lg md:text-xl lg:text-2xl font-semibold'
        : 'text-2xl font-semibold';
      break;
    case 'h5':
      baseStyles = responsive
        ? 'text-base md:text-lg lg:text-xl font-semibold'
        : 'text-xl font-semibold';
      break;
    case 'h6':
      baseStyles = responsive
        ? 'text-sm md:text-base lg:text-lg font-semibold'
        : 'text-lg font-semibold';
      break;
  }

  // Auto-generate ID for TableOfContents if it's h2 or h3 and text is string
  let finalId = id;
  if (!finalId && (variant === 'h2' || variant === 'h3') && typeof children === 'string') {
    finalId = children.toLowerCase().replace(/[^a-z0-9aeoeuess]+/g, '-').replace(/(^-|-$)+/g, '');
  }

  return (
    <Tag id={finalId} className={`${baseStyles} text-[#0C1929] ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
