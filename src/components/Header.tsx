import React from 'react';
import { Code2, Wallet } from 'lucide-react';
import { formatAddress } from '../utils/ethereum';

interface HeaderProps {
  isConnected: boolean;
  address: string | null;
  onConnect: () => void;
}

export default function Header({ isConnected, address, onConnect }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 z-50 bg-[#1a0b2e]/80 backdrop-blur-lg border-b border-[#ff00ff]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-[#ff00ff]" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
              ByteBazaar
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#b4a5cd] hover:text-white transition-colors">Home</a>
            <a href="#" className="text-[#b4a5cd] hover:text-white transition-colors">Explore</a>
            <a href="#listings" className="text-[#b4a5cd] hover:text-white transition-colors">Market</a>
          </div>
          
          <button
            onClick={onConnect}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all ${
              isConnected
                ? 'bg-gradient-to-r from-[#ff00ff]/20 to-[#00ffff]/20 border border-[#ff00ff]/50'
                : 'bg-gradient-to-r from-[#ff00ff] to-[#00ffff] hover:opacity-90'
            }`}
          >
            <Wallet className="h-5 w-5" />
            <span className="font-bold">
              {isConnected ? formatAddress(address!) : 'Connect Wallet'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}