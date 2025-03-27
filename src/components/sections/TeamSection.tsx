
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

  // Team member data with real names and positions
  const teamMembers = [
    {
      id: 1,
      name: "Remy Claude Nyandwi",
      position: "Project Manager",
      imageSrc: "/lovable-uploads/09791434-54e7-403a-85c7-40f935762c2d.png",
    },
    {
      id: 2,
      name: "Jessica Mugwaneza",
      position: "Environmental and Sustainability Specialist",
      imageSrc: "/lovable-uploads/a739f59b-12ac-4f7d-bf26-d381c4367b68.png",
    },
    {
      id: 3,
      name: "Munyemana Edouard",
      position: "Training and Internship Manager",
      imageSrc: "/lovable-uploads/c9972734-76f4-4948-9d3e-6e803434dc18.png",
    },
    {
      id: 4,
      name: "CYEMEZO Aimable",
      position: "IT Manager",
      imageSrc: "/lovable-uploads/3adb2725-75c8-4a8d-b052-91dbfe37edfb.png",
    },
    {
      id: 5,
      name: "BATAMURIZA Laurence",
      position: "Secretary of Company and Finance Accountant Manager",
      imageSrc: "/lovable-uploads/2a1fd94e-011a-4eb5-9952-4fdb58e9c5e3.png",
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
