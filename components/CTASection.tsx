import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-bg rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Ready to digitize your operations?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's build secure, scalable, future-ready platforms that deliver measurable results for your business.
            </p>
            <Link href="/services" className="inline-block bg-white text-dark-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}