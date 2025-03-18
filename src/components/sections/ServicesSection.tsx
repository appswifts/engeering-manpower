
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Briefcase, 
  Wrench, 
  Zap, 
  Building, 
  GraduationCap, 
  Shield 
} from 'lucide-react';
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
    {
      title: 'Electrical Installation',
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
