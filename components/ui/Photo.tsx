import React from 'react';

export function Photo({ src, alt, ratio = '4 / 3', radius = '1rem', className = '', style }: any) {
  return (
    <div style={{ aspectRatio: ratio, borderRadius: radius, overflow: 'hidden', position: 'relative', ...style }} className={className}>
      {/* Using standard img instead of image-slot for Next.js compatibility */}
      <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}
