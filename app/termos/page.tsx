import Link from "next/link";
import Card from "@/components/ui/Card";

export const metadata = {
  title: "Termos de Uso | Casa 9 Viagens",
  description: "Termos e condições de uso do site Casa 9 Viagens.",
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white">
      <div className="container-sm py-32">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-text mb-6">
          Termos de Uso
        </h1>

        <p className="text-lg text-neutral-text-light mb-12">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="space-y-8">
          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              1. Aceitação dos Termos
            </h2>
            <p className="text-neutral-text-light">
              Ao acessar e usar o site da Casa 9 Viagens (casa9viagens.com),
              você concorda com estes Termos de Uso e nossa Política de
              Privacidade. Se não concordar, não utilize nossos serviços.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              2. Descrição dos Serviços
            </h2>
            <p className="text-neutral-text-light">
              A Casa 9 Viagens é uma agência boutique especializada em
              experiências de viagem personalizadas. Oferecemos:
            </p>
            <ul className="mt-3 space-y-2 text-neutral-text-light list-disc list-inside">
              <li>Consultoria e planejamento de viagens</li>
              <li>Curadoria de experiências transformadoras</li>
              <li>Agendamento de conversas com nossa fundadora</li>
              <li>Newsletter com conteúdo exclusivo</li>
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              3. Uso do Site
            </h2>
            <div className="space-y-3 text-neutral-text-light">
              <p>
                <strong>3.1</strong> Você se compromete a usar o site de forma
                legal e ética.
              </p>
              <p>
                <strong>3.2</strong> É proibido:
              </p>
              <ul className="ml-6 space-y-1 list-disc list-inside">
                <li>Tentar acessar áreas restritas do sistema</li>
                <li>Copiar conteúdo sem autorização</li>
                <li>Enviar spam ou conteúdo malicioso</li>
                <li>Usar o site para fins fraudulentos</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              4. Propriedade Intelectual
            </h2>
            <p className="text-neutral-text-light">
              Todo o conteúdo do site (textos, imagens, logos, design) é
              propriedade da Casa 9 Viagens ou de seus licenciadores. É
              permitido visualizar e baixar para uso pessoal, mas não
              redistribuir comercialmente.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              5. Agendamentos e Serviços
            </h2>
            <div className="space-y-3 text-neutral-text-light">
              <p>
                <strong>5.1 Agendamento de Conversas:</strong> As conversas
                iniciais (15 ou 30 minutos) são gratuitas e sem compromisso.
                Reservamo-nos o direito de reagendar ou cancelar com 24 horas
                de antecedência.
              </p>
              <p>
                <strong>5.2 Planejamento de Viagens:</strong> Os serviços de
                planejamento serão formalizados em contrato específico, com
                valores, prazos e condições detalhadas.
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              6. Isenção de Responsabilidade
            </h2>
            <div className="space-y-3 text-neutral-text-light">
              <p>
                <strong>6.1</strong> O site é fornecido "como está". Não
                garantimos que estará sempre disponível ou livre de erros.
              </p>
              <p>
                <strong>6.2</strong> As informações no site são meramente
                informativas. Para contratação de serviços, será firmado
                contrato específico.
              </p>
              <p>
                <strong>6.3</strong> Não nos responsabilizamos por eventuais
                problemas decorrentes de fornecedores terceiros (companhias
                aéreas, hotéis, etc.).
              </p>
            </div>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              7. Links Externos
            </h2>
            <p className="text-neutral-text-light">
              Nosso site pode conter links para sites de terceiros
              (Instagram, Unsplash, etc.). Não nos responsabilizamos pelo
              conteúdo ou práticas de privacidade desses sites.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              8. Rescisão
            </h2>
            <p className="text-neutral-text-light">
              Podemos suspender ou encerrar seu acesso ao site a qualquer
              momento, sem aviso prévio, em caso de violação destes Termos.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              9. Alterações nos Termos
            </h2>
            <p className="text-neutral-text-light">
              Reservamo-nos o direito de modificar estes Termos a qualquer
              momento. As alterações entram em vigor imediatamente após
              publicação. Seu uso contínuo do site constitui aceitação das
              mudanças.
            </p>
          </Card>

          <Card className="p-8">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              10. Lei Aplicável
            </h2>
            <p className="text-neutral-text-light">
              Estes Termos são regidos pelas leis da República Federativa do
              Brasil. Qualquer disputa será resolvida no foro da comarca de São
              Paulo/SP.
            </p>
          </Card>

          <Card className="p-8 bg-ocean-50 border-ocean-200">
            <h2 className="text-2xl font-serif font-bold text-neutral-text mb-4">
              Contato
            </h2>
            <p className="text-neutral-text-light mb-3">
              Dúvidas sobre estes Termos? Entre em contato:
            </p>
            <p className="text-neutral-text font-medium">
              E-mail: contato@casa9viagens.com
              <br />
              Telefone: +55 (11) 99999-9999
              <br />
              WhatsApp:{" "}
              <a
                href="https://wa.me/5511999999999"
                className="text-ocean-500 underline hover:text-ocean-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>
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
