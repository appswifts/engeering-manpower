import { Service } from './serviceData';
import { Zap, Wrench, Building, GraduationCap, Shield } from 'lucide-react';

export const servicesList: Service[] = [
  {
    id: 1,
    title: 'Electrical Installation and Industrial Maintenance',
    slug: 'electrical-installation',
    description: 'Professional electrical installation and maintenance services for all projects.',
    icon: <Zap className="w-6 h-6" />,
    image: '/lovable-uploads/Electrical Installation and Industrial Maintenance.jpg',
    content: `
      <p>Our Electrical Installation and Industrial Maintenance services cover a wide range of electrical solutions for residential, commercial, and industrial clients. We ensure that all electrical systems are installed according to the highest safety standards and maintained regularly to prevent downtime and hazards.</p>

      <p>With our team of certified electricians, we provide comprehensive services that ensure your electrical systems operate efficiently and safely. We understand the critical nature of electrical systems in modern infrastructure and are committed to delivering excellence in every project.</p>
    `,
    offerings: [
      'Electrical wiring for new constructions',
      'Electrical system upgrades and renovations',
      'Emergency electrical repairs',
      'Electrical maintenance programs',
      'Lighting design and installation',
      'Power backup systems',
      'Industrial electrical systems',
      'Energy efficiency audits and solutions'
    ],
    subtypes: [
      {
        title: 'Residential Electrical Services',
        slug: 'residential',
        short_description: 'Complete electrical solutions for homes and residential properties.',
        image: '/lovable-uploads/ff6ffdf7-2f2b-4eea-bb43-9dead7285c1d.png',
        content: `
          <p>Our residential electrical services ensure that your home's electrical system is safe, efficient, and up to code. From new installations to troubleshooting and repairs, our team of certified electricians provides comprehensive solutions for all your home electrical needs.</p>

          <p>We understand that electrical issues can be disruptive and potentially dangerous. That's why we offer prompt, reliable service to address your concerns and provide long-lasting solutions. Our focus is on quality workmanship and customer satisfaction.</p>
        `,
        offerings: [
          'Home electrical wiring',
          'Electrical panel upgrades',
          'Lighting installation',
          'Ceiling fan installation',
          'Outlet and switch installation/repair',
          'Circuit breaker replacement',
          'Home electrical safety inspections',
          'Smart home electrical integration'
        ]
      },
      {
        title: 'Commercial Electrical Services',
        slug: 'commercial',
        short_description: 'Comprehensive electrical solutions for businesses and commercial properties.',
        image: '/lovable-uploads/67d1b2fa-e641-4d49-8315-7c3e003aefa8.png',
        content: `
          <p>Our commercial electrical services cater to businesses of all sizes, providing reliable electrical solutions that minimize downtime and maximize efficiency. We understand the unique requirements of commercial spaces and offer customized electrical services to meet your specific needs.</p>

          <p>From office buildings to retail spaces, restaurants to warehouses, our team has the expertise to handle commercial electrical projects of any scale. We prioritize safety, efficiency, and code compliance in all our commercial electrical work.</p>
        `,
        offerings: [
          'Commercial electrical system design and installation',
          'Office lighting solutions',
          'Electrical maintenance contracts',
          'Emergency power systems',
          'Energy management systems',
          'Commercial electrical repairs',
          'Electrical system upgrades',
          'Code compliance inspections'
        ]
      },
      {
        title: 'Industrial Electrical Services',
        slug: 'industrial',
        short_description: 'Specialized electrical solutions for industrial facilities and manufacturing plants.',
        image: '/lovable-uploads/7c7e026e-6bdd-4da5-96ee-84bac4f9ad7d.png',
        content: `
          <p>Our industrial electrical services address the complex needs of manufacturing plants, processing facilities, and other industrial environments. We deliver robust electrical solutions that ensure operational continuity, safety, and efficiency in demanding industrial settings.</p>

          <p>Our team of industrial electricians has extensive experience working with high-voltage systems, complex machinery, and automated equipment. We understand the critical nature of industrial electrical systems and provide services that minimize production disruptions while maintaining the highest safety standards.</p>
        `,
        offerings: [
          'Industrial power distribution',
          'Machine and equipment wiring',
          'Control panel design and installation',
          'PLC programming and integration',
          'Motor control centers',
          'Industrial lighting systems',
          'Power quality analysis',
          'Preventive maintenance programs'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Mechatronics and General Mechanics',
    slug: 'mechatronics',
    description: 'Advanced mechatronics solutions combining mechanical, electronic, and software engineering.',
    icon: <Wrench className="w-6 h-6" />,
    image: '/lovable-uploads/ea720679-b35b-49a0-b0db-ad5aa0a0d40b.png',
    content: `
      <p>Our Mechatronics and General Mechanics services integrate mechanical, electronic, and software engineering to provide comprehensive solutions for automated systems. We design, implement, and maintain mechatronic systems that optimize performance, increase productivity, and reduce operational costs.</p>

      <p>Our multidisciplinary team brings together expertise in mechanical design, electronics, control systems, and software development to create integrated solutions for complex engineering challenges. We work across various industries, providing custom mechatronic solutions tailored to specific operational requirements.</p>
    `,
    offerings: [
      'Automation systems design and implementation',
      'Robotics integration',
      'Control system development',
      'Sensor integration and data acquisition',
      'Mechatronic system maintenance',
      'Process optimization',
      'Custom machinery design',
      'Retrofitting existing systems'
    ],
    subtypes: [
      {
        title: 'Industrial Automation',
        slug: 'industrial-automation',
        short_description: 'Automated solutions for industrial processes and manufacturing.',
        image: '/lovable-uploads/bdd801d0-4496-4a53-8b0f-d769174005d6.png',
        content: `
          <p>Our Industrial Automation services help businesses streamline their manufacturing processes through advanced automation technologies. We design and implement automation solutions that increase production efficiency, improve product quality, and reduce operational costs.</p>

          <p>From simple automated processes to complex manufacturing lines, our team has the expertise to develop customized automation systems that meet your specific production requirements. We integrate various components including PLCs, HMIs, robots, and sensors to create comprehensive automation solutions.</p>
        `,
        offerings: [
          'Manufacturing process automation',
          'Assembly line automation',
          'Material handling systems',
          'Quality control automation',
          'PLC and HMI programming',
          'SCADA systems',
          'Industrial IoT integration',
          'System optimization and upgrades'
        ]
      },
      {
        title: 'Robotics Solutions',
        slug: 'robotics',
        short_description: 'Advanced robotics integration for various industrial applications.',
        image: '/lovable-uploads/bdd801d0-4496-4a53-8b0f-d769174005d6.png',
        content: `
          <p>Our Robotics Solutions services focus on integrating robotic systems into various industrial processes to enhance productivity, precision, and safety. We provide comprehensive robotics services from initial consultation and design to implementation and ongoing support.</p>

          <p>Our team has extensive experience working with various robot types and brands, including articulated robots, SCARA robots, delta robots, and collaborative robots. We identify the optimal robotic solution for your specific application and ensure seamless integration with your existing systems.</p>
        `,
        offerings: [
          'Robot selection and system design',
          'Robot programming and simulation',
          'End-of-arm tooling design',
          'Robot cell safety systems',
          'Robot vision systems',
          'Collaborative robot applications',
          'Robot system maintenance',
          'Robot retrofitting and upgrades'
        ]
      },
      {
        title: 'Control Systems',
        slug: 'control-systems',
        short_description: 'Advanced control systems for process automation and monitoring.',
        image: '/lovable-uploads/67d1b2fa-e641-4d49-8315-7c3e003aefa8.png',
        content: `
          <p>Our Control Systems services provide sophisticated solutions for managing and monitoring various processes in industrial and commercial environments. We design and implement control systems that ensure precise operation, efficient resource utilization, and comprehensive data feedback.</p>

          <p>From simple feedback controls to complex distributed control systems, our team delivers tailored solutions that address your specific operational requirements. We integrate various control technologies to create systems that are reliable, user-friendly, and adaptable to changing needs.</p>
        `,
        offerings: [
          'Process control system design',
          'PLC programming and integration',
          'HMI/SCADA development',
          'Distributed control systems',
          'Motion control systems',
          'Building automation systems',
          'Control panel design and fabrication',
          'System simulation and testing'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Civil Works',
    slug: 'civil-works',
    description: 'Comprehensive civil engineering and construction services for infrastructure projects.',
    icon: <Building className="w-6 h-6" />,
    image: '/lovable-uploads/2bf25f7e-4a91-4582-a46c-b1724201c781.png',
    content: `
      <p>Our Civil Works services encompass a broad range of civil engineering and construction solutions for infrastructure development. We manage projects from initial concept and design through to construction and completion, ensuring high-quality results that meet all technical specifications and client requirements.</p>

      <p>With our experienced team of civil engineers, project managers, and construction professionals, we deliver infrastructure projects that are built to last. We prioritize sustainability, efficiency, and safety in all our civil works projects, whether they are small-scale developments or large infrastructure undertakings.</p>
    `,
    offerings: [
      'Renovation services',
      'Water supply and sewerage systems',
      'Construction project management'
    ],
    subtypes: [
      {
        title: 'Building Construction',
        slug: 'building-construction',
        short_description: 'Construction services for residential, commercial, and industrial buildings.',
        image: '/lovable-uploads/2bf25f7e-4a91-4582-a46c-b1724201c781.png',
        content: `
          <p>Our Building Construction services cover all aspects of constructing new buildings for various purposes, including residential, commercial, and industrial use. From laying foundations to completing finishing work, we manage the entire construction process to ensure high-quality buildings that meet all requirements and specifications.</p>

          <p>Our construction team combines technical expertise with attention to detail, delivering buildings that are structurally sound, functionally efficient, and aesthetically pleasing. We emphasize quality craftsmanship, adherence to timelines, and effective cost management throughout the construction process.</p>
        `,
        offerings: [
          'Residential building construction',
          'Commercial building construction',
          'Industrial facility construction',
          'Institutional building construction',
          'Building renovations and expansions',
          'Design-build services',
          'Construction management',
          'Sustainable building practices'
        ]
      },
      {
        title: 'Infrastructure Development',
        slug: 'infrastructure',
        short_description: 'Development of essential infrastructure including roads, bridges, and utilities.',
        image: '/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png',
        content: `
          <p>Our Infrastructure Development services focus on creating and improving the essential systems and facilities that support communities and enable economic activity. We design and construct critical infrastructure components that form the backbone of urban and rural development.</p>

          <p>Our infrastructure projects are characterized by their durability, functionality, and positive impact on the surrounding environment. We work closely with local authorities and stakeholders to ensure that our infrastructure solutions address both immediate needs and long-term development objectives.</p>
        `,
        offerings: [
          'Road and highway construction',
          'Bridge construction',
          'Water supply systems',
          'Sewerage and drainage systems',
          'Culverts and crossings',
          'Urban infrastructure development',
          'Public facilities construction',
          'Infrastructure rehabilitation'
        ]
      },
      {
        title: 'Site Development',
        slug: 'site-development',
        short_description: 'Preparation and development of sites for construction projects.',
        image: '/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png',
        content: `
          <p>Our Site Development services prepare land for construction and development through various engineering processes. We transform raw land into construction-ready sites with proper grading, drainage, utility connections, and access routes to support future development.</p>

          <p>Our site development work considers both technical requirements and environmental factors, ensuring that sites are prepared in a manner that facilitates construction while minimizing environmental impact. We emphasize sustainable development practices throughout the site preparation process.</p>
        `,
        offerings: [
          'Land clearing and grubbing',
          'Site grading and earthwork',
          'Erosion and sediment control',
          'Stormwater management systems',
          'Utility installation and connections',
          'Access road construction',
          'Retaining walls and slope stabilization',
          'Environmental mitigation measures'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Refreshment of Technical Skills and Internship',
    slug: 'training-internship',
    description: 'Structured training programs and internships to develop the next generation of engineers.',
    icon: <GraduationCap className="w-6 h-6" />,
    image: '/lovable-uploads/6f06861d-83ea-4078-982e-b43f06f9461e.png',
    content: `
      <p>Our Refreshment of Technical Skills and Internship programs are designed to develop technical skills and practical knowledge in various engineering disciplines. We offer structured learning experiences that combine theoretical instruction with hands-on practice, preparing participants for successful careers in engineering and technical fields.</p>

      <p>Led by experienced professionals with extensive industry knowledge, our programs provide opportunities for skill development, professional growth, and industry exposure. We are committed to cultivating the next generation of skilled technicians and engineers through comprehensive training and mentorship.</p>
    `,
    offerings: [
      'Technical skills training programs',
      'Professional internship placements',
      'Practical workshops and labs',
      
      'Industry-specific training',
      'Safety training and certification',
      'Leadership development programs',
      'Career guidance and mentorship'
    ],
    subtypes: [
      {
        title: 'Technical Training Programs',
        slug: 'technical-training',
        short_description: 'Comprehensive training programs for various technical disciplines.',
        image: 'https://images.unsplash.com/photo-1560523160-754a9e25c68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
          <p>Our Technical Training Programs provide comprehensive instruction in various engineering and technical disciplines, equipping participants with the knowledge and skills needed for specific roles in the industry. These programs combine classroom instruction with practical exercises to ensure a complete learning experience.</p>

          <p>Led by industry professionals with years of practical experience, our technical training programs focus on developing job-ready skills that are in demand in the current market. We regularly update our curriculum to reflect the latest industry standards, technologies, and best practices.</p>
        `,
        offerings: [
          'Electrical systems training',
          'Mechanical engineering fundamentals',
          'Automation and control systems',
          'Construction techniques and methods',
          'HVAC systems training',
          'Electronics and circuitry basics',
          'Safety protocols and procedures',
          'Quality control methods'
        ]
      },
      {
        title: 'Internship Programs',
        slug: 'internship',
        short_description: 'Structured internship opportunities for students and recent graduates.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
          <p>Our Internship Programs offer valuable work experience opportunities for students and recent graduates in engineering and technical fields. Through these programs, interns gain practical knowledge, develop professional skills, and build industry connections while contributing to actual projects under the guidance of experienced mentors.</p>

          <p>We structure our internships to provide a comprehensive learning experience that bridges the gap between academic knowledge and professional practice. Interns are integrated into our project teams and given meaningful responsibilities that contribute to their professional development.</p>
        `,
        offerings: [
          'Engineering internships',
          'Technical assistant positions',
          'Project management internships',
          'Research and development opportunities',
          'Field experience programs',
          'Design team placements',
          'Quality assurance internships',
          'Construction management internships'
        ]
      },
      {
        title: 'Professional Development',
        slug: 'professional-development',
        short_description: 'Ongoing learning opportunities for working professionals.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
          <p>Our Professional Development programs are designed for working professionals seeking to enhance their skills, stay updated with industry developments, or prepare for career advancement. We offer specialized courses, workshops, and certification programs that accommodate the schedules of working professionals while providing valuable learning experiences.</p>

          <p>Our professional development offerings focus on practical, applicable knowledge that participants can immediately use in their current roles. We emphasize skill development, knowledge expansion, and professional growth through targeted learning experiences led by industry experts.</p>
        `,
        offerings: [
          'Advanced technical training',
          'Management and leadership development',
          
          'Industry-specific workshops',
          'Software and technology training',
          'Project management methodologies',
          'Continuous improvement techniques',
          
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Environmental & OSH Consultancy',
    slug: 'environmental-osh-consultancy',
    description: 'Expert consultation on environmental impact assessment and occupational safety & health.',
    icon: <Shield className="w-6 h-6" />,
    image: '/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png',
    content: `
      <p>Our Environmental & Occupational Safety & Health (OSH) Consultancy services provide expert guidance on environmental management and workplace safety. We help organizations comply with regulations, implement best practices, and develop sustainable strategies that protect both the environment and worker health.</p>

      <p>With our team of environmental specialists and safety professionals, we deliver comprehensive solutions that address the complex challenges of environmental management and occupational safety. We are committed to promoting sustainable practices and creating safer workplaces through effective consultation and practical implementation strategies.</p>
    `,
    offerings: [
      'Environmental impact assessments',
      'Occupational health and safety audits',
      'Compliance guidance and monitoring',
      'Risk assessment and management',
      'Environmental management systems',
      'Safety management systems',
      'Training and capacity building',
      'Sustainable development strategies'
    ],
    subtypes: [
      {
        title: 'Environmental Impact Assessment',
        slug: 'environmental-assessment',
        short_description: 'Comprehensive assessment of environmental impacts for projects and activities.',
        image: '/lovable-uploads/5aa877d4-6691-495d-9285-f7c493100eef.png',
        content: `
          <p>Our Environmental Impact Assessment services evaluate the potential environmental effects of proposed projects, developments, or activities. We conduct thorough assessments that identify potential impacts, propose mitigation measures, and help clients comply with environmental regulations and standards.</p>

          <p>Our approach to environmental impact assessment is comprehensive, considering direct and indirect impacts on various environmental components including air, water, soil, biodiversity, and socio-economic factors. We provide clear, actionable reports that support informed decision-making and sustainable project implementation.</p>
        `,
        offerings: [
          'Initial environmental examination',
          'Full environmental impact assessment',
          'Environmental baseline studies',
          'Impact prediction and evaluation',
          'Mitigation planning',
          'Environmental management plans',
          'Public consultation facilitation',
          'Regulatory compliance reporting'
        ]
      },
      {
        title: 'Occupational Safety & Health',
        slug: 'osh',
        short_description: 'Comprehensive services to ensure workplace safety and employee health.',
        image: '/lovable-uploads/6f06861d-83ea-4078-982e-b43f06f9461e.png',
        content: `
          <p>Our Occupational Safety & Health services help organizations create safer workplaces and protect employee health. We provide comprehensive OSH solutions that identify hazards, assess risks, implement controls, and promote a culture of safety across all levels of an organization.</p>

          <p>Our team of safety professionals brings expertise in various industries and work environments, enabling us to provide tailored OSH services that address specific workplace challenges. We emphasize practical, effective solutions that improve safety performance while supporting operational efficiency.</p>
        `,
        offerings: [
          'Workplace safety audits',
          'OSH risk assessments',
          'Safety management system development',
          'Safety training programs',
          'Accident investigation and analysis',
          'Emergency response planning',
          'Regulatory compliance assistance',
          'Safety culture development'
        ]
      },
      {
        title: 'Sustainability Consulting',
        slug: 'sustainability',
        short_description: 'Strategic guidance for sustainable development and business practices.',
        image: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        content: `
          <p>Our Sustainability Consulting services help organizations integrate sustainable practices into their operations, projects, and business strategies. We provide guidance on resource efficiency, waste reduction, energy management, and other aspects of sustainability to improve environmental performance while supporting business objectives.</p>

          <p>We take a holistic approach to sustainability, considering environmental, social, and economic factors in our consultancy services. Our team helps clients develop and implement sustainability strategies that create long-term value while minimizing negative impacts on the environment and communities.</p>
        `,
        offerings: [
          'Sustainability strategy development',
          'Resource efficiency assessments',
          'Carbon footprint analysis',
          'Sustainable supply chain management',
          'Green building and infrastructure consulting',
          'Circular economy implementation',
          'Sustainability reporting and disclosure',
          'Stakeholder engagement for sustainability'
        ]
      }
    ]
  }
];
