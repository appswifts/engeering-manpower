
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Briefcase, Tool, Hammer, Star, CheckCircle, ArrowUpRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import FeatureCard from '@/components/FeatureCard';
import { cn } from '@/lib/utils';

const HomePage = () => {
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
      icon: <Tool className="w-6 h-6" />,
      link: '/services/project-management',
      image: '/placeholder.svg',
    },
  ];

  const testimonials = [
    {
      content: "Engineering Manpower Provider has been an invaluable partner in providing skilled engineering talent for our construction projects. Their team consistently delivers high-quality professionals who understand our specific needs.",
      author: "Robert Johnson",
      position: "Project Director",
      company: "Construction Excellence Ltd",
    },
    {
      content: "Their technical training programs have significantly improved our team's capabilities. The customized curriculum and hands-on approach make a real difference in skill development.",
      author: "Sarah Williams",
      position: "HR Manager",
      company: "Global Engineering Solutions",
    },
    {
      content: "The consulting services provided by Engineering Manpower have transformed our operational efficiency. Their insights and recommendations were practical and delivered measurable results.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "Tech Innovations Inc",
    },
  ];

  const features = [
    {
      title: "Expertise",
      description: "Deep knowledge and experience in delivering premium engineering talent and services.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "Reliability",
      description: "Consistent delivery of dependable solutions that meet and exceed expectations.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "Customer Focus",
      description: "Dedicated to understanding and addressing the unique needs of each client.",
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80")' }}
        ></div>
        
        <div className="container-fluid relative z-20">
          <div className="max-w-3xl">
            <div className={cn(
              "transition-all duration-1000 transform",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <span className="inline-block px-4 py-1.5 bg-primary/90 text-white rounded-full text-sm font-medium mb-6 animate-pulse-slow">
                Engineering Manpower Provider
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Where Quality <span className="text-primary">Engineering</span> Talent Has a Name
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
                We offer a wide range of services including engineering staffing, technical training, consulting, and project management to help your business achieve excellence.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn btn-primary btn-lg group"
                >
                  Contact Us
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="btn bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white h-12 px-8 py-3 text-base group"
                >
                  Our Services
                  <ArrowUpRight size={16} className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  isVisible && `transition-all duration-700 delay-${index * 200}`
                )}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                WHO WE ARE
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Experience engineering excellence done right.
              </h2>
              
              <p className="text-gray-600 mb-6">
                Since 1995, Engineering Manpower Provider has established a premier reputation for excellence in technical services. Our expertise spans the provision of skilled engineering talent, technical training, consulting services, and project management.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Committed to using the highest quality resources and delivering outstanding results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Delivering excellence in every aspect of our engineering services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>Pioneering superior technical solutions with a proven track record</span>
                </li>
              </ul>
              
              <Link to="/about" className="btn btn-primary px-8 py-3">
                More About Us
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" 
                  alt="Engineering team" 
                  className="object-cover w-full h-full"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg py-4 px-6 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Hammer className="text-primary" size={20} />
                  <span className="font-bold">Years of Experience</span>
                </div>
                <div className="text-3xl font-bold text-primary flex items-baseline">
                  29<span className="text-2xl ml-1">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="container-fluid relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Engineering Capabilities?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Partner with Engineering Manpower Provider for access to top talent, expert training, and comprehensive solutions.
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

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-fluid">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Discover how we've helped organizations achieve their engineering goals through our comprehensive services."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                className={cn(
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  isVisible && `transition-all duration-700 delay-${index * 200}`
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-fluid">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Get In Touch
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Discuss Your Engineering Needs
              </h2>
              
              <p className="text-gray-600 mb-8">
                Reach out to our team of experts to learn how we can support your business with top engineering talent and comprehensive services.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="bg-white rounded-full h-14 w-14 flex items-center justify-center shadow-md mr-4">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us anytime</p>
                  <a href="tel:+250788300594" className="text-lg font-semibold hover:text-primary transition-colors">
                    +250 788 300 594
                  </a>
                </div>
              </div>
              
              <Link to="/contact" className="btn btn-primary px-8 py-3">
                Contact Us
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white rounded-lg py-2 px-4 text-sm font-semibold">
                Quick Inquiry
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="Engineering Staffing">Engineering Staffing</option>
                    <option value="Technical Training">Technical Training</option>
                    <option value="Consulting Services">Consulting Services</option>
                    <option value="Project Management">Project Management</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full py-3"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
