import React from 'react';
import { getAllServices } from '@/lib/data/services';
import { Grid } from '@/components/layout/Grid';
import { ServiceCard } from '@/components/cards/ServiceCard';

interface ServiceGridProps {
  limit?: number;
}

export function ServiceGrid({ limit }: ServiceGridProps) {
  const allServices = getAllServices();
  const services = limit ? allServices.slice(0, Math.max(0, limit)) : allServices;

  return (
    <Grid columns={3} responsive gap="lg" className="w-full">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </Grid>
  );
}
