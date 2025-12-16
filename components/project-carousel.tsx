'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % projects.length)
  }

  const prev = () => {
    setCurrent((current - 1 + projects.length) % projects.length)
  }

  return (
    <div className="w-full">
      <div className="relative">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border neon-border md:max-w-2xl">
          <Image
            src={projects[current].image || "/placeholder.svg"}
            alt={projects[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">{projects[current].title}</h3>
            <p className="text-gray-200 text-xs sm:text-sm mb-4">{projects[current].description}</p>
            <div className="flex flex-wrap gap-2">
              {projects[current].tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-primary/30 text-primary rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-white transition-all z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/80 hover:bg-primary text-white transition-all z-10"
        >
          <ChevronRight size={20} />
        </button>

        {/* Project Counter */}
        <div className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-black/50 backdrop-blur text-sm text-white border border-primary/50">
          {current + 1} / {projects.length}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-muted-foreground mb-3 font-medium">Todos los proyectos</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {projects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setCurrent(idx)}
              className={`relative aspect-square rounded-lg border-2 transition-all overflow-hidden hover:scale-105 ${
                idx === current
                  ? 'border-primary ring-2 ring-primary/50'
                  : 'border-border hover:border-primary/50'
              }`}
              title={project.title}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="mt-6 flex justify-center gap-1">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 transition-all rounded-full ${
              idx === current ? 'bg-primary w-8' : 'bg-border w-1.5 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
