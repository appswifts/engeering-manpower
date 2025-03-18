
// Define types for our service data
export interface ServiceSubtype {
  title: string;
  slug: string;
  short_description: string;
  content: string;
  image: string;
  offerings?: string[];
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  icon?: JSX.Element;
  image: string;
  offerings?: string[];
  subtypes?: ServiceSubtype[];
}

// Service data will be imported from servicesData.ts
import { servicesList } from './servicesData';

// Function to get a service by its slug
export const getServiceBySlug = (slug?: string): Service | undefined => {
  if (!slug) return undefined;
  return servicesList.find(service => service.slug === slug);
};

// Function to get all services
export const getAllServices = (): Service[] => {
  return servicesList;
};
