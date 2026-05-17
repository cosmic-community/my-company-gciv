import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
            🚀 Digital Operations & Workflow Automation
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Building intelligent systems that <span className="gradient-text">power growth</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Qodex Software helps growing businesses digitize and automate daily operations through custom software and AI-powered platforms — built around real business workflows, not generic tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="bg-gradient-to-r from-brand-500 to-accent-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Explore Services
            </Link>
            <Link href="/case-studies" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}