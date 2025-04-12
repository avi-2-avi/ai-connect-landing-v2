
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted', { email, message });
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-soft-purple">
        Contact Me
      </h2>
      <form 
        onSubmit={handleSubmit} 
        className="max-w-md mx-auto bg-soft-blue/10 p-8 rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-600">
            Email
          </label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-soft-purple"
            required 
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-gray-600">
            Message
          </label>
          <textarea 
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-soft-purple"
            rows={4}
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full flex items-center justify-center bg-soft-purple text-white py-3 rounded-full hover:bg-opacity-90 transition-colors"
        >
          Send Message <Send className="ml-2" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
