import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Emmar Travels made my US Visa processing incredibly smooth. Their team guided me through every documentation step, and I was approved on my first try. Highly recommended!",
    author: "Sarah Wanjiku",
    role: "Student",
    rating: 5,
  },
  {
    content: "We use Emmar Travels for all our corporate bookings. Their chauffeur service and flight handling are top-notch. It saves our team so much time and stress.",
    author: "David Ochieng",
    role: "Operations Director",
    rating: 5,
  },
  {
    content: "My trip to Dubai was flawless. From the quick visa acquisition to the beautiful hotel they selected, everything felt premium. Best travel agency in Kenya!",
    author: "Grace Mutuku",
    role: "Entrepreneur",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-sand relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-kenya-red) 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <h2 className="text-kenya-green font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900">Loved by Travelers</h3>
          </div>
          <p className="flex-1 text-lg text-gray-600">
            Don't just take our word for it. Here's what our happy clients have to say about their seamless travel experiences with Emmar Travels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col h-full relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 rotate-180" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-savannah text-savannah" />
                ))}
              </div>
              <p className="text-gray-700 italic flex-grow mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-kenya-red">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">{testimonial.author}</h5>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
