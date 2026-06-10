import { Metadata } from 'next';
import CareerClient from '@/components/pages/CareerClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Career - Work with Us',
  description: 'Join K-Aqua, a modern and aggrandizing company leading in water supply. We value creativity and experience. Apply today!',
  keywords: 'K-Aqua jobs, KWT GmbH career, water supply careers, PP-R manufacturing jobs, Germany',
};

export default function Page() {
  return <CareerClient />;
}
