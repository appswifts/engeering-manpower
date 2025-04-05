
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Zap, Wrench, Building, GraduationCap, Shield } from 'lucide-react';

const ServiceHeroSection = () => {
  return <section className="relative py-24 bg-secondary">
      <div className="absolute inset-0 bg-secondary/90"></div>
      <div className="absolute inset-0 opacity-20 bg-cover bg-center bg-gray-800"></div>
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container-fluid relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Engineering Services
            </h1>
            <p className="text-white/80 text-lg mb-6">
              We provide comprehensive engineering services to meet your business needs with precision and expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary px-6 py-3">
                Get a Quote
              </Link>
              <a href="#service-list" className="btn bg-white/10 text-white hover:bg-white/20 px-6 py-3">
                Learn More
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative">
              <div className="rounded-lg shadow-xl z-10 relative bg-gray-200 h-64 w-full flex items-center justify-center">
                <span className="text-gray-500 font-medium">Engineering Excellence</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                3+ Years
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg">
          <NavigationMenu className="mx-auto max-w-5xl">
            <NavigationMenuList className="w-full justify-between">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white bg-transparent hover:bg-white/10">
                  <Zap className="w-5 h-5 mr-2" />
                  Electrical Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white rounded-md shadow-md">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md" to="/services/electrical-installation">
                          <Zap className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Electrical Installation and Industrial Maintenance
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Professional electrical services for buildings and industrial facilities
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/services/electrical-installation/residential" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Residential</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Electrical installations for homes and apartments
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/electrical-installation/commercial" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Commercial</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Electrical systems for offices and retail spaces
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/electrical-installation/industrial" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Industrial</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Heavy-duty electrical solutions for factories
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white bg-transparent hover:bg-white/10">
                  <Wrench className="w-5 h-5 mr-2" />
                  Mechatronics
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white rounded-md shadow-md">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-secondary/50 to-secondary p-6 no-underline outline-none focus:shadow-md" to="/services/mechatronics">
                          <Wrench className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Mechatronics and General Mechanics
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Advanced automated systems combining mechanical, electrical, and computing technologies
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/services/mechatronics/automation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Industrial Automation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Automated manufacturing systems and robotic solutions
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/mechatronics/control-systems" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Control Systems</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          PLC and SCADA systems for industrial applications
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white bg-transparent hover:bg-white/10">
                  <Building className="w-5 h-5 mr-2" />
                  Civil Works
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white rounded-md shadow-md">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md" to="/services/civil-works">
                          <Building className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Civil Engineering Services
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Comprehensive civil engineering solutions for construction and infrastructure projects
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/services/civil-works/structural" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Structural Engineering</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Design and analysis of building structures
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/civil-works/infrastructure" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Infrastructure Development</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Roads, bridges, and utility systems construction
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white bg-transparent hover:bg-white/10">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Technical Skills
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white rounded-md shadow-md">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-secondary/50 to-secondary p-6 no-underline outline-none focus:shadow-md" to="/services/training-internship">
                          <GraduationCap className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Refreshment of Technical Skills and Internship
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Professional development and hands-on learning opportunities
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/services/training-internship/technical" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Technical Training</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Hands-on technical skills development
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/training-internship/internships" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Internship Program</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Structured internships for students and graduates
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-white bg-transparent hover:bg-white/10">
                  <Shield className="w-5 h-5 mr-2" />
                  Consultancy
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white rounded-md shadow-md">
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md" to="/services/environmental-osh-consultancy">
                          <Shield className="h-6 w-6 text-white" />
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            Environmental & OSH Consultancy
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Expert consultancy on environmental impact and occupational safety
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <Link to="/services/environmental-osh-consultancy/environmental" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Environmental Assessment</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Environmental impact studies and compliance
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/environmental-osh-consultancy/osh" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Occupational Safety & Health</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Workplace safety audits and risk assessment
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </section>;
};

export default ServiceHeroSection;
