"use client";

import dynamic from 'next/dynamic';

const EntranceLoader = dynamic(() => import('@/components/EntranceLoader'), { 
  ssr: false 
});

export default function ClientEntranceLoader() {
  return <EntranceLoader />;
}
