import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold">
                Q
              </div>
              <span className="font-bold text-xl text-white">Qodex</span>
            </div>
            <p className="text-sm text-gray-400">
              Building intelligent systems that power growing businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Location</h3>
            <p className="text-sm text-gray-400">Nawabshah, Sindh<br/>Pakistan</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Qodex Software. All rights reserved.
        </div>
      </div>
    </footer>
  )
}