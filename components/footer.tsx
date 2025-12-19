import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-branding">
              <i className="fas fa-shield-alt"></i>
              <span>
                <span className="text-primary">Dario</span>
                <span className="text-muted text-xs">Blue</span>
              </span>
            </div>
            <p>Especialista en ciberseguridad y protección de infraestructura digital.</p>
          </div>

          <div className="footer-section">
            <h3>Navegación</h3>
            <ul>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/projects">Proyectos</Link>
              </li>
              <li>
                <Link href="/experience">Experiencia</Link>
              </li>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Conecta</h3>
            <div className="social-links footer-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:dariorp007@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DariBlue. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
