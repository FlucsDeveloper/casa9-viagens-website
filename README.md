# Casa 9 Viagens

> Transformando roteiros em memórias inesquecíveis

Um site elegante e emocional para a Casa 9 Viagens, marca de viagens personalizadas que cria experiências inesquecíveis.

## Características

### Design & Estética
- **Paleta de cores suaves**: Areia, off-white, azul-claro e tons terrosos
- **Tipografia moderna**: Cormorant Garamond (serifa) + Montserrat (sans-serif)
- **Atmosfera acolhedora**: Visual claro, elegante e emocional
- **Microinterações elegantes**: Animações suaves e transições fluidas

### Páginas Incluídas
1. **Home** - Hero emocional com frase impactante
2. **Sobre** - Filosofia da marca e valores
3. **Experiências** - Galeria organizada por temas (Românticas, Aventura, Bem-estar, Família)
4. **Depoimentos** - Histórias reais de clientes
5. **Contato** - Formulário intuitivo e múltiplas formas de contato

### Funcionalidades Técnicas
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves com Intersection Observer
- ✅ Menu mobile interativo
- ✅ Validação de formulário
- ✅ Scroll suave
- ✅ Lazy loading de imagens
- ✅ WhatsApp flutuante
- ✅ Performance otimizada

## Estrutura do Projeto

```
novo-site/
├── index.html              # Página principal
├── sobre.html              # Sobre a Casa 9
├── experiencias.html       # Destinos e experiências
├── depoimentos.html        # Depoimentos de clientes
├── contato.html            # Página de contato
├── css/
│   └── style.css          # Estilos principais
├── js/
│   └── main.js            # JavaScript e interações
├── images/                # Pasta para imagens locais
└── README.md              # Este arquivo
```

## Como Usar

### Opção 1: Servidor HTTP Simples (Python)
```bash
# Python 3
python3 -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 2: Live Server (VS Code)
1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

### Opção 3: Qualquer servidor web
Coloque os arquivos em qualquer servidor web (Apache, Nginx, etc.)

## Paleta de Cores

```css
--color-sand: #F5F1E8          /* Areia clara */
--color-earth: #C4B5A0         /* Terroso */
--color-blue: #A8C5D1          /* Azul claro */
--color-blue-dark: #7BA3B4     /* Azul médio */
--color-terracotta: #D4A59A    /* Terracota */
--color-white: #FEFEFE         /* Branco puro */
--color-off-white: #FAF9F6     /* Off-white */
--color-text: #3E3E3E          /* Texto escuro */
```

## Tipografia

- **Títulos**: Cormorant Garamond (300, 400, 500, 600)
- **Corpo de texto**: Montserrat (300, 400, 500, 600)

## Personalização

### Alterar Imagens
Substitua as URLs do Unsplash pelas suas próprias imagens:
- Hero: Paisagens inspiradoras
- Experiências: Fotos autênticas dos destinos
- Sobre: Imagem que transmita confiança

### Atualizar Contatos
Edite os links de contato em todas as páginas:
- WhatsApp: `https://wa.me/5511999999999`
- Instagram: `@casa9.viagens`
- Email: `contato@casa9viagens.com`

### Modificar Cores
Altere as variáveis CSS em `css/style.css` (linhas 13-24)

## Performance

- Imagens otimizadas com lazy loading
- CSS minificado para produção
- JavaScript otimizado com debounce
- Fontes carregadas via Google Fonts CDN

## Compatibilidade

- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)
- ✅ Mobile (iOS e Android)

## Próximos Passos

Para colocar em produção:
1. Otimizar e comprimir imagens
2. Minificar CSS e JavaScript
3. Configurar backend para formulário de contato
4. Adicionar analytics (Google Analytics, etc.)
5. Configurar SEO (meta tags, sitemap, etc.)
6. Testar em diferentes dispositivos

## Créditos

Design e Desenvolvimento: Casa 9 Viagens
Imagens: Unsplash (substituir por fotos próprias)
Fontes: Google Fonts

---

**Casa 9 Viagens** - Algumas viagens passam. Outras ficam com a gente para sempre.
