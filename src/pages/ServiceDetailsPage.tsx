
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getServiceBySlug } from '@/services/serviceData';
import CTASection from '@/components/sections/CTASection';
import Breadcrumb from '@/components/service/Breadcrumb';
import ServiceHeroCarousel from '@/components/service/ServiceHeroCarousel';
import ServiceSidebar from '@/components/service/ServiceSidebar';
import ServiceMainContent from '@/components/service/ServiceMainContent';

const ServiceDetailsPage = () => {
  const { serviceSlug, subtype } = useParams();
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const service = getServiceBySlug(serviceSlug);
  
  // If service not found, redirect to services page
  useEffect(() => {
    if (!service) {
      navigate('/services');
      return;
    }
    
    // Preload the carousel images for better performance
    const preloadImages = () => {
      const carouselImages = [
        "/lovable-uploads/922530ef-229a-4775-916b-797d76e599ef.png",
        "/lovable-uploads/ff6ffdf7-2f2b-4eea-bb43-9dead7285c1d.png",
        "/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png",
        "/lovable-uploads/67d1b2fa-e641-4d49-8315-7c3e003aefa8.png",
        "/lovable-uploads/7c7e026e-6bdd-4da5-96ee-84bac4f9ad7d.png",
        "/lovable-uploads/bdd801d0-4496-4a53-8b0f-d769174005d6.png",
        "/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png",
        "/lovable-uploads/2bf25f7e-4a91-4582-a46c-b1724201c781.png",
        "/lovable-uploads/6f06861d-83ea-4078-982e-b43f06f9461e.png",
      ];

      // Preload all carousel images
      const imagePromises = carouselImages.map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      // When all images are loaded, update state
      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch(err => console.error("Error preloading images:", err));
    };
    
    preloadImages();
  }, [service, navigate]);

  if (!service) return null;

  // Find subtype if specified
  const subtypeContent = subtype && service.subtypes 
    ? service.subtypes.find(st => st.slug === subtype) 
    : null;

  return (
    <div className="pt-24 pb-20">
      {/* Breadcrumb navigation */}
      <Breadcrumb 
        serviceTitle={service.title} 
        subtypeTitle={subtypeContent?.title} 
      />
      
      {/* Hero section with carousel */}
      <ServiceHeroCarousel 
        serviceTitle={service.title}
        serviceDescription={service.description}
        subtypeTitle={subtypeContent?.title}
        subtypeDescription={subtypeContent?.short_description}
      />
      
      {/* Service content */}
      <div className="container-fluid">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Sidebar */}
          <ServiceSidebar 
            service={service} 
            currentSubtype={subtypeContent} 
            serviceSlug={serviceSlug || ''}
          />
          
          {/* Main content */}
          <ServiceMainContent 
            title={subtypeContent ? subtypeContent.title : service.title}
            content={subtypeContent ? subtypeContent.content : service.content}
            offerings={subtypeContent?.offerings || service.offerings}
          />
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-20">
        <CTASection />
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
