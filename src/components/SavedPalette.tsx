import React from 'react';
import { Trash } from 'lucide-react';
import { ColorPalette } from '../types';

interface SavedPaletteProps {
  palette: ColorPalette;
  onDelete: (id: string) => void;
}

export const SavedPalette: React.FC<SavedPaletteProps> = ({ palette, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <div className="flex gap-1 mb-2">
        {palette.colors.map((color, index) => (
          <div
            key={index}
            className="flex-1 h-12 rounded"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {new Date(palette.createdAt).toLocaleDateString()}
        </span>
        <button
          onClick={() => onDelete(palette.id)}
          className="text-red-500 hover:text-red-600 p-1"
          aria-label="Excluir paleta"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};