import { useState } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

type Message = { id: number; text: string; sender: 'bot' | 'user'; options?: string[] };

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Jambo! Welcome to Emmar Travels. I'm your digital assistant. How can I help you today?",
      sender: 'bot',
      options: ['Visa Prices', 'Book a Flight', 'Other Inquiry']
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleOptionClick = (option: string) => {
    const newUserMsg: Message = { id: Date.now(), text: option, sender: 'user' };
    setMessages((prev) => [...prev, newUserMsg]);

    setTimeout(() => {
      let botResponse: Message;
      if (option === 'Visa Prices') {
        botResponse = {
          id: Date.now() + 1,
          text: "Visa processing fees vary depending on the destination (US, UK, Schengen, Dubai). Our agency consultation fees are very competitive! For the most accurate price for your specific dates, would you like to chat with one of our agents on WhatsApp?",
          sender: 'bot',
          options: ['Yes, send to WhatsApp', 'No thanks']
        };
      } else if (option === 'Book a Flight') {
        botResponse = {
          id: Date.now() + 1,
          text: "We offer great deals on both domestic and international flights. Let's get you in touch with an agent on WhatsApp to find the best dates and routes.",
          sender: 'bot',
          options: ['Yes, send to WhatsApp', 'No thanks']
        };
      } else if (option === 'Yes, send to WhatsApp') {
        window.open('https://wa.me/254713835278?text=Hello%20Emmar%20Travels,%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank');
        botResponse = {
          id: Date.now() + 1,
          text: "Opening WhatsApp... You can continue the conversation there!",
          sender: 'bot'
        };
      } else {
        botResponse = {
          id: Date.now() + 1,
          text: "Please hold on, or tap the button below to speak directly with our team on WhatsApp.",
          sender: 'bot',
          options: ['Yes, send to WhatsApp']
        };
      }
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newUserMsg: Message = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputText('');

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: "Thanks for your message! To get you the quickest and most accurate response regarding prices or bookings, we can forward this to our live agent on WhatsApp.",
        sender: 'bot',
        options: ['Yes, send to WhatsApp']
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 p-4 rounded-full bg-kenya-green text-white shadow-2xl hover:bg-green-800 transition-all z-50",
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100 bounce-animation"
        )}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-kenya-red p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Emmar Assistant</h4>
                  <p className="text-xs text-white/70">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                <X className="w-5 h-5" />
            </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-[350px] overflow-y-auto bg-gray-50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={cn("flex flex-col max-w-[85%]", msg.sender === 'user' ? "self-end items-end" : "self-start items-start")}>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm shadow-sm",
                    msg.sender === 'user' ? "bg-kenya-red text-white rounded-tr-none" : "bg-white border border-gray-100 text-gray-800 rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                  {msg.options && msg.sender === 'bot' && (
                    <div className="flex flex-col gap-2 mt-2 w-full">
                      {msg.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleOptionClick(opt)}
                          className="bg-white border border-kenya-green text-kenya-green text-xs font-medium py-2 px-3 rounded-xl hover:bg-green-50 transition-colors text-left"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-kenya-red"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-9 h-9 rounded-full bg-kenya-red text-white flex items-center justify-center disabled:opacity-50"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
