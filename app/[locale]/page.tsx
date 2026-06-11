import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Premium PP-R/PP-RCT Piping Systems',
  description: 'Experience the future of fluid dynamics with K-Aqua. Certified German technology for potable water, HVAC, and industrial applications.',
  keywords: 'K-Aqua, PP-R pipes, PP-RCT, piping systems, water infrastructure, HVAC, potable water',
};

export default function Page() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <HomeClient />
    </main>
  );
}
