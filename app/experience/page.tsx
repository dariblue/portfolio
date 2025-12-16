import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Experiencia | Dario - Ciberseguridad',
  description: 'Formación, experiencia profesional y habilidades técnicas en ciberseguridad.',
}

export default function ExperiencePage() {
  const experience = [
    {
      role: 'Desarrollador Becario - CRM Microsoft Dynamics',
      company: 'INFOAVAN',
      period: 'Septiembre 2022 - Mayo 2023',
      description: 'Colaboración en el desarrollo y personalización del CRM Microsoft Dynamics 365.',
      responsibilities: [
        'Desarrollo y personalización de módulos en Microsoft Dynamics CRM',
        'Automatización de procesos y creación de flujos de trabajo',
        'Resolución de incidencias y soporte técnico',
        'Integración de nuevas funcionalidades según requisitos empresariales',
      ],
    },
  ]

  const education = [
    {
      title: 'Ingeniería Informática',
      institution: 'Universidad Francisco de Vitoria',
      period: '2023 - Presente (3er Año)',
      description: 'Cursando tercer año de carrera con especialización en sistemas y seguridad.',
    },
    {
      title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      institution: 'Universidad Francisco de Vitoria',
      period: '2021 - 2023',
      description: 'Formación Superior con calificación final de 7,21.',
    },
  ]

  const skills = [
    { 
      category: 'Lenguajes de Programación', 
      items: ['HTML5', 'CSS', 'JavaScript', 'Java', 'C#', 'PHP', 'Python'] 
    },
    { 
      category: 'Desarrollo Web & Frameworks', 
      items: ['Bootstrap', 'jQuery', 'React', 'Next.js'] 
    },
    { 
      category: 'Seguridad & Análisis', 
      items: ['OWASP', 'Análisis de Vulnerabilidades', 'Testing de Seguridad'] 
    },
    { 
      category: 'Bases de Datos & Herramientas', 
      items: ['MySQL', 'Git', 'GitHub', 'Visual Studio Code', 'Visual Studio'] 
    },
    { 
      category: 'Entornos de Desarrollo', 
      items: ['Visual Studio Code', 'Visual Studio Community', 'Eclipse', 'Android Studio', 'Office'] 
    },
    { 
      category: 'Diseño & Multimedia', 
      items: ['Photoshop', 'UI/UX Basics', 'Figma'] 
    },
  ]

  const achievements = [
    {
      title: 'Ganador Hackathon UFV 2025 - Cluster IoT',
      description: 'Desarrollo y presentación de "MediTime", aplicación ganadora en la categoría IoT.',
    },
    {
      title: 'Componente del equipo técnico - StartUp FlatOut Homologaciones',
      description: 'Participación activa en proyecto empresarial con responsabilidades técnicas.',
    },
    {
      title: 'Creador de servidor de juegos online',
      description: 'Desarrollo de infraestructura para servidor con más de 1000 jugadores.',
    },
  ]

  const languages = [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Muy Bueno' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="mb-16 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Experiencia
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Formación académica, experiencia profesional y habilidades técnicas en desarrollo y ciberseguridad.
            </p>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Formación Académica</h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                  <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all neon-border">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-primary">{edu.title}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution} · {edu.period}</p>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Experiencia Profesional</h2>
            <div className="space-y-6">
              {experience.map((job, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors">
                  <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="p-6 rounded-lg border border-border bg-card/30 hover:bg-card/60 transition-all neon-border">
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                      <p className="text-sm text-muted-foreground">{job.company} · {job.period}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Habilidades Técnicas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border bg-card/30 neon-border">
                  <h3 className="font-semibold text-primary mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/20 hover:border-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Idiomas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground">{lang.language}</p>
                  <p className="text-sm text-muted-foreground">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Logros & Proyectos Destacados</h2>
            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="p-4 rounded-lg border border-primary/30 bg-primary/5 hover:border-primary transition-colors">
                  <p className="font-semibold text-foreground">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
