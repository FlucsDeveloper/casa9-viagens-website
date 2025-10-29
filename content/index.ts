/**
 * Content Module - Casa 9 Viagens
 * All website content in one place for easy editing
 */

export const home = {
  hero: {
    title: "Viagens que viram memória",
    subtitle: "Curadoria de luxo com propósito — experiências que nutrem corpo, alma e relações, guiadas pelos 5 pilares da saúde integral."
  },
  why: [
    "Saúde Integral como norte: cada roteiro nutre pelo menos um pilar — Corpo, Alimentação, Espiritualidade, Trabalho/Propósito e Relacionamentos.",
    "Curadoria impecável: acesso a experiências autênticas, hospedagens-santuário e logística sem preocupações.",
    "Especialista dedicada: Bia Castro, formação em Saúde Integral (NOS Escola) e astrologia védica."
  ],
  credentials: "Bia Castro — Consultora independente afiliada à Primetour (agência membro da rede Virtuoso).",

  // 5 Pilares da Saúde Integral
  pilares: [
    {
      title: "Corpo",
      description: "Vitalidade e rejuvenescimento. Experiências que reconectam você com seu corpo através de movimento, yoga e atividades físicas transformadoras."
    },
    {
      title: "Alimentação",
      description: "Nutrição consciente e descoberta culinária. Gastronomia saudável, sabores locais e rituais que alimentam corpo e alma."
    },
    {
      title: "Espiritualidade",
      description: "Conexão interior e propósito. Templos, retiros, cerimônias que te conectam com o sagrado dentro e fora de você."
    },
    {
      title: "Trabalho/Propósito",
      description: "Clareza de propósito e inspiração profissional. Jornadas que ajudam a alinhar paixão e profissão."
    },
    {
      title: "Relacionamentos",
      description: "Conexões autênticas e fortalecimento de laços. Com outros viajantes, comunidades locais e consigo mesmo."
    }
  ]
};

export const experiences = [
  {
    slug: "jornadas-essencia",
    title: "Jornadas de Essência Pessoal",
    summary: "Luxo 100% sob medida; cada elemento é desenhado para um propósito seu.",
    description: "Este é o ápice da personalização e do luxo na Casa 9. Um serviço de design de roteiros completamente sob medida, onde você atua como a Arquiteta de Experiências de um sonho. É uma conversa profunda para entender seus desejos mais íntimos, seus anseios de transformação e quais pilares da saúde integral você busca nutrir.",
    tags: ["tailor-made", "propósito"],
    isGroup: false,
    category: "individual",
    details: [
      "Curadoria Impecável: Desde a escolha do destino até acomodações santuário",
      "Experiências Autênticas: Acessos exclusivos e encontros com personalidades locais",
      "Suporte Concierge 24h: Cada detalhe logístico impecável",
      "Intenção Transformadora: Cada elemento é intencional"
    ],
    idealFor: "Indivíduos, casais, famílias ou pequenos grupos que buscam a experiência de viagem de luxo mais exclusiva e profundamente alinhada aos seus propósitos pessoais."
  },
  {
    slug: "imersoes-tematicas",
    title: "Imersões Temáticas: Círculos de Descoberta",
    summary: "Grupos pequenos com especialista para aprofundar um pilar.",
    description: "Pequenas viagens em grupo, cuidadosamente concebidas e curadas pela Casa 9, focadas na exploração aprofundada de um dos 5 pilares da saúde integral. Cada 'Círculo de Descoberta' é uma oportunidade de se conectar com um propósito específico, acompanhado por um especialista renomado na área.",
    tags: ["grupo", "especialista"],
    isGroup: true,
    category: "group",
    details: [
      "Corpo: Retiro de wellness com fisioterapeuta holístico",
      "Alimentação: Experiências gastronômicas com chef consciente",
      "Espiritualidade: Jornadas de astrologia védica com astrólogo experiente",
      "Trabalho: Retiros de propósito com mentores",
      "Relacionamentos: Viagens que promovem reconexão em grupos específicos"
    ],
    idealFor: "Indivíduos que desejam aprofundar um aspecto específico de sua saúde integral em um ambiente de grupo seleto."
  },
  {
    slug: "escapadas-reequilibrio",
    title: "Escapadas de Reequilíbrio",
    summary: "Mini-retiros (2–5 dias) para revitalizar com bem-estar e gastronomia leve.",
    description: "Roteiros curtos, porém intensos em bem-estar (fins de semana prolongados, feriados de 3-5 dias), desenhados para proporcionar uma pausa de luxo e rejuvenescedora. São mini-retiros que focam em revitalizar o Corpo e a Espiritualidade de forma concisa, sem exigir um grande investimento de tempo.",
    tags: ["wellness", "curta duração"],
    isGroup: false,
    category: "individual",
    details: [
      "Destinos Estratégicos: Locais próximos de fácil acesso",
      "Hospedagem Premium: Hotéis-boutique com spas de alto nível",
      "Atividades Essenciais: Yoga, meditação, massagens, banhos de floresta",
      "Gastronomia Saudável: Alimentação leve e nutritiva"
    ],
    idealFor: "Profissionais atarefados que buscam uma recarga rápida e eficaz, um momento de introspecção e cuidado pessoal de luxo."
  },
  {
    slug: "santuarios-acolhimento",
    title: "Santuários de Acolhimento",
    summary: "Hospedagens que por si só acolhem e transformam.",
    description: "Mais do que uma reserva de hospedagem, é um serviço de curadoria e acesso a propriedades exclusivas e inspiradoras que, por sua natureza e filosofia, são destinos em si e promovem o bem-estar e a conexão.",
    tags: ["hospedagem", "santuário"],
    isGroup: false,
    category: "individual",
    details: [
      "Seleção Rigorosa: Apenas propriedades com experiência única",
      "Hotéis-boutique com spas holísticos",
      "Fazendas com alimentação sustentável",
      "Lodges ecológicos em meio à natureza",
      "Acomodações históricas para introspecção"
    ],
    idealFor: "Viajantes de luxo que valorizam a hospedagem como parte integral e transformadora da jornada."
  },
  {
    slug: "curadoria-urbana",
    title: "Curadoria Urbana Essencial",
    summary: "Experiências \"fora da caixa\" na cidade, com toque Casa 9.",
    description: "Um serviço de concierge de luxo altamente personalizado para clientes que já estão em uma grande metrópole e desejam explorar o 'lado B' de forma exclusiva e intencional. O foco é em experiências culturais, gastronômicas e de bem-estar que nutrem a alma.",
    tags: ["urbano", "concierge"],
    isGroup: false,
    category: "individual",
    details: [
      "Acesso Exclusivo: Restaurantes secretos, eventos culturais exclusivos",
      "Bem-Estar Urbano: Meditação em locais inusitados, yoga com vistas panorâmicas",
      "Conexão Local: Guias especializados, galerias, ateliês",
      "Flexibilidade: Pacotes de um dia, fim de semana ou série de experiências"
    ],
    idealFor: "Indivíduos que buscam vivenciar o luxo e a autenticidade de uma metrópole, transformando o cotidiano em descobertas."
  },
  {
    slug: "expedicoes-proposito",
    title: "Expedições para Propósito e Conexão",
    summary: "Retiros e jornadas para trabalho/propósito e relacionamentos.",
    description: "Viagens luxuosas e intencionais, cuidadosamente planejadas para atender a momentos específicos da vida, com um foco profundo em nutrir o Trabalho e os Relacionamentos. Podem ser retiros corporativos diferenciados, jornadas de transição de carreira ou experiências que promovem a interação autêntica.",
    tags: ["propósito", "relacionamentos"],
    isGroup: true,
    category: "group",
    details: [
      "Trabalho: Retiros para empreendedores em busca de alinhamento",
      "Workshops com líderes de pensamento",
      "Jornadas para mulheres em transição",
      "Relacionamentos: Aprofundamento de laços familiares",
      "Conexão com comunidades locais"
    ],
    idealFor: "Indivíduos ou grupos que buscam clareza de propósito profissional, fortalecer laços pessoais ou conexão mais profunda com o mundo."
  },
];

export const about = {
  short: "Bia Castro sempre uniu paixão por viajar e organizar roteiros com uma visão de bem-estar integral. Após formações em Saúde Integral (NOS Escola) e astrologia védica, criou a Casa 9 para transformar viagens em jornadas de propósito — onde cada detalhe é intencional e acolhedor. Hoje atua como consultora independente afiliada à Primetour, agência membro da rede Virtuoso, garantindo excelência e acesso a experiências exclusivas. A Casa 9 integra conscientemente os 5 pilares (Corpo, Alimentação, Espiritualidade, Trabalho/Propósito e Relacionamentos) para que cada cliente retorne com a alma tocada, a mente expandida e memórias que permanecem.",

  full: `Desde que me conheço por gente, a paixão por desbravar o mundo e mergulhar em novas culturas tem sido uma força motriz na minha vida. Lembro-me com carinho de cada roteiro meticulosamente planejado, cada detalhe organizado, não apenas para minhas próprias aventuras, mas também para amigos e familiares, que sempre me procuravam em busca de sugestões e dicas preciosas. Naquela época, o planejamento de viagens era um hobby vibrante, um deleite que me enchia de energia, mas ainda não via como o caminho profissional que se descortinaria.

Minha trajetória acadêmica me levou à ESPM/SP, onde me formei em Propaganda e Marketing. Mergulhei no universo publicitário, atuando em empresas renomadas, na televisão e, posteriormente, empreendendo com o meu próprio e-commerce. Durante todos esses anos, o entusiasmo por viajar, planejar e organizar novas expedições nunca diminuiu. Pelo contrário, as malas e os mapas sempre foram companheiros constantes, preenchendo as pausas e os horizontes da minha vida profissional.

No entanto, a partir de 2021, um novo chamado interior começou a ecoar. Em busca de uma vida com mais significado, mais alinhada à minha essência, iniciei uma profunda jornada de autoconhecimento. Essa busca culminou, em 2023, com a minha formação na NOS Escola como Agente de Saúde Integral e Coach de Saúde Integral. Foi um verdadeiro divisor de águas! Um novo mundo de possibilidades se abriu, e percebi que era possível construir uma vida profissional e pessoal muito mais coerente com o que eu realmente sentia e acreditava. Minha formação em Saúde Integral é, inclusive, o pilar da expertise que trago para a Casa 9, garantindo uma abordagem autêntica e holística em cada experiência.

Em 2024, aprofundei ainda mais essa busca pelo autoconhecimento com a formação em Astrologia Védica. Essa ferramenta milenar não só ampliou minha visão de mundo, mas também foi a inspiração direta para o nome da nossa agência: Casa 9. No mapa astral, a Casa 9 representa as grandes viagens, as jornadas a terras distantes e, mais profundamente, as viagens que nos trazem conexão, expansão de consciência e propósito. Um nome que encapsula perfeitamente a essência do que queremos oferecer.

Agora, com a emocionante oportunidade de me tornar uma consultora independente da Primetour, uma agência membro da renomada rede Virtuoso, todos esses mundos se conectam de forma sublime. Minha genuína paixão por viajar, meu amor por planejar e o desejo sincero de ajudar os outros a encontrar bem-estar e autoconhecimento através de experiências significativas se unem. Com o apoio e a excelência da Primetour, garanto que cada viagem da Casa 9 será sinônimo de impecabilidade, luxo e uma curadoria que transcende o convencional.

Minha missão na Casa 9 é ir além do destino. É desenhar roteiros que são verdadeiras jornadas de alma, onde o propósito central é o acolhimento, a conexão genuína e a criação de memórias que enriquecem e tocam a alma de cada viajante. A Casa 9 se posiciona como uma Agência de Viagens de Luxo focada em Saúde Integral, integrando intencionalmente os 5 Pilares da Saúde Integral: Corpo, Alimentação Saudável, Espiritualidade, Trabalho e Relacionamentos, em cada experiência que criamos. Cada viagem é uma oportunidade para nutrir ao menos um desses pilares, proporcionando um bem-estar holístico e duradouro.

Acredito que viagens são um veículo poderoso para o autoconhecimento e o bem-estar integral. Por isso, me dedico a criar jornadas que ofereçam muito mais que paisagens deslumbrantes; elas oferecem luxo com propósito, que resulta em crescimento pessoal e um profundo senso de equilíbrio.

Estou incrivelmente feliz e empolgada para desenvolver roteiros maravilhosos, exclusivos e verdadeiramente impecáveis. Cada detalhe será cuidadosamente pensado para que meus clientes retornem não apenas com belas fotos, mas com a alma nutrida, a mente expandida e um tesouro de memórias transformadoras para o resto da vida. Com a Casa 9, permita-se ser acolhido em cada descoberta e retornar com a alma enriquecida.`,

  founder: {
    name: "Bia Castro",
    title: "Fundadora & Curadora de Experiências",
    bio: "Formada em Saúde Integral pela NOS Escola e em Astrologia Védica, Bia une sua paixão por viagens com uma abordagem holística de bem-estar. Consultora independente afiliada à Primetour (Virtuoso).",
    image: "/images/bia-castro.jpg",
    imageAlt: "Bia Castro — fundadora da Casa 9, consultora independente afiliada à Primetour (Virtuoso)"
  }
};

export const seo = {
  organization: {
    name: "Casa 9 Viagens",
    founder: "Bia Castro",
    memberOf: "Primetour (agência membro da rede Virtuoso)",
    description: "Agência de viagens de luxo focada em Saúde Integral. Experiências transformadoras guiadas pelos 5 pilares: Corpo, Alimentação, Espiritualidade, Trabalho/Propósito e Relacionamentos."
  },
  home: {
    title: "Casa 9 Viagens | Curadoria de Luxo com Propósito",
    description: "Viagens que viram memória. Curadoria de luxo com propósito — experiências que nutrem corpo, alma e relações, guiadas pelos 5 pilares da saúde integral."
  },
  about: {
    title: "Sobre Bia Castro | Casa 9 Viagens",
    description: "Conheça Bia Castro, fundadora da Casa 9. Formada em Saúde Integral e Astrologia Védica, transforma viagens em jornadas de propósito e bem-estar."
  }
};
