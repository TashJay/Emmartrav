/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { BlogPreview } from './components/BlogPreview';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-sand overflow-x-hidden selection:bg-kenya-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
