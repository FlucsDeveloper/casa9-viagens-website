"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";

interface EbookFormData {
  email: string;
  consent: boolean;
}

export default function EbookPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EbookFormData>();

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = document.cookie
      .split("; ")
      .find((row) => row.startsWith("ebook_popup_seen="));

    if (hasSeenPopup) {
      return;
    }

    // Show popup after 15 seconds or 60% scroll
    let hasShown = false;

    const showPopup = () => {
      if (!hasShown) {
        hasShown = true;
        setIsVisible(true);
      }
    };

    // Timer: 15 seconds
    const timer = setTimeout(() => {
      showPopup();
    }, 15000);

    // Scroll: 60%
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;

      if (scrollPercent >= 60) {
        showPopup();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onSubmit = async (data: EbookFormData) => {
    try {
      setSubmitError("");

      const response = await fetch("/api/lead-magnet-popup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          consent: data.consent,
          source: "popup",
        }),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setIsSubmitted(true);
        reset();

        // Set cookie to not show popup again for 30 days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        document.cookie = `ebook_popup_seen=true; expires=${expiryDate.toUTCString()}; path=/`;

        // Close popup after 3 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      } else {
        setSubmitError(
          result.error || "Erro ao enviar. Tente novamente mais tarde."
        );
      }
    } catch (error) {
      setSubmitError("Erro ao enviar. Verifique sua conexão.");
    }
  };

  const handleClose = () => {
    setIsVisible(false);

    // Set cookie to not show popup again for 30 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    document.cookie = `ebook_popup_seen=true; expires=${expiryDate.toUTCString()}; path=/`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-sand-100 hover:bg-sand-200 text-neutral-text transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              {!isSubmitted ? (
                <div className="p-8 md:p-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-ocean-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Download className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-text text-center mb-3">
                    Receba nosso e-book gratuito
                  </h2>

                  {/* Subtitle */}
                  <p className="text-lg text-neutral-text-light text-center mb-8">
                    7 passos para uma viagem que vira memória
                  </p>

                  {/* Form */}
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Email Input */}
                    <div>
                      <input
                        {...register("email", {
                          required: "E-mail é obrigatório",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "E-mail inválido",
                          },
                        })}
                        type="email"
                        className="w-full px-4 py-4 border border-sand-200 rounded-xl text-neutral-text placeholder:text-neutral-text-lighter focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                        placeholder="seu@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* LGPD Consent */}
                    <div className="flex items-start gap-3">
                      <input
                        {...register("consent", {
                          required: "Você precisa aceitar para continuar",
                        })}
                        type="checkbox"
                        id="consent"
                        className="mt-1 w-4 h-4 rounded border-sand-300 text-ocean-500 focus:ring-ocean-500"
                      />
                      <label
                        htmlFor="consent"
                        className="text-xs text-neutral-text-light leading-relaxed"
                      >
                        Concordo em receber o e-book e comunicações da Casa 9
                        Viagens. Você pode cancelar a qualquer momento.
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-red-500 text-sm">
                        {errors.consent.message}
                      </p>
                    )}

                    {/* Error Message */}
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                        {submitError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-ocean-500 hover:bg-ocean-600 disabled:bg-ocean-300 text-white rounded-xl font-medium text-lg transition-all hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2 shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5" />
                          Receber agora
                        </>
                      )}
                    </button>
                  </form>

                  {/* Footer Note */}
                  <p className="text-xs text-neutral-text-lighter text-center mt-6">
                    Enviado por e-mail em instantes. Confira sua caixa de
                    entrada.
                  </p>
                </div>
              ) : (
                /* Success State */
                <div className="p-8 md:p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>

                  <h2 className="text-3xl font-serif font-bold text-neutral-text mb-3">
                    E-book enviado!
                  </h2>

                  <p className="text-lg text-neutral-text-light">
                    Verifique sua caixa de entrada.
                    <br />
                    Chegará em instantes.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
