"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  BookOpen,
  Tag,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    id: "1",
    title: "10 Destinos Imprescindíveis para Viajantes de Primeira Viagem",
    excerpt:
      "Descubra os melhores destinos para começar sua jornada pelo mundo com segurança e encantamento. Do acolhedor Portugal às místicas Ilhas Gregas.",
    author: "Marina Silva",
    date: "15 de Outubro, 2024",
    category: "Destinos",
    readTime: "8 min",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=90",
  },
  {
    id: "2",
    title: "Como Preparar sua Mala para uma Viagem Longa",
    excerpt:
      "Dicas práticas e essenciais para empacar inteligentemente e aproveitar ao máximo seu espaço, sem sacrificar o que você realmente precisa.",
    author: "Carlos Mendes",
    date: "10 de Outubro, 2024",
    category: "Dicas",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=90",
  },
  {
    id: "3",
    title: "Viagens Sustentáveis: Como Viajar Respeitando o Planeta",
    excerpt:
      "Aprenda a viajar de forma consciente e contribuir para a preservação do planeta enquanto cria memórias inesquecíveis.",
    author: "Beatriz Costa",
    date: "5 de Outubro, 2024",
    category: "Sustentabilidade",
    readTime: "10 min",
    image:
      "https://images.unsplash.com/photo-1466629437334-b4f6603563c5?w=800&q=90",
  },
  {
    id: "4",
    title: "O Poder Transformador das Viagens Solitárias",
    excerpt:
      "Descubra por que viajar sozinho pode ser a experiência mais enriquecedora da sua vida e como se preparar para essa jornada.",
    author: "Rafael Oliveira",
    date: "30 de Setembro, 2024",
    category: "Experiências",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=90",
  },
  {
    id: "5",
    title: "Gastronomia Local: O Verdadeiro Coração de Cada Destino",
    excerpt:
      "Explore como a comida local pode transformar completamente sua experiência de viagem e conectar você com a cultura autêntica.",
    author: "Juliana Rocha",
    date: "25 de Setembro, 2024",
    category: "Gastronomia",
    readTime: "9 min",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90",
  },
  {
    id: "6",
    title: "Viajando com Crianças: Um Guia Completo para Pais",
    excerpt:
      "Dicas essenciais e testadas para tornar as viagens em família memoráveis, desestressantes e cheias de momentos especiais.",
    author: "Fernanda Lima",
    date: "20 de Setembro, 2024",
    category: "Família",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=90",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero Full-Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=1920&q=90"
            alt="Pessoa lendo em café"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-text/70 via-neutral-text/50 to-neutral-text/80" />
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
              <BookOpen className="w-4 h-4" />
              Blog Casa 9 Viagens
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Histórias que{" "}
              <span className="italic font-light">inspiram</span>
              <br />
              <span className="text-accent-terracotta">aventuras.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dicas, experiências e{" "}
              <span className="font-serif italic">inspiração</span> para
              alimentar sua paixão por viajar.
            </p>
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

      {/* Featured Post */}
      <section className="section-padding bg-gradient-to-b from-neutral-lighter to-white">
        <div className="container-max">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <Image
                    src={posts[0].image}
                    alt={posts[0].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    quality={90}
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-ocean-500 text-white rounded-full text-sm font-bold uppercase flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Destaque
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-ocean-100 text-ocean-600 rounded-full text-sm font-medium mb-4 w-fit">
                    {posts[0].category}
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-text mb-6 leading-tight">
                    {posts[0].title}
                  </h2>

                  <p className="text-lg text-neutral-text-light mb-8 leading-relaxed">
                    {posts[0].excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-text-light mb-8 pb-8 border-b border-sand-200">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {posts[0].author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${posts[0].id}`} className="w-fit">
                    <button className="px-8 py-4 bg-ocean-500 hover:bg-ocean-600 text-white rounded-xl font-medium text-lg transition-all hover:scale-105 flex items-center gap-3 shadow-lg">
                      Ler Artigo
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-sand-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
              Últimos Artigos
            </h2>
            <p className="text-xl text-neutral-text-light">
              Explore nossas histórias e dicas para tornar suas viagens ainda
              mais especiais
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {posts.slice(1).map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Link href={`/blog/${post.id}`}>
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-text/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-ocean-600 rounded-full text-xs font-bold uppercase">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif font-bold text-neutral-text mb-3 group-hover:text-ocean-500 transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-neutral-text-light text-sm mb-6 flex-grow leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="border-t border-sand-200 pt-4 flex items-center justify-between text-xs text-neutral-text-light">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
            alt="Montanhas inspiradoras"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-600/90 via-ocean-500/85 to-ocean-600/90" />
        </div>

        <div className="container-sm relative z-10 text-center text-white py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Inspire-se{" "}
              <span className="italic font-light">semanalmente</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Receba histórias de viagem, dicas exclusivas e destinos
              inspiradores direto no seu email.
            </p>
            <form className="flex gap-4 flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-grow px-6 py-4 rounded-xl text-neutral-text placeholder:text-neutral-text-lighter focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Email para newsletter"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent-terracotta hover:bg-accent-warm text-white rounded-xl font-medium transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Inscrever
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
