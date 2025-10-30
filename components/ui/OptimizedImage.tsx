"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  onLoad,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Generate sizes string for responsive images if not provided
  const defaultSizes = fill && !sizes
    ? "(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
    : sizes;

  // Fallback for error state
  const fallbackSrc = "/images/placeholder.jpg";

  return (
    <div className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`}>
      {/* Loading skeleton */}
      {isLoading && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-100 to-sand-100 animate-pulse z-10" />
      )}

      {/* Image with fade-in animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={fill ? "absolute inset-0" : ""}
      >
        <Image
          src={error ? fallbackSrc : src}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          sizes={defaultSizes}
          quality={quality}
          priority={priority}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-400`}
          onLoad={() => {
            setIsLoading(false);
            onLoad?.();
          }}
          onError={() => {
            setError(true);
            setIsLoading(false);
          }}
          loading={priority ? undefined : "lazy"}
        />
      </motion.div>
    </div>
  );
}