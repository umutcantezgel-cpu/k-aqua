'use client';

import { Icon } from '@/components/ui/Icon';
import { Link } from '@/i18n/routing';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="w-24 h-24 rounded-full bg-error/10 text-error flex items-center justify-center mb-8">
        <Icon name="error" className="text-[48px]" />
      </div>
      <h1 className="text-3xl font-bold text-foreground mb-4">Etwas ist schiefgegangen</h1>
      <p className="text-text-secondary text-lg max-w-md mb-8">
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie unseren Support.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors shadow-lg"
        >
          <Icon name="refresh" className="text-[18px]" /> Erneut versuchen
        </button>
        <Link href="/" className="inline-flex items-center justify-center gap-2 bg-surface border border-border text-foreground font-bold py-3 px-6 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-colors">
          <Icon name="home" className="text-[18px]" /> Zur Startseite
        </Link>
      </div>
    </div>
  );
}
