import { Link } from 'react-router-dom';
import { ChevronRight, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Service, ServiceSubtype, getServiceBySlug } from '@/services/serviceData';

interface ServiceSidebarProps {
  service: Service;
  currentSubtype?: ServiceSubtype | null;
  serviceSlug: string;
}

const ServiceSidebar = ({ service, currentSubtype, serviceSlug }: ServiceSidebarProps) => {
  return (
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
                      st.slug === currentSubtype?.slug 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    <ChevronRight size={16} className={`mr-2 ${st.slug === currentSubtype?.slug ? 'text-primary' : 'text-muted-foreground'}`} />
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
            <p className="text-muted-foreground mb-6">Have questions about our {currentSubtype ? currentSubtype.title : service.title} services? Contact our team for immediate assistance.</p>
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
  );
};

export default ServiceSidebar;
