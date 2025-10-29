import Link from "next/link";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Política de Privacidade | Casa 9 Viagens",
  description:
    "Como a Casa 9 Viagens coleta, usa e protege seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white">
      <div className="container-sm py-32">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-text mb-6">
          Política de Privacidade
        </h1>

        <p className="text-lg text-neutral-text-light mb-12">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              1. Informações que Coletamos
            </h2>
            <div className="space-y-4 text-neutral-text-light">
              <p>
                <strong>1.1 Dados fornecidos por você:</strong> Nome, e-mail,
                telefone, preferências de viagem, mensagens enviadas através
                dos formulários.
              </p>
              <p>
                <strong>1.2 Dados coletados automaticamente:</strong> Endereço
                IP, tipo de navegador, páginas visitadas, tempo de navegação.
              </p>
              <p>
                <strong>1.3 Cookies:</strong> Utilizamos cookies para melhorar
                sua experiência e lembrar suas preferências.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              2. Como Usamos Seus Dados
            </h2>
            <ul className="space-y-3 text-neutral-text-light list-disc list-inside">
              <li>Responder suas solicitações e agendamentos</li>
              <li>Enviar newsletter (com seu consentimento)</li>
              <li>Melhorar nossos serviços e site</li>
              <li>Cumprir obrigações legais</li>
              <li>Personalizar experiências de viagem</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              3. Compartilhamento de Dados
            </h2>
            <p className="text-neutral-text-light">
              Não vendemos seus dados pessoais. Compartilhamos apenas com:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-text-light list-disc list-inside">
              <li>
                <strong>Prestadores de serviço:</strong> Hospedagem,
                e-mail marketing (MailerLite/Brevo)
              </li>
              <li>
                <strong>Parceiros de viagem:</strong> Hotéis, operadores locais
                (somente dados necessários)
              </li>
              <li>
                <strong>Autoridades legais:</strong> Quando exigido por lei
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              4. Seus Direitos (LGPD)
            </h2>
            <p className="text-neutral-text-light mb-3">
              Conforme a Lei Geral de Proteção de Dados (LGPD), você tem
              direito a:
            </p>
            <ul className="space-y-2 text-neutral-text-light list-disc list-inside">
              <li>
                <strong>Acessar</strong> seus dados pessoais
              </li>
              <li>
                <strong>Corrigir</strong> dados incompletos ou desatualizados
              </li>
              <li>
                <strong>Excluir</strong> seus dados (direito ao esquecimento)
              </li>
              <li>
                <strong>Revogar consentimento</strong> a qualquer momento
              </li>
              <li>
                <strong>Portabilidade:</strong> Solicitar seus dados em formato
                estruturado
              </li>
            </ul>

            <p className="mt-6 text-neutral-text-light">
              Para exercer seus direitos, acesse{" "}
              <Link
                href="/excluir-dados"
                className="text-ocean-500 underline hover:text-ocean-600"
              >
                Excluir meus dados
              </Link>{" "}
              ou entre em contato: contato@casa9viagens.com
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              5. Segurança dos Dados
            </h2>
            <p className="text-neutral-text-light">
              Implementamos medidas técnicas e organizacionais para proteger
              seus dados contra acesso não autorizado, perda ou alteração.
              Utilizamos criptografia SSL, armazenamento seguro e acesso
              restrito.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              6. Retenção de Dados
            </h2>
            <p className="text-neutral-text-light">
              Mantemos seus dados pelo tempo necessário para cumprir as
              finalidades descritas, salvo obrigação legal de retenção mais
              longa. Após esse período, os dados serão anonimizados ou
              excluídos.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              7. Cookies
            </h2>
            <p className="text-neutral-text-light">
              Utilizamos cookies essenciais (funcionamento do site) e cookies
              de preferência (lembrar seu idioma, pop-up já visto). Você pode
              gerenciar cookies nas configurações do navegador.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              8. Alterações nesta Política
            </h2>
            <p className="text-neutral-text-light">
              Podemos atualizar esta política periodicamente. A data da última
              atualização estará sempre indicada no topo. Mudanças significativas
              serão comunicadas por e-mail.
            </p>
          </Card>

          <Card className="p-8 bg-ocean-50 border-ocean-200">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              Contato - DPO
            </h2>
            <p className="text-neutral-text-light mb-3">
              Para questões sobre privacidade ou exercer seus direitos:
            </p>
            <p className="text-neutral-text font-medium">
              E-mail: contato@casa9viagens.com
              <br />
              Telefone: +55 (11) 99999-9999
            </p>
          </Card>
        </div>

        <div className="mt-12 text-center">
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
