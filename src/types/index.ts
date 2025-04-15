export interface ColorPalette {
  id: string;
  colors: string[];
  name?: string;
  createdAt: number;
}

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
}