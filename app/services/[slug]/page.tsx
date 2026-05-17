// app/services/[slug]/page.tsx
import { getService } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) notFound()

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const icon = getMetafieldValue(service.metadata?.icon) || '⚡'
  const shortDesc = getMetafieldValue(service.metadata?.short_description)
  const fullDesc = getMetafieldValue(service.metadata?.full_description)
  const keyFeatures = getMetafieldValue(service.metadata?.key_features)
  const image = service.metadata?.featured_image

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="text-brand-600 hover:text-brand-700 font-medium mb-6 inline-block">← Back to Services</Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-3xl">
            {icon}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-dark-900">{name}</h1>
        </div>

        {shortDesc && <p className="text-xl text-gray-600 mb-8">{shortDesc}</p>}

        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={800}
            height={400}
            className="w-full rounded-2xl mb-8"
          />
        )}

        {fullDesc && (
          <div className="prose prose-lg max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: fullDesc }} />
          </div>
        )}

        {keyFeatures && (
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-dark-900 mb-4">Key Features</h2>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: keyFeatures }} />
          </div>
        )}
      </div>
    </div>
  )
}