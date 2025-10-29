"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Heart,
  Mountain,
  Sparkles,
  Users,
  Compass,
  Briefcase,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { heroImages, experienciaImages, backgroundImages } from "@/lib/images";

interface Experience {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  ideal_for: string;
}

const experiences: Experience[] = Object.keys(experienciaImages).map((slug) => {
  const imageData = experienciaImages[slug as keyof typeof experienciaImages];

  const experienceData: Record<string, Omit<Experience, 'slug' | 'image'>> = {
    "retiro-autoconhecimento-bali": {
      title: "Retiro de Autoconhecimento em Bali",
      description: "Mergulhe em uma jornada de autodescoberta em meio aos templos sagrados e natureza exuberante de Bali.",
      category: "autoconhecimento",
      features: ["Meditação guiada diária", "Yoga ao nascer do sol", "Terapias holísticas"],
      ideal_for: "Pessoas buscando reconexão interior e paz mental",
    },
    "lua-de-mel-toscana": {
      title: "Lua de Mel na Toscana",
      description: "Romance italiano entre vinhedos, vilarejos medievais e a culinária mais apaixonante do mundo.",
      category: "romantica",
      features: ["Hospedagem em villa exclusiva", "Degustação de vinhos", "Jantares privativos"],
      ideal_for: "Casais em lua de mel ou aniversário de casamento",
    },
    "trilha-patagonia": {
      title: "Trilha na Patagônia",
      description: "Aventura épica entre geleiras, lagos azuis e montanhas que tocam o céu.",
      category: "aventura",
      features: ["Trekking em Torres del Paine", "Acampamento premium", "Guia especializado"],
      ideal_for: "Aventureiros que buscam desafios e natureza selvagem",
    },
    "wellness-costa-amalfi": {
      title: "Wellness na Costa Amalfi",
      description: "Spa, yoga e gastronomia saudável com vista para o Mediterrâneo.",
      category: "bem-estar",
      features: ["Spa com vista para o mar", "Alimentação orgânica local", "Sessões de mindfulness"],
      ideal_for: "Quem precisa desacelerar e cuidar de si",
    },
    "familia-orlando-parks": {
      title: "Família em Orlando",
      description: "Magia, diversão e memórias inesquecíveis nos melhores parques do mundo.",
      category: "familia",
      features: ["Ingressos VIP", "Roteiro personalizado", "Hospedagem estratégica"],
      ideal_for: "Famílias com crianças de todas as idades",
    },
    "retiro-gastronomico-lima": {
      title: "Retiro Gastronômico em Lima",
      description: "Explore a culinária peruana em uma experiência sensorial completa.",
      category: "alimentacao",
      features: ["Restaurantes estrelados", "Aula de ceviche", "Mercados locais"],
      ideal_for: "Amantes da gastronomia e cultura",
    },
    "conexao-japao": {
      title: "Conexão Espiritual no Japão",
      description: "Templos zen, cerimônias do chá e a arte de viver o momento presente.",
      category: "espiritualidade",
      features: ["Cerimônia do chá", "Meditação zen", "Hospedagem em ryokan"],
      ideal_for: "Buscadores espirituais e amantes da cultura oriental",
    },
    "grupo-caminho-santiago": {
      title: "Caminho de Santiago em Grupo",
      description: "Conexão profunda com outros viajantes em uma jornada de transformação.",
      category: "conexoes",
      features: ["Grupo limitado a 12 pessoas", "Suporte completo", "Celebração final"],
      ideal_for: "Quem busca conexão humana e propósito",
    },
    "yoga-retiro-india": {
      title: "Retiro de Yoga na Índia",
      description: "Práticas ancestrais no berço do yoga, em ashrams autênticos.",
      category: "corpo",
      features: ["Aulas diárias de yoga", "Ayurveda personalizado", "Filosofia védica"],
      ideal_for: "Praticantes de yoga que buscam aprofundamento",
    },
    "safari-serengeti": {
      title: "Safari no Serengeti",
      description: "Testemunhe a grande migração e a vida selvagem em seu habitat natural.",
      category: "aventura",
      features: ["Safari em 4x4 privativo", "Lodge de luxo", "Guia especializado"],
      ideal_for: "Amantes da natureza e vida selvagem",
    },
    "cruzeiro-antartica": {
      title: "Expedição à Antártica",
      description: "A última fronteira: paisagens glaciais e vida selvagem única no mundo.",
      category: "aventura",
      features: ["Cruzeiro expedição", "Zodiac tours", "Palestrantes especializados"],
      ideal_for: "Exploradores que buscam o extraordinário",
    },
    "retiro-digital-detox-portugal": {
      title: "Digital Detox em Portugal",
      description: "Desconecte-se do digital e reconecte-se consigo mesmo no interior português.",
      category: "bem-estar",
      features: ["Sem dispositivos eletrônicos", "Atividades ao ar livre", "Workshops de mindfulness"],
      ideal_for: "Quem precisa se desconectar da rotina digital",
    },
  };

  const data = experienceData[slug];
  return data ? {
    slug,
    image: imageData.url,
    ...data,
  } : null;
}).filter(Boolean) as Experience[];

const categories = [
  { id: "all", label: "Todas", icon: Sparkles },
  { id: "autoconhecimento", label: "Autoconhecimento", icon: Compass },
  { id: "romantica", label: "Romântica", icon: Heart },
  { id: "aventura", label: "Aventura", icon: Mountain },
  { id: "bem-estar", label: "Bem-estar", icon: Sparkles },
  { id: "familia", label: "Família", icon: Users },
  { id: "alimentacao", label: "Alimentação", icon: Sparkles },
  { id: "espiritualidade", label: "Espiritualidade", icon: Sparkles },
  { id: "conexoes", label: "Conexões", icon: Users },
  { id: "corpo", label: "Corpo", icon: Sparkles },
];

export default function ExperienciasPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const filteredExperiences =
    selectedCategory === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  const handleContactClick = (experience: Experience) => {
    setSelectedExperience(experience);
    // Scroll to contact form
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaitlistClick = (experience: Experience) => {
    setSelectedExperience(experience);
    document
      .getElementById("waitlist-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImages.experiencias.url}
            alt={heroImages.experiencias.alt}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white" />
        </div>

        <div className="container-max relative z-10 pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm text-ocean-600 rounded-full text-sm font-medium shadow-lg mb-6">
              <Sparkles className="w-4 h-4" />
              Descubra sua próxima aventura
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
                style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Experiências que
              <br />
              <span className="text-accent-terracotta italic">transformam</span>
            </h1>

            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-medium"
               style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}>
              Cada viagem é única. Cada momento, inesquecível.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="relative section-padding overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-sand-50/30 to-white" />
        <div className="container-max relative z-10">
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-ocean-500 text-white shadow-lg scale-105"
                      : "bg-sand-50 text-neutral-text hover:bg-sand-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Experiences Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={experience.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden group bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-neutral-text mb-3">
                      {experience.title}
                    </h3>

                    <p className="text-neutral-text-light mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {experience.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-neutral-text-light flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-ocean-500 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-sand-200 space-y-3">
                      <p className="text-xs text-neutral-text-lighter italic">
                        Ideal para: {experience.ideal_for}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleContactClick(experience)}
                          className="flex-1 px-4 py-3 bg-ocean-500 hover:bg-ocean-600 text-white rounded-xl font-medium text-sm transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Quero conversar
                        </button>

                        <button
                          onClick={() => handleWaitlistClick(experience)}
                          className="px-4 py-3 bg-sand-100 hover:bg-sand-200 text-neutral-text rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2"
                          title="Lista de espera"
                        >
                          <Calendar className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="relative section-padding overflow-hidden"
      >
        {/* Background alinhado com pilar Conexões */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImages.experienciasContact.url}
            alt={backgroundImages.experienciasContact.alt}
            fill
            className="object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/96 via-sand-50/94 to-white/96" />
        </div>
        <div className="container-sm relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
              Vamos planejar juntos?
            </h2>
            <p className="text-xl text-neutral-text-light">
              {selectedExperience
                ? `Você selecionou: ${selectedExperience.title}`
                : "Escolha uma experiência acima para começar"}
            </p>
          </div>

          <ContactForm selectedExperience={selectedExperience} />
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        id="waitlist-form"
        className="section-padding bg-white"
      >
        <div className="container-sm">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-text mb-4">
              Lista de Espera
            </h2>
            <p className="text-xl text-neutral-text-light">
              Interessado em viagens em grupo? Entre na lista de espera!
            </p>
          </div>

          <WaitlistForm selectedExperience={selectedExperience} />
        </div>
      </section>
    </>
  );
}

// Contact Form Component
function ContactForm({
  selectedExperience,
}: {
  selectedExperience: Experience | null;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      experience_slug: selectedExperience?.slug || "",
    };

    try {
      const response = await fetch("/api/contact-experience", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: `Obrigada! Recebemos seu interesse em ${
            selectedExperience?.title || "nossas experiências"
          }. Retornaremos em breve.`,
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Erro ao enviar. Tente novamente.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erro ao enviar. Verifique sua conexão.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 md:p-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-text mb-2">
              Nome completo *
            </label>
            <input
              name="name"
              type="text"
              required
              className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-text mb-2">
              E-mail *
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-text mb-2">
            Telefone / WhatsApp
          </label>
          <input
            name="phone"
            type="tel"
            className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-text mb-2">
            Mensagem (opcional)
          </label>
          <textarea
            name="message"
            rows={4}
            className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 resize-none transition-all"
            placeholder="Conte-nos mais sobre seus planos..."
          />
        </div>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-xl ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-ocean-500 hover:bg-ocean-600 disabled:bg-ocean-300 text-white rounded-xl font-medium text-lg transition-all hover:scale-105 disabled:scale-100"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
    </Card>
  );
}

// Waitlist Form Component
function WaitlistForm({
  selectedExperience,
}: {
  selectedExperience: Experience | null;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      experience_slug: selectedExperience?.slug || "",
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "Você foi adicionado à lista de espera! Avisaremos quando houver novidades.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Erro ao cadastrar. Tente novamente.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Erro ao cadastrar. Verifique sua conexão.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8 md:p-10 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-text mb-2">
            Nome completo *
          </label>
          <input
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-text mb-2">
            E-mail *
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-sand-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
            placeholder="seu@email.com"
          />
        </div>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-xl text-sm ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-ocean-500 hover:bg-ocean-600 disabled:bg-ocean-300 text-white rounded-xl font-medium transition-all hover:scale-105 disabled:scale-100"
        >
          {isSubmitting ? "Cadastrando..." : "Entrar na Lista"}
        </button>
      </form>
    </Card>
  );
}
