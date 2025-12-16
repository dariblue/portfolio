'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import Image from 'next/image'

export const metadata = {
  title: 'Proyectos | Dario - Ciberseguridad',
  description: 'Portafolio de proyectos destacados con múltiples imágenes por proyecto.',
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'MediTime',
      description: 'Ganador Hackathon UFV 2025. Aplicación IoT para monitoreo de salud.',
      images: [
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
      ],
      tags: ['IoT', 'Hackathon', 'React'],
    },
    {
      id: 2,
      title: 'Servidor de Juegos Online',
      description: 'Infraestructura para servidor con más de 1000 jugadores activos.',
      images: [
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
      ],
      tags: ['Backend', 'Networking', 'Scalability'],
    },
    {
      id: 3,
      title: 'Meditime (Proyecto Universitario)',
      description: 'Aplicación para gestión de datos de salud y consultas médicas.',
      images: [
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
      ],
      tags: ['Full-stack', 'Database', 'Healthcare'],
    },
    {
      id: 4,
      title: 'MundoMotor',
      description: 'Plataforma de gestión de información automotriz y vehículos.',
      images: [
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
      ],
      tags: ['Web', 'Database', 'UI/UX'],
    },
    {
      id: 5,
      title: 'FlatOut Homologaciones',
      description: 'Sistema técnico para gestión de procesos de homologación de vehículos.',
      images: [
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
        '/placeholder.svg?height=300&width=400',
      ],
      tags: ['StartUp', 'Backend', 'Business'],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header with project count */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl sm:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Proyectos
                </span>
              </h1>
              <span className="px-4 py-2 rounded-full bg-primary/15 border border-primary/40 text-sm font-semibold text-primary">
                {projects.length} proyectos
              </span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Galería interactiva de proyectos. Cada tarjeta contiene un carrusel interno con múltiples imágenes de cada proyecto.
            </p>
          </div>

          {/* Main projects grid - First row with all projects */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>

          {/* Additional showcase - Two column layout */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">Galería Adicional</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left column - Project 1 expanded images */}
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border border-border neon-border h-64">
                  <Image
                    src={projects[0].images[0] || "/placeholder.svg"}
                    alt={projects[0].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold">{projects[0].title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden border border-border neon-border h-32">
                    <Image
                      src={projects[0].images[1] || "/placeholder.svg"}
                      alt={`${projects[0].title} - 2`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-border neon-border h-32">
                    <Image
                      src={projects[0].images[2] || "/placeholder.svg"}
                      alt={`${projects[0].title} - 3`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>

              {/* Right column - Project 2 expanded images */}
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border border-border neon-border h-64">
                  <Image
                    src={projects[1].images[0] || "/placeholder.svg"}
                    alt={projects[1].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-white font-bold">{projects[1].title}</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-lg overflow-hidden border border-border neon-border h-32">
                    <Image
                      src={projects[1].images[1] || "/placeholder.svg"}
                      alt={`${projects[1].title} - 2`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-border neon-border h-32">
                    <Image
                      src={projects[1].images[2] || "/placeholder.svg"}
                      alt={`${projects[1].title} - 3`}
                      fill
                      className="object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
