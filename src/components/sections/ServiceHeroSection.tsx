
import { Link } from 'react-router-dom';

const ServiceHeroSection = () => {
  return (
    <section className="relative py-24 bg-secondary">
      <div className="absolute inset-0 bg-secondary/90"></div>
      <div className="absolute inset-0 opacity-20 bg-cover bg-center bg-gray-800"></div>
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container-fluid relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Engineering Services
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-2xl">
            We provide comprehensive engineering services to meet your business needs with precision and expertise.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </Link>
            <a 
              href="#service-list" 
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-white/20 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
