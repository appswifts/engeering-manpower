
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-secondary/90"></div>
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container-fluid relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 text-lg">
              Get in touch with our team to discuss your engineering talent needs and how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-600 mb-4">
                123 Engineering Boulevard<br />
                Kigali, Rwanda
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary-600 transition-colors"
              >
                View on Map
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Details</h3>
              <p className="text-gray-600 mb-4">
                Phone: +250 788 881 370<br />
                Email: engineeringmanpowerprovidersltd@gmail.com
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:+250788881370"
                  className="text-primary font-medium hover:text-primary-600 transition-colors"
                >
                  Call Us
                </a>
                <a
                  href="mailto:engineeringmanpowerprovidersltd@gmail.com"
                  className="text-primary font-medium hover:text-primary-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600 mb-4">
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
              <p className="text-primary font-medium">
                Available 24/7 for Emergencies
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <SectionTitle
                subtitle="Get In Touch"
                title="Send Us a Message"
                description="Fill out the form below and our team will get back to you as soon as possible."
                align="left"
                className="mb-8"
              />
              
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-8">
                <h3 className="text-xl font-bold mb-4">Our Departments</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Engineering Staffing</h4>
                    <p className="text-gray-600 mb-1">engineeringmanpowerprovidersltd@gmail.com</p>
                    <p className="text-gray-600">+250 788 409 258</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Technical Training</h4>
                    <p className="text-gray-600 mb-1">engineeringmanpowerprovidersltd@gmail.com</p>
                    <p className="text-gray-600">+250 788 409 258</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Consulting Services</h4>
                    <p className="text-gray-600 mb-1">engineeringmanpowerprovidersltd@gmail.com</p>
                    <p className="text-gray-600">+250 788 409 258</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">How quickly can you provide engineering staff?</h4>
                    <p className="text-gray-600">
                      Depending on your requirements, we can typically provide qualified engineering personnel within 1-2 weeks.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Do you offer customized training programs?</h4>
                    <p className="text-gray-600">
                      Yes, we design tailored training programs based on your specific industry requirements and skill gaps.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">What industries do you serve?</h4>
                    <p className="text-gray-600">
                      We provide engineering talent and services across construction, manufacturing, energy, infrastructure, and technology sectors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container-fluid">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853737537!2d30.03955995!3d-1.9441685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca42f44c14ae5%3A0xdf021fabf17c7b45!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1654789542743!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Engineering Manpower Provider Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
