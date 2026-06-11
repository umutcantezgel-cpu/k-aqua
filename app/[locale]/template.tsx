"use client";

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
      className="min-h-[calc(100vh-80px)]"
    >
      {children}
    </motion.div>
  );
}
