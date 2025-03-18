
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Filter, ArrowRight, Star } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: "Safety Helmet - Premium",
    category: "Safety Equipment",
    price: 89.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "High-quality safety helmet with advanced protection features for construction environments."
  },
  {
    id: 2,
    name: "Engineering Toolkit Pro",
    category: "Tools",
    price: 249.99,
    rating: 4.9,
    image: "/placeholder.svg",
    description: "Comprehensive toolkit with professional-grade instruments for engineering applications."
  },
  {
    id: 3,
    name: "Digital Measuring Device",
    category: "Measurement Tools",
    price: 179.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Precision digital measuring device for accurate technical measurements and analysis."
  },
  {
    id: 4,
    name: "Protective Eyewear",
    category: "Safety Equipment",
    price: 45.99,
    rating: 4.6,
    image: "/placeholder.svg",
    description: "Impact-resistant protective eyewear for industrial and construction environments."
  },
  {
    id: 5,
    name: "High-Visibility Vest",
    category: "Safety Equipment",
    price: 34.99,
    rating: 4.5,
    image: "/placeholder.svg",
    description: "Reflective high-visibility vest designed for safety in low-light work environments."
  },
  {
    id: 6,
    name: "Portable Power Generator",
    category: "Power Equipment",
    price: 899.99,
    rating: 4.8,
    image: "/placeholder.svg",
    description: "Compact, high-output power generator for construction sites and remote locations."
  },
  {
    id: 7,
    name: "Advanced Diagnostic Scanner",
    category: "Diagnostic Equipment",
    price: 349.99,
    rating: 4.7,
    image: "/placeholder.svg",
    description: "Comprehensive diagnostic scanner for electrical and mechanical system analysis."
  },
  {
    id: 8,
    name: "Industrial Work Gloves",
    category: "Safety Equipment",
    price: 29.99,
    rating: 4.6,
    image: "/placeholder.svg",
    description: "Heavy-duty work gloves offering protection and dexterity for industrial applications."
  },
];

const categories = [
  "All Categories",
  "Safety Equipment",
  "Tools",
  "Measurement Tools",
  "Power Equipment",
  "Diagnostic Equipment",
];

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  useEffect(() => {
    let results = products;
    
    // Filter by category
    if (selectedCategory !== 'All Categories') {
      results = results.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(
        product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(results);
  }, [searchTerm, selectedCategory]);
  
  const handleAddToCart = (productId) => {
    toast({
      title: "Added to Cart",
      description: "Product has been added to your cart.",
    });
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
              Our Products
            </h1>
            <p className="text-white/80 text-lg">
              Discover our high-quality engineering tools, equipment, and safety gear.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container-fluid">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="relative w-full md:w-96 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-600" size={18} />
              <span className="text-gray-600">Filter by:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={cn(
                    "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    isVisible && `transition-all duration-700 delay-${index * 100}`
                  )}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="text-yellow-400" size={14} />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">${product.price}</span>
                        <button
                          onClick={() => handleAddToCart(product.id)}
                          className="flex items-center bg-primary hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors"
                        >
                          <ShoppingCart size={16} className="mr-1" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600">No products match your search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All Categories');
                  }}
                  className="mt-4 btn btn-primary px-6 py-2"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-fluid">
          <SectionTitle
            subtitle="Browse By Category"
            title="Product Categories"
            description="Explore our complete range of engineering products by category."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {categories.slice(1).map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        index === 0
                          ? "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          : index === 1
                          ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          : index === 2
                          ? "M13 10V3L4 14h7v7l9-11h-7z"
                          : "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      }
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{category}</h3>
                <p className="text-gray-600 mb-4">
                  Explore our range of {category.toLowerCase()} for professional use.
                </p>
                <button className="text-primary font-medium hover:text-primary-600 transition-colors flex items-center">
                  View Products
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container-fluid">
          <SectionTitle
            subtitle="Special Offers"
            title="Featured Products"
            description="Discover our highlighted selection of high-quality engineering products."
          />
          
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                  Limited Time Offer
                </span>
                <h3 className="text-3xl font-bold mb-4">Engineering Toolkit Pro</h3>
                <p className="text-gray-600 mb-6">
                  Our comprehensive toolkit includes professional-grade instruments for various engineering applications. Designed for durability and precision, this toolkit is essential for every engineer.
                </p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-primary">$249.99</span>
                  <span className="text-lg line-through text-gray-400 ml-2">$299.99</span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded ml-2">
                    Save 17%
                  </span>
                </div>
                <button
                  onClick={() => handleAddToCart(2)}
                  className="btn btn-primary px-8 py-3 flex items-center"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
              
              <div className="relative">
                <img
                  src="/placeholder.svg"
                  alt="Engineering Toolkit Pro"
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                  Best Seller
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-fluid">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Need Custom Engineering Solutions?
                </h3>
                <p className="text-gray-600 mb-6">
                  We offer tailored products and services to meet your specific engineering requirements. Contact our team to discuss your needs.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-primary px-8 py-3"
                >
                  Get in Touch
                </Link>
              </div>
              
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Custom solutions"
                  className="max-h-64 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
