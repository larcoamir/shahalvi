'use client'

import { useState } from 'react'
import Image from 'next/image'

type Photo = {
  id: number
  src: string
  title: string
  description: string
}

type MediaGalleryProps = {
  photos: Photo[]
}

export default function MediaGallery({ photos }: MediaGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative aspect-square cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900">{selectedPhoto.title}</h3>
              <p className="mt-2 text-gray-600">{selectedPhoto.description}</p>
            </div>
            <button
              className="mt-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedPhoto(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}