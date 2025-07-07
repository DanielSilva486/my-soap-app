// src/app/login/page.tsx
'use client'; // Este componente é do lado do cliente

import { useRouter } from 'next/navigation'; // Para redirecionar o usuário
import { useState } from 'react'; // Para gerenciar o estado dos campos do formulário
import { useTheme } from '@/contexts/ThemeContext'; // Para o toggle de tema (opcional aqui, mas bom para testes)

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Estado para o botão de loading
  const router = useRouter(); // Instância do router para navegação
  const { toggleTheme } = useTheme(); // Hook para alternar o tema

  // Função para lidar com o envio do formulário de login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o recarregamento da página padrão
    setLoading(true); // Ativa o estado de loading

    // Simula uma chamada de API assíncrona com um atraso
    setTimeout(() => {
      console.log('Tentativa de login:', { email, password });
      // ATENÇÃO: Em um ambiente real, você faria uma requisição para um backend
      // que validaria as credenciais no banco de dados.
      // Para este projeto inicial, aceitamos qualquer email/senha para teste.
      router.push('/dashboard'); // Redireciona para o dashboard
      setLoading(false); // Desativa o estado de loading
    }, 1500); // Simula um atraso de 1.5 segundos
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary transition-colors duration-300">
      {/* Container principal para o card de login */}
      <div className="bg-white dark:bg-dark-bg-secondary p-8 rounded-xl shadow-light dark:shadow-dark w-full max-w-md border border-light-border dark:border-dark-border">
        <h2 className="text-3xl font-bold text-center mb-6 text-light-text-primary dark:text-dark-text-primary">Login</h2>

        {/* Botão de toggle de tema - Para fins de demonstração, pode ser movido para o Header */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-bg-secondary dark:bg-dark-bg-primary text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {/* Ícone de sol ou lua, ou um simples texto */}
            ☀️ / 🌙
          </button>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-light-text-secondary dark:text-dark-text-secondary text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-light-text-primary dark:text-dark-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-bg-secondary dark:bg-dark-bg-primary border-light-border dark:border-dark-border transition-colors duration-300"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-light-text-secondary dark:text-dark-text-secondary text-sm font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-light-text-primary dark:text-dark-text-primary mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-bg-secondary dark:bg-dark-bg-primary border-light-border dark:border-dark-border transition-colors duration-300"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-light-text-secondary dark:text-dark-text-secondary text-sm">
              <input type="checkbox" className="mr-2 leading-tight accent-light-primary dark:accent-dark-primary" />
              Lembrar-me
            </label>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-light-primary hover:text-light-accent dark:text-dark-primary dark:hover:text-dark-accent transition-colors duration-300">
              Esqueceu a senha?
            </a>
          </div>
          <button
            type="submit"
            className={`w-full bg-light-primary hover:bg-light-accent dark:bg-dark-primary dark:hover:bg-dark-accent text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <div className="text-center mt-6 text-light-text-secondary dark:text-dark-text-secondary">
          Não tem uma conta?{' '}
          <a href="/register" className="font-bold text-light-primary hover:text-light-accent dark:text-dark-primary dark:hover:text-dark-accent transition-colors duration-300">
            Registre-se
          </a>
        </div>
        {/* Opcional: Login com Google/GitHub */}
        <div className="mt-4 text-center">
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-2">Ou entre com:</p>
            <div className="flex justify-center space-x-4">
                <button className="flex items-center justify-center border border-light-border dark:border-dark-border rounded-lg py-2 px-4 text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-primary transition-colors duration-300">
                    {/* Ícone Google */}
                    Google
                </button>
                <button className="flex items-center justify-center border border-light-border dark:border-dark-border rounded-lg py-2 px-4 text-light-text-primary dark:text-dark-text-primary hover:bg-light-bg-secondary dark:hover:bg-dark-bg-primary transition-colors duration-300">
                    {/* Ícone GitHub */}
                    GitHub
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}