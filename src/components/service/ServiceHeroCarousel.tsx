
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Share2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

// Updated array of images for the carousel with only user uploaded images
const carouselImages = [
  "/lovable-uploads/922530ef-229a-4775-916b-797d76e599ef.png",
  "/lovable-uploads/ff6ffdf7-2f2b-4eea-bb43-9dead7285c1d.png",
  "/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png",
  "/lovable-uploads/67d1b2fa-e641-4d49-8315-7c3e003aefa8.png",
  "/lovable-uploads/7c7e026e-6bdd-4da5-96ee-84bac4f9ad7d.png",
  "/lovable-uploads/bdd801d0-4496-4a53-8b0f-d769174005d6.png",
  "/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png",
  "/lovable-uploads/2bf25f7e-4a91-4582-a46c-b1724201c781.png",
  "/lovable-uploads/6f06861d-83ea-4078-982e-b43f06f9461e.png",
];

interface ServiceHeroCarouselProps {
  serviceTitle: string;
  serviceDescription: string;
  subtypeTitle?: string;
  subtypeDescription?: string;
}

const ServiceHeroCarousel = ({ 
  serviceTitle, 
  serviceDescription, 
  subtypeTitle, 
  subtypeDescription 
}: ServiceHeroCarouselProps) => {
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
            <Carousel className="w-full carousel-content">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`Service slide ${index + 1}`} 
                          className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroCarousel;
