// src/components/Header.tsx
'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext'; // Importa o hook do tema
import Link from 'next/link';

export default function Header() {
  const { theme, toggleTheme } = useTheme(); // Acessa o tema e a função de toggle

  return (
    <header className="flex justify-between items-center p-4 md:p-6 bg-light-bg-primary dark:bg-dark-bg-secondary border-b border-light-border dark:border-dark-border shadow-sm dark:shadow-md transition-colors duration-300 z-30">
      {/* Título ou Logo - Escondido em mobile quando a sidebar aparece */}
      <h2 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary md:block hidden">Dashboard</h2>

      <div className="flex items-center space-x-4 ml-auto"> {/* Alinha itens à direita */}
        {/* Botão de Notificações (Opcional, futuro) */}
        <button className="p-2 rounded-full text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-primary transition-colors duration-200" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
        </button>

        {/* Toggle de Tema */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-light-bg-secondary dark:bg-dark-bg-primary text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </button>

        {/* Perfil do Usuário */}
        <Link href="/dashboard/profile" className="flex items-center space-x-2 text-light-text-primary dark:text-dark-text-primary">
          <img
            src="https://source.unsplash.com/random/40x40?person" // Imagem aleatória de pessoa
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-light-primary dark:border-dark-primary"
          />
          <span className="font-medium hidden md:block">Olá, Usuário!</span>
        </Link>
      </div>
    </header>
  );
}