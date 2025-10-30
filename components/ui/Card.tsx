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
      className={`bg-neutral-lighter rounded-2xl border border-sand-200/50 overflow-hidden ${
        hover ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300" : "shadow-md"
      } ${className}`}
    >
      {children}
    </div>
  );
}
