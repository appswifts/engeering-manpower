import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Briefcase, Clock, Globe, Shield, Target, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import FeatureCard from '@/components/FeatureCard';
import TeamSection from '@/components/sections/TeamSection';
import { cn } from '@/lib/utils';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Key partnerships with leading brands",
      description: "We maintain strategic partnerships with industry leaders to deliver premium solutions.",
      icon: <Globe size={32} className="text-primary" />,
    },
    {
      title: "Focus on highest quality products & services",
      description: "We're committed to excellence in every aspect of our engineering services.",
      icon: <Target size={32} className="text-primary" />,
    },
    {
      title: "Experienced & highly skilled technical team",
      description: "Our engineers bring decades of combined experience across diverse industries.",
      icon: <Users size={32} className="text-primary" />,
    },
    {
      title: "Strong local reputation & network",
      description: "We've built trusted relationships throughout the engineering community.",
      icon: <Briefcase size={32} className="text-primary" />,
    },
    {
      title: "3+ years of technical experience",
      description: "Our long history has equipped us with unparalleled expertise in the field.",
      icon: <Clock size={32} className="text-primary" />,
    },
    {
      title: "Industry-leading quality assurance",
      description: "We maintain rigorous standards to ensure consistent excellence in delivery.",
      icon: <Shield size={32} className="text-primary" />,
    },
  ];

  const milestones = [
    { year: 1995, title: "Company founded", description: "Established with a mission to provide premium engineering talent." },
    { year: 2000, title: "Expanded services", description: "Added technical training to our service offerings." },
    { year: 2005, title: "International partnerships", description: "Formed strategic alliances with global engineering firms." },
    { year: 2010, title: "Training center launch", description: "Opened state-of-the-art technical training facility." },
    { year: 2015, title: "Digital transformation", description: "Embraced technology to enhance service delivery." },
    { year: 2020, title: "Sustainability initiative", description: "Implemented green practices across all operations." },
    { year: 2023, title: "Innovation lab", description: "Launched R&D division to pioneer new engineering approaches." },
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
              About Us
            </h1>
            <p className="text-white/80 text-lg">
              We are a team of qualified experts delivering reliable and efficient engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={cn(
              "bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              isVisible && "transition-all duration-700"
            )}>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
              We provide exceptional engineering talent and services that empower organizations to achieve operational excellence, innovation, and sustainability. Our commitment extends beyond technical expertise—we prioritize environmental responsibility and uphold the highest standards of occupational safety and health in every engagement.
              </p>
              <ul className="space-y-3">
              <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Drive environmental sustainability through responsible engineering practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Deliver top engineering talent for diverse industry needs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Provide technical training that builds capable workforces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Offer consulting that drives measurable improvements</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Integrate safety and health standards into every project</span>
                </li>
              </ul>
            </div>
            
            <div className={cn(
              "bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              isVisible && "transition-all duration-700 delay-200"
            )}>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 mb-6">
              To be a globally recognized leader in engineering talent and solutions—known for advancing operational excellence, driving innovation, and championing sustainable practices. We envision transforming how organizations access engineering expertise, while upholding the highest standards of environmental stewardship and occupational safety.
              </p>
              <ul className="space-y-3">
              <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Lead in promoting environmentally sustainable engineering practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Be the first choice for engineering talent acquisition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Set industry standards for technical training and development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Pioneer innovative engineering solutions and approaches</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>Champion occupational safety and health across all operations</span>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png" 
                  alt="Our team" 
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Users className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Happy Clients</p>
                      <p className="text-2xl font-bold">180<span className="text-primary">+</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We pride ourselves on expert engineering, quality, sustainability, and safety.
              </h2>
              
              <p className="text-gray-600 mb-6">
              Since its inception, Engineering Manpower Provider has built a premier reputation for excellence in delivering engineering talent and technical services. Our commitment to quality and precision has made us a trusted partner for organizations seeking top-tier engineering expertise.
              </p>
              
              <p className="text-gray-600 mb-8">
              We maintain strong partnerships with world-class manufacturers and agencies, ensuring access to cutting-edge expertise, unmatched efficiency, and quality service. More than 75% of our resources are dedicated to technical support and after-sales service, with teams of highly qualified engineers and specialized technicians ready to meet your needs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">3+</span>
                  </div>
                  <span className="font-medium">Years of Experience</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">180+</span>
                  </div>
                  <span className="font-medium">Happy Clients</span>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-primary px-8 py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Specialties Section */}
      <section className="py-20">
        <div className="container-fluid">
          <SectionTitle
            subtitle="Our Specialties"
            title="What Makes Us Different"
            description="Our unique approach and specialized expertise set us apart in the engineering services industry."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className={cn(
                  "bg-white rounded-xl shadow-md hover:shadow-lg p-8",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  isVisible && `transition-all duration-700 delay-${index * 100}`
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-fluid">
          <SectionTitle
            subtitle="Our Journey"
            title="Our History"
            description="Since 2022, we've been on a mission to provide exceptional engineering talent and services."
          />
          
          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={cn(
                  "relative mb-12 last:mb-0",
                  isVisible ? "opacity-100" : "opacity-0",
                  isVisible && `transition-all duration-700 delay-${index * 150}`
                )}
              >
                <div className={cn(
                  "flex items-center mb-2",
                  index % 2 === 0 ? "justify-start md:justify-end md:pr-10" : "justify-start md:pl-10 md:ml-auto"
                )}>
                  <div className={cn(
                    "absolute top-0 left-1/2 transform -translate-x-1/2 z-10",
                    index % 2 === 0 ? "md:-translate-x-5" : "md:translate-x-4"
                  )}>
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                      {milestone.year.toString().substring(2)}
                    </div>
                  </div>
                  
                  <div className={cn(
                    "md:w-1/2 bg-white rounded-lg shadow p-6 relative",
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  )}>
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Why Choose Us
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Experience engineering excellence done right
              </h2>
              
              <p className="text-gray-600 mb-6">
                Engineering Manpower Provider is your trusted partner for all your engineering talent and service needs. We combine technical expertise with a deep understanding of industry requirements to deliver solutions that drive results.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Permanent support for maintenance planning and supply of resources</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Teams of technicians dedicated to your operating sites</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Resources on site in accordance with service contract requirements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Monitoring and management of your engineering workforce</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Comprehensive planning of interventions and resource allocation</span>
                </li>
              </ul>
              
              <Link to="/services" className="btn btn-primary px-8 py-3 flex items-center">
                Explore Our Services
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="/lovable-uploads/2bf25f7e-4a91-4582-a46c-b1724201c781.png" 
                alt="Engineering expertise" 
                className="rounded-xl shadow-xl"
              />
            </div>
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
              Ready to Partner with Engineering Experts?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Contact us today to discuss how we can support your engineering needs with our specialized talent and services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn bg-white text-primary hover:bg-gray-100 btn-lg"
              >
                Contact Us
              </Link>
              <Link
                to="/services"
                className="btn bg-white/10 hover:bg-white/20 text-white btn-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
