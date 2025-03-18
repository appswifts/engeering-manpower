
import { useState, useEffect } from 'react';
import { Users, Award, Briefcase, Wrench, Settings, Compass, Shield, Cpu } from 'lucide-react';
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
      title: 'Engineering Staffing',
      description: 'Access top engineering talent with specialized skills for your projects.',
      icon: <Users className="w-6 h-6" />,
      link: '/services/engineering-staffing',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Technical Training',
      description: 'Comprehensive training programs to develop technical expertise in your workforce.',
      icon: <Award className="w-6 h-6" />,
      link: '/services/technical-training',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Consulting Services',
      description: 'Expert engineering consultation to optimize your processes and operations.',
      icon: <Briefcase className="w-6 h-6" />,
      link: '/services/consulting',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Project Management',
      description: 'End-to-end management of complex engineering projects for optimal results.',
      icon: <Wrench className="w-6 h-6" />,
      link: '/services/project-management',
      image: 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Mechanical Engineering',
      description: 'Specialized mechanical engineering expertise for design and implementation.',
      icon: <Settings className="w-6 h-6" />,
      link: '/services/mechanical-engineering',
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Civil Engineering',
      description: 'Professional civil engineering services for construction and infrastructure projects.',
      icon: <Compass className="w-6 h-6" />,
      link: '/services/civil-engineering',
      image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Electrical Engineering',
      description: 'Comprehensive electrical engineering services from design to implementation.',
      icon: <Cpu className="w-6 h-6" />,
      link: '/services/electrical-engineering',
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control and assurance standards for all engineering projects.',
      icon: <Shield className="w-6 h-6" />,
      link: '/services/quality-assurance',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Maintenance Services',
      description: 'Preventive and corrective maintenance services for operational continuity.',
      icon: <Wrench className="w-6 h-6" />,
      link: '/services/maintenance',
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
