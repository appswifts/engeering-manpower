import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import { Users, Award, Briefcase, Wrench, Settings, Compass, Globe, Shield, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServicesPage = () => {
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
      image: '/placeholder.svg',
    },
    {
      title: 'Technical Training',
      description: 'Comprehensive training programs to develop technical expertise in your workforce.',
      icon: <Award className="w-6 h-6" />,
      link: '/services/technical-training',
      image: '/placeholder.svg',
    },
    {
      title: 'Consulting Services',
      description: 'Expert engineering consultation to optimize your processes and operations.',
      icon: <Briefcase className="w-6 h-6" />,
      link: '/services/consulting',
      image: '/placeholder.svg',
    },
    {
      title: 'Project Management',
      description: 'End-to-end management of complex engineering projects for optimal results.',
      icon: <Wrench className="w-6 h-6" />,
      link: '/services/project-management',
      image: '/placeholder.svg',
    },
    {
      title: 'Mechanical Engineering',
      description: 'Specialized mechanical engineering expertise for design and implementation.',
      icon: <Settings className="w-6 h-6" />,
      link: '/services/mechanical-engineering',
      image: '/placeholder.svg',
    },
    {
      title: 'Civil Engineering',
      description: 'Professional civil engineering services for construction and infrastructure projects.',
      icon: <Compass className="w-6 h-6" />,
      link: '/services/civil-engineering',
      image: '/placeholder.svg',
    },
    {
      title: 'Electrical Engineering',
      description: 'Comprehensive electrical engineering services from design to implementation.',
      icon: <Cpu className="w-6 h-6" />,
      link: '/services/electrical-engineering',
      image: '/placeholder.svg',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control and assurance standards for all engineering projects.',
      icon: <Shield className="w-6 h-6" />,
      link: '/services/quality-assurance',
      image: '/placeholder.svg',
    },
    {
      title: 'Maintenance Services',
      description: 'Preventive and corrective maintenance services for operational continuity.',
      icon: <Wrench className="w-6 h-6" />,
      link: '/services/maintenance',
      image: '/placeholder.svg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-secondary/90"></div>
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container-fluid relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Services
            </h1>
            <p className="text-white/80 text-lg">
              We provide comprehensive engineering services to meet your business needs with precision and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-fluid">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
            description="Our structured approach ensures consistent quality and results across all our service offerings."
          />
          
          <div className="relative mt-12">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {[
              {
                title: "Initial Consultation",
                description: "We begin by understanding your specific needs, challenges, and goals through a detailed consultation.",
                number: "01",
              },
              {
                title: "Assessment & Planning",
                description: "Our experts assess your requirements and develop a tailored plan to address your engineering needs.",
                number: "02",
              },
              {
                title: "Team Selection",
                description: "We match the right engineering professionals with your project based on skills and experience.",
                number: "03",
              },
              {
                title: "Implementation",
                description: "Our team executes the plan with precision, adhering to the highest quality standards.",
                number: "04",
              },
              {
                title: "Quality Assurance",
                description: "Rigorous quality checks ensure all deliverables meet or exceed industry standards.",
                number: "05",
              },
              {
                title: "Continuous Support",
                description: "We provide ongoing support and follow-up to ensure long-term success and satisfaction.",
                number: "06",
              },
            ].map((step, index) => (
              <div 
                key={index}
                className={cn(
                  "relative flex items-start mb-12 last:mb-0",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  isVisible && `transition-all duration-700 delay-${index * 150}`
                )}
              >
                <div className={cn(
                  "hidden md:flex w-1/2 justify-center",
                  index % 2 === 0 ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"
                )}>
                  <div className="relative">
                    <div className="absolute top-0 -mt-1 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                        {step.number.split('').pop()}
                      </div>
                    </div>
                    <div className={cn(
                      "bg-white rounded-lg shadow-lg p-8 max-w-md relative",
                      index % 2 === 0 ? "mr-5" : "ml-5"
                    )}>
                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Mobile view */}
                <div className="md:hidden flex items-start">
                  <div className="min-w-[40px] mr-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow">
                      {step.number.split('').pop()}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Contact our team to discuss your engineering needs and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 btn-lg"
              >
                Contact Us
              </Link>
              <Link
                to="/apply"
                className="btn bg-white/10 hover:bg-white/20 text-white btn-lg"
              >
                Apply to Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
