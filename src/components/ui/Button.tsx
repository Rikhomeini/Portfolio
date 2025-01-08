import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isAnimated?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isAnimated = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-neon-blue/20 border-2 border-neon-blue text-white hover:bg-neon-blue/30 shadow-neon-blue/50',
    secondary: 'bg-transparent border-2 border-white/20 text-white hover:border-white/40',
    outline: 'bg-transparent border-2 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonContent = (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  if (isAnimated) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonContent}
      </motion.div>
    );
  }

  return buttonContent;
};

export default Button;