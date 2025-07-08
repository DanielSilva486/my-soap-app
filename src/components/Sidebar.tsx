// src/components/Sidebar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Para saber a rota atual

// Você pode usar ícones de uma biblioteca como 'react-icons' ou 'lucide-react'
// Ex: npm install lucide-react
// import { Home, FlaskConical, Box, Package, Settings, User, LogOut } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ReactNode; // Ou use um tipo específico se usar biblioteca de ícones
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, label, isActive }) => (
  <Link href={href} className={`flex items-center p-3 rounded-lg text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200 ${isActive ? 'bg-light-primary text-white dark:bg-dark-primary dark:text-white' : ''}`}>
    <span className={`mr-3 ${isActive ? 'text-white' : 'text-light-text-secondary dark:text-dark-text-secondary'}`}>
        {icon}
    </span>
    <span className={`${isActive ? 'font-bold' : ''}`}>{label}</span>
  </Link>
);

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Para menu responsivo em mobile

  return (
    <>
      {/* Botão para abrir a sidebar em mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-light-bg-secondary dark:bg-dark-bg-primary text-light-text-primary dark:text-dark-text-primary shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Overlay para fechar a sidebar em mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed md:relative flex flex-col w-64 bg-light-bg-primary dark:bg-dark-bg-secondary p-4 shadow-xl md:shadow-none transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-extrabold text-light-primary dark:text-dark-primary">SoapCraft</h1>
        </div>
        <nav className="flex-1">
          <ul>
            <li className="mb-2">
              <NavItem
                href="/dashboard"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
                label="Dashboard"
                isActive={pathname === '/dashboard'}
              />
            </li>
            <li className="mb-2">
              <NavItem
                href="/dashboard/ingredients"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>}
                label="Ingredientes"
                isActive={pathname.startsWith('/dashboard/ingredients')}
              />
            </li>
            <li className="mb-2">
              <NavItem
                href="/dashboard/products"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5z"/><line x1="3" x2="21" y1="7" y2="7"/><path d="M12 11v6"/><path d="M15 14h-6"/></svg>}
                label="Produtos"
                isActive={pathname.startsWith('/dashboard/products')}
              />
            </li>
            <li className="mb-2">
              <NavItem
                href="/dashboard/production"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0 .33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>}
                label="Produção"
                isActive={pathname.startsWith('/dashboard/production')}
              />
            </li>
            {/* Outros links do dashboard aqui */}
            <li className="mb-2">
              <NavItem
                href="/dashboard/settings"
                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.78 1.35a2 2 0 0 0 .73 2.73l.04.02a2 2 0 0 1 .97 1.27c.54 1.9-.4 3.6-1.56 3.6h-.16a2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2h.18a2 2 0 0 1 1.73 1l.25.43a2 2 0 0 1 0 2l-.08.15a2 2 0 0 0 .73 2.73l1.35.78a2 2 0 0 0 2.73-.73l.02-.04a2 2 0 0 1 1.27-.97c1.9-.54 3.6.4 3.6 1.56v.16a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.78-1.35a2 2 0 0 0-.73-2.73l-.04-.02a2 2 0 0 1-.97-1.27c-.54-1.9.4-3.6 1.56-3.6h.16a2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2h-.18a2 2 0 0 1-1.73-1l-.25-.43a2 2 0 0 1 0-2l.08-.15a2 2 0 0 0-.73-2.73l-1.35-.78a2 2 0 0 0-2.73.73l-.02.04a2 2 0 0 1-1.27.97c-1.9.54-3.6-.4-3.6-1.56V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>}
                label="Configurações"
                isActive={pathname.startsWith('/dashboard/settings')}
              />
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <NavItem
            href="#"
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="17 16 22 12 17 8"/><line x1="22" x2="10" y1="12" y2="12"/></svg>}
            label="Sair"
            isActive={false} // Logout não é uma rota ativa
            onClick={() => {
                alert('Simulando logout...');
                // Em um app real, você limparia tokens e redirecionaria para login
                window.location.href = '/login';
            }}
          />
        </div>
      </aside>
    </>
  );
}