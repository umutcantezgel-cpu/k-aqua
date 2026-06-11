import { Metadata } from 'next';
import CareerClient from './CareerClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Career',
  description: 'Join the K-Aqua team and build the future of fluid dynamics. Explore our job postings and culture.',
  keywords: 'K-Aqua Careers, Jobs, Hiring, Fluid Dynamics Engineering',
};

export default function Page() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      <CareerClient />
    </main>
  );
}
