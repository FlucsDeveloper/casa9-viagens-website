import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://casa9viagens.com'

  const routes = [
    '',
    '/sobre',
    '/experiencias',
    '/planeje-sua-viagem',
    '/depoimentos',
    '/contato',
    '/blog',
    '/destinos',
    '/privacidade',
    '/excluir-dados',
  ]

  const currentDate = new Date().toISOString()

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : route === '/experiencias' ? 0.9 : 0.7,
  }))
}