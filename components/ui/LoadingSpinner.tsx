"use client";

import { motion } from "framer-motion";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function LoadingSpinner({
  size = "md",
  color = "terracotta",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const colorClasses = {
    terracotta: "text-terracotta-400",
    champagne: "text-champagne-400",
    white: "text-white",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="currentColor"
            opacity="0.2"
          />
          <path
            d="M12 2C6.48 2 2 6.48 2 12h2c0-4.41 3.59-8 8-8V2z"
            fill="currentColor"
          />
        </svg>
      </motion.div>
    </div>
  );
}