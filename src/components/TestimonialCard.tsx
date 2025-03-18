
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  content: string;
  author: string;
  position?: string;
  company?: string;
  avatar?: string;
  className?: string;
}

const TestimonialCard = ({
  content,
  author,
  position,
  company,
  avatar,
  className,
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        'p-6 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-lg',
        className
      )}
    >
      <Quote size={32} className="text-primary/30 mb-4" />
      
      <p className="text-gray-700 italic mb-6">{content}</p>
      
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <span className="text-primary font-bold text-lg">
              {author.split(' ').map(word => word[0]).join('')}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          {(position || company) && (
            <p className="text-sm text-gray-500">
              {position}{position && company && ', '}{company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
