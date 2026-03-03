import './App.css'

import { useMemo, useState } from 'react'

const baseUrl = import.meta.env.BASE_URL

const withBase = (path) => `${baseUrl}${path.replace(/^\/+/, '')}`

const navItems = ['About', 'Resume', 'Portfolio', 'Contact']

const services = [
  {
    title: 'Frontend Development',
    description: 'Building polished, responsive, and accessible interfaces in React.',
    icon: 'web',
  },
  {
    title: 'Backend Integration',
    description: 'Connecting frontend applications with reliable REST API workflows.',
    icon: 'hub',
  },
  {
    title: 'MERN Apps',
    description: 'Developing full-stack applications using MongoDB, Express, React, and Node.',
    icon: 'dns',
  },
  {
    title: 'Performance & UX',
    description: 'Improving usability, speed, and smooth interactions for production apps.',
    icon: 'rocket_launch',
  },
]

const contactItems = [
  { label: 'Email', value: 'vishalthombre42@gmail.com', icon: 'mail' },
  { label: 'Phone', value: '+91 8766554242', icon: 'call' },
  { label: 'Location', value: 'Wagholi, Pune, Maharashtra', icon: 'location_on' },
]

const education = [
  {
    school: 'G.H. Raisoni College of Engineering and Management, Pune',
    program: 'Bachelor of Engineering - Computer Science',
    duration: 'Expected Graduation: 2027',
  },
  {
    school: 'Government Polytechnic College, Aurangabad',
    program: 'Diploma - Electrical Engineering (87.53%)',
    duration: 'Completed: May 2023',
  },
]

const experience = [
  {
    role: 'Industry Project - Maintenance Ticket Management Web Application',
    company: 'WIKA (Industrial Project)',
    duration: 'Production-grade system for maintenance operations',
    location: 'Pune, Maharashtra',
    points: [
      'Built a system to report, assign, track, and resolve maintenance tickets across facilities.',
      'Created role-based user and admin dashboards with ticket history and real-time status updates.',
      'Integrated auto-populated master data fields to reduce errors and speed up ticket creation.',
      'Implemented filters, notifications, and audit trail support for accountability and reporting.',
      'Tech Stack: React.js, Node.js, Express.js, MongoDB, RESTful APIs, Bootstrap.',
    ],
  },
  {
    role: 'Full-Stack Project - Wanderlust Website',
    company: 'Personal / Practice Project',
    duration: 'Live: wanderlust.slj5.onrender.com',
    location: 'Web Application',
    points: [
      'Built a full-stack platform for browsing and renting villas and hotels.',
      'Implemented CRUD operations for listings with MongoDB-backed data handling.',
      'Designed a mobile-responsive interface for seamless browsing and booking experience.',
      'Tech Stack: React.js, Node.js, Express.js, MongoDB, Bootstrap.',
    ],
  },
]

const certifications = [
  'Full Stack Web Development Course - Apna College (YouTube): React.js, HTML5, CSS3, JavaScript, Node.js, Express.js, MongoDB.',
]

const achievements = [
  'Member of the college cricket team; represented college in intercollegiate tournaments.',
  'Event Organizer at GECA Club during Diploma; coordinated college-level events successfully.',
]

const whatsappNotifyNumber = '918766554242'

const initialContactForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const portfolioProjects = [
  {
    id: 'wikamaint',
    title: 'WIKAMAINT - Maintenance Ticket Management',
    category: 'Industry Project',
    coverImage: withBase('/projects/wikamaint-login.svg'),
    description:
      'A production-focused web platform built for WIKA to manage maintenance tickets, role-based access, and department workflows across plant operations.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST APIs'],
    highlights: [
      'Role-based dashboards for Admin, Facility, Planner, and Technician users.',
      'Ticket lifecycle flow: raise, assign, track, and close with audit-friendly status updates.',
      'Master-data based dropdowns to reduce manual entry errors and improve consistency.',
      'Search, filters, and access management features to support real plant operations.',
    ],
    images: [
      {
        src: withBase('/projects/wikamaint-login.svg'),
        title: 'Login Screen',
        note: 'Secure authentication entry for Global ID users.',
      },
      {
        src: withBase('/projects/wikamaint-dashboard.svg'),
        title: 'Main Dashboard',
        note: 'Module overview with quick-access cards and profile panel.',
      },
      {
        src: withBase('/projects/wikamaint-admin.svg'),
        title: 'System Admin',
        note: 'User management, role assignment, and access control table.',
      },
      {
        src: withBase('/projects/wikamaint-facility.svg'),
        title: 'Facility Dashboard',
        note: 'Operational ticket log with status tracking and department controls.',
      },
    ],
  },
]

function PortfolioSection({ selectedProject, onOpenProject, onBackToGrid }) {
  if (selectedProject) {
    return (
      <section className="panel panel-animate">
        <div className="portfolio-header">
          <button type="button" className="back-btn" onClick={onBackToGrid}>
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Projects
          </button>
        </div>

        <h2>{selectedProject.title}</h2>
        <div className="title-underline" />

        <p>{selectedProject.description}</p>

        <div className="portfolio-meta">
          <h3>Tech Stack</h3>
          <div className="stack-tags">
            {selectedProject.techStack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="portfolio-meta">
          <h3>Project Highlights</h3>
          <ul className="timeline-points">
            {selectedProject.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-gallery">
          {selectedProject.images.map((image) => (
            <article className="gallery-card" key={image.src}>
              <div className="gallery-image-wrap">
                <img src={image.src} alt={image.title} className="gallery-image" loading="lazy" />
              </div>
              <h4>{image.title}</h4>
              <p>{image.note}</p>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="panel panel-animate">
      <h2>Portfolio</h2>
      <div className="title-underline" />
      <p>Click a project card to open full screenshots and detailed information.</p>

      <div className="portfolio-grid">
        {portfolioProjects.map((project) => (
          <button type="button" className="portfolio-card" key={project.id} onClick={() => onOpenProject(project.id)}>
            <div className="portfolio-image-wrap">
              <img src={project.coverImage} alt={project.title} className="portfolio-image" loading="lazy" />
            </div>
            <div className="portfolio-card-body">
              <p className="portfolio-category">{project.category}</p>
              <h3>{project.title}</h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

function ResumeSection() {
  return (
    <section className="panel panel-animate">
      <h2>Resume</h2>
      <div className="title-underline" />

      <div className="resume-section">
        <div className="section-heading">
          <div className="icon-box">
            <span className="material-symbols-outlined">school</span>
          </div>
          <h3>Education</h3>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={item.school}>
              <h4>{item.school}</h4>
              <p className="timeline-main">{item.program}</p>
              <p className="timeline-duration">{item.duration}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="resume-section">
        <div className="section-heading">
          <div className="icon-box">
            <span className="material-symbols-outlined">work</span>
          </div>
          <h3>Experience & Projects</h3>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.role}>
              <h4>{item.role}</h4>
              <p className="timeline-main">{item.company}</p>
              <p className="timeline-duration">{item.duration}</p>
              <p className="timeline-location">{item.location}</p>
              <ul className="timeline-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="resume-grid">
        <article className="resume-mini-card">
          <h4>Certification</h4>
          <ul className="timeline-points">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="resume-mini-card">
          <h4>Achievements</h4>
          <ul className="timeline-points">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="resume-cta">
        <a href={withBase('/VishalThombreResume.pdf')} className="download-btn" download>
          <span className="material-symbols-outlined">description</span>
          Download CV
        </a>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="panel panel-animate">
      <h2>About Me</h2>
      <div className="title-underline" />
      <p>
        Computer Science Engineering student with a Diploma in Electrical Engineering and solid foundations in data
        structures, OOP, and full-stack web development.
      </p>
      <p>
        I build responsive and dynamic MERN applications and have contributed to production-level systems for
        organizations like WIKA. I enjoy solving real-world problems and continuously learning new technologies.
      </p>

      <h3>What I&apos;m Doing</h3>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="icon-box service-icon">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState(initialContactForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendEmailViaEmailJS = async (payload) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      return { ok: false, reason: 'missing_emailjs_config' }
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: payload,
      }),
    })

    return { ok: response.ok, reason: response.ok ? '' : 'email_failed' }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const payload = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      submitted_at: new Date().toLocaleString(),
    }

    try {
      const emailResult = await sendEmailViaEmailJS(payload)

      const whatsappText = encodeURIComponent(
        `New Portfolio Contact\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`,
      )

      window.open(`https://wa.me/${whatsappNotifyNumber}?text=${whatsappText}`, '_blank', 'noopener,noreferrer')

      if (emailResult.ok) {
        setSubmitMessage('Submitted successfully. Email sent and WhatsApp message is prepared.')
      } else if (emailResult.reason === 'missing_emailjs_config') {
        setSubmitMessage('Submitted. WhatsApp message is prepared. Add EmailJS keys to enable email notifications.')
      } else {
        setSubmitMessage('Submitted. WhatsApp message is prepared, but email sending failed.')
      }

      setFormData(initialContactForm)
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="panel panel-animate">
      <h2>Contact</h2>
      <div className="title-underline" />
      <p>Share who you are and what you need. I will get notified via WhatsApp and email.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 xxxxx xxxxx"
              required
            />
          </label>

          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project inquiry"
              required
            />
          </label>
        </div>

        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your requirement..."
            rows={6}
            required
          />
        </label>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>

        {submitMessage ? <p className="submit-message">{submitMessage}</p> : null}
      </form>
    </section>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState('Resume')
  const [activeProjectId, setActiveProjectId] = useState(null)

  const selectedProject = portfolioProjects.find((item) => item.id === activeProjectId) || null

  const content = useMemo(() => {
    if (activeTab === 'About') return <AboutSection />
    if (activeTab === 'Resume') return <ResumeSection />
    if (activeTab === 'Portfolio') {
      return (
        <PortfolioSection
          selectedProject={selectedProject}
          onOpenProject={setActiveProjectId}
          onBackToGrid={() => setActiveProjectId(null)}
        />
      )
    }

    return (
      <ContactSection />
    )
  }, [activeTab, selectedProject])

  return (
    <div className="portfolio-page">
      <div className="background-glow background-glow-left" />
      <div className="background-glow background-glow-right" />

      <div className="layout">
        <aside className="profile-card">
          <div className="avatar-wrap">
            <div className="avatar">
              <span className="material-symbols-outlined avatar-icon">person</span>
              <span className="status-dot" aria-hidden="true" />
            </div>
          </div>

          <h1 className="name">Vishal Thombre</h1>
          <p className="role">Software Developer</p>

          <div className="divider" />

          <div className="contact-list">
            {contactItems.map((item) => (
              <article className="contact-item" key={item.label}>
                <div className="icon-box">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="contact-label">{item.label}</p>
                  <p className="contact-value">{item.value}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="social-links" aria-label="Social links">
            <a href="https://linkedin.com/in/vishalthombre" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://github.com/Vishalthombre" target="_blank" rel="noreferrer" aria-label="GitHub">
              gh
            </a>
            <a href="mailto:vishalthombre42@gmail.com" aria-label="Email">
              @
            </a>
          </div>
        </aside>

        <main className="content-card">
          <nav className="top-nav" aria-label="Main sections">
            {navItems.map((item) => (
              <button
                type="button"
                key={item}
                className={activeTab === item ? 'active' : ''}
                onClick={() => {
                  setActiveTab(item)
                  if (item !== 'Portfolio') setActiveProjectId(null)
                }}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="content-scroll">{content}</div>
        </main>
      </div>
    </div>
  )
}

export default App
