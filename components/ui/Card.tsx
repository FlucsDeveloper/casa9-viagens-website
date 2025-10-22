import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`bg-neutral-lighter rounded-lg border border-sand-200 overflow-hidden ${
        hover ? "hover:shadow-lg transition-shadow duration-300" : "shadow-md"
      } ${className}`}
    >
      {children}
    </div>
  );
}
