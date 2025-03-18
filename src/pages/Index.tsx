
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to homepage when this component mounts
    navigate('/home');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Services</h1>
        <p className="text-xl text-gray-600">Redirecting you to our homepage...</p>
      </div>
    </div>
  );
};

export default Index;
