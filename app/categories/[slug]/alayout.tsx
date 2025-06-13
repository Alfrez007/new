import Link from 'next/link';
import './globals.css';
import type { ReactNode } from 'react';

export default function CategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      {/* Shared Navbar */}
      <nav className="w-full px-6 py-4 bg-white border-b shadow-sm flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
          AlFrEz
        </Link>
        <div className="space-x-4 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/#categories">Categories</Link>
          <Link href="/#about">About</Link>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      {/* Shared Footer */}
      <footer className="w-full border-t text-center py-6 text-sm text-gray-500 bg-gray-50">
        © 2025 AlFrEz — All For Eaze. Designed with purpose, built for performance.
      </footer>
    </div>
  );
}