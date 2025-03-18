
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClassName,
}: FeatureCardProps) => {
  return (
    <div className={cn('p-6 transition-all duration-300', className)}>
      <div className={cn('mb-5 text-primary', iconClassName)}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
