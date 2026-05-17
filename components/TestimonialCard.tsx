import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const clientName = getMetafieldValue(testimonial.metadata?.client_name)
  const clientRole = getMetafieldValue(testimonial.metadata?.client_role)
  const clientCompany = getMetafieldValue(testimonial.metadata?.client_company)
  const photo = testimonial.metadata?.client_photo

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="text-4xl text-brand-500 mb-3 leading-none">"</div>
      <p className="text-gray-700 leading-relaxed mb-6 flex-1">{quote}</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=facearea&facepad=3&auto=format,compress`}
            alt={clientName}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="font-semibold text-dark-900">{clientName}</div>
          <div className="text-sm text-gray-500">
            {clientRole}{clientCompany && ` · ${clientCompany}`}
          </div>
        </div>
      </div>
    </div>
  )
}