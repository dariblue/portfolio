import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-glow hero-glow-1"></div>
          <div className="hero-glow hero-glow-2"></div>
        </div>

        <ScrollReveal className="hero-content">
          <div className="hero-badge">Bienvenido a mi portafolio</div>

          <h1 className="hero-title">
            <span className="gradient-text">Dario</span>
          </h1>

          <p className="hero-subtitle">Especialista en Ciberseguridad & Análisis de Vulnerabilidades</p>

          <p className="hero-tagline">· DariBlue ·</p>

          <p className="hero-description">
            Protegiendo infraestructuras digitales mediante análisis profundo, penetration testing y soluciones de
            seguridad de vanguardia.
          </p>

          <div className="hero-buttons">
            <Link href="/projects" className="btn btn-primary">
              <i className="fas fa-arrow-right"></i> Ver Proyectos
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contactar
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Áreas de Especialización</h2>
          </ScrollReveal>

          <div className="services-grid">
            <ScrollReveal className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Penetration Testing</h3>
              <p>Evaluación de seguridad mediante ataques controlados para identificar vulnerabilidades.</p>
            </ScrollReveal>

            <ScrollReveal className="service-card">
              <div className="service-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>Análisis de Amenazas</h3>
              <p>Identificación y análisis de vectores de ataque y patrones de amenazas emergentes.</p>
            </ScrollReveal>

            <ScrollReveal className="service-card">
              <div className="service-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>Infraestructura Segura</h3>
              <p>Diseño e implementación de arquitecturas de seguridad robustas y escalables.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
