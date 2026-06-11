import { Metadata } from 'next';
import ServiceClient from './ServiceClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Service & Support',
  description: 'Comprehensive support, installation protocols, training academy, and document library for K-Aqua piping systems.',
  keywords: 'K-Aqua Service, Support, Training Academy, Installation Protocols',
};

export default function Page() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <ServiceClient />
    </main>
  );
}
