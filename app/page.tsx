"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import {
  Heart,
  Users,
  Compass,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  const features = [
    {
      icon: Heart,
      title: "Feito com Amor",
      description:
        "Cada detalhe é pensado como se fosse para alguém especial — porque é.",
    },
    {
      icon: Users,
      title: "Experiências Únicas",
      description:
        "Você não é um número. Sua viagem não será igual a nenhuma outra.",
    },
    {
      icon: Compass,
      title: "Expertise Genuína",
      description:
        "Parceiros locais que conhecem cada segredo, cada história, cada cantinho.",
    },
    {
      icon: Shield,
      title: "Cuidado Total",
      description:
        "Estamos com você antes, durante e depois. Sua tranquilidade é sagrada.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Foi muito mais que uma viagem. Foi um renascimento. Voltamos diferentes.",
      author: "Mariana & Lucas",
      trip: "Toscana",
    },
    {
      quote:
        "Nunca imaginei que viajar sozinha seria tão libertador. Casa 9 me deu asas.",
      author: "Fernanda",
      trip: "Bali",
    },
    {
      quote:
        "Conseguimos nos reconectar como família. As crianças ainda falam disso todos os dias.",
      author: "Família Costa",
      trip: "Portugal",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=90"
            alt="Paisagem serena ao amanhecer"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
        </div>

        {/* Content */}
        <div className="container-max relative z-10 pt-32 pb-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-ocean-600 rounded-full text-sm font-medium shadow-sm">
                <Sparkles className="w-4 h-4" />
                Bem-vindo à Casa 9 Viagens
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-lg"
            >
              Algumas viagens{" "}
              <span className="text-sand-50 italic">passam.</span>
              <br />
              <span className="bg-gradient-to-r from-ocean-300 to-accent-terracotta bg-clip-text text-transparent">
                Outras ficam
              </span>{" "}
              com a gente
              <br />
              para sempre.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md"
            >
              Não criamos roteiros. Criamos{" "}
              <span className="font-serif italic">momentos</span> que você vai
              querer reviver toda vez que fechar os olhos.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link href="/destinos">
                <Button
                  variant="primary"
                  size="lg"
                  className="shadow-2xl hover:shadow-ocean-500/50"
                >
                  Explorar Destinos <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/sobre">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                >
                  Nossa História
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-xs uppercase tracking-widest">Role</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Introduction with Image */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=90"
                alt="Pessoa viajando com calma"
                fill
                className="object-cover"
                quality={90}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-ocean-500 uppercase tracking-widest mb-4 block">
                Nossa Essência
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-6 leading-tight">
                Viagens que tocam
                <br />a alma
              </h2>
              <div className="space-y-4 text-lg text-neutral-text-light leading-relaxed">
                <p>
                  Não vendemos pacotes turísticos. Criamos experiências que se
                  conectam com quem você é, com o que você busca, com os
                  momentos que você quer guardar para sempre.
                </p>
                <p>
                  Cada roteiro nasce de conversas longas, de perguntas
                  cuidadosas, de uma vontade genuína de entender o que faz seu
                  coração vibrar.
                </p>
                <p className="font-serif italic text-ocean-500">
                  Porque viajar não é sobre ir. É sobre se transformar.
                </p>
              </div>
              <Link href="/sobre" className="inline-block mt-8">
                <Button variant="outline" size="lg">
                  Conheça Nossa História
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-b from-sand-50 to-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-ocean-500 uppercase tracking-widest mb-4 block">
              Por que Somos Diferentes
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text max-w-3xl mx-auto">
              O que fazemos é mais que organizar viagens
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card hover className="h-full p-8 group hover:shadow-2xl transition-all duration-500">
                    <div className="w-14 h-14 bg-ocean-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ocean-100 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-ocean-500" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-neutral-text mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-text-light leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-ocean-500 uppercase tracking-widest mb-4 block">
              Histórias Reais
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text">
              Quem viajou, voltou diferente
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-8 bg-gradient-to-br from-sand-50 to-white border-sand-200">
                  <div className="text-ocean-300 mb-4">
                    <svg
                      className="w-10 h-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-lg text-neutral-text italic mb-6 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-bold text-neutral-text">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-ocean-500">{testimonial.trip}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/depoimentos">
              <Button variant="ghost">
                Ler Mais Histórias <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Image */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=90"
            alt="Pôr do sol sereno"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ocean-600/95 to-ocean-500/90" />
        </div>

        <div className="container-sm relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Pronta para criar
              <br />
              memórias inesquecíveis?
            </h2>
            <p className="text-xl md:text-2xl text-ocean-50 mb-10 leading-relaxed">
              Toda grande história começa com um simples{" "}
              <span className="font-serif italic">"olá"</span>.
            </p>
            <Link href="/contato">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-ocean-600 hover:bg-sand-50 shadow-2xl"
              >
                Vamos Conversar <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
