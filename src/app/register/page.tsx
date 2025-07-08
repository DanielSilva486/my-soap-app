// src/app/register/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext'; // Para o toggle de tema

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toggleTheme } = useTheme();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      setLoading(false);
      return;
    }
    if (!agreedToTerms) {
      alert('Você deve aceitar os termos e condições!');
      setLoading(false);
      return;
    }

    // Simula uma chamada de API para registro
    setTimeout(() => {
      console.log('Tentativa de registro:', { name, email, password });
      // Em um ambiente real, você criaria o usuário no banco de dados aqui.
      alert('Cadastro realizado com sucesso! Faça login para continuar.');
      router.push('/login'); // Redireciona para a página de login
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light-bg-primary dark:bg-dark-bg-primary transition-colors duration-300">
      <div className="bg-white dark:bg-dark-bg-secondary p-8 rounded-xl shadow-light dark:shadow-dark w-full max-w-md border border-light-border dark:border-dark-border">
        <h2 className="text-3xl font-bold text-center mb-6 text-light-text-primary dark:text-dark-text-primary">Registrar</h2>

        {/* Botão de toggle de tema */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-light-bg-secondary dark:bg-dark-bg-primary text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-300"
            aria-label="Toggle theme"
          >
            ☀️ / 🌙
          </button>
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-light-text-secondary dark:text-dark-text-secondary text-sm font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-light-text-primary dark:text-dark-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-bg-secondary dark:bg-dark-bg-primary border-light-border dark:border-dark-border transition-colors duration-300"
              placeholder="Seu Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-light-text-secondary dark:text-dark-text-secondary text-sm font-semibold mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-light-text-primary dark:text-dark-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-bg-secondary dark:bg-dark-bg-primary border-light-border dark:border-dark-border transition-colors duration-300"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Opcional: Feedback de força da senha */}
            {password.length > 0 && (
              <p className={`text-xs mt-1 ${password.length < 6 ? 'text-red-500' : 'text-light-secondary'}`}>
                {password.length < 6 ? 'Senha muito curta' : 'Senha forte!'}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-light-text-secondary dark:text-dark-text-secondary text-sm font-semibold mb-2">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-light-text-primary dark:text-dark-text-primary mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-bg-secondary dark:bg-dark-bg-primary border-light-border dark:border-dark-border transition-colors duration-300"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {password !== confirmPassword && confirmPassword.length > 0 && (
              <p className="text-xs text-red-500 mt-1">As senhas não coincidem!</p>
            )}
          </div>
          <div className="mb-6">
            <label className="flex items-center text-light-text-secondary dark:text-dark-text-secondary text-sm">
              <input
                type="checkbox"
                className="mr-2 leading-tight accent-light-primary dark:accent-dark-primary"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              Concordo com os <a href="#" className="font-bold text-light-primary hover:text-light-accent dark:text-dark-primary dark:hover:text-dark-accent ml-1">Termos e Condições</a>
            </label>
          </div>
          <button
            type="submit"
            className={`w-full bg-light-primary hover:bg-light-accent dark:bg-dark-primary dark:hover:bg-dark-accent text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 ${loading || !agreedToTerms || password !== confirmPassword ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading || !agreedToTerms || password !== confirmPassword}
          >
            {loading ? 'Registrando...' : 'Registrar'}
          </button>
        </form>
        <div className="text-center mt-6 text-light-text-secondary dark:text-dark-text-secondary">
          Já tem uma conta?{' '}
          <a href="/login" className="font-bold text-light-primary hover:text-light-accent dark:text-dark-primary dark:hover:text-dark-accent transition-colors duration-300">
            Login
          </a>
        </div>
      </div>
    </div>
  );
}