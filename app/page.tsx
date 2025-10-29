"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CredentialsStrip from "@/components/ui/CredentialsStrip";
import ExperienceCard from "@/components/ui/ExperienceCard";
import FounderCard from "@/components/ui/FounderCard";
import {
  ArrowRight,
  Sparkles,
  Activity,
  Utensils,
  Brain,
  HandHeart,
  Briefcase,
} from "lucide-react";
import { heroImages, backgroundImages } from "@/lib/images";
import { home, experiences, seo } from "@/content";

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
    },
  },
};

export default function Home() {
  // Icons for the 5 Pilares
  const pilaresIcons = [Activity, Utensils, Sparkles, Briefcase, HandHeart];

  const pilaresWithIcons = home.pilares.map((pilar, index) => ({
    ...pilar,
    icon: pilaresIcons[index],
  }));

  // Featured experiences (first 3)
  const featuredExperiences = experiences.slice(0, 3);

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: seo.organization.name,
            description: seo.organization.description,
            founder: {
              "@type": "Person",
              name: seo.organization.founder,
            },
            memberOf: {
              "@type": "Organization",
              name: seo.organization.memberOf,
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.home.url}
            alt={heroImages.home.alt}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
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
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1]"
              style={{
                textShadow:
                  "0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              {home.hero.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 leading-relaxed"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)" }}
            >
              {home.hero.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link href="/experiencias">
                <Button
                  variant="primary"
                  size="lg"
                  className="shadow-2xl hover:shadow-ocean-500/50"
                >
                  Explorar Experiências <ArrowRight className="w-5 h-5 ml-2" />
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

      {/* Credentials Strip */}
      <CredentialsStrip />

      {/* Pilares Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background com imagem relacionada aos pilares */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImages.pilaresSection.url}
            alt={backgroundImages.pilaresSection.alt}
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/97 via-white/95 to-white/97" />
        </div>
        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-ocean-500 uppercase tracking-widest mb-4 block">
              Os 5 Pilares da Saúde Integral
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text max-w-3xl mx-auto mb-4">
              Viagens que nutrem todas as dimensões do ser
            </h2>
            <p className="text-xl text-neutral-text-light max-w-2xl mx-auto">
              Cada experiência é desenhada para tocar diferentes aspectos da sua
              vida
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {pilaresWithIcons.map((pilar, index) => {
              const Icon = pilar.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    hover
                    className="h-full p-8 group hover:shadow-2xl transition-all duration-500 text-center bg-white/80 backdrop-blur-sm border-sand-200/50"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-ocean-100 to-ocean-50 rounded-2xl flex items-center justify-center mb-6 group-hover:from-ocean-500 group-hover:to-ocean-400 group-hover:scale-110 transition-all duration-300 mx-auto shadow-sm">
                      <Icon className="w-8 h-8 text-ocean-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-neutral-text mb-3 group-hover:text-ocean-600 transition-colors">
                      {pilar.title}
                    </h3>
                    <p className="text-neutral-text-light leading-relaxed text-sm">
                      {pilar.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Por que a Casa 9 Section */}
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
              Nossa Diferença
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text max-w-3xl mx-auto mb-4">
              Por que a Casa 9
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {home.why.map((reason, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full p-8 bg-sand-50/50 border-sand-200">
                  <div className="w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center mb-6 text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <p className="text-lg text-neutral-text leading-relaxed">
                    {reason}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Founder Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <FounderCard variant="compact" />
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences Section */}
      <section className="relative section-padding overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-sand-50/50 via-white to-sand-50/50" />

        <div className="container-max relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-ocean-500 uppercase tracking-widest mb-4 block">
              Experiências em Destaque
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text max-w-3xl mx-auto mb-4">
              Jornadas que transformam
            </h2>
            <p className="text-xl text-neutral-text-light max-w-2xl mx-auto">
              Conheça algumas das experiências que criamos com propósito e
              cuidado
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {featuredExperiences.map((experience, index) => (
              <motion.div key={experience.slug} variants={itemVariants}>
                <ExperienceCard
                  slug={experience.slug}
                  title={experience.title}
                  summary={experience.summary}
                  description={experience.description}
                  tags={experience.tags}
                  isGroup={experience.isGroup}
                  details={experience.details}
                  idealFor={experience.idealFor}
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/experiencias">
              <Button variant="primary" size="lg">
                Ver Todas as Experiências{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImages.ctaHome.url}
            alt={backgroundImages.ctaHome.alt}
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
