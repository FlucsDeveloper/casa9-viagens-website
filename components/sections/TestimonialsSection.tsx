"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight, Heart } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  trip: string;
  text: string;
  rating: number;
  image?: string;
  highlight?: string;
  date?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    location: "São Paulo, SP",
    trip: "Retiro em Bali",
    text: "A Casa 9 transformou completamente minha viagem. Cada detalhe foi pensado com tanto carinho que me senti cuidada do início ao fim. Foi muito mais que uma viagem, foi uma jornada de reconexão comigo mesma.",
    rating: 5,
    highlight: "Experiência transformadora",
    date: "Outubro 2024",
  },
  {
    id: 2,
    name: "Carolina Mendes",
    location: "Rio de Janeiro, RJ",
    trip: "Lua de Mel na Toscana",
    text: "Beatriz entendeu exatamente o que queríamos: romance, privacidade e experiências autênticas. Cada restaurante, cada vinhedo, cada momento foi mágico. Nossa lua de mel foi um sonho realizado.",
    rating: 5,
    highlight: "Sonho realizado",
    date: "Setembro 2024",
  },
  {
    id: 3,
    name: "Ana Paula Costa",
    location: "Belo Horizonte, MG",
    trip: "Wellness na Costa Amalfi",
    text: "Precisava desacelerar e a Casa 9 criou o roteiro perfeito. Spa com vista para o mar, yoga ao amanhecer, gastronomia saudável... Voltei renovada e com a energia que precisava.",
    rating: 5,
    highlight: "Renovação completa",
    date: "Agosto 2024",
  },
  {
    id: 4,
    name: "Fernanda Oliveira",
    location: "Brasília, DF",
    trip: "Caminho de Santiago",
    text: "O grupo que a Casa 9 montou foi incrível. Pessoas com propósitos similares, apoio mútuo, momentos de reflexão... Uma experiência que mudou minha vida. Gratidão eterna!",
    rating: 5,
    highlight: "Mudança de vida",
    date: "Julho 2024",
  },
  {
    id: 5,
    name: "Juliana Barros",
    location: "Porto Alegre, RS",
    trip: "Safari no Serengeti",
    text: "Ver a grande migração era um sonho antigo. A Casa 9 não só realizou, mas superou todas as expectativas. Lodge perfeito, guias excepcionais, momentos inesquecíveis com a vida selvagem.",
    rating: 5,
    highlight: "Superou expectativas",
    date: "Junho 2024",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-white to-champagne-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-champagne-200/20 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm text-terracotta-500 rounded-full text-sm font-medium shadow-sm mb-6">
            <Heart className="w-4 h-4" />
            Depoimentos de clientes
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-neutral-text mb-4">
            Histórias que <span className="text-terracotta-400 italic">emocionam</span>
          </h2>

          <p className="text-xl text-neutral-text-light max-w-2xl mx-auto">
            Cada viagem é única, cada memória é eterna. Veja o que nossos viajantes têm a dizer.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-terracotta-400/10 rounded-full flex items-center justify-center">
            <Quote className="w-8 h-8 text-terracotta-400" />
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-terracotta-100 to-champagne-100 rounded-bl-full opacity-20" />

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative"
              >
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < currentTestimonial.rating
                          ? "text-terracotta-400 fill-terracotta-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  {currentTestimonial.highlight && (
                    <span className="ml-3 px-3 py-1 bg-terracotta-50 text-terracotta-600 rounded-full text-xs font-medium">
                      {currentTestimonial.highlight}
                    </span>
                  )}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-neutral-text leading-relaxed mb-8 font-light">
                  <span className="font-serif text-2xl md:text-3xl italic">
                    "{currentTestimonial.text}"
                  </span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-neutral-text">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-text-light">
                      {currentTestimonial.location} • {currentTestimonial.trip}
                    </p>
                    {currentTestimonial.date && (
                      <p className="text-xs text-neutral-text-lighter mt-1">
                        {currentTestimonial.date}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 bg-sand-100 hover:bg-sand-200 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-text" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-sand-100 hover:bg-sand-200 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5 text-neutral-text" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all ${
                  index === currentIndex
                    ? "w-8 h-2 bg-terracotta-400"
                    : "w-2 h-2 bg-sand-200 hover:bg-sand-300"
                } rounded-full`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-sand-50 to-champagne-50 rounded-3xl p-8 md:p-12 shadow-lg border border-sand-200">
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <Image
                src="/logo-casa9.png"
                alt="Casa 9"
                width={64}
                height={64}
                className="object-contain"
              />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-text text-center">
                A Casa 9 Viagens
              </h3>
            </div>
            <p className="text-lg md:text-xl text-neutral-text leading-relaxed">
              <span className="font-semibold text-neutral-text">Curadoria personalizada</span>, <span className="font-semibold text-neutral-text">atendimento dedicado</span> e <span className="font-semibold text-neutral-text">planejamento sob medida</span> para criar <span className="font-semibold text-neutral-text">experiências exclusivas</span> que transformam sua jornada.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}