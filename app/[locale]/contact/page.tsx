import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Contact Us',
  description: 'Get in touch with K-Aqua global operations, regional offices, and sales departments.',
  keywords: 'K-Aqua Contact, Global Operations, Regional Offices, Sales',
};

export default function Page() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <ContactClient />
    </main>
  );
}
