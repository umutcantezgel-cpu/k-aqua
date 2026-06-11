import { Link } from '@/i18n/routing';
import { SearchX, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found</title>
      </head>
      <body>
        <div className="flex flex-col items-center justify-center min-h-[100svh] text-center px-4 bg-slate-50">
          <div className="w-24 h-24 rounded-3xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mb-8">
            <SearchX size={48} className="text-slate-400" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">404</h1>
          <h2 className="text-2xl font-bold text-slate-700 mb-4">Page not found</h2>
          <p className="text-slate-500 text-lg max-w-md mb-8">
            The requested page could not be found. Please use one of the options below:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/20">
              <Home size={18} /> Go to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
