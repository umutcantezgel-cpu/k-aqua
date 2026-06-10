import { Metadata } from 'next';
import ContactClient from '@/components/pages/ContactClient';

export const metadata: Metadata = {
  title: 'K-Aqua | Contact, Imprint & Privacy',
  description: 'Get in touch with KWT GmbH for K-Aqua sales and support. View our imprint and privacy policy details.',
  keywords: 'Contact KWT GmbH, K-Aqua Support, Imprint, Privacy Policy, Sales',
};

export default function Page() {
  return <ContactClient />;
}
