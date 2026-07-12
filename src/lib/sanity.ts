import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const sanityClient = createClient({
  projectId: 'eulheo47',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Image URL builder
const builder = imageUrlBuilder(sanityClient)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source).auto('format')
}

// Types
export interface PortfolioItem {
  _id: string
  title: string
  slug: { current: string }
  date: string
  category: string
  venue?: { venueName?: string; venueUrl?: string }
  coverImage: any
  images: any[]
  featured: boolean
  order: number
}

// Queries
export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  return sanityClient.fetch(`
    *[_type == "portfolio"] | order(order asc, date desc) {
      _id,
      title,
      slug,
      date,
      category,
      venue { venueName, venueUrl },
      coverImage,
      images,
      featured,
      order
    }
  `)
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem | null> {
  return sanityClient.fetch(`
    *[_type == "portfolio" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      date,
      category,
      venue { venueName, venueUrl },
      coverImage,
      images,
      featured
    }
  `, { slug })
}

export async function getFeaturedPortfolio(): Promise<PortfolioItem[]> {
  return sanityClient.fetch(`
    *[_type == "portfolio" && featured == true] | order(order asc) [0...6] {
      _id,
      title,
      slug,
      coverImage,
      category
    }
  `)
}

export async function getLatestPortfolio(count: number = 3): Promise<PortfolioItem[]> {
  return sanityClient.fetch(`
    *[_type == "portfolio"] | order(date desc) [0...${count}] {
      _id,
      title,
      slug,
      date,
      category,
      coverImage
    }
  `)
}

// Galeria na landingi ślubne — okładki + kilka kadrów z wyróżnionych realizacji.
// Zwraca płaską listę zdjęć z proporcjami (do justified grid).
export async function getLandingGallery(limit: number = 12): Promise<{ image: any; ar: number }[]> {
  const items = await sanityClient.fetch(`
    *[_type == "portfolio"] {
      "cover": coverImage{ ..., "ar": asset->metadata.dimensions.aspectRatio },
      "gallery": images[0...12]{ ..., "ar": asset->metadata.dimensions.aspectRatio }
    }
  `)
  const flat: { image: any; ar: number }[] = []
  for (const it of items || []) {
    if (it?.cover?.asset) flat.push({ image: it.cover, ar: it.cover.ar || 1 })
    for (const img of it?.gallery || []) {
      if (img?.asset) flat.push({ image: img, ar: img.ar || 1 })
    }
  }
  // Losowa kolejność (Fisher-Yates) → inny zestaw przy każdym buildzie i na każdym mieście
  for (let i = flat.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[flat[i], flat[j]] = [flat[j], flat[i]]
  }
  return flat.slice(0, limit)
}

// Category labels in Polish
export const categoryLabels: Record<string, string> = {
  'reportaz-slubny': 'Reportaż ślubny',
  'sesja-poslubna': 'Sesja poślubna',
  'sesja-narzeczenska': 'Sesja narzeczeńska',
}
