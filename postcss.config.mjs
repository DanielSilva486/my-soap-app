// postcss.config.mjs

// Importa o plugin oficial do Tailwind CSS para PostCSS
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: {
    [tailwindcss]: {}, // Usa a referência importada do plugin tailwindcss
    [autoprefixer]: {}, // Usa a referência importada do plugin autoprefixer
  },
};