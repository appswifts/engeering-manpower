
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      content: "Engineering Manpower Provider has been an invaluable partner in providing skilled engineering talent for our construction projects. Their team consistently delivers high-quality professionals who understand our specific needs.",
      author: "Andrew Sebera",
      position: "Enterpreneur",
      company: "Construction Company",
    },
    {
      content: "Their technical training programs have significantly improved our team's capabilities. The customized curriculum and hands-on approach make a real difference in skill development.",
      author: "Gustave Bahati",
      position: "logistic manager",
      company: "HCR DRC / GOMA",
    },
    {
      content: "The consulting services provided by Engineering Manpower have transformed our operational efficiency. Their insights and recommendations were practical and delivered measurable results.",
      author: "Patient Nyamwasa",
      position: "Security Officer",
      company: "Skol brewering LTD",
    },
  ];

  return (
    <section className="py-20">
      <div className="container-fluid">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Discover how we've helped organizations achieve their engineering goals through our comprehensive services."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              position={testimonial.position}
              company={testimonial.company}
              className={cn(
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

export default TestimonialsSection;
