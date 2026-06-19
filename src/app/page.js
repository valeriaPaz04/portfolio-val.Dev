"use client";
import TypeWriter from './components/TypeWriter';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import {
  SiHtml5, SiReact, SiNodedotjs, SiPython, SiGit, SiGithub, SiMui, SiBootstrap
} from 'react-icons/si';
import { BsJavascript } from 'react-icons/bs';
import { FaCss3Alt } from "react-icons/fa";

const techs = [
  { name: 'HTML',        icon: SiHtml5,         color: '#E34F26' },
  { name: 'CSS',         icon: FaCss3Alt,       color: '#1572B6' },
  { name: 'JavaScript',  icon: BsJavascript,    color: '#F7DF1E' },
  { name: 'React',       icon: SiReact,          color: '#61DAFB' },
  { name: 'Node.js',     icon: SiNodedotjs,      color: '#339933' },
  { name: 'PostgreSQL',  icon: '/postgresql.svg',        type: 'img' },
  { name: 'SQL Server',  icon: '/sql-server.svg',         type: 'img' },
  { name: 'Python',      icon: SiPython,         color: '#3776AB' },
  { name: 'Git',         icon: SiGit,            color: '#F05032' },
  { name: 'GitHub',      icon: SiGithub,         color: '#ffffff' },
  { name: 'Material UI', icon: SiMui,            color: '#007FFF' },
  { name: 'Bootstrap',   icon: SiBootstrap,      color: '#8911fb' },
];

const educationTags = [
  'Curiosidad',
  'Pensamiento Crítico',
  'Disciplina',
  'Aprendizaje Continuo',
  'Atención al Detalle',
  'Gestión del Tiempo',
  'Adaptabilidad',
  'Resolución de Problemas',
];

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!regex.test(email.trim())) {
      return 'El correo no tiene un formato válido';
    }
    return null;
  };

  const handleSubmit = () => {
    setError('');
    setStatus('idle');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('empty');
      return;
    }

    const emailError = validateEmail(form.email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setStatus('sending');

    emailjs.send(
      'service_bxo9yzo',
      'template_mu8ueew',
      {name: form.name, email: form.email, message: form.message, title: 'val.Dev Portfolio',},
      'dpPhvpi_0qJetqkPn'
    )
    .then(() => {
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    })
    .catch(() => setStatus('error'));
  };

  const [activeFeatured, setActiveFeatured] = useState(0);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between gap-4 border-b border-white/10">
          {/* Logo izquierdo */}
          <h1 className="font-[family-name:var(--font-syne)] text-white font-bold text-xl tracking-tight flex-shrink-0">
            val<span className="text-violet-500">.</span>Dev
          </h1>
          {/* Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-4 lg:gap-6">
              <li><a href="#home" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="#education" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Educación</a></li>
              <li><a href="#projects" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#contact" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </nav>
          {/* Iconos derecha */}
          <ul className="flex gap-3 md:gap-4 items-center flex-shrink-0">
            <li>
              <a href="mailto:valeriapazarana@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/valeriaPaz04" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/valeriapazarana/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="md:hidden text-zinc-400 hover:text-white transition-colors flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16"/>
            </svg>
          </button>
        </div>
        <nav className={`md:hidden border-b border-white/10 bg-zinc-950 transition-all ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col gap-1 px-4 py-3">
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)} className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)} className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Sobre mí</a></li>
            <li><a href="#education" onClick={() => setMobileMenuOpen(false)} className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Educación</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)} className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Proyectos</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="flex items-center pt-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-10">
          {/* Texto izquierda */}
          <div className="flex-1 min-w-0">
            <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-full break-words">
              Hola, soy<br />
              <TypeWriter text="Valeria Paz Arana" className="text-violet-400" />
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              Estudiante de Desarrollo de Software construyendo proyectos web 
              y desarrollando una visión integral del software, desde la 
              interfaz hasta la lógica detrás de cada aplicación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* Botón email */}
              <a href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white transition-colors text-sm font-medium w-full sm:w-auto">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contáctame
              </a>
              {/* Botón CV */}
              <a href="/HOJADEVIDA-VALERIAPAZARANA.pdf" target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors text-sm font-medium w-full sm:w-auto">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                Ver CV
              </a>
            </div>
          </div>
          {/* Foto derecha */}
          <div className="flex-shrink-0 w-full md:w-auto md:flex-shrink-0 min-w-0">
            <div className="relative w-56 sm:w-64 md:w-72 mx-auto md:mx-0">
              
              <div className="absolute inset-0 -z-10"
                style={{
                  background: "rgba(139,92,246,0.25)",
                  borderRadius: "50%",
                  filter: "blur(65px)",
                  transform: "scale(0.8)",
                }}
              />

              <img src="/profile.png" alt="Valeria Paz Arana" className="w-full h-auto md:h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Título */}
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white">
              <span className="text-violet-400">/</span> sobre mí
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          {/* Contenido */}
          <div>
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              {/* Texto izquierda */}
              <div className="flex-1 space-y-5 text-zinc-400 text-base leading-relaxed">
                <p>
                  Soy estudiante de <span className="text-white font-medium">Tecnología en Análisis y Desarrollo de Software</span> en el SENA, con formación técnica previa en Programación de Software.
                </p>
                <p>
                  Me apasiona crear <span className="text-white font-medium">interfaces atractivas</span> sin perder de vista la lógica detrás de cada aplicación. Actualmente participo en el desarrollo de <span className="text-white font-medium">EncomiExpress</span>, un proyecto real donde aplico mis conocimientos en desarrollo web, bases de datos y soluciones prácticas.
                </p>
                <p>
                  Más allá del desarrollo web, me genera curiosidad el <span className="text-white font-medium">machine learning</span> y las matemáticas aplicadas a la tecnología. Fuera del código, entreno en el gimnasio, juego videojuegos y disfruto tener todo organizado.
                </p>
              </div>
              {/* Items derecha */}
              <div className="flex-shrink-0 space-y-4">
                {[
                  {
                    label: "Colombia",
                    svg: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  },
                  {
                    label: "ADSO · SENA",
                    svg: <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                  },
                  {
                    label: "Desarrollo Web",
                    svg: <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-8h16v8zm0-10H4V6h16v2z"/>
                  },
                  {
                    label: "Explorando áreas",
                    svg: <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  },
                ].map(({ label, svg }) => (
                  <div key={label} className="flex items-center gap-3 text-zinc-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-violet-400 flex-shrink-0">
                      {svg}
                    </svg>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carrusel de tecnologías */}
            <div className="mt-16 md:mt-24 overflow-hidden max-w-5xl mx-auto py-1"
              onMouseEnter={e => e.currentTarget.querySelector('.track').style.animationPlayState = 'paused'}
              onMouseLeave={e => e.currentTarget.querySelector('.track').style.animationPlayState = 'running'}
            >
              <div className="track flex gap-6" style={{
                display: 'flex',
                width: 'max-content',
                animation: 'scroll 30s linear infinite',
              }}>
                {[...techs, ...techs].map((tech, i) => (
                  <div key={i}
                    className="flex flex-col items-center justify-center gap-3 px-6 py-5 rounded-xl border border-white/10 bg-white/5 w-28 flex-shrink-0 transition-transform duration-200 hover:scale-105 hover:border-violet-500/50"
                  >
                  {tech.type === 'img'
                    ? <img src={tech.icon} alt={tech.name} width={36} height={36} />
                    : <tech.icon size={36} style={{ color: tech.color }} />
                  }
                    <span className="text-xs text-zinc-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section id="education" className="pt-28 md:pt-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Título */}
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white">
              <span className="text-violet-400">/</span> educación
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Timeline */}
            <div className="relative pl-10">
              <div className="absolute left-4 top-0 h-full w-px bg-white/10" />
              {[
                {
                  institution: 'Servicio Nacional de Aprendizaje',
                  highlight: 'SENA',
                  degree: 'Tecnólogo en Análisis y Desarrollo de Software',
                  period: '2025 – 2027 · En curso',
                  description: 'Formación en desarrollo de software, aplicaciones web, bases de datos y soluciones full-stack.',
                },
                {
                  institution: 'Corporación Universitaria Adventista',
                  highlight: 'UNAC',
                  degree: 'Técnico en Desarrollo de Software',
                  period: '2023 – 2024',
                  description: 'Adquirí las bases en programación y desarrollo web, donde nació mi interés por el software.',
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-8 mb-16 last:mb-0">

                  {/* Círculo */}
                  <div className="absolute -left-[11px] top-1 w-5 h-5 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-violet-400/40 bg-zinc-950" />
                    <div className="w-2 h-2 rounded-full bg-violet-400/60" />
                  </div>

                  <p className="text-xs text-zinc-500 mb-1 tracking-wide uppercase">{item.period}</p>
                  <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold text-white mb-0.5">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-violet-400 mb-3">
                    {item.institution} · <span className="font-semibold">{item.highlight}</span>
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                    {item.description}
                  </p>

                </div>
              ))}
            </div>

            <div className="w-full">
              <div className="grid grid-cols-2 gap-2 md:hidden">
                {educationTags.map((label) => (
                  <div
                    key={label}
                    className="px-2 py-2 rounded-full bg-white/[0.03] border border-white/10 text-center text-xs text-zinc-400 break-words"
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="hidden md:flex justify-center">
                <div style={{ position: 'relative', width: '580px', height: '400px' }}>                  
                  {/* Constelación */}
                  <svg
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }} viewBox="0 0 580 400">

                    {/* Líneas */}
                    <line x1="120" y1="60" x2="240" y2="140" stroke="rgba(196,181,253,0.25)" strokeWidth="0.8"/>
                    <line x1="240" y1="140" x2="290" y2="220" stroke="rgba(196,181,253,0.25)" strokeWidth="0.8"/>
                    <line x1="60" y1="180" x2="290" y2="220" stroke="rgba(196,181,253,0.25)" strokeWidth="0.8"/>
                    <line x1="290" y1="220" x2="500" y2="180" stroke="rgba(196,181,253,0.25)" strokeWidth="0.8"/>
                    <line x1="290" y1="220" x2="340" y2="240" stroke="rgba(196,181,253,0.25)" strokeWidth="0.8"/>
                    <line x1="340" y1="240" x2="380" y2="340" stroke="rgba(196,181,253,0.25)" strokeWidth="0.8"/>
                    <line x1="380" y1="340" x2="500" y2="400" stroke="rgba(196,181,253,0.25)"/>

                    {/* Estrellas */}
                    <circle cx="120" cy="60" r="4" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />
                    <circle cx="240" cy="140" r="3" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />
                    <circle cx="290" cy="220" r="4" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />
                    <circle cx="60" cy="180" r="3" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />
                    <circle cx="500" cy="180" r="4" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />
                    <circle cx="340" cy="240" r="3" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />
                    <circle cx="380" cy="340" r="3" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />
                    <circle cx="500" cy="400" r="3" fill="#ffffff"
                      style={{
                        filter: `
                          drop-shadow(0 0 3px #fff)
                          drop-shadow(0 0 8px #8b5cf6)
                          drop-shadow(0 0 16px #8b5cf6)
                        `,
                      }}
                    />

                    {[
                      [40, 30],
                      [90, 100],
                      [170, 40],
                      [300, 20],
                      [420, 70],
                      [550, 40],
                      [520, 280],
                      [140, 350],
                      [300, 380],
                    ].map(([x, y], i) => (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="1"
                        fill="rgba(255,255,255,0.5)"
                      />
                    ))}
                  </svg>

                  {/* Tags */}
                  {[
                    { label: "Curiosidad", left: "160px", top: "85px" },
                    { label: "Pensamiento Crítico", left: "250px", top: "163px" },
                    { label: "Disciplina", left: "290px", top: "245px" },
                    { label: "Aprendizaje Continuo", left: "110px", top: "205px" },
                    { label: "Atención al Detalle", left: "520px", top: "155px" },
                    { label: "Gestión del Tiempo", left: "360px", top: "200px" },
                    { label: "Adaptabilidad", left: "400px", top: "365px" },
                    { label: "Resolución de Problemas", left: "530px", top: "420px" },
                  ].map(({ label, left, top }) => (
                    <div
                      key={label}
                      style={{
                        position: 'absolute',
                        left,
                        top,
                        transform: 'translate(-50%,-50%)',
                        background: 'rgba(139,92,246,0.08)',
                        border: '1px solid rgba(196,181,253,0.25)',
                        boxShadow: '0 0 12px rgba(139,92,246,0.15)',
                        backdropFilter: 'blur(4px)',
                        borderRadius: '999px',
                        padding: '6px 16px',
                        fontSize: '12.5px',
                        color: '#d4d4d8',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pt-28 md:pt-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Título */}
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white whitespace-normal sm:whitespace-nowrap">
              <span className="text-violet-400">/</span> proyectos
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Carrusel destacado */}
          {(() => {
            const featured = [
              {
                title: 'EncomiExpress',
                description: 'Sistema de gestión web y móvil para OsvaldoC Mensajería y Logística S.A.S. Centraliza ventas, encomiendas, rutas, conductores, vehículos y pagos en una sola plataforma, reemplazando procesos manuales por un sistema digital. Proyecto de grado — SENA, Regional Antioquia.',
                techs: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'React', 'Vite', 'Material UI', 'Flutter', 'Dart'],
                github: 'https://github.com/valeriaPaz04',
                demo: null,
                status: 'progress',
                image: '/encomiexpressLogo.png',
              },
              {
                title: 'Tienda Virtual',
                description: 'Tienda de ropa con catálogo de productos, carrito, sistema de pedidos, gestión de inventario por talla y panel de administración personalizado con Jazzmin. Reportes de ventas en Excel y PDF.',
                techs: ['Django', 'SQLite', 'Jazzmin', 'OpenPyXL', 'xhtml2pdf'],
                github: 'https://github.com/valeriaPaz04/tienda_virtual-django',
                demo: null,
                status: 'maintenance',
                image: null,
              },
            ];

            return (
              <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-8 group"
                style={{ minHeight: '500px' }}
              >
                {featured.map((item, i) => (
                  <div key={item.title} id={`featured-${i}`}
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ opacity: i === 0 ? 1 : 0, pointerEvents: i === 0 ? 'auto' : 'none' }}
                  >
                    {/* Fondo */}
                    {item.image
                      ? <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
                      : <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-zinc-900 to-zinc-950" />
                    }
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6d28d9 0%, transparent 40%)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-transparent" />

                    {/* Contenido */}
                    <div className="relative h-full px-6 md:px-20 py-10 md:py-12 flex flex-col justify-center min-h-72">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                            ⋆.˚
                          </span>
                          {item.status === 'progress' && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">En desarrollo</span>
                          )}
                          {item.status === 'maintenance' && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25">En mantenimiento</span>
                          )}
                        </div>
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-zinc-300 text-sm leading-relaxed md:max-w-lg mb-6">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mb-8 max-w-lg">
                          {item.techs.map(t => (
                            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/8">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <a href={item.github} target="_blank" rel="noreferrer"
                          className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 rounded-lg border border-white/15 text-zinc-300 text-sm hover:text-white hover:border-white/30 transition-all">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Flechas */}
                <button className="arrow-left absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/40 hover:text-white transition-colors"
                  style={{ opacity: 1, transition: 'opacity 0.2s', background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px', lineHeight: 1, padding: '8px' }}
                  onClick={() => {
                    const slides = document.querySelectorAll('[id^="featured-"]');
                    let current = [...slides].findIndex(s => s.style.opacity === '1');
                    let prev = (current - 1 + slides.length) % slides.length;
                    slides[current].style.opacity = '0';
                    slides[current].style.pointerEvents = 'none';
                    slides[prev].style.opacity = '1';
                    slides[prev].style.pointerEvents = 'auto';
                    setActiveFeatured(prev);
                  }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>

                <button className="arrow-right absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/40 hover:text-white transition-colors"
                  style={{ opacity: 1, transition: 'opacity 0.2s', background: 'none', border: 'none', cursor: 'pointer', fontSize: '28px', lineHeight: 1, padding: '8px' }}
                  onClick={() => {
                    const slides = document.querySelectorAll('[id^="featured-"]');
                    let current = [...slides].findIndex(s => s.style.opacity === '1');
                    let next = (current + 1) % slides.length;
                    slides[current].style.opacity = '0';
                    slides[current].style.pointerEvents = 'none';
                    slides[next].style.opacity = '1';
                    slides[next].style.pointerEvents = 'auto';
                    setActiveFeatured(next);
                  }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {featured.map((_, i) => (
                    <button key={i}
                      style={{
                        width: i === activeFeatured ? '16px' : '6px',
                        height: '6px',
                        borderRadius: '999px',
                        background: i === activeFeatured ? '#a78bfa' : 'rgba(255,255,255,0.3)',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'all 0.3s',
                      }}
                      onClick={() => {
                        const slides = document.querySelectorAll('[id^="featured-"]');
                        slides.forEach((s, j) => {
                          s.style.opacity = j === i ? '1' : '0';
                          s.style.pointerEvents = j === i ? 'auto' : 'none';
                        });
                        setActiveFeatured(i);
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Grid 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'React Form App',
                description: 'App de registro y autenticación con animaciones que responden al progreso del usuario. Las imágenes se colorean conforme completas los campos.',
                techs: ['React 18', 'React Router', 'CSS3', 'LocalStorage'],
                github: 'https://github.com/valeriaPaz04/reactForm',
                demo: 'https://valeriapaz04.github.io/reactForm/',
                image: '/reactForm.png',
              },
              {
                title: 'Concepts React',
                description: 'Proyecto educativo que explora conceptos fundamentales de React: Props, Estado, Hooks, Ciclo de Vida, Virtual DOM y Redux.',
                techs: ['React 19', 'React Router', 'JavaScript', 'Swiper'],
                github: 'https://github.com/valeriaPaz04/concepts-react',
                demo: 'https://valeriapaz04.github.io/concepts-react/',
                image: '/conceptsReact.png',
              },
              {
                title: 'Funciones JavaScript',
                description: 'Repositorio educativo sobre funciones en JavaScript: funciones tradicionales, funciones flecha, callbacks y promesas.',
                techs: ['JavaScript', 'HTML', 'CSS'],
                github: 'https://github.com/valeriaPaz04/funciones-javascript',
                demo: 'https://valeriapaz04.github.io/funciones-javascript/',
                image: '/funcionesJS.png',
              },
            ].map(({ title, description, techs, github, demo, image }) => (
              <div key={title}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-white/20 transition-all">

                {/* Imagen */}
                <div className="h-44 overflow-hidden flex-shrink-0 bg-zinc-900">
                  <img src={image} alt={title} className="w-full h-full object-cover object-top" />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {techs.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/5 text-zinc-500 border border-white/8">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a href={github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a href={demo} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="contact" className="pt-28 md:pt-32 pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Título */}
          <div className="flex items-center gap-4 mb-10 md:mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white whitespace-normal sm:whitespace-nowrap">
              <span className="text-violet-400">/</span> contacto
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Iconos */}
            <div>
              <p className="text-zinc-400 text-base leading-relaxed mb-10">
                ¿Tienes una pregunta, una idea o simplemente quieres saludar?<br /><br />
                Estoy abierta a <span className="text-white">oportunidades,</span> a aprender de nuevas experiencias,
                compartir ideas o conversar sobre <span className="text-white">tecnología.</span> No dudes en escribirme, estaré encantada de leerte.
              </p>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                <li>
                  <a href="mailto:valeriapazarana@gmail.com"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 text-sm hover:text-white hover:border-violet-400/40 hover:bg-violet-500/7 transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-violet-400 flex-shrink-0">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <span className="block text-[11px] text-zinc-600 uppercase tracking-widest mb-0.5">Correo</span>
                      <span>valeriapazarana@gmail.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/valeriaPaz04" target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 text-sm hover:text-white hover:border-violet-400/40 hover:bg-violet-500/7 transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-violet-400 flex-shrink-0">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <div>
                      <span className="block text-[11px] text-zinc-600 uppercase tracking-widest mb-0.5">GitHub</span>
                      <span>github.com/valeriaPaz04</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/valeriapazarana/" target="_blank" rel="noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/[0.03] text-zinc-400 text-sm hover:text-white hover:border-violet-400/40 hover:bg-violet-500/7 transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-violet-400 flex-shrink-0">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <div>
                      <span className="block text-[11px] text-zinc-600 uppercase tracking-widest mb-0.5">LinkedIn</span>
                      <span>linkedin.com/in/valeriapazarana</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Formulario */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">Nombre</label>
                <input type="text" placeholder="Tu nombre"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-violet-500/60 transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">Correo</label>
                <input type="email" placeholder="tu@correo.com"
                  value={form.email}
                  onChange={(e) => { setForm({...form, email: e.target.value,}); setError(''); }}
                  className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-violet-500/60 transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-zinc-500 uppercase tracking-wide">Mensaje</label>
                <textarea maxLength={1000} placeholder="Cuéntame qué tienes en mente . . ." rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="bg-white/[0.04] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-zinc-700 focus:outline-none focus:border-violet-500/60 transition-colors resize-none" />
              </div>

              <button onClick={handleSubmit}
                disabled={status === 'sending' || status === 'sent'}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors mt-1 disabled:opacity-60 disabled:cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                {status === 'sending' ? 'Enviando...' : status === 'sent' ? '¡Mensaje enviado! ✓' : 'Enviar mensaje'}
              </button>

              {status === 'error' && (
                <p className="text-xs text-red-400 text-center">
                  Algo falló. Escríbeme directamente a valeriapazarana@gmail.com
                </p>
              )}

              {status === 'empty' && (
                <p className="text-xs text-red-400 text-center">
                  Por favor completa todos los campos.
                </p>
              )}

              {error && (
                <p className="text-xs text-red-400 text-center">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="font-[family-name:var(--font-syne)] text-white font-bold text-base tracking-tight">
            val<span className="text-violet-500">.</span>Dev
          </span>
          {/* Copyright */}
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Valeria Paz Arana — Todos los derechos reservados.
          </p>

          {/* Iconos */}
          <ul className="flex gap-4 items-center">
            <li>
              <a href="mailto:valeriapazarana@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/valeriaPaz04" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/valeriapazarana/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
