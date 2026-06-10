import { Metadata } from 'next';
import ServiceClient from '@/components/pages/ServiceClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Customer Service & Downloads',
  description: 'Access K-Aqua customer service resources, including PDF downloads for product ranges, features, quality assurance, and step-by-step installation videos.',
  keywords: 'Downloads, Installation videos, PDF, K-Aqua Service, PP-R welding, Socket welding, Electrofusion',
};

export default function Page() {
  return <ServiceClient />;
}
