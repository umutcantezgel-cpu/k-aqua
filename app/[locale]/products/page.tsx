import { Metadata } from 'next';
import ProductsClient from '@/components/pages/ProductsClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Products - PP-R/PP-RCT Pipes & Fittings',
  description: 'Explore the comprehensive K-Aqua PP-R/PP-RCT piping system including mono layer and multilayer reinforced pipes, fittings from 20mm to 630mm, and accessories.',
  keywords: 'PP-R, PP-RCT, Pipes, Fittings, SDR 6, SDR 11, Water Supply, K-Aqua Products',
};

export default function Page() {
  return <ProductsClient />;
}
