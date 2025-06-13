'use client';

import { useParams } from 'next/navigation';

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug;

  // Placeholder for future tool fetching logic per category
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {slug?.toString().replace(/-/g, ' ')}
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Tools and utilities categorized under: <strong>{slug}</strong>
      </p>

      {/* Future: Dynamically fetch and render tools for this category */}
      <div className="text-gray-400 italic">Tool list for this category will appear here.</div>
    </div>
  );
}