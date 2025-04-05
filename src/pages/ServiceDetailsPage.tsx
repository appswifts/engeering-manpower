
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
        serviceSlug={serviceSlug}
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
