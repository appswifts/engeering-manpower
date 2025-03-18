
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container-fluid relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Engineering Capabilities?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Partner with Engineering Manpower Provider for access to top talent, expert training, and comprehensive solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn bg-white text-primary hover:bg-gray-100 btn-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/apply"
              className="btn bg-white/10 hover:bg-white/20 text-white btn-lg"
            >
              Apply to Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
