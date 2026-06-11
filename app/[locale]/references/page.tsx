import { Metadata } from 'next';
import ReferencesClient from './ReferencesClient';

export const metadata: Metadata = {
  title: 'K-Aqua | References & Case Studies',
  description: 'Explore our legacy and the global megaprojects powered by K-Aqua infrastructure.',
  keywords: 'K-Aqua References, Case Studies, Global Infrastructure',
};

export default function Page() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <ReferencesClient />
    </main>
  );
}
