import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">Services</div>
          <h1 className="text-4xl lg:text-6xl font-bold text-dark-900 mb-4">
            Our <span className="gradient-text">capabilities</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From business process automation to AI-enabled platforms, we deliver end-to-end digital operations systems.
          </p>
        </div>
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No services available yet.</p>
        )}
      </div>
    </div>
  )
}