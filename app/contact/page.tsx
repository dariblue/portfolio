"use client"

import { useState } from "react"
import ScrollReveal from "@/components/ScrollReveal"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setStatus("success")
    setTimeout(() => {
      setStatus("idle")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">
            <span className="gradient-text">Contacto</span>
          </h1>
          <p className="page-description">
            ¿Tienes un proyecto o propuesta? Me encantaría escuchar de ti. Contáctame a través de cualquiera de estos
            medios.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards">
            <ScrollReveal>
              <a href="mailto:dariorp007@gmail.com" className="contact-card block">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email</h3>
                <p>dariorp007@gmail.com</p>
              </a>
            </ScrollReveal>

            <ScrollReveal>
              <a href="tel:+34678990599" className="contact-card block">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Teléfono</h3>
                <p>+34 678 990 599</p>
              </a>
            </ScrollReveal>

            <ScrollReveal>
              <div className="contact-card social-card">
                <div className="contact-icon">
                  <i className="fas fa-share-alt"></i>
                </div>
                <h3>Redes Sociales</h3>
                <div className="social-links">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="form-section">
        <div className="container">
          <ScrollReveal className="form-wrapper">
            <h2 className="section-title">Envíame un mensaje</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane"></i> Enviar mensaje
              </button>

              {status === "success" && (
                <div className="form-message success">
                  ¡Mensaje enviado correctamente! Nos contactaremos pronto.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
