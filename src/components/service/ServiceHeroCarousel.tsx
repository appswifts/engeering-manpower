
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

// Array of images for the carousel
const carouselImages = [
  "/lovable-uploads/9e345a04-5ec4-42e0-8e08-a62d86eb0feb.png", // OHS image
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", // Laptop 
  "https://images.unsplash.com/photo-1518770660439-4636190af475", // Circuit board
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // Programming
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
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img 
                          src={image} 
                          alt={`Service slide ${index + 1}`} 
                          className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-105"
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
