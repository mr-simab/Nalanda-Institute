'use client';

import { useState } from 'react';
import { ImageIcon } from '../../components/Icons';

const galleryImages = [
  { id: 1, title: 'Annual Day Celebration', category: 'events', date: '2024-01-15', image: '/api/placeholder/400/300' },
  { id: 2, title: 'Sports Meet 2024', category: 'sports', date: '2024-02-20', image: '/api/placeholder/400/300' },
  { id: 3, title: 'Research Symposium', category: 'academic', date: '2024-03-10', image: '/api/placeholder/400/300' },
  { id: 4, title: 'Campus View', category: 'campus', date: '2024-01-01', image: '/api/placeholder/400/300' },
  { id: 5, title: 'Award Ceremony', category: 'awards', date: '2024-04-05', image: '/api/placeholder/400/300' },
  { id: 6, title: 'Lab Facilities', category: 'academic', date: '2024-01-10', image: '/api/placeholder/400/300' },
  { id: 7, title: 'Cultural Festival', category: 'events', date: '2024-03-25', image: '/api/placeholder/400/300' },
  { id: 8, title: 'Football Tournament', category: 'sports', date: '2024-02-28', image: '/api/placeholder/400/300' },
  { id: 9, title: 'Library', category: 'campus', date: '2024-01-05', image: '/api/placeholder/400/300' },
  { id: 10, title: 'Graduation Day', category: 'awards', date: '2024-04-01', image: '/api/placeholder/400/300' },
  { id: 11, title: 'Innovation Fair', category: 'academic', date: '2024-03-15', image: '/api/placeholder/400/300' },
  { id: 12, title: 'Basketball Match', category: 'sports', date: '2024-02-15', image: '/api/placeholder/400/300' },
];

const categories = ['all', 'events', 'sports', 'academic', 'campus', 'awards'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ImageIcon className="h-16 w-16 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h1>
          <p className="text-xl text-gray-600">
            Explore moments of excellence, achievements, and campus life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <ImageIcon className="h-16 w-16 text-gray-500" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                <p className="text-sm text-gray-500 capitalize">{image.category}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(image.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center">
                <ImageIcon className="h-24 w-24 text-gray-500" />
              </div>
              <div className="mt-4 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-gray-300 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
