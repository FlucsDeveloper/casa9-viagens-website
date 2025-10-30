"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { about } from "@/content";

export default function BiaMinhаJornadaPage() {
  // Split the full story into paragraphs
  const paragraphs = about.full.split("\n\n").filter((p) => p.trim());

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean-50 via-sand-50 to-white">
        <div className="container-max relative z-10 pt-32 pb-16">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Sobre
            </Link>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-neutral-text mb-6 leading-tight">
              Minha Jornada
            </h1>

            <p className="text-xl md:text-2xl text-neutral-text-light leading-relaxed mb-8">
              Tecendo Conexões e Transformando Viagens em Propósito
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-neutral-text-light">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-ocean-500" />
                <span>
                  Por <strong className="text-neutral-text">Bia Castro</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-ocean-500" />
                <span>Fundadora da Casa 9 Viagens</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={about.founder.image}
                alt={about.founder.imageAlt}
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-neutral-text-light leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </article>

            {/* Author Bio Card */}
            <motion.div
              className="mt-16 p-8 bg-sand-50 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-6 items-center">
                <div className="relative w-32 h-32 sm:w-full sm:h-full mx-auto sm:mx-0 rounded-xl overflow-hidden">
                  <Image
                    src={about.founder.image}
                    alt={about.founder.imageAlt}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-text mb-2">
                    {about.founder.name}
                  </h3>
                  <p className="text-ocean-600 font-medium mb-3">
                    {about.founder.title}
                  </p>
                  <p className="text-neutral-text-light leading-relaxed mb-4">
                    {about.founder.bio}
                  </p>
                  <Link href="/contato">
                    <Button variant="primary" size="sm" className="!text-black">
                      Agendar uma conversa
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-serif font-bold text-neutral-text mb-4">
                Pronta para sua jornada transformadora?
              </h3>
              <p className="text-lg text-neutral-text-light mb-6 max-w-2xl mx-auto">
                Vamos criar juntos uma experiência que nutre sua alma e
                transforma sua vida.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/experiencias">
                  <Button variant="primary" size="lg" className="!text-black">
                    Ver experiências
                  </Button>
                </Link>
                <Link href="/contato">
                  <Button variant="outline" size="lg">
                    Entrar em contato
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
