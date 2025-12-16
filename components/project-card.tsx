'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  id: number
  title: string
  description: string
  images: string[]
  tags: string[]
}

export function ProjectCard({ id, title, description, images, tags }: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="group h-full rounded-xl border border-border bg-card/30 hover:bg-card/60 transition-all hover:border-primary/50 neon-border overflow-hidden">
      <div className="relative w-full h-48 overflow-hidden bg-background">
        <Image
          src={images[currentImageIndex] || '/placeholder.svg'}
          alt={`${title} - ${currentImageIndex + 1}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image counter */}
        <div className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/60 backdrop-blur text-xs text-white border border-primary/50">
          {currentImageIndex + 1} / {images.length}
        </div>

        {/* Navigation arrows - visible on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-primary/70 hover:bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full bg-primary/70 hover:bg-primary text-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Thumbnail indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex(idx)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-primary w-4' : 'bg-white/50 hover:bg-white'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="p-4">
        <h3 className="font-bold text-foreground mb-1 line-clamp-2">{title}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
