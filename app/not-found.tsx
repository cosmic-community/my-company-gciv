import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found</p>
        <Link href="/" className="bg-gradient-to-r from-brand-500 to-accent-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Back to Home
        </Link>
      </div>
    </div>
  )
}