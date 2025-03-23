import React from 'react';
import { Sparkles, Code2, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="retro-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 retro-grid opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center lg:text-left relative">
          <div className="inline-block mb-4">
            <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff] font-mono">
              COLLECT • TRADE • CREATE
            </span>
          </div>
          
          <div className="relative">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 neon-text tracking-tight">
              BYTE
              <br />
              BAZAAR
            </h1>
            <div className="absolute -top-20 -right-20 w-40 h-40 floating hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80" 
                alt="Decorative"
                className="w-full h-full object-cover rounded-full opacity-75"
              />
            </div>
          </div>

          <p className="text-xl md:text-2xl mb-8 text-[#b4a5cd] max-w-2xl font-light">
            Where Code Meets Art. Trade unique 
            smart contracts and creative innovation.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] rounded-full text-lg font-bold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-[#ff00ff]/25">
              Start Trading
            </button>
            <button className="px-8 py-4 bg-transparent border border-[#ff00ff] rounded-full text-lg font-bold hover:bg-[#ff00ff]/10 transition-all">
              Buy Quality code
            </button>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="h-8 w-8 text-[#ff00ff]" />,
                title: "Unique Assets",
                description: "One-of-a-kind digital collectibles"
              },
              {
                icon: <Code2 className="h-8 w-8 text-[#00ffff]" />,
                title: "Smart Contracts",
                description: "Secure ownership on the blockchain"
              },
              {
                icon: <Zap className="h-8 w-8 text-[#ff00ff]" />,
                title: "Instant Trading",
                description: "Lightning-fast NFT transactions"
              }
            ].map((feature, index) => (
              <div key={index} className="neon-card p-8 rounded-2xl glow-effect">
                <div className="bg-gradient-to-r from-[#ff00ff]/10 to-[#00ffff]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
                  {feature.title}
                </h3>
                <p className="text-[#b4a5cd]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}