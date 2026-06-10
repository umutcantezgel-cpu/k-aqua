'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';

interface CalendlyEmbedProps {
  url?: string;
  hideEventTypeDetails?: boolean;
  hideGdprBanner?: boolean;
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
}

export function CalendlyEmbed({
  url = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/k-aqua-demo',
  hideEventTypeDetails = false,
  hideGdprBanner = false,
  backgroundColor = 'ffffff',
  textColor = '1a1a1a',
  primaryColor = '2563eb', // blue-600
}: CalendlyEmbedProps) {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const buildCalendlyUrl = () => {
    const urlObj = new URL(url);
    if (hideEventTypeDetails) urlObj.searchParams.set('hide_event_type_details', '1');
    if (hideGdprBanner) urlObj.searchParams.set('hide_gdpr_banner', '1');
    urlObj.searchParams.set('background_color', backgroundColor);
    urlObj.searchParams.set('text_color', textColor);
    urlObj.searchParams.set('primary_color', primaryColor);
    return urlObj.toString();
  };

  if (!isClient) return null;

  return (
    <div className="relative w-full h-[700px] sm:h-[800px] bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D4E5F7]">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#EEF5FF] z-10">
          <Icon name="event" size="lg" className="text-[#8BAABF] mb-4 animate-pulse" />
          <p className="text-[#4A7299] font-medium">Lade Terminkalender...</p>
        </div>
      )}
      <iframe
        src={buildCalendlyUrl()}
        width="100%"
        height="100%"
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
        title="Calendly Terminbuchung"
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
}
