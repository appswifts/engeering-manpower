
import { useState, useEffect } from 'react';
import { Users } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import TeamMember from '@/components/TeamMember';
import { cn } from '@/lib/utils';

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Team member data structure - names and positions will be added later
  const teamMembers = [
    {
      id: 1,
      name: "[Name Placeholder]",
      position: "[Position Placeholder]",
      imageSrc: "/lovable-uploads/67d1b2fa-e641-4d49-8315-7c3e003aefa8.png",
    },
    {
      id: 2,
      name: "[Name Placeholder]",
      position: "[Position Placeholder]",
      imageSrc: "/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png",
    },
    {
      id: 3,
      name: "[Name Placeholder]",
      position: "[Position Placeholder]",
      imageSrc: "/lovable-uploads/9e345a04-5ec4-42e0-8e08-a62d86eb0feb.png",
    },
    {
      id: 4,
      name: "[Name Placeholder]",
      position: "[Position Placeholder]",
      imageSrc: "/lovable-uploads/1e05c867-79ad-4163-b0df-35c25dd53a6d.png",
    },
    {
      id: 5,
      name: "[Name Placeholder]",
      position: "[Position Placeholder]",
      imageSrc: "/lovable-uploads/4d6bf7ed-8cda-4b9e-a4f2-2a19eb59f45d.jpg",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-fluid">
        <SectionTitle
          subtitle="Our Leadership"
          title="Meet Our Team"
          description="Our leadership team brings decades of experience and expertise to deliver excellence in engineering services."
          icon={<Users className="text-primary" size={24} />}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={cn(
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isVisible && `transition-all duration-700 delay-${index * 100}`
              )}
            >
              <TeamMember
                name={member.name}
                position={member.position}
                imageSrc={member.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
