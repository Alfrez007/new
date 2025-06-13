'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  HeartPulse,
  Briefcase,
  Image as ImageIcon,
  FileText,
  Puzzle,
  Code,
  Shield,
  BookOpen,
  Bot,
  Globe,
  Palette,
  Music2,
  DollarSign,
  Server,
  Scale
} from 'lucide-react';

const categories = [
  { name: 'Health Tools', slug: 'health-tools', icon: <HeartPulse className="w-5 h-5 mr-2" /> },
  { name: 'Business Tools', slug: 'business-tools', icon: <Briefcase className="w-5 h-5 mr-2" /> },
  { name: 'Image Tools', slug: 'image-tools', icon: <ImageIcon className="w-5 h-5 mr-2" /> },
  { name: 'Document Converters', slug: 'document-converters', icon: <FileText className="w-5 h-5 mr-2" /> },
  { name: 'General Tools', slug: 'general-tools', icon: <Puzzle className="w-5 h-5 mr-2" /> },
  { name: 'Developer Tools', slug: 'developer-tools', icon: <Code className="w-5 h-5 mr-2" /> },
  { name: 'Security & Privacy Tools', slug: 'security-and-privacy-tools', icon: <Shield className="w-5 h-5 mr-2" /> },
  { name: 'Educational Tools', slug: 'educational-tools', icon: <BookOpen className="w-5 h-5 mr-2" /> },
  { name: 'AI Tools', slug: 'ai-tools', icon: <Bot className="w-5 h-5 mr-2" /> },
  { name: 'Web Tools', slug: 'web-tools', icon: <Globe className="w-5 h-5 mr-2" /> },
  { name: 'Design Tools', slug: 'design-tools', icon: <Palette className="w-5 h-5 mr-2" /> },
  { name: 'Audio/Video Tools', slug: 'audio-video-tools', icon: <Music2 className="w-5 h-5 mr-2" /> },
  { name: 'Financial Tools', slug: 'financial-tools', icon: <DollarSign className="w-5 h-5 mr-2" /> },
  { name: 'System Utilities', slug: 'system-utilities', icon: <Server className="w-5 h-5 mr-2" /> },
  { name: 'Legal & Compliance Tools', slug: 'legal-and-compliance-tools', icon: <Scale className="w-5 h-5 mr-2" /> }
];

const tools = [
  { name: 'BMI Calculator', slug: 'bmi-calculator', category: 'health-tools' },
  { name: 'Calorie Tracker', slug: 'calorie-tracker', category: 'health-tools' },
  { name: 'Invoice Generator', slug: 'invoice-generator', category: 'business-tools' },
  { name: 'Image Resizer', slug: 'image-resizer', category: 'image-tools' },
  { name: 'PDF to Word', slug: 'pdf-to-word', category: 'document-converters' },
  { name: 'JSON Formatter', slug: 'json-formatter', category: 'developer-tools' },
  { name: 'Password Generator', slug: 'password-generator', category: 'security-and-privacy-tools' },
  { name: 'Grammar Checker', slug: 'grammar-checker', category: 'educational-tools' },
  { name: 'AI Chatbot', slug: 'ai-chatbot', category: 'ai-tools' }
];

export default function HomePage() {
  const [search, setSearch] = useState('');

  const categoryResults = categories.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const toolResults = tools.filter(tool =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      <nav className="w-full px-6 py-4 bg-white border-b shadow-sm flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
          AlFrEz
        </Link>
        <div className="space-x-4 text-sm text-gray-600">
          <Link href="#categories">Categories</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Al Fr Ez</span>
          <br />
          <span className="text-gray-900">All For Eaze</span>
        </h1>
        <p className="text-lg text-gray-500 mb-6">25+ smart utilities across 15 categories. Built for productivity, speed, and ease.</p>

        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Search tools or categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {search && toolResults.length > 0 && (
          <section id="tools" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Matching Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
              {toolResults.map(tool => (
                <Link key={tool.slug} href={`/categories/${tool.category}/${tool.slug}`}>
                  <div className="p-4 border rounded-lg shadow hover:shadow-md text-left bg-white max-w-sm mx-auto">
                    <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
                    <p className="text-xs text-gray-500 capitalize">{tool.category.replace(/-/g, ' ')}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section id="categories" className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
          {categoryResults.map(cat => (
            <Link key={cat.slug} href={`/categories/${cat.slug}`}>
              <div className="p-6 rounded-xl shadow-md border hover:shadow-lg transition bg-white text-left max-w-sm mx-auto flex items-center">
                {cat.icon}
                <div>
                  <h2 className="text-xl font-semibold">{cat.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="w-full border-t text-center py-6 text-sm text-gray-500 bg-gray-50">
        © 2025 AlFrEz — All For Eaze. Designed with purpose, built for performance.
      </footer>
    </div>
  );
}