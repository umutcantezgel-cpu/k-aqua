import { Metadata } from 'next';
import SolutionsClient from '@/components/pages/SolutionsClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Solutions - Environmentally Responsible',
  description: 'Learn about K-Aqua\'s environmentally friendly solutions. Our PP-R/PP-RCT products are 100% recyclable, highly durable, and manufactured with ecological responsibility.',
  keywords: 'Environmentally-friendly, Recyclable, PP-R, PP-RCT, Sustainable piping, K-Aqua Solutions',
};

export default function Page() {
  return <SolutionsClient />;
}
