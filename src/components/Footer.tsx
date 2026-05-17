import { Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-kenya-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16 mb-10">
          <div className="md:col-span-1">
            <Link to="/#home" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="Emmar Travels Logo" 
                className="h-12 w-auto object-contain bg-white rounded-full p-1"
              />
              <span className="text-2xl font-display font-bold tracking-tight">
                Emmar Travels
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Your gateway to seamless travel. A premium immigration and logistics hub built on a foundation of trust, based in Kenya.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/#services" className="hover:text-kenya-red transition-colors">US & UK Visas</Link></li>
              <li><Link to="/#services" className="hover:text-kenya-red transition-colors">Schengen & Dubai Visas</Link></li>
              <li><Link to="/#services" className="hover:text-kenya-red transition-colors">Flight Ticketing</Link></li>
              <li><Link to="/#services" className="hover:text-kenya-red transition-colors">Corporate Travel</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/#about" className="hover:text-kenya-red transition-colors">About Us</Link></li>
              <li><Link to="/#testimonials" className="hover:text-kenya-red transition-colors">Testimonials</Link></li>
              <li><Link to="/blog" className="hover:text-kenya-red transition-colors">Travel Blog</Link></li>
              <li><Link to="/#contact" className="hover:text-kenya-red transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-kenya-green font-bold">P:</span> +254 713 835278
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kenya-green font-bold">E:</span> emmanueletori@yahoo.co.uk
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kenya-green font-bold">A:</span> Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Emmar Travels. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
