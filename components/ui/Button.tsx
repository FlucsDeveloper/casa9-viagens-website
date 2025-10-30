import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  // Base styles with luxury refinements
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-terracotta-400 to-terracotta-500 text-neutral-text hover:from-terracotta-500 hover:to-terracotta-600 hover:scale-[1.02] shadow-lg hover:shadow-xl focus:ring-terracotta-400",
    secondary:
      "bg-champagne-200 text-neutral-text hover:bg-champagne-300 hover:scale-[1.02] shadow-sm hover:shadow-md border border-champagne-300/50 focus:ring-champagne-400",
    outline:
      "bg-transparent border-2 border-terracotta-400 text-terracotta-500 hover:bg-terracotta-50 hover:scale-[1.02] focus:ring-terracotta-400",
    ghost:
      "bg-transparent text-neutral-text hover:bg-sand-100 hover:scale-[1.02] focus:ring-sand-300",
  };

  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-3.5 text-base gap-2.5",
    lg: "px-9 py-4 text-lg gap-3",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
