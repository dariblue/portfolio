import Link from 'next/link'
import { Github, Linkedin, Mail, Shield } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={24} className="text-primary" />
              <span className="font-bold">
                <span className="text-primary">Dario</span>
                <span className="text-muted text-xs ml-1">Blue</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialista en ciberseguridad y protección de infraestructura digital.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-muted-foreground hover:text-foreground transition-colors">
                  Experiencia
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Conecta</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 text-muted-foreground hover:text-primary transition-all hover:glow-purple"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card hover:bg-card/80 text-muted-foreground hover:text-primary transition-all hover:glow-purple"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dariorp007@gmail.com"
                className="p-2 rounded-lg bg-card hover:bg-card/80 text-muted-foreground hover:text-primary transition-all hover:glow-purple"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} DariBlue. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
