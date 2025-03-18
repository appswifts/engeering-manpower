
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
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
                <PhoneCall className="text-primary" />
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
  );
};

export default ContactSection;
