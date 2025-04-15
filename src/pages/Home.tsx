import React, { useState, useEffect } from 'react';
import { Heart, Trash2 } from 'lucide-react';
import { ColorBlock } from '../components/ColorBlock';
import { SavedPalette } from '../components/SavedPalette';
import { Toast } from '../components/Toast';
import { generatePalette } from '../utils/colors';
import { savePalette, getPalettes, deletePalette, deleteAllPalettes } from '../utils/storage';
import { ColorPalette, ToastProps } from '../types';

export function Home() {
  const [currentPalette, setCurrentPalette] = useState<string[]>([]);
  const [savedPalettes, setSavedPalettes] = useState<ColorPalette[]>([]);
  const [toast, setToast] = useState<ToastProps | null>(null);

  useEffect(() => {
    setCurrentPalette(generatePalette());
    setSavedPalettes(getPalettes());
  }, []);

  const handleGeneratePalette = () => {
    setCurrentPalette(generatePalette());
  };

  const handleSavePalette = () => {
    const newPalette: ColorPalette = {
      id: crypto.randomUUID(),
      colors: currentPalette,
      createdAt: Date.now(),
    };

    if (savePalette(newPalette)) {
      setSavedPalettes(getPalettes());
      setToast({
        message: 'Paleta salva com sucesso!',
        type: 'success',
      });
    } else {
      setToast({
        message: 'Limite máximo de paletas atingido!',
        type: 'error',
      });
    }
  };

  const handleDeletePalette = (id: string) => {
    deletePalette(id);
    setSavedPalettes(getPalettes());
    setToast({
      message: 'Paleta excluída com sucesso!',
      type: 'success',
    });
  };

  const handleDeleteAll = () => {
    deleteAllPalettes();
    setSavedPalettes([]);
    setToast({
      message: 'Todas as paletas foram excluídas!',
      type: 'success',
    });
  };

  const handleCopyColor = () => {
    setToast({
      message: 'Cor copiada com sucesso!',
      type: 'success',
    });
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          {currentPalette.map((color, index) => (
            <ColorBlock key={index} color={color} onCopy={handleCopyColor} />
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleGeneratePalette}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Gerar Paleta
          </button>
          <button
            onClick={handleSavePalette}
            className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <Heart size={20} /> Salvar Paleta
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Paletas Favoritas
          </h2>
          {savedPalettes.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="flex items-center gap-2 text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} /> Excluir Todas
            </button>
          )}
        </div>

        {savedPalettes.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 py-8">
            Nenhuma paleta salva ainda. Gere e salve algumas paletas!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedPalettes.map((palette) => (
              <SavedPalette
                key={palette.id}
                palette={palette}
                onDelete={handleDeletePalette}
              />
            ))}
          </div>
        )}
      </div>

      {toast && (
        <Toast {...toast} onClose={() => setToast(null)} />
      )}
    </>
  );
}