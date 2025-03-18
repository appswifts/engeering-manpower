
import { Link } from 'react-router-dom';
import { CheckCircle, Hammer } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              WHO WE ARE
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Experience engineering excellence done right.
            </h2>
            
            <p className="text-gray-600 mb-6">
              Since 1995, Engineering Manpower Provider has established a premier reputation for excellence in technical services. Our expertise spans the provision of skilled engineering talent, technical training, consulting services, and project management.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Committed to using the highest quality resources and delivering outstanding results</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Delivering excellence in every aspect of our engineering services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Pioneering superior technical solutions with a proven track record</span>
              </li>
            </ul>
            
            <Link to="/about" className="btn btn-primary px-8 py-3">
              More About Us
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-xl">
              <img 
                alt="Engineering team" 
                className="object-cover w-full h-full" 
                src="/lovable-uploads/922530ef-229a-4775-916b-797d76e599ef.png" 
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg py-4 px-6 max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <Hammer className="text-primary" size={20} />
                <span className="font-bold">Years of Experience</span>
              </div>
              <div className="text-3xl font-bold text-primary flex items-baseline">
                29<span className="text-2xl ml-1">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
