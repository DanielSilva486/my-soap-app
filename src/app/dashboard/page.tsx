// src/app/dashboard/page.tsx
import React from 'react';
import Card from '@/components/Card'; // Importa o componente Card

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-8 text-light-text-primary dark:text-dark-text-primary">Visão Geral do Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card de Ingredientes */}
        <Card>
          <h2 className="text-xl font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">Total de Ingredientes</h2>
          <p className="text-4xl font-extrabold text-light-primary dark:text-dark-primary">125</p>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">itens disponíveis</p>
        </Card>

        {/* Card de Produtos */}
        <Card>
          <h2 className="text-xl font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">Produtos Registrados</h2>
          <p className="text-4xl font-extrabold text-light-secondary dark:text-dark-secondary">45</p>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">diferentes produtos</p>
        </Card>

        {/* Card de Produções Recentes */}
        <Card>
          <h2 className="text-xl font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">Produções no Mês</h2>
          <p className="text-4xl font-extrabold text-light-accent dark:text-dark-accent">18</p>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-2">produções realizadas</p>
        </Card>

        {/* Adicione mais cards de estatísticas ou gráficos aqui */}
        <Card className="md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">Atividade Recente</h2>
            <ul className="space-y-3">
                <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                    <span className="text-light-secondary dark:text-dark-secondary mr-3">•</span> Nova produção de Sabonete de Lavanda (20 unidades)
                    <span className="ml-auto text-sm">2 horas atrás</span>
                </li>
                <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                    <span className="text-light-primary dark:text-dark-primary mr-3">•</span> Ingrediente "Óleo de Jojoba" atualizado
                    <span className="ml-auto text-sm">Ontem</span>
                </li>
                <li className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                    <span className="text-light-accent dark:text-dark-accent mr-3">•</span> Novo produto "Perfume Cítrico" adicionado
                    <span className="ml-auto text-sm">3 dias atrás</span>
                </li>
            </ul>
        </Card>

        {/* Exemplo de gráfico - Pode ser um placeholder por enquanto */}
        <Card className="md:col-span-2 lg:col-span-3 h-80 flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary">
            Gráfico de Custos de Produção (Implementar com biblioteca de gráficos)
        </Card>

      </div>
    </div>
  );
}