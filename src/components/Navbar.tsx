import { useState, useEffect } from 'react';
import { Menu, X, Plane, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomeDir = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || !isHomeDir);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomeDir]);

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || !isHomeDir ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <Link to="/#home" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Emmar Travels Logo" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className={cn("text-2xl font-display font-bold tracking-tight transition-colors", isScrolled || !isHomeDir ? "text-kenya-black" : "text-white")}>
              Emmar Travels
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={cn(
                      "text-sm font-medium hover:text-kenya-red transition-colors",
                      isScrolled || !isHomeDir ? "text-gray-600" : "text-white/90 hover:text-white"
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/254713835278"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-savannah hover:bg-amber-500 text-kenya-black px-5 py-2.5 rounded-full font-bold transition-colors shadow-lg shadow-savannah/20"
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden p-2", isScrolled || !isHomeDir ? "text-gray-900" : "text-white")}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="flex flex-col py-4 px-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="block text-gray-800 font-medium hover:text-kenya-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-2">
             <a
              href="https://wa.me/254713835278"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-savannah hover:bg-amber-500 text-kenya-black py-3 rounded-lg font-bold"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us (+254 713 835278)</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
