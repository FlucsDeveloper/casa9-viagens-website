import { Metadata } from "next";

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
}

export function generateMetadata(seo: SEOMetadata): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://casa9viagens.com";
  const imageUrl =
    seo.image || `${baseUrl}/og-image.jpg`;
  const canonicalUrl = seo.url ? `${baseUrl}${seo.url}` : undefined;

  return {
    title: `${seo.title} | Casa 9 Viagens`,
    description: seo.description,
    keywords: seo.keywords?.join(", "),
    authors: seo.author ? [{ name: seo.author }] : undefined,
    canonical: canonicalUrl,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      type: (seo.type || "website") as any,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      siteName: "Casa 9 Viagens",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [imageUrl],
    },
    robots: "index, follow",
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
  };
}

export const SEO = {
  home: {
    title: "Casa 9 Viagens | Memórias que ficam para sempre",
    description:
      "Transformamos roteiros em memórias inesquecíveis. Experiências de viagem personalizadas com cuidado e dedicação.",
    keywords: [
      "viagens",
      "turismo",
      "destinos",
      "experiências",
      "roteiros personalizados",
    ],
    url: "/",
  },
  sobre: {
    title: "Sobre Casa 9 Viagens",
    description:
      "Conheça nossa história, missão e valores. Entenda como transformamos viagens em experiências memoráveis.",
    keywords: [
      "sobre",
      "história",
      "missão",
      "valores",
      "experiências de viagem",
    ],
    url: "/sobre",
  },
  destinos: {
    title: "Destinos | Casa 9 Viagens",
    description:
      "Explore nossos destinos cuidadosamente selecionados. Viagens românticas, aventura, bem-estar e experiências em família.",
    keywords: [
      "destinos",
      "viagens",
      "experiências",
      "turismo",
      "roteiros",
    ],
    url: "/destinos",
  },
  depoimentos: {
    title: "Depoimentos | Casa 9 Viagens",
    description:
      "Leia histórias reais de viajantes que confiaram em nós. Veja como transformamos seus sonhos em memórias.",
    keywords: [
      "depoimentos",
      "avaliações",
      "histórias",
      "clientes",
      "experiências",
    ],
    url: "/depoimentos",
  },
  contato: {
    title: "Contato | Casa 9 Viagens",
    description:
      "Fale conosco e comece a planejar sua próxima viagem extraordinária.",
    keywords: ["contato", "fale conosco", "atendimento", "reservas"],
    url: "/contato",
  },
  blog: {
    title: "Blog | Casa 9 Viagens",
    description:
      "Leia artigos, dicas e histórias sobre viagens, destinos e experiências únicas.",
    keywords: [
      "blog",
      "artigos",
      "dicas de viagem",
      "guias",
      "histórias",
    ],
    url: "/blog",
  },
};
