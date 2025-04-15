import { ColorPalette } from '../types';

const STORAGE_KEY = '@paletas-favoritas';
const MAX_PALETTES = 20;

export const savePalette = (palette: ColorPalette): boolean => {
  const palettes = getPalettes();
  
  if (palettes.length >= MAX_PALETTES) {
    return false;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...palettes, palette]));
  return true;
};

export const getPalettes = (): ColorPalette[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const deletePalette = (id: string): void => {
  const palettes = getPalettes();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(palettes.filter((p) => p.id !== id))
  );
};

export const deleteAllPalettes = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};