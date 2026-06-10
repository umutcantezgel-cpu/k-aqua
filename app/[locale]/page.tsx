import { Metadata } from 'next';
import HomeClient from '@/components/pages/HomeClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Leading in Water Supply',
  description: 'The business field of KWT GmbH is manufacturing pipes and fittings for water supply in several plastic materials, positioning the company as a premium construction material supplier.',
  keywords: 'K-Aqua, water supply, pipes, fittings, plastic materials, construction, KWT GmbH',
};

export default function Page() {
  return <HomeClient />;
}
