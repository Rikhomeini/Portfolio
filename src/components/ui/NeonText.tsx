import React from 'react';
import { motion } from 'framer-motion';

interface NeonTextProps {
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  isAnimated?: boolean;
}

const NeonText: React.FC<NeonTextProps> = ({
  children,
  tag = 'div',
  className = '',
  intensity = 'medium',
  isAnimated = false
}) => {
  const intensityStyles = {
    low: 'text-neon-blue drop-shadow-[0_0_3px_rgba(0,243,255,0.5)]',
    medium: 'neon-text',
    high: 'text-neon-blue drop-shadow-[0_0_5px_rgba(0,243,255,0.8)] drop-shadow-[0_0_20px_rgba(0,243,255,0.4)]'
  };

  const Tag = tag as keyof JSX.IntrinsicElements;
  
  const content = (
    <Tag className={`${intensityStyles[intensity]} ${className}`}>
      {children}
    </Tag>
  );

  if (isAnimated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default NeonText;