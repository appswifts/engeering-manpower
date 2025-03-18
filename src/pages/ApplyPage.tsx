
import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { toast } from '@/hooks/use-toast';

const ApplyPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    message: '',
  });
  
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileSelected(true);
      setFileName(e.target.files[0].name);
    } else {
      setFileSelected(false);
      setFileName('');
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We'll review it and contact you soon!",
      });
    }, 1500);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-secondary">
        <div className="absolute inset-0 bg-secondary/90"></div>
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container-fluid relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-white/80 text-lg">
              Apply to become part of our network of skilled engineering professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                subtitle="Applications"
                title="Apply to Join Our Engineering Network"
                description="We're always looking for talented engineers and technical professionals to join our network. Fill out the form to apply."
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <CheckCircle className="text-primary mr-2" size={20} />
                    Why Join Our Network
                  </h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Access to premium projects with top organizations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Competitive compensation and benefits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Continuous professional development opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Flexible work arrangements based on project needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Supportive professional community of engineers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <AlertCircle className="text-primary mr-2" size={20} />
                    What We Look For
                  </h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Strong technical skills in your engineering discipline</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Relevant education and certifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Problem-solving abilities and analytical thinking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Strong communication and collaboration skills</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-primary mr-3 mt-1 flex-shrink-0" size={16} />
                      <span>Dedication to quality and continuous improvement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for applying to join our engineering network. Our team will review your application and get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        position: '',
                        experience: '',
                        education: '',
                        message: '',
                      });
                      setFileSelected(false);
                      setFileName('');
                    }}
                    className="btn btn-primary px-6 py-2"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold mb-6">Application Form</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position of Interest</label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    >
                      <option value="">Select position</option>
                      <option value="Mechanical Engineer">Mechanical Engineer</option>
                      <option value="Civil Engineer">Civil Engineer</option>
                      <option value="Electrical Engineer">Electrical Engineer</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Project Manager">Project Manager</option>
                      <option value="Technical Trainer">Technical Trainer</option>
                      <option value="Quality Assurance Specialist">Quality Assurance Specialist</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700">Highest Education Level</label>
                    <select
                      id="education"
                      name="education"
                      required
                      value={formData.education}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                    >
                      <option value="">Select education</option>
                      <option value="High School">High School</option>
                      <option value="Technical Certificate">Technical Certificate</option>
                      <option value="Associate's Degree">Associate's Degree</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="PhD">PhD</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                      placeholder="Tell us about your skills and experience"
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Upload Resume/CV</label>
                    <div className="relative">
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        required
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <label
                        htmlFor="resume"
                        className={`flex items-center justify-center w-full px-4 py-3 rounded-lg border border-dashed ${
                          fileSelected ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary/50'
                        } cursor-pointer transition-all duration-200`}
                      >
                        <div className="flex items-center">
                          <Upload className={fileSelected ? 'text-primary' : 'text-gray-400'} size={20} />
                          <span className="ml-2">
                            {fileSelected ? fileName : 'Upload your resume (PDF, DOC, DOCX)'}
                          </span>
                        </div>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">Max file size: 5MB</p>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn btn-primary py-3 flex items-center justify-center"
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-fluid">
          <SectionTitle
            subtitle="Our Process"
            title="How Our Application Process Works"
            description="Learn about our streamlined application process designed to match qualified engineers with the right opportunities."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {[
              {
                step: "01",
                title: "Submit Application",
                description: "Complete our online application form and upload your resume/CV."
              },
              {
                step: "02",
                title: "Initial Review",
                description: "Our team reviews your application to assess your qualifications and experience."
              },
              {
                step: "03",
                title: "Interview Process",
                description: "Selected candidates participate in technical and professional interviews."
              },
              {
                step: "04",
                title: "Placement & Onboarding",
                description: "Successful candidates are matched with suitable projects and onboarded."
              }
            ].map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mb-6">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;
