
const ServiceHeroSection = () => {
  return (
    <section className="relative py-24 bg-secondary">
      <div className="absolute inset-0 bg-secondary/90"></div>
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      ></div>
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
              <button className="btn btn-primary px-6 py-3">
                Get a Quote
              </button>
              <button className="btn bg-white/10 text-white hover:bg-white/20 px-6 py-3">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Engineering services" 
                className="rounded-lg shadow-xl z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                29+ Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
