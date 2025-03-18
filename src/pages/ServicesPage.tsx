
import ServiceHeroSection from '@/components/sections/ServiceHeroSection';
import ServiceListSection from '@/components/sections/ServiceListSection';
import ProcessTimelineSection from '@/components/sections/ProcessTimelineSection';
import CTASection from '@/components/sections/CTASection';
import { useLocation } from 'react-router-dom';

const ServicesPage = () => {
  const location = useLocation();
  const isMainServicesPage = location.pathname === '/services';

  return (
    <div>
      <ServiceHeroSection />
      {isMainServicesPage && <ServiceListSection />}
      <ProcessTimelineSection />
      <CTASection />
    </div>
  );
};

export default ServicesPage;
