import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isAnimated?: boolean;
  variant?: 'default' | 'glass' | 'bordered';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  isAnimated = true,
  variant = 'default',
  hover = true
}) => {
  const baseStyles = 'rounded-lg overflow-hidden';
  
  const variants = {
    default: 'bg-darker',
    glass: 'glass-bg border border-neon-blue/20',
    bordered: 'border-2 border-neon-blue/30 bg-transparent'
  };

  const hoverStyles = hover ? 'hover:border-neon-blue/50 transition-all duration-300' : '';

  const cardContent = (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );

  if (isAnimated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

export default Card;