'use client'; // Indica que este é um componente do lado do cliente

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Tipagem para o tema
type Theme = 'light' | 'dark';

// Interface para o contexto do tema
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Cria o contexto com um valor inicial undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provedor do tema para envolver a aplicação
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Estado para o tema atual
  const [theme, setTheme] = useState<Theme>('light');

  // Efeito para carregar o tema salvo no localStorage ou detectar preferência do sistema
  useEffect(() => {
    // Verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      // Adiciona/remove a classe 'dark' no elemento <html>
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Se não houver tema salvo, verifica a preferência do sistema
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []); // Executa apenas uma vez no carregamento

  // Função para alternar o tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Salva o novo tema no localStorage
    localStorage.setItem('theme', newTheme);
    // Atualiza a classe 'dark' no elemento <html>
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para consumir o contexto do tema
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Garante que o hook só seja usado dentro do ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};