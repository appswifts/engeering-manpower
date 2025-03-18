
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getServiceBySlug } from '@/services/serviceData';
import SectionTitle from '@/components/SectionTitle';
import { ArrowLeft, Phone, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
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

const ServiceDetailsPage = () => {
  const { serviceSlug, subtype } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(serviceSlug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // If service not found, redirect to services page
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  // Find subtype if specified
  const subtypeContent = subtype && service.subtypes 
    ? service.subtypes.find(st => st.slug === subtype) 
    : null;

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb navigation */}
      <div className="container-fluid mb-6">
        <div className="flex items-center text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-primary">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-foreground font-medium">
            {subtypeContent ? `${service.title} - ${subtypeContent.title}` : service.title}
          </span>
        </div>
      </div>
      
      {/* Hero section with carousel */}
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
                title={subtypeContent ? subtypeContent.title : service.title}
                description={subtypeContent ? subtypeContent.short_description : service.description}
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
      
      {/* Service content */}
      <div className="container-fluid">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="md:col-span-1 order-2 md:order-1">
            <div className="sticky top-24 space-y-8">
              {/* Service navigation */}
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 bg-primary text-primary-foreground">
                    <h3 className="font-bold text-xl">Service Categories</h3>
                  </div>
                  
                  <ScrollArea className="h-auto max-h-[400px]">
                    <nav className="p-4">
                      {service.subtypes?.map((st) => (
                        <Link 
                          key={st.slug}
                          to={`/services/${serviceSlug}/${st.slug}`}
                          className={`flex items-center p-3 rounded-md transition-colors ${
                            st.slug === subtypeContent?.slug 
                              ? 'bg-primary/10 text-primary font-medium' 
                              : 'hover:bg-muted'
                          }`}
                        >
                          <ChevronRight size={16} className={`mr-2 ${st.slug === subtypeContent?.slug ? 'text-primary' : 'text-muted-foreground'}`} />
                          {st.title}
                        </Link>
                      ))}
                    </nav>
                  </ScrollArea>
                </CardContent>
              </Card>
              
              {/* Other services */}
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 bg-secondary text-secondary-foreground">
                    <h3 className="font-bold text-xl">Other Services</h3>
                  </div>
                  
                  <ScrollArea className="h-auto max-h-[400px]">
                    <nav className="p-4">
                      {['electrical-installation', 'mechatronics', 'civil-works', 'training-internship', 'environmental-osh-consultancy'].map(slug => {
                        const otherService = getServiceBySlug(slug);
                        if (!otherService || otherService.title === service.title) return null;
                        return (
                          <Link 
                            key={slug}
                            to={`/services/${slug}`}
                            className="flex items-center p-3 rounded-md transition-colors hover:bg-muted"
                          >
                            <ChevronRight size={16} className="mr-2 text-muted-foreground" />
                            {otherService.title}
                          </Link>
                        );
                      })}
                    </nav>
                  </ScrollArea>
                </CardContent>
              </Card>
              
              {/* Quick contact */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Need Assistance?</h3>
                  <p className="text-muted-foreground mb-6">Have questions about our {subtypeContent ? subtypeContent.title : service.title} services? Contact our team for immediate assistance.</p>
                  <Button className="w-full gap-2" asChild>
                    <Link to="/contact">
                      <Phone size={16} />
                      Contact Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-2 order-1 md:order-2">
            <Card className="shadow-sm">
              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">
                    {subtypeContent ? subtypeContent.title : service.title}
                  </h2>
                  
                  <div className="my-8">
                    {subtypeContent ? (
                      <div dangerouslySetInnerHTML={{ __html: subtypeContent.content }} />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: service.content }} />
                    )}
                  </div>
                  
                  <Separator className="my-8" />
                  
                  {/* Service offerings list */}
                  {(subtypeContent?.offerings || service.offerings) && (
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold mb-6">
                        Our {subtypeContent ? subtypeContent.title : service.title} Services Include:
                      </h3>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {(subtypeContent?.offerings || service.offerings)?.map((offering, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-foreground">{offering}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Quick action buttons */}
            <div className="flex flex-wrap justify-center md:justify-between gap-4 mt-8">
              <Button variant="outline" asChild>
                <Link to="/services">
                  <ArrowLeft size={16} className="mr-2" />
                  All Services
                </Link>
              </Button>
              
              <Button asChild>
                <Link to="/contact">
                  Get Started
                  <ChevronRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
