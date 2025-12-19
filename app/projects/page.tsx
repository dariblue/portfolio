"use client"

import { useState } from "react"
import ScrollReveal from "@/components/ScrollReveal"

// Project Data
const projects = [
  {
    id: 1,
    title: "MediTime",
    description: "Ganador Hackathon UFV 2025. Aplicación IoT para monitoreo de salud.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    tags: ["IoT", "Hackathon", "React"],
  },
  {
    id: 2,
    title: "Servidor de Juegos Online",
    description: "Infraestructura para servidor con más de 1000 jugadores activos.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    tags: ["Backend", "Networking", "Scalability"],
  },
  {
    id: 3,
    title: "Meditime (Proyecto Universitario)",
    description: "Aplicación para gestión de datos de salud y consultas médicas.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    tags: ["Full-stack", "Database", "Healthcare"],
  },
  {
    id: 4,
    title: "MundoMotor",
    description: "Plataforma de gestión de información automotriz y vehículos.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    tags: ["Web", "Database", "UI/UX"],
  },
  {
    id: 5,
    title: "FlatOut Homologaciones",
    description: "Sistema técnico para gestión de procesos de homologación de vehículos.",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    tags: ["StartUp", "Backend", "Business"],
  },
]

export default function Projects() {
  return (
    <main>
      <section className="projects-header">
        <div className="container">
          <ScrollReveal>
            <div className="header-content">
              <h1 className="page-title">
                <span className="gradient-text">Proyectos</span>
              </h1>
              <div className="project-count">
                <span className="badge">{projects.length} proyectos</span>
              </div>
              <p className="page-description">
                Galería interactiva de proyectos. Cada tarjeta contiene un carrusel interno con múltiples imágenes de cada
                proyecto.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid" id="projectsGrid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Galería Adicional</h2>
          </ScrollReveal>

          <div className="gallery-grid">
            <ScrollReveal className="gallery-column">
              <div className="gallery-item gallery-large">
                <img src="/placeholder.svg?height=400&width=600" alt="MediTime - Principal" />
                <div className="gallery-overlay">
                  <h3>MediTime</h3>
                </div>
              </div>
              <div className="gallery-row">
                <div className="gallery-item gallery-small">
                  <img src="/placeholder.svg?height=300&width=300" alt="MediTime - Interface" />
                </div>
                <div className="gallery-item gallery-small">
                  <img src="/placeholder.svg?height=300&width=300" alt="MediTime - Dashboard" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="gallery-column">
              <div className="gallery-item gallery-large">
                <img src="/placeholder.svg?height=400&width=600" alt="Servidor Juegos - Principal" />
                <div className="gallery-overlay">
                  <h3>Servidor de Juegos Online</h3>
                </div>
              </div>
              <div className="gallery-row">
                <div className="gallery-item gallery-small">
                  <img src="/placeholder.svg?height=300&width=300" alt="Servidor - Arquitectura" />
                </div>
                <div className="gallery-item gallery-small">
                  <img src="/placeholder.svg?height=300&width=300" alt="Servidor - Estadísticas" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="project-card-wrapper">
      <div className="project-card-image">
        <img
          src={project.images[currentImageIndex]}
          alt={project.title}
          className="current-image"
        />
        <div className="carousel-controls">
          <button className="carousel-arrow prev-arrow" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="image-counter">
            <span className="current-index">{currentImageIndex + 1}</span> /{" "}
            <span className="total-images">{project.images.length}</span>
          </span>
          <button className="carousel-arrow next-arrow" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
