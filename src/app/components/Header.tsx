import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed inset-x-0 top-0 z-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold text-blue-600">
            edgeble
          </a>
          <a href="#" className="text-sm font-semibold text-gray-900">For home</a>
          <a href="#" className="text-sm font-semibold text-gray-900">For industry</a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? '✕' : '≡'}
          </button>
        </div>
        <div className={`hidden lg:flex lg:gap-x-8`}>
          <a href="#" className="text-sm font-semibold text-gray-900">Hardware</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Software</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Documentation</a>
          <a href="#" className="text-sm font-semibold text-gray-900">News</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Forums</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Foundation</a>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-4">
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">For home</a>
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">For industry</a>
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">Hardware</a>
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">Software</a>
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">Documentation</a>
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">News</a>
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">Forums</a>
          <a href="#" className="block text-sm font-semibold text-gray-900 py-2">Foundation</a>
        </div>
      )}
    </header>
  );
}
