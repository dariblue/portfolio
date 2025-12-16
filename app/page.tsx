import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Lock, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl w-full mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Bienvenido a mi portafolio
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Dario
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground font-light">
                Especialista en Ciberseguridad & Análisis de Vulnerabilidades
              </p>
              
              <p className="text-sm text-primary/80 font-semibold tracking-widest">
                · DariBlue ·
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Protegiendo infraestructuras digitales mediante análisis profundo, penetration testing y soluciones de seguridad de vanguardia.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/projects"
                className="px-8 py-3 rounded-lg bg-primary text-foreground font-semibold hover:bg-primary/90 transition-all glow-purple flex items-center justify-center gap-2 group"
              >
                Ver Proyectos
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
              >
                Contactar
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 bg-card/20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Áreas de Especialización</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Penetration Testing',
                  description: 'Evaluación de seguridad mediante ataques controlados para identificar vulnerabilidades.'
                },
                {
                  icon: Lock,
                  title: 'Análisis de Amenazas',
                  description: 'Identificación y análisis de vectores de ataque y patrones de amenazas emergentes.'
                },
                {
                  icon: Zap,
                  title: 'Infraestructura Segura',
                  description: 'Diseño y implementación de arquitecturas de seguridad robustas y escalables.'
                },
              ].map((service, idx) => {
                const Icon = service.icon
                return (
                  <div key={idx} className="p-6 rounded-xl border border-border bg-background hover:bg-card/50 transition-all group neon-border">
                    <Icon size={32} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
