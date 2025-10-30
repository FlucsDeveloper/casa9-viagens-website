import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import { about } from "@/content";

interface FounderCardProps {
  variant?: "compact" | "full";
}

export default function FounderCard({ variant = "compact" }: FounderCardProps) {
  const { founder } = about;

  if (variant === "compact") {
    return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 p-6">
          {/* Image */}
          <div className="relative w-32 h-32 sm:w-full sm:h-full mx-auto sm:mx-0 rounded-xl overflow-hidden">
            <Image
              src={founder.image}
              alt={founder.imageAlt}
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h3 className="text-xl font-serif font-bold text-neutral-text mb-1">
              {founder.name}
            </h3>
            <p className="text-sm text-ocean-600 font-medium mb-3">
              {founder.title}
            </p>
            <p className="text-sm text-neutral-text-light leading-relaxed mb-4 line-clamp-2">
              {founder.bio}
            </p>
            <Link href="/contato" className="inline-block">
              <Button variant="outline" size="sm">
                Agendar conversa <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Full variant for About page
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-12 items-start">
      {/* Image */}
      <div className="relative w-full h-[640px] rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={founder.image}
          alt={founder.imageAlt}
          fill
          className="object-cover"
          quality={90}
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <span className="text-sm font-semibold text-ocean-500 uppercase tracking-widest mb-4 block">
          Fundadora
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-text mb-4">
          {founder.name}
        </h1>
        <p className="text-xl text-ocean-600 font-medium mb-6">
          {founder.title}
        </p>
        <p className="text-lg text-neutral-text-light leading-relaxed mb-8">
          {founder.bio}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/contato">
            <Button variant="primary" size="lg" className="!text-black">
              Agendar conversa <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="#full-story">
            <Button variant="outline" size="lg">
              Ler história completa
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
