// src/components/Input.tsx
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, className, id, ...props }) => {
  const inputId = id || props.name; // Use id ou name como fallback para o id
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={inputId} className="block text-light-text-secondary dark:text-dark-text-secondary text-sm font-semibold mb-2">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-light-text-primary dark:text-dark-text-primary leading-tight focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary bg-light-bg-secondary dark:bg-dark-bg-primary border-light-border dark:border-dark-border transition-colors duration-300 ${className || ''}`}
        {...props}
      />
    </div>
  );
};

export default Input;