
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface ServiceMainContentProps {
  title: string;
  content: string;
  offerings?: string[];
}

const ServiceMainContent = ({ title, content, offerings }: ServiceMainContentProps) => {
  return (
    <div className="md:col-span-2 order-1 md:order-2">
      <Card className="shadow-sm">
        <CardContent className="p-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {title}
            </h2>
            
            <div className="my-8">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            
            <Separator className="my-8" />
            
            {/* Service offerings list */}
            {offerings && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6">
                  Our {title} Services Include:
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {offerings.map((offering, index) => (
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
  );
};

export default ServiceMainContent;
