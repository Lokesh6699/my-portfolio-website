import { useEffect, useRef, useState, type CSSProperties } from 'react'
import * as Lucide from 'lucide-react'
import { siteConfig } from './config'

/* ------------------------------------------------------------------ */
/*  Hooks                                                              */
/* ------------------------------------------------------------------ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ------------------------------------------------------------------ */
/*  Icon resolver — maps config strings to lucide-react components     */
/* ------------------------------------------------------------------ */
type IconComponent = React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
const Icon = ({ name, size = 22, strokeWidth = 1.6, className }: { name: string; size?: number; strokeWidth?: number; className?: string }) => {
  const lib = Lucide as unknown as Record<string, IconComponent>
  const Cmp = lib[name] || lib.Circle
  return <Cmp size={size} strokeWidth={strokeWidth} className={className} />
}

/* ------------------------------------------------------------------ */
/*  Theme injector                                                     */
/* ------------------------------------------------------------------ */
function useTheme() {
  useEffect(() => {
    const root = document.documentElement
    const t = siteConfig.theme
    root.style.setProperty('--color-primary', t.primary)
    root.style.setProperty('--color-secondary', t.secondary)
    root.style.setProperty('--color-accent', t.accent)
    root.style.setProperty('--color-background', t.background)
    root.style.setProperty('--color-surface', t.surface)
    root.style.setProperty('--color-text', t.text)
    root.style.setProperty('--color-text-muted', t.textMuted)
  }, [])
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark" aria-hidden>
            <Icon name="Waves" size={18} />
          </span>
          <span className="nav__brand-text">
            {siteConfig.hero.fullName}
            <em>·Goa Trip Planner</em>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={siteConfig.hero.primaryCtaHref} className="btn btn--primary nav__cta-mobile" onClick={() => setOpen(false)}>
            <Icon name="Phone" size={16} />
            Call Now
          </a>
        </nav>

        <a href={siteConfig.hero.primaryCtaHref} className="btn btn--primary nav__cta">
          <Icon name="Phone" size={16} />
          Call Now
        </a>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'X' : 'Menu'} size={22} />
        </button>
      </div>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden>
        <div className="hero__bg-img" />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-glow hero__bg-glow--a" />
        <div className="hero__bg-glow hero__bg-glow--b" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy" data-reveal>
          <span className="eyebrow">
            <Icon name="Sparkles" size={14} /> {siteConfig.hero.eyebrow}
          </span>
          <h1 className="hero__title">
            <span className="hero__title-line">Handcrafted</span>
            <span className="hero__title-line hero__title-line--accent">Goa holidays,</span>
            <span className="hero__title-line">planned by a local.</span>
          </h1>
          <p className="hero__sub">{siteConfig.hero.subheadline}</p>

          <div className="hero__ctas">
            <a className="btn btn--primary btn--lg" href={siteConfig.hero.primaryCtaHref}>
              <Icon name="PhoneCall" size={18} /> {siteConfig.hero.primaryCtaLabel.replace('📞 ', '')}
            </a>
            <a className="btn btn--ghost btn--lg" href={siteConfig.hero.secondaryCtaHref}>
              {siteConfig.hero.secondaryCtaLabel} <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div className="hero__chips">
            <div className="chip">
              <Icon name="Waves" size={14} /> Coastal-born
            </div>
            <div className="chip">
              <Icon name="BadgeCheck" size={14} /> 500+ trips planned
            </div>
            <div className="chip">
              <Icon name="Clock" size={14} /> 24/7 trip support
            </div>
          </div>
        </div>

        <div className="hero__card" data-reveal>
          <div className="hero__card-image" />
          <div className="hero__card-body">
            <div className="hero__card-row">
              <Icon name="MapPin" size={16} /> Panjim, Goa
            </div>
            <div className="hero__card-name">{siteConfig.hero.fullName}</div>
            <div className="hero__card-role">{siteConfig.hero.title}</div>
            <div className="hero__card-stats">
              <div>
                <strong>4.9★</strong>
                <span>avg rating</span>
              </div>
              <div>
                <strong>{siteConfig.about.highlights.length}+</strong>
                <span>services</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>on-call</span>
              </div>
            </div>
            <a className="btn btn--primary btn--block" href={siteConfig.hero.primaryCtaHref}>
              <Icon name="Phone" size={16} /> Call {siteConfig.hero.fullName}
            </a>
          </div>
        </div>
      </div>

      <div className="hero__wave" aria-hidden>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C240,120 480,0 720,48 C960,96 1200,32 1440,72 L1440,120 L0,120 Z"
            fill="var(--color-background)"
          />
        </svg>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Section helper                                                    */
/* ------------------------------------------------------------------ */
function SectionHeader({ label, heading, sub }: { label: string; heading: string; sub?: string }) {
  return (
    <header className="section__header" data-reveal>
      <span className="eyebrow eyebrow--center">
        <span className="eyebrow__bar" /> {label} <span className="eyebrow__bar" />
      </span>
      <h2 className="section__heading">{heading}</h2>
      {sub && <p className="section__sub">{sub}</p>}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */
function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__visual" data-reveal>
          <div className="about__visual-frame">
            <div className="about__visual-img" />
            <div className="about__visual-badge">
              <Icon name="Compass" size={18} />
              <div>
                <strong>10+ years</strong>
                <span>of planning Goa trips</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__copy" data-reveal>
          <span className="eyebrow">{siteConfig.about.label}</span>
          <h2 className="section__heading section__heading--left">{siteConfig.about.heading}</h2>
          {siteConfig.about.body.map((p, i) => (
            <p key={i} className="about__para">
              {p}
            </p>
          ))}

          <div className="about__highlights">
            {siteConfig.about.highlights.map((h) => (
              <div className="about__highlight" key={h.label}>
                <span className="about__highlight-icon">
                  <Icon name={h.icon} size={18} />
                </span>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */
function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeader
          label={siteConfig.services.label}
          heading={siteConfig.services.heading}
          sub={siteConfig.services.subheading}
        />

        <div className="services__grid">
          {siteConfig.services.items.map((s, i) => (
            <article key={s.title} className="card service" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="service__icon">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__desc">{s.description}</p>
              <ul className="service__bullets">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <Icon name="Check" size={14} /> {b}
                  </li>
                ))}
              </ul>
              <div className="service__price">
                <Icon name="Tag" size={14} /> {s.priceLabel}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Why Work With Me                                                   */
/* ------------------------------------------------------------------ */
function Why() {
  return (
    <section className="section why">
      <div className="container">
        <SectionHeader
          label={siteConfig.why.label}
          heading={siteConfig.why.heading}
          sub={siteConfig.why.subheading}
        />

        <div className="why__stats">
          {siteConfig.why.stats.map((s) => (
            <div className="why__stat" key={s.label} data-reveal>
              <div className="why__stat-value">{s.value}</div>
              <div className="why__stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="why__grid">
          {siteConfig.why.pillars.map((p, i) => (
            <article key={p.title} className="card why__pillar" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="why__pillar-icon">
                <Icon name={p.icon} size={22} />
              </div>
              <h3 className="why__pillar-title">{p.title}</h3>
              <p className="why__pillar-desc">{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Process                                                            */
/* ------------------------------------------------------------------ */
function Process() {
  return (
    <section className="section process">
      <div className="container">
        <SectionHeader
          label={siteConfig.process.label}
          heading={siteConfig.process.heading}
          sub={siteConfig.process.subheading}
        />

        <ol className="process__list">
          {siteConfig.process.steps.map((step, i) => (
            <li key={step.title} className="process__step" data-reveal>
              <div className="process__step-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="process__step-icon">
                <Icon name={step.icon} size={22} />
              </div>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.description}</p>
              {i < siteConfig.process.steps.length - 1 && (
                <div className="process__step-arrow" aria-hidden>
                  <Icon name="ArrowDown" size={18} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Work / Portfolio                                                   */
/* ------------------------------------------------------------------ */
function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <SectionHeader
          label={siteConfig.work.label}
          heading={siteConfig.work.heading}
          sub={siteConfig.work.subheading}
        />

        <div className="work__grid">
          {siteConfig.work.items.map((w, i) => (
            <article key={w.title} className="card work__item" data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="work__media" style={{ backgroundImage: `url(${w.image})` }} aria-hidden>
                <div className="work__media-overlay" />
              </div>
              <div className="work__body">
                <div className="work__tags">
                  {w.tags.map((t) => (
                    <span key={t} className="work__tag">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="work__title">{w.title}</h3>
                <p className="work__desc">{w.description}</p>
                <a className="work__link" href={w.demo}>
                  Plan a similar trip <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
function Testimonials() {
  return (
    <section id="reviews" className="section testimonials">
      <div className="container">
        <SectionHeader
          label={siteConfig.testimonials.label}
          heading={siteConfig.testimonials.heading}
        />

        <div className="testimonials__grid">
          {siteConfig.testimonials.items.map((t, i) => (
            <figure key={t.name} className="card testimonial" data-reveal style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="testimonial__stars" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Icon key={k} name="Star" size={14} />
                ))}
              </div>
              <blockquote className="testimonial__quote">“{t.quote}”</blockquote>
              <figcaption className="testimonial__person">
                <img src={t.avatar} alt="" className="testimonial__avatar" loading="lazy" />
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__role">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="section faq">
      <div className="container faq__container">
        <SectionHeader label={siteConfig.faq.label} heading={siteConfig.faq.heading} />

        <div className="faq__list">
          {siteConfig.faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq__item card ${isOpen ? 'is-open' : ''}`} data-reveal>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <Icon name={isOpen ? 'Minus' : 'Plus'} size={18} />
                </button>
                <div className="faq__a" style={{ maxHeight: isOpen ? 320 : 0 } as CSSProperties}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Final CTA                                                          */
/* ------------------------------------------------------------------ */
function FinalCta() {
  return (
    <section className="section finalcta">
      <div className="container">
        <div className="finalcta__card" data-reveal>
          <div className="finalcta__glow finalcta__glow--a" aria-hidden />
          <div className="finalcta__glow finalcta__glow--b" aria-hidden />

          <div className="finalcta__copy">
            <span className="eyebrow">
              <Icon name="Compass" size={14} /> {siteConfig.finalCta.label}
            </span>
            <h2 className="finalcta__heading">{siteConfig.finalCta.heading}</h2>
            <p className="finalcta__body">{siteConfig.finalCta.body}</p>
            <p className="finalcta__note">
              <Icon name="Clock" size={14} /> {siteConfig.finalCta.note}
            </p>
          </div>

          <div className="finalcta__actions">
            <a className="btn btn--primary btn--xl" href={siteConfig.finalCta.primaryCtaHref}>
              <Icon name="PhoneCall" size={20} /> {siteConfig.finalCta.primaryCtaLabel.replace('📞 ', '')}
            </a>
            <a className="btn btn--ghost btn--xl" href={siteConfig.finalCta.secondaryCtaHref}>
              <Icon name="MessageCircle" size={20} /> {siteConfig.finalCta.secondaryCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */
function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__copy" data-reveal>
          <span className="eyebrow">{siteConfig.contact.label}</span>
          <h2 className="section__heading section__heading--left">{siteConfig.contact.heading}</h2>
          <p className="contact__body">{siteConfig.contact.body}</p>

          <div className="contact__items">
            <a className="contact__item" href={`mailto:${siteConfig.contact.email}`}>
              <span className="contact__item-icon">
                <Icon name="Mail" size={18} />
              </span>
              <div>
                <span>Email</span>
                <strong>{siteConfig.contact.email}</strong>
              </div>
            </a>
            <a className="contact__item" href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}>
              <span className="contact__item-icon">
                <Icon name="Phone" size={18} />
              </span>
              <div>
                <span>Phone / WhatsApp</span>
                <strong>{siteConfig.contact.phone}</strong>
              </div>
            </a>
            <div className="contact__item contact__item--static">
              <span className="contact__item-icon">
                <Icon name="MapPin" size={18} />
              </span>
              <div>
                <span>Based in</span>
                <strong>{siteConfig.contact.location}</strong>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            {siteConfig.contact.socials.map((s) => (
              <a key={s.label} href={s.href} className="contact__social" target="_blank" rel="noreferrer">
                <Icon name={s.label === 'Instagram' ? 'Instagram' : s.label === 'WhatsApp' ? 'MessageCircle' : 'Facebook'} size={16} />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form
          className="contact__form card"
          data-reveal
          onSubmit={(e) => {
            e.preventDefault()
            const target = e.currentTarget as HTMLFormElement
            const form = new FormData(target)
            const subject = encodeURIComponent('Goa trip enquiry from portfolio')
            const body = encodeURIComponent(
              `Name: ${form.get('name')}\nEmail: ${form.get('email')}\nTravel month: ${form.get('month')}\nGroup size: ${form.get('group')}\n\nMessage:\n${form.get('message')}`
            )
            window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
          }}
        >
          <h3 className="contact__form-title">Plan your trip</h3>
          <p className="contact__form-sub">Tell me a little about your trip. I’ll reply within the day.</p>

          <label className="field">
            <span>Your name</span>
            <input name="name" type="text" required placeholder="Lokesh" />
          </label>
          <label className="field">
            <span>Email</span>
            <input name="email" type="email" required placeholder="you@email.com" />
          </label>
          <div className="field-row">
            <label className="field">
              <span>Travel month</span>
              <input name="month" type="text" placeholder="e.g. December" />
            </label>
            <label className="field">
              <span>Group size</span>
              <input name="group" type="text" placeholder="e.g. 2 adults" />
            </label>
          </div>
          <label className="field">
            <span>What kind of trip?</span>
            <textarea name="message" rows={4} placeholder="Couple, family, bachelor party, solo, honeymoon…" />
          </label>
          <button type="submit" className="btn btn--primary btn--block">
            <Icon name="Send" size={16} /> Send enquiry
          </button>
        </form>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-mark">
            <Icon name="Waves" size={18} />
          </span>
          <div>
            <strong>{siteConfig.hero.fullName}</strong>
            <span>{siteConfig.hero.title}</span>
          </div>
        </div>
        <p className="footer__tagline">{siteConfig.footer.tagline}</p>
        <div className="footer__legal">
          <span>© {new Date().getFullYear()} {siteConfig.hero.fullName}.</span>
          <span>{siteConfig.footer.note}</span>
        </div>
      </div>
    </footer>
  )
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */
export default function App() {
  useTheme()
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <Process />
        <Work />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
