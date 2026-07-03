import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const GlowButton = ({ 
  children, 
  variant = 'primary', 
  className, 
  href, 
  onClick,
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold transition-all duration-300';

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      {...(href && { target: '_blank', rel: 'noopener noreferrer' })}
      {...props}
    >
      {children}
      {Icon && <Icon size={18} />}
    </Component>
  );
};

export default GlowButton;
