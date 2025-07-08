// src/components/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white dark:bg-dark-bg-secondary p-6 rounded-xl shadow-light dark:shadow-dark border border-light-border dark:border-dark-border transition-colors duration-300 ${className || ''}`}>
      {children}
    </div>
  );
};

export default Card;