// Sistema de imagens da Casa 9 Viagens
// Todas as imagens seguem a estética: acolhimento, paleta quente, textura natural, estilo editorial

export interface ImageConfig {
  url: string;
  alt: string;
  credit?: string;
}

// Hero images por página - fotos alegres e dinâmicas
export const heroImages = {
  home: {
    url: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1920&q=90&fit=crop", // Grupo de amigos saltando felizes em viagem
    alt: "Amigos celebrando juntos em viagem – momentos de alegria e conexão",
  },
  sobre: {
    url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=90&fit=crop", // Mulher feliz viajando de carro
    alt: "Viajante sorridente explorando novos horizontes",
  },
  experiencias: {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=90&fit=crop", // Lago colorido ao pôr do sol vibrante
    alt: "Pôr do sol vibrante sobre o lago – aventura e descobertas",
  },
  planejeSuaViagem: {
    url: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=1920&q=90&fit=crop", // Casal feliz na praia
    alt: "Casal sorrindo na praia – planeje sua próxima aventura",
  },
  contato: {
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1920&q=90&fit=crop", // Pessoas conversando animadamente
    alt: "Conversa alegre e acolhedora – vamos planejar juntos",
  },
};

// Imagens por pilar da Casa 9
export const pilarImages = {
  corpo: {
    hero: {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=90&fit=crop", // Yoga ao nascer do sol
      alt: "Mulher praticando yoga ao amanhecer – pilar corpo e wellness",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=90&fit=crop", // Spa natural com pedras
        alt: "Spa natural com pedras quentes – ritual de cuidado corporal",
      },
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=90&fit=crop", // Meditação em natureza
        alt: "Meditação em meio à natureza – conexão corpo e mente",
      },
      {
        url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=90&fit=crop", // Trilha em floresta
        alt: "Caminhada contemplativa em floresta – movimento consciente",
      },
    ],
  },

  alimentacao: {
    hero: {
      url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=90&fit=crop", // Mesa com comida orgânica natural
      alt: "Mesa farta com ingredientes frescos e orgânicos – pilar alimentação consciente",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=90&fit=crop", // Pratos artesanais com cores naturais
        alt: "Culinária artesanal com ingredientes locais – gastronomia com propósito",
      },
      {
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=90&fit=crop", // Ingredientes frescos em madeira
        alt: "Ingredientes frescos em superfície de madeira – conexão com a origem",
      },
      {
        url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=90&fit=crop", // Pessoas compartilhando refeição
        alt: "Pessoas compartilhando refeição em mesa comunitária – alimentação como ritual",
      },
    ],
  },

  espiritualidade: {
    hero: {
      url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=90&fit=crop", // Templo japonês ao entardecer
      alt: "Templo zen ao entardecer – pilar espiritualidade e contemplação",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=90&fit=crop", // Incenso e luz natural
        alt: "Incenso queimando com luz natural suave – ritual de conexão espiritual",
      },
      {
        url: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&q=90&fit=crop", // Pessoa meditando em montanha
        alt: "Meditação solitária no topo da montanha – busca interior",
      },
      {
        url: "https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?w=800&q=90&fit=crop", // Velas e atmosfera contemplativa
        alt: "Velas criando atmosfera de introspecção – espaço sagrado pessoal",
      },
    ],
  },

  conexoes: {
    hero: {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=90&fit=crop", // Grupo de amigos em círculo ao pôr do sol
      alt: "Círculo de conexões humanas ao pôr do sol – pilar conexões e relacionamentos",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=90&fit=crop", // Pessoas rindo juntas
        alt: "Risadas compartilhadas – momentos autênticos de conexão",
      },
      {
        url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=90&fit=crop", // Abraço sincero
        alt: "Abraço sincero entre viajantes – laços que se formam em jornadas",
      },
      {
        url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=90&fit=crop", // Mãos unidas em círculo
        alt: "Mãos unidas em círculo – força coletiva e apoio mútuo",
      },
    ],
  },

  autoconhecimento: {
    hero: {
      url: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1600&q=90&fit=crop", // Estrada solitária em paisagem natural
      alt: "Caminho solitário em paisagem vasta – pilar autoconhecimento e jornada interior",
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&q=90&fit=crop", // Pessoa com diário em natureza
        alt: "Escrita contemplativa em meio à natureza – registro da jornada interior",
      },
      {
        url: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&q=90&fit=crop", // Janela com vista para montanhas
        alt: "Janela aberta para paisagem montanhosa – perspectivas que transformam",
      },
      {
        url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=90&fit=crop", // Pessoa de costas contemplando
        alt: "Contemplação solitária diante do desconhecido – coragem de olhar para dentro",
      },
    ],
  },
};

// Imagens para experiências específicas
export const experienciaImages = {
  "retiro-autoconhecimento-bali": {
    url: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=90&fit=crop",
    alt: "Terraços de arroz em Bali ao amanhecer – retiro de autoconhecimento",
  },
  "lua-de-mel-toscana": {
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=90&fit=crop",
    alt: "Casal em vinhedos da Toscana ao pôr do sol – romance e conexão",
  },
  "trilha-patagonia": {
    url: "https://images.unsplash.com/photo-1518623001395-125242310d0c?w=800&q=90&fit=crop",
    alt: "Montanhas dramáticas da Patagônia – aventura e superação",
  },
  "wellness-costa-amalfi": {
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=90&fit=crop",
    alt: "Costa Amalfi com vista para o Mediterrâneo – wellness e contemplação",
  },
  "familia-orlando-parks": {
    url: "https://images.unsplash.com/photo-1596003906949-67221c37965c?w=800&q=90&fit=crop",
    alt: "Família criando memórias juntos – alegria e conexão",
  },
  "retiro-gastronomico-lima": {
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=90&fit=crop",
    alt: "Gastronomia peruana artesanal – sabores que contam histórias",
  },
  "conexao-japao": {
    url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=90&fit=crop",
    alt: "Templo zen no Japão – espiritualidade e presença",
  },
  "grupo-caminho-santiago": {
    url: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=800&q=90&fit=crop",
    alt: "Caminho de Santiago – jornada coletiva de transformação",
  },
  "yoga-retiro-india": {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=90&fit=crop",
    alt: "Prática de yoga ancestral na Índia – conexão corpo e espírito",
  },
  "safari-serengeti": {
    url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=90&fit=crop",
    alt: "Vida selvagem no Serengeti – reconexão com a natureza primordial",
  },
  "cruzeiro-antartica": {
    url: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?w=800&q=90&fit=crop",
    alt: "Paisagem glacial da Antártica – última fronteira do autoconhecimento",
  },
  "retiro-digital-detox-portugal": {
    url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=90&fit=crop",
    alt: "Campo português ao entardecer – desconexão digital, reconexão interior",
  },
};

// Imagens de background para seções - mais alegres e coloridas
export const backgroundImages = {
  ctaHome: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=90&fit=crop", // Praia tropical vibrante
    alt: "Praia paradisíaca com águas cristalinas – seu próximo destino",
  },
  testimonials: {
    url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&q=90&fit=crop", // Montanhas verdes vibrantes
    alt: "Paisagem montanhosa exuberante – histórias inspiradoras",
  },
  newsletter: {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=90&fit=crop", // Estrada aberta com céu colorido
    alt: "Estrada aberta para novas aventuras – junte-se a nós",
  },
};

// Texture overlays (para usar com opacity)
export const textures = {
  warmOverlay: "linear-gradient(135deg, rgba(239, 232, 221, 0.7), rgba(210, 106, 94, 0.3))",
  softGlow: "radial-gradient(circle at center, rgba(250, 247, 243, 0.9), transparent)",
  sunsetGradient: "linear-gradient(to bottom, rgba(239, 232, 221, 0.4), rgba(210, 106, 94, 0.6))",
};

// Helper function para gerar URL otimizada
export function getOptimizedImageUrl(
  config: ImageConfig,
  width: number = 1920,
  quality: number = 90
): string {
  return `${config.url}&w=${width}&q=${quality}`;
}

// Helper para alt text semântico
export function getImageAltText(pilar: string, context: string): string {
  const pilarDescriptions: Record<string, string> = {
    corpo: "Wellness e vitalidade",
    alimentacao: "Gastronomia consciente",
    espiritualidade: "Contemplação e transcendência",
    conexoes: "Relacionamentos autênticos",
    autoconhecimento: "Jornada interior",
  };

  return `${context} – ${pilarDescriptions[pilar] || "Experiência transformadora"}`;
}
