import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo = ({ className = '', variant = 'dark' }: LogoProps) => {
  return (
    <Link to="/" className={`inline-block ${className}`}>
      <img
        src="/emp-logo1.svg"
        alt="EMP Engineering Manpower Providers"
        className={`h-12 w-auto ${variant === 'light' ? 'brightness-0 invert' : ''} transition-all duration-300 hover:opacity-90`}
      />
    </Link>
  );
};

export default Logo;