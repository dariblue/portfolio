"use client"

import ScrollReveal from "@/components/ScrollReveal"

export default function Experience() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">
            <span className="gradient-text">Experiencia</span>
          </h1>
          <p className="page-description">
            Formación académica, experiencia profesional y habilidades técnicas en desarrollo y ciberseguridad.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="timeline-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Formación Académica</h2>
          </ScrollReveal>

          <div className="timeline">
            <ScrollReveal className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Ingeniería Informática</h3>
                <p className="timeline-meta">Universidad Francisco de Vitoria · 2023 - Presente (3er Año)</p>
                <p className="timeline-description">
                  Cursando tercer año de carrera con especialización en sistemas y seguridad.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
                <p className="timeline-meta">Universidad Francisco de Vitoria · 2021 - 2023</p>
                <p className="timeline-description">Formación Superior con calificación final de 7,21.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="timeline-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Experiencia Profesional</h2>
          </ScrollReveal>

          <div className="timeline">
            <ScrollReveal className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">Desarrollador Becario - CRM Microsoft Dynamics</h3>
                <p className="timeline-meta">INFOAVAN · Septiembre 2022 - Mayo 2023</p>
                <p className="timeline-description">
                  Colaboración en el desarrollo y personalización del CRM Microsoft Dynamics 365.
                </p>
                <ul className="responsibilities">
                  <li>
                    <i className="fas fa-check-circle"></i> Desarrollo y personalización de módulos en Microsoft
                    Dynamics CRM
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Automatización de procesos y creación de flujos de trabajo
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Resolución de incidencias y soporte técnico
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Integración de nuevas funcionalidades según requisitos
                    empresariales
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Habilidades Técnicas</h2>
          </ScrollReveal>

          <div className="skills-grid">
            <ScrollReveal className="skill-card">
              <h3>Lenguajes de Programación</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">PHP</span>
                <span className="skill-tag">Python</span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="skill-card">
              <h3>Desarrollo Web & Frameworks</h3>
              <div className="skill-tags">
                <span className="skill-tag">Bootstrap</span>
                <span className="skill-tag">jQuery</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="skill-card">
              <h3>Seguridad & Análisis</h3>
              <div className="skill-tags">
                <span className="skill-tag">OWASP</span>
                <span className="skill-tag">Análisis de Vulnerabilidades</span>
                <span className="skill-tag">Testing de Seguridad</span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="skill-card">
              <h3>Bases de Datos & Herramientas</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Visual Studio</span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="skill-card">
              <h3>Entornos de Desarrollo</h3>
              <div className="skill-tags">
                <span className="skill-tag">Visual Studio Code</span>
                <span className="skill-tag">Eclipse</span>
                <span className="skill-tag">Android Studio</span>
                <span className="skill-tag">Office</span>
              </div>
            </ScrollReveal>

            <ScrollReveal className="skill-card">
              <h3>Diseño & Multimedia</h3>
              <div className="skill-tags">
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">UI/UX</span>
                <span className="skill-tag">Figma</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="languages-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Idiomas</h2>
          </ScrollReveal>

          <div className="languages-grid">
            <ScrollReveal className="language-card">
              <h3>Español</h3>
              <p className="language-level">Nativo</p>
            </ScrollReveal>
            <ScrollReveal className="language-card">
              <h3>Inglés</h3>
              <p className="language-level">Muy Bueno</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Logros & Proyectos Destacados</h2>
          </ScrollReveal>

          <div className="achievements-grid">
            <ScrollReveal className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Ganador Hackathon UFV 2025 - Cluster IoT</h3>
              <p>Desarrollo y presentación de "MediTime", aplicación ganadora en la categoría IoT.</p>
            </ScrollReveal>

            <ScrollReveal className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Componente del equipo técnico - StartUp FlatOut Homologaciones</h3>
              <p>Participación activa en proyecto empresarial con responsabilidades técnicas.</p>
            </ScrollReveal>

            <ScrollReveal className="achievement-card">
              <div className="achievement-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Creador de servidor de juegos online</h3>
              <p>Desarrollo de infraestructura para servidor con más de 1000 jugadores.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
