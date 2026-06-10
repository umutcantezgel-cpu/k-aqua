import { Link } from '@/i18n/routing';
import { Icon } from '@/components/ui/Icon';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-surface-base text-on-surface">
          <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8">
            <Icon name="search_off" className="text-[48px]" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page not found</h2>
          <p className="text-text-secondary text-lg max-w-md mb-8">
            The requested page could not be found. Please use one of the options below:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-primary-hover transition-colors shadow-lg">
              <Icon name="home" className="text-[18px]" /> Go to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
