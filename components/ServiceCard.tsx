import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const icon = getMetafieldValue(service.metadata?.icon) || '⚡'
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const shortDesc = getMetafieldValue(service.metadata?.short_description)

  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <div className="h-full bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-brand-500 transition-all duration-300 hover:-translate-y-1">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-2xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{shortDesc}</p>
        <div className="mt-4 text-brand-600 font-medium text-sm flex items-center gap-1">
          Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </Link>
  )
}