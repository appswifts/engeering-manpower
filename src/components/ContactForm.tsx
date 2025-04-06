
import { useState } from 'react';
import { Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Simulate loading state
    setTimeout(() => {
      setLoading(false);
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/250788409258?text=${whatsappMessage}`, '_blank');
      
      // Show success toast
      toast({
        title: "Form Submitted",
        description: "You'll be redirected to WhatsApp to complete your message.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Your name"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Your email"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            placeholder="Your phone number"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          >
            <option value="">Select subject</option>
            <option value="Engineering Staffing">Engineering Staffing</option>
            <option value="Technical Training">Technical Training</option>
            <option value="Consulting Services">Consulting Services</option>
            <option value="Project Management">Project Management</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
          placeholder="Your message"
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto btn btn-primary btn-lg flex items-center justify-center gap-2"
      >
        {loading ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          <span className="flex items-center">
            Send Message via WhatsApp
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
              <path d="M12 0a12 12 0 0 0-12 12 12 12 0 0 0 1.754 6.082l-1.488 4.46a.715.715 0 0 0 .172.738.717.717 0 0 0 .738.172l4.454-1.486a12.059 12.059 0 0 0 6.387 1.834 12 12 0 0 0 0-24zm5.221 17.124a3.385 3.385 0 0 1-2.34 1.091c-.621 0-1.275-.163-2.136-.5-1.108-.438-2.281-1.151-3.234-2.103-.953-.953-1.666-2.126-2.103-3.233-.339-.864-.5-1.516-.5-2.137 0-.906.364-1.736 1.091-2.339l.672-.672a.685.685 0 0 1 .969 0l1.344 1.342a.685.685 0 0 1 0 .969l-.672.671a.717.717 0 0 0-.079.89 14.693 14.693 0 0 0 2.294 2.294c.261.195.64.163.89-.079l.671-.672a.686.686 0 0 1 .969 0l1.344 1.345a.685.685 0 0 1 0 .969z"/>
            </svg>
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
