import { Metadata } from 'next';
import NewsClient from '@/components/pages/NewsClient';

export const metadata: Metadata = {
  title: 'K-Aqua | News & Events',
  description: 'Stay updated with K-Aqua news. We are officially ISO certified with ISO 9001:2015, ISO 14001:2015, and ISO 50001:2018.',
  keywords: 'K-Aqua news, ISO 9001, ISO 14001, ISO 50001, DAkkS certification, KWT GmbH updates',
};

export default function Page() {
  return <NewsClient />;
}
