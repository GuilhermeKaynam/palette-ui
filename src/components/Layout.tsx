import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export function Layout() {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              Gerador de Paleta de Cores
            </h1>
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
                aria-label="Alternar tema"
              >
                {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
                aria-label="Menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4`}>
            <Link 
              to="/" 
              className={`w-full md:w-auto px-4 py-2 rounded-lg transition-colors ${
                isActive('/') 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/cores" 
              className={`w-full md:w-auto px-4 py-2 rounded-lg transition-colors ${
                isActive('/cores') 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Todas as Cores
            </Link>
          </nav>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hidden md:flex p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
            aria-label="Alternar tema"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}