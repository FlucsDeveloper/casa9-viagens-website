"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  Quote,
  Star,
  ArrowRight,
  Heart,
  Shield,
  Award,
  Users,
  Sparkles,
  Clock,
} from "lucide-react";

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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

interface Testimonial {
  id: string;
  name: string;
  journey: string;
  text: string;
  rating: number;
  avatar: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mariana & Lucas",
    journey: "Toscana Romântica",
    text: "Casa 9 transformou nossas férias em um sonho vivo. Cada detalhe foi pensado com perfeição, desde os vinhedos dourados até as refeições em vilas medievais. Quando retornamos, não sabíamos se era tudo real ou um sonho maravilhoso.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=200&q=90",
    location: "São Paulo, SP",
  },
  {
    id: "2",
    name: "Fernanda Silva",
    journey: "Retiro em Bali",
    text: "Encontrei uma paz que não sabia que estava procurando. A equipe foi incrivelmente atenciosa e criou o ambiente perfeito para reflexão e renovação. Voltei transformada, mais leve e conectada comigo mesma.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=90",
    location: "Rio de Janeiro, RJ",
  },
  {
    id: "3",
    name: "Família Costa",
    journey: "Portugal em Família",
    text: "Nossos filhos adoraram cada momento! Mas mais importante: nos conectamos como família novamente, longe das distrações do dia a dia. Obrigado por essa oportunidade preciosa de criar memórias juntos.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=200&q=90",
    location: "Curitiba, PR",
  },
  {
    id: "4",
    name: "Rafael Santos",
    journey: "Costa Rica Selvagem",
    text: "A adrenalina foi incrível, mas o que realmente ficou foi a sensação de estar profundamente vivo. Recomendo para quem quer se reconectar com a natureza e descobrir do que é capaz.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=90",
    location: "Belo Horizonte, MG",
  },
  {
    id: "5",
    name: "Carolina & Bruno",
    journey: "Ilhas Gregas",
    text: "O pôr do sol em Santorini foi exatamente como sonhávamos, mas melhor. Casa 9 fez a magia acontecer em cada detalhe. Já estamos planejando a próxima viagem com eles!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=200&q=90",
    location: "Brasília, DF",
  },
  {
    id: "6",
    name: "Marta & Roberto",
    journey: "Patagônia Intocada",
    text: "Palavras não conseguem descrever a grandiosidade. Os glaciares, as montanhas, o silêncio profundo... A Casa 9 nos deu a viagem dos sonhos que sempre quisemos fazer.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1509460913899-515f1df34fea?w=200&q=90",
    location: "Porto Alegre, RS",
  },
];

const stats = [
  { number: "500+", label: "Viajantes Felizes", icon: Users },
  { number: "50+", label: "Destinos Incríveis", icon: Award },
  { number: "100%", label: "Satisfação Garantida", icon: Heart },
];

const trustBadges = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Suporte completo durante toda sua viagem",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Parceiros confiáveis e verificados",
  },
  {
    icon: Sparkles,
    title: "Experiências Únicas",
    description: "Completamente customizadas para você",
  },
];

export default function Depoimentos() {
  return (
    <>
      {/* Hero Full-Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1920&q=90"
            alt="Família feliz viajando"
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
              <Heart className="w-4 h-4" />
              Histórias reais
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Histórias de{" "}
              <span className="italic font-light">transformação</span>
              <br />
              <span className="text-accent-terracotta">e alegria.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ouça aqueles que deixaram seus{" "}
              <span className="font-serif italic">corações</span> na Casa 9
              Viagens e voltaram transformados.
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

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
        <div className="container-max">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    <Icon className="w-10 h-10" />
                  </div>
                  <div className="text-6xl font-serif font-bold mb-3">
                    {stat.number}
                  </div>
                  <p className="text-xl text-ocean-50">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gradient-to-b from-neutral-lighter to-sand-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
              O que nossos viajantes dizem
            </h2>
            <p className="text-xl text-neutral-text-light">
              Cada história é única, cada memória é inesquecível
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={fadeInUp}>
                <div className="group relative bg-white rounded-3xl p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Quote icon */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-ocean-500 rounded-2xl flex items-center justify-center shadow-xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-neutral-text-light leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-sand-200 pt-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-ocean-100">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          quality={90}
                        />
                      </div>

                      {/* Info */}
                      <div>
                        <p className="font-bold text-neutral-text text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-ocean-500 font-medium">
                          {testimonial.journey}
                        </p>
                        <p className="text-xs text-neutral-text-lighter mt-0.5">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
              Por que nos confiam?
            </h2>
            <p className="text-lg text-neutral-text-light leading-relaxed">
              Porque entendemos que viajar é um ato vulnerável. Você nos confia
              seus sonhos, seu tempo, seus recursos. Por isso, nos dedicamos
              integralmente a fazer cada experiência perfeita.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={fadeInUp}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-text mb-3">
                    {badge.title}
                  </h3>
                  <p className="text-neutral-text-light">{badge.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=90"
            alt="Casal planejando viagem"
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
              Sua história{" "}
              <span className="italic font-light">pode ser a próxima</span>
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Vamos transformar seus sonhos em memórias inesquecíveis que você
              vai querer contar por uma vida inteira.
            </p>
            <Link href="/contato">
              <button className="px-8 py-4 bg-accent-terracotta hover:bg-accent-warm text-white rounded-xl font-medium text-lg transition-all hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
                Comece sua Jornada
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
