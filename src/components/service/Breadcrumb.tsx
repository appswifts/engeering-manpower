
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  serviceTitle: string;
  subtypeTitle?: string;
}

const Breadcrumb = ({ serviceTitle, subtypeTitle }: BreadcrumbProps) => {
  return (
    <div className="container-fluid mb-6">
      <div className="flex items-center text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to="/services" className="hover:text-primary">Services</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium">
          {subtypeTitle ? `${serviceTitle} - ${subtypeTitle}` : serviceTitle}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
