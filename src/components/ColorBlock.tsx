import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface ColorBlockProps {
  color: string;
  onCopy: () => void;
}

export const ColorBlock: React.FC<ColorBlockProps> = ({ color, onCopy }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(color);
    onCopy();
  };

  return (
    <div
      className="flex flex-col items-center justify-end p-4 h-32 rounded-lg transition-transform hover:scale-105"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white/90 dark:bg-gray-800/90 p-2 rounded-lg shadow-lg flex items-center gap-2">
        <span className="font-mono">{color}</span>
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          aria-label="Copiar cor"
        >
          <Copy size={16} />
        </button>
      </div>
    </div>
  );
};