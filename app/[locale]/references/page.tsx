import { Metadata } from 'next';
import ReferencesClient from '@/components/pages/ReferencesClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Global References',
  description: 'View K-Aqua global references. Our high-quality PP-R/PP-RCT products are trusted in high-rise buildings, hotel complexes, and commercial estates worldwide.',
  keywords: 'K-Aqua references, global projects, high-rise water supply, commercial plumbing, PP-R projects',
};

export default function Page() {
  return <ReferencesClient />;
}
