
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  icon?: ReactNode;
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  className,
  subtitleClassName,
  titleClassName,
  descriptionClassName,
  icon,
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      {subtitle && (
        <div className="flex items-center justify-center mb-4">
          <span 
            className={cn(
              'inline-flex items-center px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full',
              subtitleClassName
            )}
          >
            {icon && <span className="mr-1.5">{icon}</span>}
            {subtitle}
          </span>
        </div>
      )}
      <h2 
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight',
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p 
          className={cn(
            'text-gray-600 max-w-3xl mx-auto',
            align === 'left' && 'ml-0',
            align === 'right' && 'mr-0',
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
