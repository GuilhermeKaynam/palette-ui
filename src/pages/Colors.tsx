import React, { useState } from 'react';
import { Copy, Search } from 'lucide-react';
import { Toast } from '../components/Toast';
import type { ToastProps } from '../types';

const COLORS = {
  'Vermelho': ['#FF0000', '#FF1A1A', '#FF3333', '#FF4D4D', '#FF6666', '#FF8080', '#FF9999', '#FFB3B3', '#FFCCCC', '#FFE6E6'],
  'Rosa': ['#FF69B4', '#FF1493', '#FF007F', '#FF77FF', '#FF00FF', '#FFB6C1', '#FFC0CB', '#FFD7E9', '#FFE4E1'],
  'Laranja': ['#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FF4500', '#FFD700', '#FFA07A', '#FFDAB9', '#FFE4B5'],
  'Amarelo': ['#FFFF00', '#FFD700', '#FFF68F', '#FFEC8B', '#FFE4B5', '#FFE4C4', '#FFEBCD', '#FFF8DC', '#FFFACD'],
  'Verde': ['#008000', '#00FF00', '#32CD32', '#90EE90', '#98FB98', '#00FA9A', '#00FF7F', '#7FFF00', '#7CFC00'],
  'Azul': ['#0000FF', '#0000CD', '#4169E1', '#1E90FF', '#00BFFF', '#87CEEB', '#87CEFA', '#ADD8E6', '#B0E0E6'],
  'Roxo': ['#800080', '#8B008B', '#9400D3', '#9932CC', '#BA55D3', '#DA70D6', '#DDA0DD', '#EE82EE', '#FF00FF'],
  'Marrom': ['#8B4513', '#A0522D', '#A52A2A', '#B8860B', '#D2691E', '#CD853F', '#DEB887', '#F4A460', '#DAA520'],
  'Cinza': ['#808080', '#A9A9A9', '#C0C0C0', '#D3D3D3', '#DCDCDC', '#F5F5F5', '#696969', '#778899', '#708090'],
  'Preto e Branco': ['#000000', '#FFFFFF', '#F8F8F8', '#F0F0F0', '#E8E8E8', '#E0E0E0', '#D8D8D8', '#D0D0D0', '#282828']
};

export function Colors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState<ToastProps | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleCopyColor = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setSelectedColor(color);
    setToast({
      message: 'Cor copiada com sucesso!',
      type: 'success',
    });
  };

  const filteredColors = Object.entries(COLORS).filter(([category, colors]) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      category.toLowerCase().includes(searchLower) ||
      colors.some(color => color.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Buscar cores..."
          className="pl-10 w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredColors.map(([category, colors]) => (
        <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => handleCopyColor(color)}
                className="group relative"
              >
                <div
                  className={`h-24 rounded-lg shadow-md transition-transform group-hover:scale-105 ${
                    selectedColor === color ? 'ring-4 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 rounded backdrop-blur-md bg-white/90 dark:bg-black/90 text-sm font-mono flex items-center gap-2 shadow-lg">
                  <span className="text-gray-900 dark:text-gray-100">{color}</span>
                  <Copy size={14} className="text-gray-600 dark:text-gray-400 opacity-50 group-hover:opacity-100" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {filteredColors.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          Nenhuma cor encontrada para "{searchTerm}"
        </div>
      )}

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </div>
  );
}