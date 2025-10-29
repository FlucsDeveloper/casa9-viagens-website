"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { Trash2, CheckCircle, AlertCircle } from "lucide-react";

export default function ExcluirDadosPage() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setSubmitStatus({
        type: "error",
        message: "Você precisa confirmar que entende as consequências.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/delete-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reason,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Solicitação recebida! Você receberá um e-mail de confirmação. Seus dados serão excluídos em até 30 dias.",
        });
        setEmail("");
        setReason("");
        setConsent(false);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Erro ao processar. Tente novamente.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erro ao enviar solicitação. Verifique sua conexão.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white">
      <div className="container-sm py-32">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trash2 className="w-10 h-10 text-red-600" />
          </div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-text mb-6">
            Excluir meus dados
          </h1>

          <p className="text-lg text-neutral-text-light max-w-2xl mx-auto">
            Respeitamos sua privacidade. Você pode solicitar a exclusão
            completa dos seus dados pessoais a qualquer momento.
          </p>
        </div>

        <div className="space-y-8 max-w-2xl mx-auto">
          {/* Warning Card */}
          <Card className="p-6 bg-amber-50 border-amber-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-neutral-text mb-2">
                  Antes de prosseguir, saiba que:
                </h3>
                <ul className="space-y-1 text-sm text-neutral-text-light list-disc list-inside">
                  <li>
                    Todos os seus dados serão permanentemente excluídos
                  </li>
                  <li>Você não receberá mais newsletters ou comunicações</li>
                  <li>Agendamentos futuros serão cancelados</li>
                  <li>
                    Esta ação é irreversível após a confirmação final
                  </li>
                  <li>
                    Alguns dados podem ser mantidos por obrigação legal (ex:
                    notas fiscais)
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-6">
              Formulário de Solicitação
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-neutral-text mb-2">
                  E-mail cadastrado *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
                  placeholder="seu@email.com"
                />
                <p className="text-xs text-neutral-text-lighter mt-2">
                  Use o mesmo e-mail que você cadastrou em nossos formulários
                </p>
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-medium text-neutral-text mb-2">
                  Motivo (opcional)
                </label>
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 resize-none transition-all"
                  placeholder="Nos ajude a melhorar: por que deseja excluir seus dados?"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3 p-4 bg-sand-50 rounded-xl">
                <input
                  type="checkbox"
                  id="delete-consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-sand-300 text-red-500 focus:ring-red-500"
                />
                <label
                  htmlFor="delete-consent"
                  className="text-sm text-neutral-text leading-relaxed"
                >
                  Confirmo que entendo que meus dados serão permanentemente
                  excluídos e esta ação não pode ser desfeita. Entendo que
                  alguns dados podem ser mantidos por obrigação legal.
                </label>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-xl flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !consent}
                className="w-full px-6 py-4 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white rounded-xl font-medium text-lg transition-all hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-5 h-5" />
                    Solicitar Exclusão
                  </>
                )}
              </button>

              <p className="text-xs text-neutral-text-lighter text-center">
                Você receberá um e-mail de confirmação. Clique no link para
                confirmar a exclusão.
              </p>
            </form>
          </Card>

          {/* Info Card */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="font-bold text-neutral-text mb-3">
              Outras opções antes de excluir:
            </h3>
            <ul className="space-y-2 text-sm text-neutral-text-light">
              <li>
                • Deseja apenas parar de receber e-mails? Use o link
                "Cancelar inscrição" no rodapé de qualquer newsletter.
              </li>
              <li>
                • Quer atualizar seus dados? Entre em contato em
                contato@casa9viagens.com
              </li>
              <li>
                • Precisa de mais informações sobre como usamos seus dados?
                Leia nossa{" "}
                <Link
                  href="/privacidade"
                  className="text-ocean-500 underline hover:text-ocean-600"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </Card>

          {/* LGPD Info */}
          <Card className="p-6">
            <h3 className="font-bold text-neutral-text mb-3">
              Direito ao Esquecimento (LGPD)
            </h3>
            <p className="text-sm text-neutral-text-light leading-relaxed">
              Conforme a Lei Geral de Proteção de Dados (LGPD - Lei
              13.709/2018), você tem o direito de solicitar a exclusão dos seus
              dados pessoais. Processaremos sua solicitação em até 30 dias. Em
              caso de dúvidas, entre em contato: contato@casa9viagens.com
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center space-x-6">
          <Link
            href="/privacidade"
            className="text-ocean-500 hover:text-ocean-600 underline font-medium"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/"
            className="text-ocean-500 hover:text-ocean-600 underline font-medium"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
