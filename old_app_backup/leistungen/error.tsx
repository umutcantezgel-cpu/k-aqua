'use client';

import { Icon } from '@/components/ui/Icon';
import Link from 'next/link';

export default function LeistungenError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <Icon name="engineering" className="text-[64px] text-text-secondary mb-4" />
      <h2 className="text-2xl font-bold text-foreground mb-2">Leistungen konnten nicht geladen werden</h2>
      <p className="text-text-secondary mb-6">Bitte versuchen Sie es erneut.</p>
      <div className="flex gap-4">
        <button onClick={reset} className="bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors">
          Erneut versuchen
        </button>
        <Link href="/" className="bg-surface border border-border text-foreground font-bold py-3 px-6 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-colors">
          Startseite
        </Link>
      </div>
    </div>
  );
}
