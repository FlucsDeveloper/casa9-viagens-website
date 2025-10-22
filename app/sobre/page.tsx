"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  Heart,
  Sparkles,
  Users,
  Map,
  ArrowRight,
  CheckCircle2,
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

export default function Sobre() {
  const values = [
    {
      icon: Heart,
      title: "Autenticidade",
      description:
        "Experiências verdadeiras e essenciais que refletem a verdadeira alma de cada destino.",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      icon: Sparkles,
      title: "Cuidado",
      description:
        "Cada detalhe é pensado com atenção e carinho para sua tranquilidade.",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Personalização",
      description:
        "Viagens sob medida para o seu jeito de ser, seus desejos e seus sonhos.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: Map,
      title: "Memórias",
      description:
        "Momentos que ficam para sempre e histórias que você contará por uma vida.",
      gradient: "from-emerald-400 to-teal-500",
    },
  ];

  const timeline = [
    {
      step: "01",
      title: "Primeiro Contato",
      description:
        "Conhecemos você, seus desejos, sonhos e o que faz seu coração vibrar. Uma conversa sincera sobre o que você busca.",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=90",
    },
    {
      step: "02",
      title: "Curadoria Personalizada",
      description:
        "Criamos um roteiro único, pensando em cada momento e cada detalhe. Cada experiência é escolhida a dedo para você.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=90",
    },
    {
      step: "03",
      title: "Acompanhamento Completo",
      description:
        "Estamos com você antes, durante e depois. Sua segurança é nossa prioridade, sua alegria é nossa meta.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=90",
    },
    {
      step: "04",
      title: "Memórias para Sempre",
      description:
        "Celebramos os momentos vividos e ajudamos a guardar as memórias. O fim da viagem é apenas o começo da história.",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=90",
    },
  ];

  return (
    <>
      {/* Hero Full-Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=90"
            alt="Equipe planejando viagens com paixão"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-text/70 via-neutral-text/50 to-neutral-text/70" />
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
              <Sparkles className="w-4 h-4" />
              Nossa história
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              Transformamos{" "}
              <span className="italic font-light">roteiros</span>
              <br />
              em <span className="text-accent-terracotta">legados.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Casa 9 Viagens não é apenas uma empresa de turismo.{" "}
              <span className="font-serif italic">
                Somos guardiões de sonhos
              </span>{" "}
              e criadores de memórias inesquecíveis.
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

      {/* Story Section - Split Layout */}
      <section className="section-padding bg-neutral-lighter">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-ocean-100 rounded-full text-ocean-600 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Nossa essência
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-6 leading-tight">
                Mais que viagens.
                <br />
                <span className="text-ocean-500">Experiências que ficam.</span>
              </h2>

              <div className="space-y-5 text-lg text-neutral-text-light leading-relaxed">
                <p>
                  Nascemos da crença de que{" "}
                  <span className="font-serif italic text-neutral-text">
                    viajar é mais que se locomover
                  </span>{" "}
                  de um lugar para outro. Viajar é um ato de coragem, de
                  abertura para o novo, de desejo de crescer.
                </p>

                <p>
                  Cada viajante que chega até nós traz consigo histórias, sonhos
                  e esperanças. Nosso compromisso é honrar esses sentimentos,
                  transformando ideias em experiências autênticas que tocam a
                  alma.
                </p>

                <p>
                  Aqui, você não é apenas um cliente. Você é{" "}
                  <span className="font-serif italic text-neutral-text">
                    parte da nossa história
                  </span>
                  , alguém cuja jornada queremos ajudar a tornar verdadeiramente
                  memorável.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=90"
                  alt="Mapa e planejamento de viagem"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>

              {/* Floating card */}
              <motion.div
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-ocean-500" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-neutral-text text-lg mb-1">
                      Desde 2020
                    </p>
                    <p className="text-sm text-neutral-text-light">
                      Criando memórias inesquecíveis
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-br from-sand-50 via-white to-ocean-50">
        <div className="container-max">
          <motion.div
            className="text-center mb-16 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-neutral-text-light">
              Os princípios que nos guiam em cada decisão, em cada viagem
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="group relative bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    {/* Icon with gradient */}
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-neutral-text mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-text-light leading-relaxed">
                      {value.description}
                    </p>

                    {/* Decorative gradient bar */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Process Section */}
      <section className="section-padding bg-neutral-lighter">
        <div className="container-max">
          <motion.div
            className="text-center mb-20 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-neutral-text-light">
              Nosso processo é simples, humano e totalmente focado em você
            </p>
          </motion.div>

          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                >
                  <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      quality={90}
                    />
                  </div>

                  {/* Step number overlay */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-ocean-500 text-white rounded-2xl flex items-center justify-center shadow-xl transform rotate-6">
                    <span className="text-3xl font-serif font-bold">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-neutral-text mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-neutral-text-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 text-ocean-500">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      Compromisso com excelência
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Quote Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=90"
            alt="Montanhas ao amanhecer"
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-600/90 via-ocean-500/85 to-ocean-600/90" />
        </div>

        {/* Content */}
        <div className="container-sm relative z-10 text-center text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              Nossa filosofia
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-relaxed">
              "Viajar não é apenas sair de casa.
              <br />É{" "}
              <span className="italic font-light">sair de si mesmo.</span>"
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              É abraçar o diferente, se permitir mudar, crescer e retornar
              transformado. Na Casa 9 Viagens, ajudamos você nessa jornada de
              transformação.
            </p>

            <p className="text-2xl font-serif italic text-accent-terracotta">
              Aqui, viajar é colecionar boas memórias.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-sand-100 via-sand-50 to-white">
        <div className="container-sm text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-6">
              Pronto para começar{" "}
              <span className="italic font-light">sua história</span> conosco?
            </h2>
            <p className="text-xl text-neutral-text-light mb-10 max-w-2xl mx-auto">
              Entre em contato e vamos criar algo extraordinário juntos. Cada
              grande viagem começa com um simples "olá".
            </p>
            <Link href="/contato">
              <Button variant="primary" size="lg">
                Conversar com um especialista{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
