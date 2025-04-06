
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Zap, Wrench, Building, GraduationCap, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
    // Close dropdowns when route changes
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        {
          name: 'Electrical Installation and Industrial Maintenance',
          path: '/services/electrical-installation',
          icon: <Zap size={16} className="mr-2" />
        },
        {
          name: 'Mechatronics and General Mechanics',
          path: '/services/mechatronics',
          icon: <Wrench size={16} className="mr-2" />
        },
        {
          name: 'Civil Works',
          path: '/services/civil-works',
          icon: <Building size={16} className="mr-2" />
        },
        {
          name: 'Refreshment of Technical Skills and Internship',
          path: '/services/training-internship',
          icon: <GraduationCap size={16} className="mr-2" />
        },
        {
          name: 'Environmental & OSH Consultancy',
          path: '/services/environmental-osh-consultancy',
          icon: <Shield size={16} className="mr-2" />
        }
      ]
    },
    { name: 'Apply Now', path: '/apply' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-2 bg-white shadow-md"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container-fluid">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div onClick={() => setIsOpen(false)}>
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={cn(
                      "flex items-center transition-colors",
                      location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    )}
                  >
                    {link.name}
                    <ChevronDown size={16} className={cn(
                      "ml-1 transition-transform",
                      activeDropdown === link.name ? "rotate-180" : ""
                    )} />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "transition-colors subtle-underline",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div
                    className={cn(
                      "absolute left-0 mt-2 w-64 py-2 bg-white rounded-md shadow-lg z-10 transition-all duration-300 transform origin-top",
                      activeDropdown === link.name
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    )}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary",
                          location.pathname === item.path ? "bg-gray-100 text-primary" : ""
                        )}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+250788409258"
              className="flex items-center text-secondary hover:text-primary transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span className="font-medium">+250 788 409 258</span>
            </a>
            <Link
              to="/contact"
              className="btn btn-primary rounded-full px-6 py-2"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transition-all duration-300 ease-in-out transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2 border-b border-gray-100">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(link.name)}
                      className={cn(
                        "flex items-center justify-between w-full transition-colors",
                        location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={16} className={cn(
                        "transition-transform duration-200",
                        activeDropdown === link.name ? "rotate-180" : ""
                      )} />
                    </button>

                    <div
                      className={cn(
                        "mt-2 pl-4 space-y-2 transition-all duration-200",
                        activeDropdown === link.name ? "block" : "hidden"
                      )}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={cn(
                            "flex items-center py-2 hover:text-primary",
                            location.pathname === item.path
                              ? "text-primary"
                              : "text-gray-600"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "block transition-colors",
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6 mt-6 border-t border-gray-100">
              <a
                href="tel:+250788881370"
                className="flex items-center text-secondary hover:text-primary transition-colors"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">+250 788 409 258</span>
              </a>

              <Link
                to="/contact"
                className="btn btn-primary w-full mt-4 py-3 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
