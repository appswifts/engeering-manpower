
import { useState, useEffect } from 'react';
import { Star, CheckCircle, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import FeatureCard from '@/components/FeatureCard';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const features = [
    {
      title: "Expertise",
      description: "Deep knowledge and experience in delivering premium engineering talent and services.",
      icon: <Star className="w-8 h-8" />,
    },
    {
      title: "Reliability",
      description: "Consistent delivery of dependable solutions that meet and exceed expectations.",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "Customer Focus",
      description: "Dedicated to understanding and addressing the unique needs of each client.",
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={cn(
                "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isVisible && `transition-all duration-700 delay-${index * 200}`
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
