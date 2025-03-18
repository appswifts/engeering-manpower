
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  // Function to handle WhatsApp redirect with form data
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const name = (document.getElementById('name') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const subject = (document.getElementById('subject') as HTMLSelectElement)?.value;
    const message = (document.getElementById('message') as HTMLTextAreaElement)?.value;
    
    const whatsappMessage = `*New Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    window.open(`https://wa.me/250788881370?text=${whatsappMessage}`, '_blank');
  };

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
                <a href="tel:+250788409258" className="text-lg font-semibold hover:text-primary transition-colors">
                  +250 788 409 258
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
            
            <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
                  required
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
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full py-3 flex items-center justify-center gap-2"
              >
                Submit Inquiry via WhatsApp
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-12 12 12 12 0 0 0 1.754 6.082l-1.488 4.46a.715.715 0 0 0 .172.738.717.717 0 0 0 .738.172l4.454-1.486a12.059 12.059 0 0 0 6.387 1.834 12 12 0 0 0 0-24zm5.221 17.124a3.385 3.385 0 0 1-2.34 1.091c-.621 0-1.275-.163-2.136-.5-1.108-.438-2.281-1.151-3.234-2.103-.953-.953-1.666-2.126-2.103-3.233-.339-.864-.5-1.516-.5-2.137 0-.906.364-1.736 1.091-2.339l.672-.672a.685.685 0 0 1 .969 0l1.344 1.342a.685.685 0 0 1 0 .969l-.672.671a.717.717 0 0 0-.079.89 14.693 14.693 0 0 0 2.294 2.294c.261.195.64.163.89-.079l.671-.672a.686.686 0 0 1 .969 0l1.344 1.345a.685.685 0 0 1 0 .969z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
