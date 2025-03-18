
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  link: string;
  className?: string;
  variant?: 'default' | 'featured' | 'simple';
}

const ServiceCard = ({
  title,
  description,
  icon,
  image,
  link,
  className,
  variant = 'default',
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        'group rounded-xl overflow-hidden transition-all duration-300',
        variant === 'default' && 'bg-white shadow-md hover:shadow-xl',
        variant === 'featured' && 'bg-white shadow-lg hover:shadow-xl border-t-4 border-primary',
        variant === 'simple' && 'bg-white/50 hover:bg-white shadow-sm hover:shadow',
        className
      )}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {icon && (
            <div className="absolute top-4 right-4 bg-primary/90 text-white p-3 rounded-full">
              {icon}
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        {!image && icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        
        <Link 
          to={link} 
          className="inline-flex items-center text-primary font-medium hover:text-primary-600 transition-colors group-hover:translate-x-1 duration-300"
        >
          Service Details
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
