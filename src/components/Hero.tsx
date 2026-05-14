import { ArrowRight, Globe, ShieldCheck, MapPin, Plane } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1489392191562-56630f1d3c0e?auto=format&fit=crop&q=80&w=2000" 
          alt="Kenyan landscape with hot air balloons"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-savannah" />
            <span>8 Years of Trusted Travel Excellence</span>
          </motion.div>

          <div style={{ perspective: 1000 }}>
            <motion.h1
              initial={{ opacity: 0, y: 80, rotateX: 45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ transformOrigin: "bottom" }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            >
              Your Gateway to <br/>
              <span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-savannah to-amber-500"
                style={{ filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.6))" }}
              >
                Global Adventures
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light"
          >
            Expert visa processing, premium flight ticketing, and bespoke travel arrangements from Kenya to the world. We make international travel effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="flex items-center gap-2 bg-savannah hover:bg-amber-500 text-kenya-black px-8 py-4 rounded-lg font-bold text-lg transition-colors group"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors"
            >
              Get a Free Quote
            </a>
          </motion.div>
        </div>

        {/* Quick Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {[
            { label: 'Visas Approved', value: '5,000+', icon: Globe },
            { label: 'Happy Clients', value: '10k+', icon: ShieldCheck },
            { label: 'Years Experience', value: '8+', icon: MapPin },
            { label: 'Global Destinations', value: '150+', icon: Plane },
          ].map((stat, i) => (
            <div key={i} className="glass-panel rounded-xl p-6 text-white text-center sm:text-left shadow-2xl">
              <stat.icon className="w-8 h-8 text-savannah mb-4 mx-auto sm:mx-0" />
              <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
