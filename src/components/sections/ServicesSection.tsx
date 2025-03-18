
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Briefcase, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection = () => {
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
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Technical Training',
      description: 'Comprehensive training programs to develop technical expertise in your workforce.',
      icon: <Award className="w-6 h-6" />,
      link: '/services/technical-training',
      image: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Consulting Services',
      description: 'Expert engineering consultation to optimize your processes and operations.',
      icon: <Briefcase className="w-6 h-6" />,
      link: '/services/consulting',
      image: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Project Management',
      description: 'End-to-end management of complex engineering projects for optimal results.',
      icon: <Wrench className="w-6 h-6" />,
      link: '/services/project-management',
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
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
          ))}
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
