import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
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
    <html lang={locale} className="scroll-smooth bg-surface-base text-on-surface">
      <body className={`${inter.variable} ${jakarta.variable} min-h-screen w-full max-w-full overflow-x-hidden flex flex-col antialiased font-sans selection:bg-primary/20 selection:text-primary`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="flex-1 pt-20 w-full max-w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
