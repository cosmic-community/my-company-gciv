import CaseStudyCard from '@/components/CaseStudyCard'
import { getCaseStudies } from '@/lib/cosmic'

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Case Studies</div>
          <h1 className="text-4xl lg:text-6xl font-bold text-dark-900 mb-4">
            Our <span className="gradient-text">success stories</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from businesses we've helped digitize and scale.
          </p>
        </div>
        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No case studies available yet.</p>
        )}
      </div>
    </div>
  )
}