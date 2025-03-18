
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionTitle from '@/components/SectionTitle';

const ProcessTimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We begin by understanding your specific needs, challenges, and goals through a detailed consultation.",
      number: "01",
    },
    {
      title: "Assessment & Planning",
      description: "Our experts assess your requirements and develop a tailored plan to address your engineering needs.",
      number: "02",
    },
    {
      title: "Team Selection",
      description: "We match the right engineering professionals with your project based on skills and experience.",
      number: "03",
    },
    {
      title: "Implementation",
      description: "Our team executes the plan with precision, adhering to the highest quality standards.",
      number: "04",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality checks ensure all deliverables meet or exceed industry standards.",
      number: "05",
    },
    {
      title: "Continuous Support",
      description: "We provide ongoing support and follow-up to ensure long-term success and satisfaction.",
      number: "06",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-fluid">
        <SectionTitle
          subtitle="Our Process"
          title="How We Work"
          description="Our structured approach ensures consistent quality and results across all our service offerings."
        />
        
        <div className="relative mt-12">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "relative flex items-start mb-12 last:mb-0",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isVisible && `transition-all duration-700 delay-${index * 150}`
              )}
            >
              <div className={cn(
                "hidden md:flex w-1/2 justify-center",
                index % 2 === 0 ? "md:justify-end md:pr-10" : "md:justify-start md:pl-10"
              )}>
                <div className="relative">
                  <div className="absolute top-0 -mt-1 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                      {step.number.split('').pop()}
                    </div>
                  </div>
                  <div className={cn(
                    "bg-white rounded-lg shadow-lg p-8 max-w-md relative",
                    index % 2 === 0 ? "mr-5" : "ml-5"
                  )}>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Mobile view */}
              <div className="md:hidden flex items-start">
                <div className="min-w-[40px] mr-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow">
                    {step.number.split('').pop()}
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimelineSection;
