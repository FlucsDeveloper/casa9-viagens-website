import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import EbookPopup from "@/components/ui/EbookPopup";
import ScrollToTop from "@/components/ui/ScrollToTop";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Casa 9 Viagens | Consultoria de Viagens Boutique de Luxo",
    template: "%s | Casa 9 Viagens"
  },
  description:
    "Consultoria de viagens boutique especializada em experiências transformadoras de luxo. Criamos jornadas personalizadas que nutrem corpo, alma e conexões.",
  keywords: [
    "viagens de luxo",
    "consultoria de viagens",
    "viagens personalizadas",
    "experiências transformadoras",
    "turismo de bem-estar",
    "viagens boutique",
    "Casa 9 Viagens",
    "roteiros exclusivos",
    "viagens com propósito"
  ],
  authors: [{ name: "Casa 9 Viagens" }],
  creator: "Casa 9 Viagens",
  publisher: "Casa 9 Viagens",
  metadataBase: new URL("https://casa9viagens.com"),
  alternates: {
    canonical: "https://casa9viagens.com",
  },
  openGraph: {
    title: "Casa 9 Viagens | Consultoria de Viagens Boutique de Luxo",
    description:
      "Transforme sua próxima viagem em memórias inesquecíveis. Experiências exclusivas e personalizadas com o cuidado artesanal da Casa 9.",
    type: "website",
    url: "https://casa9viagens.com",
    siteName: "Casa 9 Viagens",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa 9 Viagens - Consultoria de Viagens Boutique",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@casa9viagens",
    creator: "@casa9viagens",
    title: "Casa 9 Viagens | Experiências que Transformam",
    description:
      "Consultoria boutique para viagens de luxo com propósito. Criamos jornadas únicas e transformadoras.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": "https://casa9viagens.com",
    name: "Casa 9 Viagens",
    alternateName: "Casa 9 - Consultoria de Viagens Boutique",
    description: "Consultoria de viagens boutique de luxo especializada em experiências transformadoras e jornadas com propósito",
    url: "https://casa9viagens.com",
    logo: "https://casa9viagens.com/logo-casa9.png",
    telephone: "+55 11 99999-9999",
    email: "contato@casa9viagens.com",
    image: [
      "https://casa9viagens.com/og-image.jpg",
      "https://casa9viagens.com/hero-image.jpg"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "04000-000"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.550520,
      longitude: -46.633308
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00"
      }
    ],
    sameAs: [
      "https://instagram.com/casa9.viagens",
      "https://www.facebook.com/casa9viagens",
      "https://www.linkedin.com/company/casa9viagens"
    ],
    priceRange: "$$$",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "PIX"],
    currenciesAccepted: "BRL",
    areaServed: {
      "@type": "GeoShape",
      box: "-89.2 -179.2 89.2 179.2"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "500"
    },
    founder: {
      "@type": "Person",
      name: "Fundadora Casa 9 Viagens",
      jobTitle: "CEO & Travel Designer"
    }
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} font-sans bg-neutral-lighter text-neutral-text antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <EbookPopup />
        <ScrollToTop />
      </body>
    </html>
  );
}
