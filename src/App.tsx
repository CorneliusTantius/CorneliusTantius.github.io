import { useEffect, useState } from 'preact/hooks'
import './App.css'
import { awards, education, heroContent, languages, projects, workExperience } from './content'

const navigation = [
  { id: 'work-experience', label: 'Experience' }, { id: 'projects', label: 'Projects' },
  { id: 'awards-honors', label: 'Awards' }, { id: 'languages', label: 'Languages' },
  { id: 'education', label: 'Education' }, { id: 'skills', label: 'Skills' },
]

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4.5 10h10M9.5 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
}

function SocialIcon({ name }: { name: 'email' | 'linkedin' | 'github' }) {
  if (name === 'email') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" stroke-width="1.6" /><path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
  if (name === 'linkedin') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.2a1.85 1.85 0 1 0 0-3.7 1.85 1.85 0 0 0 0 3.7ZM4.9 9.7h3.2v9.5H4.9V9.7Zm5.2 0h3.1V11h.05a3.42 3.42 0 0 1 3.08-1.7c3.3 0 3.9 2.17 3.9 5v4.9h-3.2v-4.35c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3v4.43h-3.2V9.7Z" /></svg>
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.75a9.25 9.25 0 0 0-2.93 18.02c.46.08.63-.2.63-.45v-1.6c-2.57.56-3.11-1.09-3.11-1.09-.42-1.07-1.03-1.36-1.03-1.36-.84-.58.06-.57.06-.57.93.06 1.42.96 1.42.96.83 1.42 2.17 1.01 2.7.77.08-.6.33-1.01.59-1.24-2.05-.24-4.21-1.03-4.21-4.58 0-1.01.36-1.84.95-2.49-.1-.23-.41-1.18.09-2.46 0 0 .77-.25 2.54.95a8.84 8.84 0 0 1 4.62 0c1.77-1.2 2.53-.95 2.53-.95.51 1.28.19 2.23.1 2.46.59.65.94 1.48.94 2.49 0 3.56-2.16 4.34-4.22 4.57.33.29.62.85.62 1.71v2.43c0 .25.17.54.64.45A9.25 9.25 0 0 0 12 2.75Z" /></svg>
}

function SectionHeading({ children }: { children: string }) {
  return <div className="section-heading"><h2>{children}</h2><span className="heading-rule" aria-hidden="true" /></div>
}

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  try {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Storage may be unavailable; fall back to the system preference.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeIcon({ theme }: { theme: Theme }) {
  return theme === 'dark'
    ? <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7" /><path d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.22-6.72-1.42 1.42M6.7 17.3l-1.42 1.42m13.44 0-1.42-1.42M6.7 6.7 5.28 5.28" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" /></svg>
    : <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M20.2 15.2A8.3 8.3 0 0 1 8.8 3.8 8.4 8.4 0 1 0 20.2 15.2Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" /></svg>
}

function App() {
  const [activeSection, setActiveSection] = useState(navigation[0].id)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#141820' : '#f4f1eb')
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The theme still works for this visit when storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    revealItems.forEach((item) => revealObserver.observe(item))

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-20% 0px -65% 0px' })
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id)
      if (section) sectionObserver.observe(section)
    })
    return () => { revealObserver.disconnect(); sectionObserver.disconnect() }
  }, [])

  return (
    <div className="portfolio-shell">
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <div className="background-stars" aria-hidden="true">
        <span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span><span>✧</span>
        <span>✦</span><span>✧</span><span>✦</span><span>✧</span><span>✦</span><span>✧</span>
      </div>
      <header className="topbar">
        <nav className="primary-nav" aria-label="Portfolio sections">
          {navigation.map(({ id, label }) => <a key={id} className={activeSection === id ? 'nav-link active' : 'nav-link'} href={`#${id}`}>{label}</a>)}
        </nav>
        <button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} aria-pressed={theme === 'dark'} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          <ThemeIcon theme={theme} />
          <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-name">
          <div className="hero-copy" data-reveal>
            <div className="eyebrow"><span className="eyebrow-line" />{heroContent.title}</div>
            <h1 id="hero-name">{heroContent.name.split(' ').map((part, index) => <span key={part} className={index === 1 ? 'name-accent' : undefined}>{part}{index === 0 && <br />}</span>)}</h1>
            <p className="hero-bio">{heroContent.bio}</p>
            <div className="social-links" aria-label="Contact and social links">
              <a className="social-btn" href={`mailto:${heroContent.social.email}`}><SocialIcon name="email" /><span>Email</span></a>
              <a className="social-btn" href={heroContent.social.linkedin} target="_blank" rel="noopener noreferrer"><SocialIcon name="linkedin" /><span>LinkedIn</span></a>
              <a className="social-btn" href={heroContent.social.github} target="_blank" rel="noopener noreferrer"><SocialIcon name="github" /><span>GitHub</span></a>
            </div>
          </div>
          <aside className="profile-visual" aria-hidden="true" data-reveal>
            <div className="profile-card">
              <div className="profile-card-top"><span>PERSONAL PROFILE</span><span>01 / 01</span></div>
              <div className="profile-monogram"><span>CT</span><i /><i /><i /></div>
              <div className="profile-card-bottom"><span className="profile-caption">Tantius Cornelius</span><span>{heroContent.title}</span></div>
            </div>
            <span className="profile-orbit profile-orbit-one" /><span className="profile-orbit profile-orbit-two" />
            <span className="profile-spark spark-one">✳</span><span className="profile-spark spark-two">✳</span>
          </aside>
          <a className="scroll-note" href="#work-experience"><span className="scroll-line" />View experience</a>
        </section>

        <section className="content-section experience-section" id="work-experience">
          <SectionHeading>Work experience</SectionHeading>
          <div className="experience-list">
            {workExperience.map((job, index) => <article key={job.company} className="experience-card" data-reveal>
              <div className="timeline-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="experience-main">
                <div className="experience-topline"><div><h3 className="company">{job.company}</h3><p className="role">{job.role}</p></div><span className="period">{job.period}</span></div>
                <ul className="description-list">{job.description.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </article>)}
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <SectionHeading>Selected projects</SectionHeading>
          <div className="project-grid">
            {projects.map((project, index) => <article key={project.name} className={`project-card${project.featured ? ' featured' : ''}`} data-reveal>
              <div className={`project-art project-art-${index + 1}`} aria-hidden="true"><span className="project-art-orbit" /><span className="project-art-core" /><span className="project-art-glyph">{index === 0 ? 'V' : index === 1 ? 'π' : '{ }'}</span><span className="project-art-coordinate">0{index + 1}</span></div>
              <div className="project-content">
                <div className="project-heading"><a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">{project.name}<span className="project-arrow"><ArrowIcon /></span></a>{project.featured && <span className="project-badge">FEATURED</span>}</div>
                <p className="project-summary">{project.summary}</p>
                <ul className="description-list">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag} className="project-tag">{tag}</span>)}</div>
              </div>
            </article>)}
          </div>
        </section>

        <section className="content-section awards-section" id="awards-honors">
          <SectionHeading>Awards &amp; honors</SectionHeading>
          <div className="award-grid">{awards.map((award) => <article key={award.title} className="award-card" data-reveal><span className="award-year">{award.year}</span><h3 className="award-title">{award.title}</h3><p className="award-description">{award.description}</p><span className="award-star" aria-hidden="true">✳</span></article>)}</div>
        </section>

        <section className="content-section languages-section" id="languages">
          <SectionHeading>Languages</SectionHeading>
          <div className="language-grid">{languages.map((language, index) => <div key={language.name} className="language-card" data-reveal><span className="language-index">0{index + 1}</span><span className="language-name">{language.name}</span><span className="language-level">{language.level}</span><span className="language-signal" aria-hidden="true"><i /><i /><i /><i /></span></div>)}</div>
        </section>
        <section className="content-section education-section" id="education">
          <SectionHeading>Education</SectionHeading>
          <div className="education-list">{education.map((edu) => <article key={edu.institution} className="education-card" data-reveal><div className="education-emblem" aria-hidden="true">✳</div><div className="education-main"><div className="education-header"><h3 className="institution">{edu.institution}</h3><span className="period">{edu.period}</span></div><p className="degree">{edu.degree}</p><p className="education-description">{edu.description}</p></div></article>)}</div>
        </section>

        <section className="content-section skills-section" id="skills">
          <SectionHeading>Technical skills</SectionHeading>
          <div className="skills-grid">{heroContent.skills.map((skill) => <div key={skill.name} className="skill-card" data-reveal><img src={`https://skillicons.dev/icons?i=${skill.icon}`} alt="" aria-hidden="true" className="skill-icon" loading="lazy" decoding="async" /><span>{skill.name}</span></div>)}</div>
        </section>

      </main>
      <footer className="site-footer"><span className="footer-brand">CT<span>.</span></span><span className="footer-name">Tantius Cornelius · Backend &amp; Infrastructure Engineer</span></footer>
    </div>
  )
}

export default App
