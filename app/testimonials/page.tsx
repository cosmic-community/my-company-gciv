import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Client Love</div>
          <h1 className="text-4xl lg:text-6xl font-bold text-dark-900 mb-4">
            What clients <span className="gradient-text">say</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from the businesses we've partnered with.
          </p>
        </div>
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No testimonials yet.</p>
        )}
      </div>
    </div>
  )
}