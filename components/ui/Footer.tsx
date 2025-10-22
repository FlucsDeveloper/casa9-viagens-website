"use client";

import Link from "next/link";
import { Mail, Phone, Instagram, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-sand-50 to-sand-100 mt-32">
      {/* Main Footer */}
      <div className="container-max pt-20 pb-12">
        {/* Top Section - Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-sand-200">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-ocean-500 rounded-xl flex items-center justify-center group-hover:bg-ocean-600 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-serif font-bold text-neutral-text block">
                  Casa 9 Viagens
                </span>
                <span className="text-xs text-neutral-text-light uppercase tracking-wider">
                  Memórias que ficam
                </span>
              </div>
            </Link>
            <p className="text-neutral-text-light leading-relaxed mb-6 max-w-md">
              Transformamos roteiros em memórias inesquecíveis. Cada viagem é
              uma história única, pensada com cuidado e amor.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/casa9.viagens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-sand-200 flex items-center justify-center text-neutral-text hover:text-ocean-500 hover:border-ocean-500 transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@casa9viagens.com"
                className="w-10 h-10 rounded-full bg-white border border-sand-200 flex items-center justify-center text-neutral-text hover:text-ocean-500 hover:border-ocean-500 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-sand-200 flex items-center justify-center text-neutral-text hover:text-ocean-500 hover:border-ocean-500 transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:pl-12">
            <h3 className="text-xl font-serif font-bold text-neutral-text mb-3">
              Inspire-se semanalmente
            </h3>
            <p className="text-neutral-text-light mb-6">
              Receba histórias de viagem, dicas exclusivas e destinos
              inspiradores direto no seu email.
            </p>
            <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 bg-white border border-sand-200 rounded-xl text-neutral-text placeholder:text-neutral-text-lighter focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 transition-all"
                aria-label="Email para newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-ocean-500 text-white rounded-xl font-medium hover:bg-ocean-600 transition-all hover:scale-105 whitespace-nowrap"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Explorar */}
          <div>
            <h4 className="text-sm font-bold text-neutral-text uppercase tracking-wider mb-4">
              Explorar
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Destinos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiências */}
          <div>
            <h4 className="text-sm font-bold text-neutral-text uppercase tracking-wider mb-4">
              Experiências
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/destinos?categoria=romantica"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Românticas
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos?categoria=aventura"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Aventura
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos?categoria=bem-estar"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Bem-estar
                </Link>
              </li>
              <li>
                <Link
                  href="/destinos?categoria=familia"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Em Família
                </Link>
              </li>
            </ul>
          </div>

          {/* Conheça */}
          <div>
            <h4 className="text-sm font-bold text-neutral-text uppercase tracking-wider mb-4">
              Conheça
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/depoimentos"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre#processo"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre#valores"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Nossos Valores
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-sm font-bold text-neutral-text uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@casa9viagens.com"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-neutral-text-light hover:text-ocean-500 transition-colors text-sm"
                >
                  Formulário
                </Link>
              </li>
              <li className="text-xs text-neutral-text-lighter pt-2">
                Seg-Sex: 9h-18h
                <br />
                Sáb: 10h-14h
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-sand-200">
          {/* Poetic Quote */}
          <div className="text-center mb-8">
            <p className="text-2xl md:text-3xl font-serif italic text-neutral-text mb-2 leading-relaxed">
              "Aqui, viajar é colecionar boas memórias."
            </p>
            <div className="flex items-center justify-center gap-2 text-ocean-500 mt-4">
              <Heart className="w-5 h-5 fill-current" />
              <span className="text-sm text-neutral-text-light">
                Feito com amor
              </span>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-text-lighter">
            <p>
              © {currentYear} Casa 9 Viagens. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacidade"
                className="hover:text-ocean-500 transition-colors"
              >
                Privacidade
              </Link>
              <Link
                href="/termos"
                className="hover:text-ocean-500 transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
