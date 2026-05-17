import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { getServices, getCaseStudies, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [services, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredCaseStudies = caseStudies.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <>
      <Hero />
      <ServicesSection services={services} />

      {featuredCaseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Our Work</div>
                <h2 className="text-3xl lg:text-5xl font-bold text-dark-900">
                  Featured <span className="gradient-text">case studies</span>
                </h2>
              </div>
              <Link href="/case-studies" className="hidden md:block text-brand-600 font-medium hover:text-brand-700 transition-colors">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {featuredTestimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Client Love</div>
              <h2 className="text-3xl lg:text-5xl font-bold text-dark-900">
                What clients say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTestimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}