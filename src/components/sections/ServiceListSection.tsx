
import { useState, useEffect } from 'react';
import { Users, Zap, Wrench, Building, GraduationCap, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const ServiceListSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'Electrical Installation and Maintenance',
      description: 'Professional electrical installation and maintenance services for all projects.',
      icon: <Zap className="w-6 h-6" />,
      link: '/services/electrical-installation',
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mechatronics',
      description: 'Advanced mechatronics solutions combining mechanical, electronic, and software engineering.',
      icon: <Wrench className="w-6 h-6" />,
      link: '/services/mechatronics',
      image: 'https://images.unsplash.com/photo-1565090806047-4a605a6b8fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Civil Works',
      description: 'Comprehensive civil engineering and construction services for infrastructure projects.',
      icon: <Building className="w-6 h-6" />,
      link: '/services/civil-works',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Training & Internship',
      description: 'Structured training programs and internships to develop the next generation of engineers.',
      icon: <GraduationCap className="w-6 h-6" />,
      link: '/services/training-internship',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Environmental & OSH Consultancy',
      description: 'Expert consultation on environmental impact assessment and occupational safety & health.',
      icon: <Shield className="w-6 h-6" />,
      link: '/services/environmental-osh-consultancy',
      image: 'https://images.unsplash.com/photo-1507831488031-e2509af4be7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20">
      <div className="container-fluid">
        <SectionTitle
          subtitle="Our Services"
          title="We Deliver Engineering Excellence with Precision and Care"
          description="Our comprehensive range of services is designed to meet the diverse needs of industries ranging from construction to manufacturing, energy to technology."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              link={service.link}
              variant={index < 3 ? 'featured' : 'default'}
              className={cn(
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isVisible && `transition-all duration-700 delay-${index * 100}`
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListSection;
