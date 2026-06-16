"use client";
import {
  SiHtml5, SiReact, SiNodedotjs, SiExpress, SiPython, SiGit, SiGithub, SiMui, SiBootstrap
} from 'react-icons/si';
import { BsJavascript } from 'react-icons/bs';
import { FaCss3Alt } from "react-icons/fa";

const techs = [
  { name: 'HTML',        icon: SiHtml5,         color: '#E34F26' },
  { name: 'CSS',         icon: FaCss3Alt,       color: '#1572B6' },
  { name: 'JavaScript',  icon: BsJavascript,    color: '#F7DF1E' },
  { name: 'React',       icon: SiReact,          color: '#61DAFB' },
  { name: 'Node.js',     icon: SiNodedotjs,      color: '#339933' },
  { name: 'Express.js',  icon: SiExpress,        color: '#ffffff' },
  { name: 'PostgreSQL',  icon: '/postgresql.svg',        type: 'img' },
  { name: 'SQL Server',  icon: '/sql-server.svg',         type: 'img' },
  { name: 'Python',      icon: SiPython,         color: '#3776AB' },
  { name: 'Git',         icon: SiGit,            color: '#F05032' },
  { name: 'GitHub',      icon: SiGithub,         color: '#ffffff' },
  { name: 'Material UI', icon: SiMui,            color: '#007FFF' },
  { name: 'Bootstrap',   icon: SiBootstrap,      color: '#8911fb' },
];

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between border-b border-white/10">
          {/* Logo izquierdo */}
          <h1 className="font-[family-name:var(--font-syne)] text-white font-bold text-xl tracking-tight">
            val<span className="text-violet-500">.</span>Dev
          </h1>
          {/* Nav */}
          <nav>
            <ul className="flex gap-6">
              <li><a href="#home" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="#education" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Educación</a></li>
              <li><a href="#projects" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#contact" className="nav-link text-sm text-zinc-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </nav>
          {/* Iconos derecha */}
          <ul className="flex gap-4 items-center">
            <li>
              <a href="mailto:valeriapazarana@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
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
        </div>
      </header>

      <section id="home" className="flex items-center mt-30">
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between gap-10">
          {/* Texto izquierda */}
          <div className="flex-1">
            <h1 className="font-[family-name:var(--font-syne)] text-5xl font-bold text-white leading-tight mb-6">
              Hola, soy<br />
              <span className="text-violet-400">Valeria Paz Arana.</span>
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              Estudiante de Desarrollo de Software construyendo proyectos web 
              y desarrollando una visión integral del software, desde la 
              interfaz hasta la lógica detrás de cada aplicación.
            </p>
            <div className="flex gap-4 mt-8">
              {/* Botón email */}
              <a href="mailto:valeriapazarana@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500 hover:text-white transition-colors text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contáctame
              </a>
              {/* Botón CV */}
              <a href="/HOJADEVIDA-VALERIAPAZARANA.pdf" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-colors text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                Ver CV
              </a>
            </div>
          </div>
          {/* Foto derecha */}
          <div className="flex-shrink-0">
            <div className="relative w-72">
              
              <div className="absolute inset-0 -z-10"
                style={{
                  background: "rgba(139,92,246,0.25)",
                  borderRadius: "50%",
                  filter: "blur(65px)",
                  transform: "scale(0.8)",
                }}
              />

              <img src="/profile.png" alt="Valeria Paz Arana" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white">
              <span className="text-violet-400">/</span> sobre mí
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          {/* Contenido */}
          <div>
            <div className="flex gap-16 items-start">
              {/* Texto izquierda */}
              <div className="flex-1 space-y-5 text-zinc-400 text-base leading-relaxed">
                <p>
                  Soy estudiante de <span className="text-white font-medium">Tecnología en Análisis y Desarrollo de Software</span> en el SENA, con formación técnica previa en Programación de Software.
                </p>
                <p>
                  Me apasiona crear interfaces atractivas sin perder de vista la lógica detrás de cada aplicación. Actualmente participo en el desarrollo de <span className="text-white font-medium">EncomiExpress</span>, un proyecto real donde aplico mis conocimientos en desarrollo web, bases de datos y soluciones prácticas.
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
                    label: "Full-Stack en progreso",
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
            <div className="mt-25 overflow-hidden max-w-6xl mx-auto py-1"
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

      <section id="education" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Título */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-bold text-white">
              <span className="text-violet-400">/</span> educación
            </h2>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          <div className="flex gap-16 items-start">
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
                  period: '2017 – 2024',
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

            <div className="max-w-6xl mx-auto px-6">
              <div className="flex justify-center">
                <div style={{ position: 'relative', width: '580px', height: '400px' }}>

                  {/* Constelación */}
                  <svg
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    viewBox="0 0 580 400"
                  >

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

      <section id="skills">
        <h2>.</h2>
      </section>

      <section id="projects">
        <h2>.</h2>
      </section>

      <section id="contact">
        <h2>.</h2>
      </section>

      <footer className="bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
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
