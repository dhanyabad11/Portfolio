import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="text-red-600 hover:text-red-800 text-lg">
        Return Home
      </Link>
    </div>
  )
}