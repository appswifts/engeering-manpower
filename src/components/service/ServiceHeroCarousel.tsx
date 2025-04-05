
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Share2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';

interface ServiceHeroCarouselProps {
  serviceTitle: string;
  serviceDescription: string;
  subtypeTitle?: string;
  subtypeDescription?: string;
  serviceSlug?: string;
}

const ServiceHeroCarousel = ({ 
  serviceTitle, 
  serviceDescription, 
  subtypeTitle, 
  subtypeDescription,
  serviceSlug
}: ServiceHeroCarouselProps) => {
  // Map service slugs to their featured images
  const serviceImages = {
    'electrical-installation': '/lovable-uploads/922530ef-229a-4775-916b-797d76e599ef.png',
    'mechatronics': '/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png',
    'civil-works': '/lovable-uploads/civil works.jpg',
    'training-internship': '/lovable-uploads/6f06861d-83ea-4078-982e-b43f06f9461e.png',
    'environmental-osh-consultancy': '/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png'
  };

  const featuredImage = serviceSlug ? serviceImages[serviceSlug] : Object.values(serviceImages)[0];
  return (
    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 py-16 mb-12">
      <div className="container-fluid">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Link to="/services" className="inline-flex items-center text-primary hover:underline font-medium mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to All Services
            </Link>
            
            <SectionTitle
              subtitle="Our Services"
              title={subtypeTitle || serviceTitle}
              description={subtypeDescription || serviceDescription}
              align="left"
              className="mb-8"
            />
            
            <div className="flex flex-wrap gap-4">
              <Button className="gap-2">
                Get a Quote
                <Phone size={16} />
              </Button>
              
              <Button variant="outline" className="gap-2">
                <Share2 size={16} />
                Share
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur"></div>
            <div className="p-1">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={featuredImage} 
                  alt={subtypeTitle || serviceTitle} 
                  className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroCarousel;
