import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, ...props }, ref) => {
    
    // Base styles
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap";
    
    // Variants
    const variants = {
      primary: "btn-glow border-none",
      secondary: "bg-white text-black hover:bg-gray-200 shadow-md",
      outline: "border border-white/20 text-white bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/40",
      ghost: "text-gray-300 hover:text-white bg-transparent hover:bg-white/5",
    };
    
    // Sizes
    const sizes = {
      sm: "text-sm px-6 py-2 rounded-full",
      md: "text-base px-8 py-3 rounded-full",
      lg: "text-[1.1rem] px-10 py-4 rounded-full tracking-wide",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // If an href is provided, render an anchor tag natively avoiding next/link conflicts if just jumping or external
    if (href) {
      return (
        <a 
          href={href} 
          className={combinedClasses} 
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    // Default return button
    return (
      <button 
        className={combinedClasses} 
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
