// src/components/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 ease-in-out';
  let variantStyles = '';
  let sizeStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-light-primary hover:bg-light-accent text-white dark:bg-dark-primary dark:hover:bg-dark-accent';
      break;
    case 'secondary':
      variantStyles = 'bg-light-secondary hover:bg-light-accent text-white dark:bg-dark-secondary dark:hover:bg-dark-accent';
      break;
    case 'accent':
      variantStyles = 'bg-light-accent hover:bg-light-primary text-white dark:bg-dark-accent dark:hover:bg-dark-primary';
      break;
    case 'outline':
      variantStyles = 'bg-transparent border-2 border-light-primary text-light-primary hover:bg-light-primary hover:text-white dark:border-dark-primary dark:text-dark-primary dark:hover:bg-dark-primary dark:hover:text-white';
      break;
    case 'ghost':
      variantStyles = 'bg-transparent text-light-text-primary hover:bg-light-bg-secondary dark:text-dark-text-primary dark:hover:bg-dark-bg-secondary';
      break;
  }

  switch (size) {
    case 'sm':
      sizeStyles = 'py-1 px-3 text-sm';
      break;
    case 'md':
      sizeStyles = 'py-2 px-4 text-base';
      break;
    case 'lg':
      sizeStyles = 'py-3 px-6 text-lg';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;