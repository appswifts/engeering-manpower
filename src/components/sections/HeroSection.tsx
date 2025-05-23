
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Single hero background image
  const heroImage = "/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 z-10"></div>

      {/* Single background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url("${heroImage}")` }}
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
            <span className="text-primary">Engineering</span> Clean Energy for a Greener <span className="text-primary">Tomorrow</span>
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
  );
};

export default HeroSection;
