import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '../globals.css';
import Navigation from '@/components/Navigation';
import {NextIntlClientProvider} from 'next-intl';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/Footer'));
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import ClientEntranceLoader from '@/components/ClientEntranceLoader';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-body',
  display: 'swap',
});

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'K-Aqua | Leading in Water Supply',
  description: 'The business field of KWT GmbH is manufacturing pipes and fittings for water supply in several plastic materials.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({locale});

  return (
    <html lang={locale} className="scroll-smooth bg-surface-base text-on-surface anim-ok">
      <body className={`${inter.variable} ${outfit.variable} min-h-screen w-full max-w-full overflow-x-hidden flex flex-col antialiased font-sans selection:bg-primary/20 selection:text-primary`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <ClientEntranceLoader />
            <Navigation />
            <main className="flex-1 pt-20 w-full max-w-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
