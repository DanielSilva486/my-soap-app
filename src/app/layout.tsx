// src/app/layout.tsx
import './globals.css'; // Importa seus estilos globais
import { ThemeProvider } from '@/contexts/ThemeContext'; // Importa o ThemeProvider

// Importe a fonte Inter do Google Fonts se ainda não o fez no globals.css
// Ou adicione o link no head aqui, ou use next/font
// Para simplificar, vou assumir que você está importando via CSS no globals.css
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

export const metadata = {
  title: 'Soap & Perfume Production Control',
  description: 'Application for managing soap and perfume production, ingredients, and costs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Envolve toda a aplicação com o ThemeProvider */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}