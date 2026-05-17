import Link from 'next/link'
import { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const clientName = getMetafieldValue(caseStudy.metadata?.client_name) || caseStudy.title
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const summary = getMetafieldValue(caseStudy.metadata?.project_summary)
  const image = caseStudy.metadata?.featured_image

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block">
      <article className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {image && (
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img
              src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
              alt={clientName}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          {industry && (
            <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full mb-3">
              {industry}
            </span>
          )}
          <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-brand-600 transition-colors">
            {clientName}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{summary}</p>
        </div>
      </article>
    </Link>
  )
}