"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Heart,
  Mountain,
  Compass,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

interface Destination {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  highlights: string[];
  featured?: boolean;
}

const destinations: Destination[] = [
  {
    id: "1",
    title: "Toscana Romântica",
    category: "Romântica",
    description:
      "Mergulhe nos vilarejos medievais, vinhedos dourados e suntuosos pôr do sol que definem a essência italiana.",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=90",
    location: "Itália",
    highlights: ["Vinhas", "Gastronomia", "Arte", "Paisagens"],
    featured: true,
  },
  {
    id: "2",
    title: "Ilhas Gregas",
    category: "Romântica",
    description:
      "Explore ilhas idílicas com casarões brancos, águas cristalinas e inesquecíveis pôr do sol no mar Egeu.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=90",
    location: "Grécia",
    highlights: ["Praias", "História", "Culinária", "Romance"],
  },
  {
    id: "3",
    title: "Paris Encantadora",
    category: "Romântica",
    description:
      "A cidade do amor espera por você com seus museus, cafés charmosos e noites mágicas à beira do Sena.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=90",
    location: "França",
    highlights: ["Arquitetura", "Museus", "Culinária", "Cultura"],
  },
  {
    id: "4",
    title: "Costa Rica Selvagem",
    category: "Aventura",
    description:
      "Deslumbre-se com a biodiversidade exuberante, rafting intenso e caminhadas em florestas tropicais.",
    image:
      "https://images.unsplash.com/photo-1621424422667-0dfdd4a62c9b?w=800&q=90",
    location: "Costa Rica",
    highlights: ["Natureza", "Aventura", "Biodiversidade", "Adrenalina"],
    featured: true,
  },
  {
    id: "5",
    title: "Nova Zelândia Épica",
    category: "Aventura",
    description:
      "Atravesse paisagens de tirar o fôlego, de montanhas nevadas a fiordes cristalinos em uma jornada épica.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=90",
    location: "Nova Zelândia",
    highlights: ["Montanhas", "Trilhas", "Fiordes", "Natureza Selvagem"],
  },
  {
    id: "6",
    title: "Patagônia Intocada",
    category: "Aventura",
    description:
      "Desbrave a última fronteira da América do Sul com glaciares majestosos, lagos turquesas e céus infinitos.",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=90",
    location: "Argentina & Chile",
    highlights: ["Glaciares", "Trekking", "Paisagens", "Isolamento"],
  },
  {
    id: "7",
    title: "Retiro em Bali",
    category: "Bem-estar",
    description:
      "Encontre paz e renovação profunda em templos antigos, praias paradisíacas e retiros de yoga autênticos.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=90",
    location: "Indonésia",
    highlights: ["Yoga", "Espiritualidade", "Praias", "Serenidade"],
  },
  {
    id: "8",
    title: "Tailândia Contemplativa",
    category: "Bem-estar",
    description:
      "Medite com monges budistas, explore templos dourados e experimente terapias holísticas ancestrais.",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&q=90",
    location: "Tailândia",
    highlights: ["Meditação", "Templos", "Wellness", "Cultura"],
    featured: true,
  },
  {
    id: "9",
    title: "Alpes Suíços",
    category: "Bem-estar",
    description:
      "Descubra refúgios exclusivos nos Alpes com spas de luxo, ar puro das montanhas e vistas de conto de fadas.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7793b6591205?w=800&q=90",
    location: "Suíça",
    highlights: ["Montanhas", "Spas", "Relaxamento", "Luxo"],
  },
  {
    id: "10",
    title: "Magia em Orlando",
    category: "Família",
    description:
      "Crie memórias mágicas inesquecíveis com parques temáticos, shows incríveis e diversão para toda a família.",
    image:
      "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?w=800&q=90",
    location: "Flórida, EUA",
    highlights: ["Parques", "Diversão", "Família", "Magia"],
  },
  {
    id: "11",
    title: "Portugal em Família",
    category: "Família",
    description:
      "Explore castelos medievais encantadores, praias douradas e cidades coloridas com segurança e muito charme.",
    image:
      "https://images.unsplash.com/photo-1555881286-cf2e3f3a5e50?w=800&q=90",
    location: "Portugal",
    highlights: ["Castelos", "Praias", "Cidades", "Segurança"],
  },
  {
    id: "12",
    title: "Galápagos Educativa",
    category: "Família",
    description:
      "Aprenda sobre a fauna mais única do planeta em uma experiência educativa e absolutamente transformadora.",
    image:
      "https://images.unsplash.com/photo-1587059223286-47f2e36c8b8b?w=800&q=90",
    location: "Equador",
    highlights: ["Vida Selvagem", "Educação", "Natureza", "Exclusividade"],
  },
];

const categoryIcons = {
  Romântica: Heart,
  Aventura: Mountain,
  "Bem-estar": Sparkles,
  Família: Compass,
};

export default function Destinos() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = ["Romântica", "Aventura", "Bem-estar", "Família"];

  const filtered =
    selectedCategory === null
      ? destinations
      : destinations.filter((d) => d.category === selectedCategory);

  return (
    <>
      {/* Hero Full-Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=90"
            alt="Destinos ao redor do mundo"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-text/60 via-neutral-text/40 to-neutral-text/70" />
        </div>

        {/* Content */}
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="w-4 h-4" />
              Explore o mundo
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Destinos que{" "}
              <span className="italic font-light">inspiram</span>
              <br />
              <span className="text-accent-terracotta">transformam.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Conheça os destinos que selecionamos especialmente para
              transformar seus sonhos em{" "}
              <span className="font-serif italic">realidade viva.</span>
            </p>

            {/* Quick category pills */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      window.scrollTo({ top: 800, behavior: "smooth" });
                    }}
                    className="group px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium transition-all hover:scale-105"
                  >
                    <Icon className="w-4 h-4 inline-block mr-2" />
                    {category}
                  </button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-gradient-to-b from-neutral-lighter to-sand-50">
        <div className="container-max">
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-ocean-500 text-white shadow-lg scale-105"
                  : "bg-white text-neutral-text hover:bg-ocean-50 border border-sand-200"
              }`}
            >
              Todos
              <span className="ml-2 text-sm opacity-70">
                ({destinations.length})
              </span>
            </button>

            {categories.map((category) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              const count = destinations.filter((d) => d.category === category)
                .length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-ocean-500 text-white shadow-lg scale-105"
                      : "bg-white text-neutral-text hover:bg-ocean-50 border border-sand-200"
                  }`}
                >
                  <Icon className="w-4 h-4 inline-block mr-2" />
                  {category}
                  <span className="ml-2 text-sm opacity-70">({count})</span>
                </button>
              );
            })}
          </motion.div>

          {/* Destinations Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              key={selectedCategory || "all"}
            >
              {filtered.map((destination) => (
                <motion.div key={destination.id} variants={fadeInUp}>
                  <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* Image with hover overlay */}
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={destination.image}
                        alt={destination.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        quality={90}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-text/80 via-neutral-text/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-ocean-600 text-sm font-bold flex items-center gap-2">
                        {React.createElement(
                          categoryIcons[
                            destination.category as keyof typeof categoryIcons
                          ],
                          { className: "w-4 h-4" }
                        )}
                        {destination.category}
                      </div>

                      {/* Featured badge */}
                      {destination.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent-terracotta text-white rounded-full text-xs font-bold">
                          Destacado
                        </div>
                      )}

                      {/* Location on hover */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {destination.location}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-serif font-bold text-neutral-text mb-3 group-hover:text-ocean-500 transition-colors">
                        {destination.title}
                      </h3>

                      <p className="text-neutral-text-light leading-relaxed mb-4 flex-grow">
                        {destination.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {destination.highlights.slice(0, 3).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-sand-100 text-neutral-text px-3 py-1.5 rounded-full font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                        {destination.highlights.length > 3 && (
                          <span className="text-xs bg-ocean-100 text-ocean-600 px-3 py-1.5 rounded-full font-medium">
                            +{destination.highlights.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <Link href="/contato" className="w-full">
                        <button className="w-full px-6 py-3 bg-ocean-500 hover:bg-ocean-600 text-white rounded-xl font-medium transition-all hover:scale-105 flex items-center justify-center gap-2 group/btn">
                          Criar esta Experiência
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-xl text-neutral-text-light">
                Nenhum destino encontrado nesta categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=90"
            alt="Viajante contemplando paisagem"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-600/90 via-ocean-500/85 to-ocean-600/90" />
        </div>

        {/* Content */}
        <div className="container-sm relative z-10 text-center text-white py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Seu destino ideal{" "}
              <span className="italic font-light">está por aqui</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Não encontrou exatamente o que procura? Vamos criar uma
              experiência totalmente customizada, pensada exclusivamente para
              você.
            </p>
            <Link href="/contato">
              <button className="px-8 py-4 bg-accent-terracotta hover:bg-accent-warm text-white rounded-xl font-medium text-lg transition-all hover:scale-105 shadow-xl">
                Converse com um Especialista
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
