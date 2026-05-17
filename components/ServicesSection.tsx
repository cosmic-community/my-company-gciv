import ServiceCard from './ServiceCard'
import { Service } from '@/types'

export default function ServicesSection({ services }: { services: Service[] }) {
  if (!services || services.length === 0) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">What We Do</div>
          <h2 className="text-3xl lg:text-5xl font-bold text-dark-900 mb-4">
            Solutions built for <span className="gradient-text">real workflows</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end digital operations systems tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}