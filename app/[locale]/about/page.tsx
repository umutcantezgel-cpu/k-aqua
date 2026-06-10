import { Metadata } from 'next';
import AboutClient from '@/components/pages/AboutClient';

export const metadata: Metadata = {
  title: 'K-Aqua | About Us - Company Policy & GENAU System',
  description: 'Discover KWT GmbH, our partnership with KESSEL, and our commitment to ecological responsibility through the GENAU Management System (ISO 14001 & 50001).',
  keywords: 'KWT GmbH, KESSEL, GENAU management system, ISO 14001, ISO 50001, ecological responsibility, water supply',
};

export default function Page() {
  return <AboutClient />;
}
