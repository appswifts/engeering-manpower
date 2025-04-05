
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // All shared images for the slideshow
  const backgroundImages = [
    "/lovable-uploads/922530ef-229a-4775-916b-797d76e599ef.png",
    "/lovable-uploads/ff6ffdf7-2f2b-4eea-bb43-9dead7285c1d.png",
    "/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png",
    "/lovable-uploads/67d1b2fa-e641-4d49-8315-7c3e003aefa8.png",
    "/lovable-uploads/7c7e026e-6bdd-4da5-96ee-84bac4f9ad7d.png",
    "/lovable-uploads/bdd801d0-4496-4a53-8b0f-d769174005d6.png",
    "/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png",
    "/lovable-uploads/2bf25f7e-4a91-4582-a46c-b1724201c781.png",
    "/lovable-uploads/6f06861d-83ea-4078-982e-b43f06f9461e.png",
    "/lovable-uploads/1e05c867-79ad-4163-b0df-35c25dd53a6d.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Set up the image slideshow
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70 z-10"></div>
      
      {/* Background images with fade transition */}
      {backgroundImages.map((image, index) => (
        <div 
          key={index}
          className={cn(
            "absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000",
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      ))}
      
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
