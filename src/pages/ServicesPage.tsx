
import ServiceHeroSection from '@/components/sections/ServiceHeroSection';
import ServiceListSection from '@/components/sections/ServiceListSection';
import ProcessTimelineSection from '@/components/sections/ProcessTimelineSection';
import CTASection from '@/components/sections/CTASection';

const ServicesPage = () => {
  return (
    <div>
      <ServiceHeroSection />
      <ServiceListSection />
      <ProcessTimelineSection />
      <CTASection />
    </div>
  );
};

export default ServicesPage;
