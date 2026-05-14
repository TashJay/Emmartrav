import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

export function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } = useForm();

  const onSubmit = async (data: any) => {
    // For Netlify forms, the standard way is submitting a POST request to '/'
    // with the form data. We construct FormData here.
    const formData = new FormData();
    formData.append("form-name", "contact");
    Object.keys(data).forEach(key => formData.append(key, data[key]));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-sand">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-kenya-red font-semibold tracking-wider uppercase text-sm mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Let's Plan Your Next Journey</h3>
            <p className="text-lg text-gray-600 mb-10">
              Whether you need visa assistance, flight bookings, or corporate travel management, our team is ready to help 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-kenya-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                  <a href="tel:+254713835278" className="text-gray-600 hover:text-kenya-red block mt-1">+254 713 835278</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-kenya-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                  <a href="mailto:emmanueletori@yahoo.co.uk" className="text-gray-600 hover:text-kenya-red block mt-1">emmanueletori@yahoo.co.uk</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-kenya-green" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Visit Us</h4>
                  <p className="text-gray-600 mt-1">Nairobi, Kenya<br/>(Call to schedule an appointment)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h4 className="text-2xl font-display font-bold text-gray-900 mb-6">Send a Message</h4>
            
            {/* Hidden field for Netlify Forms */}
            <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
              <input type="text" name="name" />
              <input type="email" name="email" />
              <input type="text" name="subject" />
              <textarea name="message"></textarea>
            </form>

            {isSubmitSuccessful ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center">
                <h5 className="font-bold mb-2">Message Sent Successfully!</h5>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      {...register("name", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kenya-red focus:ring-2 focus:ring-kenya-red/20 outline-none transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kenya-red focus:ring-2 focus:ring-kenya-red/20 outline-none transition-all"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service of Interest</label>
                  <select 
                    {...register("subject")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kenya-red focus:ring-2 focus:ring-kenya-red/20 outline-none transition-all bg-white"
                  >
                    <option value="Visa Processing">Visa Processing (US/UK/Schengen/Dubai)</option>
                    <option value="Flight Tickets">Flight Tickets</option>
                    <option value="Hotel Reservations">Hotel Reservations</option>
                    <option value="Corporate Travel">Corporate Travel</option>
                    <option value="Chauffeur Services">Chauffeur Services</option>
                    <option value="Passport Acquisition">Passport Acquisition</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    {...register("message", { required: true })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kenya-red focus:ring-2 focus:ring-kenya-red/20 outline-none transition-all resize-none"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-kenya-green hover:bg-green-800 text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
