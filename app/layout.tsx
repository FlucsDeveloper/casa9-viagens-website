import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import EbookPopup from "@/components/ui/EbookPopup";

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
  title: "Casa 9 Viagens | Memórias que ficam para sempre",
  description:
    "Transformamos roteiros em memórias inesquecíveis. Agência de viagens boutique especializada em experiências personalizadas.",
  metadataBase: new URL("https://casa9viagens.com"),
  alternates: {
    canonical: "https://casa9viagens.com",
  },
  openGraph: {
    title: "Casa 9 Viagens | Memórias que ficam para sempre",
    description:
      "Transformamos roteiros em memórias inesquecíveis. Experiências de viagem boutique personalizadas.",
    type: "website",
    url: "https://casa9viagens.com",
    siteName: "Casa 9 Viagens",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casa 9 Viagens - Agência de Viagens Boutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Casa 9 Viagens | Memórias que ficam para sempre",
    description:
      "Experiências de viagem personalizadas e transformadoras.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  verification: {
    google: "google-site-verification-code",
  },
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
    description: "Agência de viagens boutique especializada em experiências personalizadas e transformadoras",
    url: "https://casa9viagens.com",
    telephone: "+55 11 99999-9999",
    email: "contato@casa9viagens.com",
    image: "https://casa9viagens.com/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
      addressLocality: "São Paulo",
      addressRegion: "SP",
    },
    sameAs: [
      "https://instagram.com/casa9.viagens",
      "https://www.facebook.com/casa9viagens",
    ],
    priceRange: "$$$",
    areaServed: {
      "@type": "GeoShape",
      box: "-89.2 -179.2 89.2 179.2",
    },
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
      </body>
    </html>
  );
}
