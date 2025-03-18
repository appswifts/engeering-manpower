
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
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Services
          </h1>
          <p className="text-white/80 text-lg">
            We provide comprehensive engineering services to meet your business needs with precision and expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
