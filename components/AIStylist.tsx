import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Loader2, Bot } from 'lucide-react';
import { getStylistAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIStylist: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour. I am Lumi, your personal jewelry stylist. Tell me about the occasion or your style preferences, and I shall curate the perfect suggestion for you." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await getStylistAdvice(userMessage);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="stylist" className="py-24 bg-charcoal-900 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 text-gold-400 mb-4 border border-gold-400/30 px-3 py-1 rounded-full text-xs tracking-widest uppercase">
            <Sparkles size={14} />
            <span>AI Powered Concierge</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Unsure what to choose? <br/>
            <span className="text-gold-300 italic">Ask Lumi.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Our intelligent styling assistant helps you navigate the world of high jewelry. 
            Whether you need a gift for a ruby anniversary or a statement piece for a gala, 
            Lumi offers bespoke advice instantly.
          </p>
          <div className="flex space-x-4">
             <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-charcoal-900 flex items-center justify-center text-xs">A</div>
                <div className="w-10 h-10 rounded-full bg-gray-600 border-2 border-charcoal-900 flex items-center justify-center text-xs">B</div>
                <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-charcoal-900 flex items-center justify-center text-xs">C</div>
             </div>
             <p className="text-sm text-gray-500 flex items-center">Join 10k+ satisfied collectors.</p>
          </div>
        </div>

        <div className="bg-charcoal-800 border border-gold-600/20 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-charcoal-900 p-4 border-b border-gray-800 flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
              <Bot size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">Lumi</h3>
              <p className="text-xs text-gold-400 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                Online & Ready
              </p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-charcoal-800 to-charcoal-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-gold-600 text-white rounded-br-none' 
                      : 'bg-charcoal-700 text-gray-200 border border-gray-600 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-charcoal-700 rounded-2xl rounded-bl-none px-4 py-3 border border-gray-600">
                  <Loader2 className="animate-spin text-gold-400" size={20} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-charcoal-900 border-t border-gray-800">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ex: I need a necklace for a summer wedding..."
                className="w-full bg-charcoal-800 text-white border border-gray-700 rounded-full pl-6 pr-12 py-3 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder-gray-500"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-charcoal-900 hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;