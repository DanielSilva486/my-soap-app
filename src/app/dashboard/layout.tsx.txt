// src/app/dashboard/layout.tsx
import React from 'react';
import Sidebar from '@/components/Sidebar'; // Crie este componente a seguir
import Header from '@/components/Header';   // Crie este componente a seguir

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-light-bg-secondary dark:bg-dark-bg-primary transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}