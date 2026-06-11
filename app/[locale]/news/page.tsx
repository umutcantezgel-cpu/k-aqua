import { Metadata } from 'next';
import NewsClient from './NewsClient';

export const metadata: Metadata = {
  title: 'K-Aqua | News & Updates',
  description: 'Stay up to date with the latest news, innovations, and global deployments of K-Aqua piping systems.',
  keywords: 'K-Aqua News, Updates, Piping Innovations',
};

export default function Page() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <NewsClient />
    </main>
  );
}
