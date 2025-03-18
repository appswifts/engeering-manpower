
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      image: '/lovable-uploads/922530ef-229a-4775-916b-797d76e599ef.png',
    },
    {
      title: 'Mechatronics',
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
      image: '/lovable-uploads/2bf25f7e-4a91-4582-a46c-b1724201c781.png',
    },
    {
      title: 'Training & Internship',
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
    <section id="service-list" className="py-20 scroll-mt-20">
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
