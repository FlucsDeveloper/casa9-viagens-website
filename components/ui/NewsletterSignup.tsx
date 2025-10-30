"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

interface NewsletterSignupProps {
  variant?: "inline" | "popup" | "section";
  title?: string;
  description?: string;
}

export default function NewsletterSignup({
  variant = "section",
  title = "Junte-se à nossa comunidade exclusiva",
  description = "Receba inspirações de viagem, ofertas especiais e conteúdo exclusivo sobre experiências transformadoras.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, insira um e-mail válido");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");

        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError(result.message || "Erro ao cadastrar. Tente novamente.");
      }
    } catch (err) {
      setError("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === "inline") {
    return (
      <div className="bg-gradient-to-br from-champagne-100 to-sand-100 rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-terracotta-400 rounded-2xl flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-serif font-bold text-neutral-text">
            Newsletter Casa 9
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              disabled={isSubmitting || isSubmitted}
              className="w-full px-5 py-3.5 pr-32 bg-white rounded-2xl border border-champagne-300/50 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition-all text-neutral-text placeholder:text-neutral-text-lighter"
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-gradient-to-r from-terracotta-400 to-terracotta-500 hover:from-terracotta-500 hover:to-terracotta-600 text-neutral-text rounded-xl text-sm font-medium transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-neutral-text border-t-transparent rounded-full animate-spin" />
                  Enviando
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Inscrito!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Inscrever
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </button>
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}
        </form>

        <p className="text-xs text-neutral-text-lighter mt-3 italic">
          Respeitamos sua privacidade. Cancele quando quiser.
        </p>
      </div>
    );
  }

  // Full section variant
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-champagne-50 via-white to-sand-50 opacity-50" />

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-20 bg-gradient-to-br from-terracotta-400 to-terracotta-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <Sparkles className="w-10 h-10 !text-black" />
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-text-light mb-10 leading-relaxed">
            {description}
          </p>

          {/* Form */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-4 bg-white rounded-2xl border border-champagne-300/50 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition-all text-neutral-text placeholder:text-neutral-text-lighter shadow-sm"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-gradient-to-r from-terracotta-400 to-terracotta-500 hover:from-terracotta-500 hover:to-terracotta-600 text-neutral-text rounded-2xl font-medium transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-neutral-text border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5" />
                        <span className="font-serif">Quero receber</span>
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-sm mt-3"
                  >
                    {error}
                  </motion.p>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 max-w-md mx-auto"
              >
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-serif font-bold text-green-800 mb-2">
                  Bem-vindo(a) à Casa 9!
                </h3>
                <p className="text-green-700">
                  Você receberá em breve um e-mail de confirmação com um presente especial.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-neutral-text-lighter">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-terracotta-400" />
              <span className="font-light">Zero spam</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-terracotta-400" />
              <span className="font-light">Conteúdo exclusivo</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-terracotta-400" />
              <span className="font-light">Cancele quando quiser</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}