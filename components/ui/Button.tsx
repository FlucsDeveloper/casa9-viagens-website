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
  // Base styles applied to all buttons
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 focus-ring";

  const variantStyles = {
    primary:
      "bg-ocean-500 text-white hover:bg-ocean-600 hover:scale-105 shadow-md hover:shadow-lg",
    secondary:
      "bg-white text-black hover:bg-sand-50 hover:scale-105 shadow-sm hover:shadow-md border border-ocean-100",
    outline:
      "bg-transparent border-2 border-ocean-500 text-ocean-600 hover:bg-ocean-50 hover:scale-105",
    ghost:
      "bg-transparent text-neutral-text hover:bg-neutral-lighter hover:scale-105",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-3",
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
