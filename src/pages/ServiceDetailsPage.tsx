
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getServiceBySlug } from '@/services/serviceData';
import SectionTitle from '@/components/SectionTitle';
import { ArrowLeft, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '@/components/sections/CTASection';

const ServiceDetailsPage = () => {
  const { serviceSlug, subtype } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(serviceSlug);
  
  // If service not found, redirect to services page
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  // Find subtype if specified
  const subtypeContent = subtype && service.subtypes 
    ? service.subtypes.find(st => st.slug === subtype) 
    : null;

  return (
    <div className="pt-24 pb-20">
      {/* Back navigation */}
      <div className="container-fluid mb-8">
        <Link to="/services" className="inline-flex items-center text-primary hover:underline font-medium">
          <ArrowLeft size={16} className="mr-2" />
          Back to All Services
        </Link>
      </div>
      
      {/* Service header */}
      <div className="bg-gray-50 py-12 mb-12">
        <div className="container-fluid">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionTitle
                subtitle="Our Services"
                title={subtypeContent ? subtypeContent.title : service.title}
                description={subtypeContent ? subtypeContent.short_description : service.description}
                alignment="left"
              />
              
              <Link to="/contact" className="btn btn-primary mt-6 inline-flex items-center">
                Get a Quote
                <Phone size={16} className="ml-2" />
              </Link>
            </div>
            
            <div>
              <img 
                src={subtypeContent?.image || service.image} 
                alt={subtypeContent?.title || service.title} 
                className="rounded-lg shadow-md w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Service content */}
      <div className="container-fluid">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Service sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-lg font-bold mb-4">Service Categories</h3>
              <ul className="space-y-2">
                {service.subtypes?.map((subtype) => (
                  <li key={subtype.slug}>
                    <Link 
                      to={`/services/${serviceSlug}/${subtype.slug}`}
                      className={`block p-2 hover:bg-gray-100 rounded ${
                        subtype.slug === subtypeContent?.slug ? 'bg-gray-100 text-primary font-medium' : ''
                      }`}
                    >
                      {subtype.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">Other Services</h3>
                <ul className="space-y-2">
                  {getServiceBySlug('electrical-installation')?.title !== service.title && (
                    <li>
                      <Link to="/services/electrical-installation" className="block p-2 hover:bg-gray-100 rounded">
                        Electrical Installation & Maintenance
                      </Link>
                    </li>
                  )}
                  {getServiceBySlug('mechatronics')?.title !== service.title && (
                    <li>
                      <Link to="/services/mechatronics" className="block p-2 hover:bg-gray-100 rounded">
                        Mechatronics
                      </Link>
                    </li>
                  )}
                  {getServiceBySlug('civil-works')?.title !== service.title && (
                    <li>
                      <Link to="/services/civil-works" className="block p-2 hover:bg-gray-100 rounded">
                        Civil Works
                      </Link>
                    </li>
                  )}
                  {getServiceBySlug('training-internship')?.title !== service.title && (
                    <li>
                      <Link to="/services/training-internship" className="block p-2 hover:bg-gray-100 rounded">
                        Training & Internship
                      </Link>
                    </li>
                  )}
                  {getServiceBySlug('environmental-osh-consultancy')?.title !== service.title && (
                    <li>
                      <Link to="/services/environmental-osh-consultancy" className="block p-2 hover:bg-gray-100 rounded">
                        Environmental & OSH Consultancy
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main service details */}
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <h2>{subtypeContent ? subtypeContent.title : service.title}</h2>
              
              <div className="mt-6 mb-8">
                {subtypeContent ? (
                  <div dangerouslySetInnerHTML={{ __html: subtypeContent.content }} />
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: service.content }} />
                )}
              </div>
              
              {/* Service offerings list */}
              {(subtypeContent?.offerings || service.offerings) && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Our {subtypeContent ? subtypeContent.title : service.title} Services Include:</h3>
                  <ul className="space-y-2 list-disc pl-6">
                    {(subtypeContent?.offerings || service.offerings)?.map((offering, index) => (
                      <li key={index} className="text-gray-700">{offering}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <CTASection />
    </div>
  );
};

export default ServiceDetailsPage;
