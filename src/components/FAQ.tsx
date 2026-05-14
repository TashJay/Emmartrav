import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "How long does the US/UK Visa processing take?",
    answer: "Processing times vary by embassy and visa type. While we ensure your documentation is flawless and submitted promptly, the embassy wait times for interviews can range from a few weeks to a few months. We will advise you on the current timelines during consultation."
  },
  {
    question: "Do you guarantee visa approvals?",
    answer: "No reputable agency can guarantee a visa approval, as the final decision rests solely with the consular officer. However, our expertise ensures your application is comprehensive, accurate, and presented in the best possible light to maximize your chances."
  },
  {
    question: "What documents do I need for a Schengen Visa?",
    answer: "Standard requirements include a valid passport, flight itineraries, travel insurance covering €30,000, proof of accommodation, and proof of financial means (bank statements). We will provide a tailored checklist based on your specific travel purpose."
  },
  {
    question: "Do you handle corporate group travel?",
    answer: "Yes, we specialize in corporate travel logistics. From arranging group flights and specialized hotel bookings to executive chauffeur services, we manage the entire itinerary so your team can focus on business."
  },
  {
    question: "Can I book just a flight or hotel without a visa service?",
    answer: "Absolutely. We are a full-service travel agency. Whether you just need a competitive flight ticket, a hotel reservation, or an airport transfer, our logistics team is ready to assist."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-kenya-red font-semibold tracking-wider uppercase text-sm mb-3">Common Questions</h2>
          <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-600">
            Clear, honest answers to help you plan your travel and visa applications with confidence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "border rounded-2xl transition-colors duration-300",
                openIndex === index ? "border-kenya-green bg-green-50/50" : "border-gray-200 bg-white hover:border-gray-300"
              )}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-kenya-green flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
