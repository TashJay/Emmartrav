import { motion } from 'motion/react';
import { Target, Award, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute -inset-4 bg-kenya-red/5 rounded-3xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1549420959-1e24fb2fca25?auto=format&fit=crop&q=80&w=800" 
              alt="Nairobi skyline" 
              className="rounded-2xl w-full h-[300px] object-cover mt-8 shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1436491865332-7a6150ed1882?auto=format&fit=crop&q=80&w=800" 
              alt="Airplane in sky" 
              className="rounded-2xl w-full h-[300px] object-cover shadow-xl"
            />
            
            {/* Trusted Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl flex items-center justify-center text-center">
              <div>
                <Award className="w-10 h-10 text-savannah mx-auto" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-widest block mt-1">Trusted</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-kenya-red font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Expertise You Can Trust. Journeys You'll Remember.</h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Based in Kenya, Emmar Travels has built a solid reputation as a premier travel and visa processing agency. We understand that behind every application and ticket is a dream, a career move, or a vital business opportunity. 
            </p>

            <div className="space-y-6">
              {[
                { icon: Target, title: "Precision Visa Processing", desc: "Our unmatched attention to detail means your US, UK, Schengen, or Dubai visa application stands the highest chance of approval." },
                { icon: Award, title: "Proven Excellence", desc: "A strong track record of successful itineraries and satisfied clients across corporate and leisure sectors." },
                { icon: Users, title: "Personalized Service", desc: "You're not just a booking number. We tailor hotel reservations, flight tickets, and chauffeur services to your exact needs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sand rounded-xl flex items-center justify-center text-kenya-green">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
