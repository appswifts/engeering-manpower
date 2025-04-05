
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Wrench, Building, GraduationCap, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Electrical Installation and Industrial Maintenance',
      description: 'Professional electrical installation and maintenance services for all projects.',
      icon: <Zap className="w-6 h-6" />,
      link: '/services/electrical-installation',
      image: '/lovable-uploads/Electrical Installation and Industrial Maintenance.jpg',
    },
    {
      title: 'Mechatronics and General Mechanics',
      description: 'Advanced mechatronics solutions combining mechanical, electronic, and software engineering.',
      icon: <Wrench className="w-6 h-6" />,
      link: '/services/mechatronics',
      image: '/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png',
    },
    {
      title: 'Civil Works',
      description: 'Comprehensive civil engineering and construction services for infrastructure projects.',
      icon: <Building className="w-6 h-6" />,
      link: '/services/civil-works',
      image: '/lovable-uploads/civil works.jpg',
    },
    {
      title: 'Refreshment of Technical Skills and Internship',
      description: 'Structured training programs and internships to develop the next generation of engineers.',
      icon: <GraduationCap className="w-6 h-6" />,
      link: '/services/training-internship',
      image: '/lovable-uploads/6f06861d-83ea-4078-982e-b43f06f9461e.png',
    },
    {
      title: 'Environmental & OSH Consultancy',
      description: 'Expert consultation on environmental impact assessment and occupational safety & health.',
      icon: <Shield className="w-6 h-6" />,
      link: '/services/environmental-osh-consultancy',
      image: '/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-fluid">
        <SectionTitle
          subtitle="Our Services"
          title="What We Do"
          description="Our top priority is customer satisfaction, and we work closely with clients to understand their unique needs and goals."
        />

        <div className="relative mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    image={service.image}
                    link={service.link}
                    className={cn(
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                      isVisible && `transition-all duration-700 delay-${index * 100}`
                    )}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static lg:-left-8 mx-2 transform-none" />
              <CarouselNext className="static lg:-right-8 mx-2 transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn btn-primary px-8 py-3"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
