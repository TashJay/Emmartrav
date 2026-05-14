import { IdCard, PlaneTakeoff, Hotel, Car, Briefcase, FileCheck, Earth, Map } from 'lucide-react';

const visaServices = [
  {
    icon: Earth,
    title: "USA & UK Visas",
    description: "Expert guidance for tourist, student, and business visa applications with high success rates.",
  },
  {
    icon: Map,
    title: "Schengen Visas",
    description: "Seamless processing for travel across Europe's border-free Schengen area.",
  },
  {
    icon: FileCheck,
    title: "Dubai Visas",
    description: "Fast-tracked visa processing for your UAE holidays and business trips.",
  },
  {
    icon: IdCard,
    title: "Passport Acquisition",
    description: "Hassle-free assistance with new passport applications and renewals.",
  }
];

const logisticsServices = [
  {
    icon: PlaneTakeoff,
    title: "Flight Tickets",
    description: "Competitive rates on domestic and international flights aboard top-tier airlines.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Comfortable accommodations tailored to your budget worldwide.",
  },
  {
    icon: Car,
    title: "Chauffeur Services",
    description: "Premium airport transfers and private transport for corporate or leisure needs.",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    description: "End-to-end travel management packages for businesses and executives.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-kenya-green font-semibold tracking-wider uppercase text-sm mb-3">Our Core Pillars</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Premium Travel Solutions</h3>
          <p className="text-lg text-gray-600">
            We have refined our expertise in delivering end-to-end travel solutions. From the initial visa consultation to your final destination, Emmar Travels ensures a perfect journey.
          </p>
        </div>

        <div className="mb-16">
          <h4 className="text-2xl font-display font-bold text-kenya-red mb-8 border-b border-gray-100 pb-4">Visa & Documentation Expertise</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaServices.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-sand border border-gray-100 hover:bg-kenya-green hover:shadow-2xl hover:shadow-kenya-green/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-kenya-green" />
                </div>
                <h4 className="text-xl font-display font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-display font-bold text-kenya-red mb-8 border-b border-gray-100 pb-4">Arrangement Logistics</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsServices.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-2xl bg-sand border border-gray-100 hover:bg-kenya-red hover:shadow-2xl hover:shadow-kenya-red/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-kenya-red" />
                </div>
                <h4 className="text-xl font-display font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 group-hover:text-red-50 leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
