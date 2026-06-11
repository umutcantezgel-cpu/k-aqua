import { Metadata } from 'next';
import SolutionsClient from './SolutionsClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Solutions - Reliable Water Infrastructure',
  description: 'Future-proof and reliable solutions for residential, commercial, and industrial water infrastructure using K-Aqua systems.',
  keywords: 'K-Aqua Solutions, Water Infrastructure, Potable Water, HVAC, Industrial Fluid Transport',
};

export default function Page() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <SolutionsClient />
    </main>
  );
}
