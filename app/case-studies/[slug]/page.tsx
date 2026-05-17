// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) notFound()

  const clientName = getMetafieldValue(caseStudy.metadata?.client_name) || caseStudy.title
  const industry = getMetafieldValue(caseStudy.metadata?.industry)
  const summary = getMetafieldValue(caseStudy.metadata?.project_summary)
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const image = caseStudy.metadata?.featured_image
  const relatedServices = caseStudy.metadata?.related_services

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/case-studies" className="text-brand-600 hover:text-brand-700 font-medium mb-6 inline-block">← Back to Case Studies</Link>

        {industry && (
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full mb-4">
            {industry}
          </span>
        )}

        <h1 className="text-4xl lg:text-5xl font-bold text-dark-900 mb-4">{clientName}</h1>
        {summary && <p className="text-xl text-gray-600 mb-8">{summary}</p>}

        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={clientName}
            width={800}
            height={400}
            className="w-full rounded-2xl mb-12"
          />
        )}

        <div className="space-y-10">
          {challenge && (
            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-3">The Challenge</h2>
              <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: challenge }} />
            </section>
          )}
          {solution && (
            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-3">Our Solution</h2>
              <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: solution }} />
            </section>
          )}
          {results && (
            <section className="bg-gradient-to-br from-brand-50 to-accent-500/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-dark-900 mb-3">Results</h2>
              <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: results }} />
            </section>
          )}

          {relatedServices && Array.isArray(relatedServices) && relatedServices.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-dark-900 mb-4">Related Services</h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((svc) => (
                  <Link key={svc.id} href={`/services/${svc.slug}`} className="px-4 py-2 bg-gray-100 hover:bg-brand-50 hover:text-brand-700 rounded-lg text-sm font-medium transition-colors">
                    {svc.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}