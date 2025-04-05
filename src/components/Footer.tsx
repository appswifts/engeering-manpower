import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const [isScrolled] = useState(false); // Shared state with Header for consistency
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo */}
          <div className="space-y-6">
            <Logo className="mb-4" />
            <p className="text-gray-300 max-w-xs">
              Providing high-quality engineering talent and technical solutions since 2022.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2.5 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2.5 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2.5 rounded-full">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-primary transition-colors p-2.5 rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/engineering-staffing" className="text-gray-300 hover:text-primary transition-colors">
                  Engineering Staffing
                </Link>
              </li>
              <li>
                <Link to="/services/technical-training" className="text-gray-300 hover:text-primary transition-colors">
                  Technical Training
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-gray-300 hover:text-primary transition-colors">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/services/project-management" className="text-gray-300 hover:text-primary transition-colors">
                  Project Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Information</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/apply" className="text-gray-300 hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-gray-300">+250 788 409 258</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-gray-300">info@engineeringmanpowerprovidersltd.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary" />
                <span className="text-gray-300">Industry Zone Gahanga,Kicukiro, Kigali   </span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-primary hover:bg-primary-600 transition-colors px-6 py-3 rounded-md font-medium"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Engineering Manpower Provider. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
