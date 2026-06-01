import { type PointerEvent, useEffect, useRef, useState } from 'react'
import { languageLabels, languages, translations, type Language } from './i18n'

type Page = 'home' | 'summer' | 'winter'
type ContactPosition = { x: number; y: number } | null
type ContactDragState = {
  hasMoved: boolean
  height: number
  offsetX: number
  offsetY: number
  pointerId: number
  startX: number
  startY: number
  width: number
}

const getPageFromHash = (): Page => {
  const hashPage = window.location.hash.replace('#', '')
  return hashPage === 'summer' || hashPage === 'winter' ? hashPage : 'home'
}

function App() {
  const [language, setLanguage] = useState<Language>('no')
  const [page, setPage] = useState<Page>(() => getPageFromHash())
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [scrollOpacity, setScrollOpacity] = useState(1)
  const [contactPosition, setContactPosition] = useState<ContactPosition>(null)
  const [isContactDragging, setIsContactDragging] = useState(false)
  const contactDrag = useRef<ContactDragState | null>(null)
  const suppressContactClick = useRef(false)
  const text = translations[language]

  // Håndter bakgrunns-fade ved scrolling
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList?.contains('season-page')) {
        const scrollTop = target.scrollTop
        const vh = window.innerHeight
        // Fader ut over en lengre distanse (1.5 x vh) for en mer langsom effekt
        const opacity = Math.max(0, 1 - scrollTop / (vh * 1.5))
        setScrollOpacity(opacity)
      }
    }

    // Finn alle season-page elementer og legg til lytter
    const scrollContainers = document.querySelectorAll('.season-page')
    scrollContainers.forEach(container => container.addEventListener('scroll', handleScroll))
    
    return () => {
      scrollContainers.forEach(container => container.removeEventListener('scroll', handleScroll))
    }
  }, [page]) // Re-bind når vi bytter side

  // Synkroniser med refresh, hash-lenker og nettleserens frem/tilbake-knapper
  useEffect(() => {
    const syncPageFromLocation = () => {
      setPage(getPageFromHash())
    }

    window.addEventListener('hashchange', syncPageFromLocation)
    window.addEventListener('popstate', syncPageFromLocation)

    return () => {
      window.removeEventListener('hashchange', syncPageFromLocation)
      window.removeEventListener('popstate', syncPageFromLocation)
    }
  }, [])

  const navigateTo = (newPage: Page) => {
    setPage(newPage)
    const nextUrl = newPage === 'home' ? window.location.pathname : `${window.location.pathname}#${newPage}`
    window.history.pushState(null, '', nextUrl)
  }

  const clampContactPosition = (x: number, y: number, width: number, height: number) => {
    const margin = 12

    return {
      x: Math.min(Math.max(margin, x), window.innerWidth - width - margin),
      y: Math.min(Math.max(margin, y), window.innerHeight - height - margin),
    }
  }

  const handleContactPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.button !== 0) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.setPointerCapture(event.pointerId)
    contactDrag.current = {
      hasMoved: false,
      height: rect.height,
      offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      width: rect.width,
    }
    setIsContactDragging(true)
  }

  const handleContactPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const drag = contactDrag.current
    if (!drag || drag.pointerId !== event.pointerId) {
      return
    }

    const distanceX = event.clientX - drag.startX
    const distanceY = event.clientY - drag.startY
    const hasMovedPastTap = Math.hypot(distanceX, distanceY) > 8

    if (!drag.hasMoved && !hasMovedPastTap) {
      return
    }

    const nextPosition = clampContactPosition(
      event.clientX - drag.offsetX,
      event.clientY - drag.offsetY,
      drag.width,
      drag.height,
    )

    contactDrag.current = { ...drag, hasMoved: true }
    suppressContactClick.current = true
    setContactPosition(nextPosition)
  }

  const handleContactPointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    const drag = contactDrag.current
    if (!drag || drag.pointerId !== event.pointerId) {
      return
    }

    event.currentTarget.releasePointerCapture(event.pointerId)
    suppressContactClick.current = drag.hasMoved
    contactDrag.current = null
    setIsContactDragging(false)
  }

  const handleContactClick = () => {
    if (suppressContactClick.current) {
      suppressContactClick.current = false
      return
    }

    setIsContactOpen(true)
  }

  return (
    <main className={`site-page site-page--${page}`} aria-label={text.siteName}>
      <h1 className="sr-only">{text.siteName}</h1>

      {page === 'home' && (
        <>
          <div className="home-background home-background--season-1" aria-hidden="true" />
          <div className="home-background home-background--season-2" aria-hidden="true" />
          <div className="home-background home-background--season-3" aria-hidden="true" />
          <div className="home-background home-background--season-4" aria-hidden="true" />
          <div className="home-background home-background--season-5" aria-hidden="true" />
        </>
      )}

      <nav className="language-switcher" aria-label={text.chooseLanguage}>
        {languages.map((languageCode) => (
          <button
            key={languageCode}
            className={languageCode === language ? 'is-active' : undefined}
            type="button"
            aria-label={text.languages[languageCode]}
            aria-pressed={languageCode === language}
            onClick={() => setLanguage(languageCode)}
          >
            {languageLabels[languageCode]}
          </button>
        ))}
      </nav>

      {page !== 'home' && (
        <button className="back-button" type="button" onClick={() => navigateTo('home')}>
          {text.back}
        </button>
      )}

      {page === 'home' && (
        <>
          <section className="home-intro" aria-label={text.siteName}>
            <p>{text.homeIntro.kicker}</p>
            <h2>{text.siteName}</h2>
            <p>{text.homeIntro.tagline}</p>
          </section>

          <section className="season-choices" aria-label={text.chooseSeason}>
            <button
              className="season-choice season-choice--winter"
              type="button"
              onClick={() => navigateTo('winter')}
            >
              <span>{text.seasons.winter}</span>
            </button>

            <button
              className="season-choice season-choice--summer"
              type="button"
              onClick={() => navigateTo('summer')}
            >
              <span>{text.seasons.summer}</span>
            </button>
          </section>

          <aside className="home-year-round" aria-label={text.yearRoundTitle}>
            <h3>{text.yearRoundTitle}</h3>
            <p>{text.yearRound}</p>
          </aside>
        </>
      )}

      {page === 'summer' && (
        <section className="season-page season-page--summer">
          <div 
            className="season-page-background" 
            style={{ opacity: scrollOpacity }} 
            aria-hidden="true" 
          />
          <div className="season-page-panel season-page-panel--content">
            <div className="season-page-content">
              <p className="season-kicker">{text.summerPage.kicker}</p>
              <h2>{text.summerPage.title}</h2>
              <p>{text.summerPage.description}</p>
              <p className="season-practical">{text.summerPage.practical}</p>
              
              <button
                className="continue-button"
                type="button"
                onClick={() => {
                  document.getElementById('about-panel')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>{text.continue}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M19 14l-7 7-7-7M12 5v16" />
                </svg>
              </button>
            </div>
          </div>

          <div id="about-panel" className="season-page-panel season-page-panel--about">
            {text.summerPage.comingSoon && <p className="season-coming-soon">{text.summerPage.comingSoon}</p>}
            <section className="season-experiences" aria-label={text.summerPage.experiences.title}>
              <h3>{text.summerPage.experiences.title}</h3>
              {text.summerPage.experiences.items.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
              <aside className="season-guide-note">
                <p>{text.summerPage.network}</p>
              </aside>
            </section>

          </div>
        </section>
      )}

      {page === 'winter' && (
        <section className="season-page season-page--winter">
          <div 
            className="season-page-background" 
            style={{ opacity: scrollOpacity }} 
            aria-hidden="true" 
          />
          <div className="season-page-panel season-page-panel--content">
            <div className="season-page-content">
              <p className="season-kicker">{text.winterPage.kicker}</p>
              <h2>{text.winterPage.title}</h2>
              <p>{text.winterPage.description}</p>
              <p className="season-practical">{text.winterPage.practical}</p>
              
              <button
                className="continue-button"
                type="button"
                onClick={() => {
                  document.getElementById('about-panel')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>{text.continue}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M19 14l-7 7-7-7M12 5v16" />
                </svg>
              </button>
            </div>
          </div>

          <div id="about-panel" className="season-page-panel season-page-panel--about">
            {text.winterPage.comingSoon && <p className="season-coming-soon">{text.winterPage.comingSoon}</p>}
            <section className="season-experiences" aria-label={text.winterPage.experiences.title}>
              <h3>{text.winterPage.experiences.title}</h3>
              {text.winterPage.experiences.items.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
              <aside className="season-guide-note">
                <p>{text.winterPage.footer}</p>
              </aside>
            </section>

          </div>
        </section>
      )}

      <button
        className={`contact-link contact-link--floating${isContactDragging ? ' is-dragging' : ''}`}
        type="button"
        style={contactPosition ? { bottom: 'auto', left: contactPosition.x, right: 'auto', top: contactPosition.y } : undefined}
        onClick={handleContactClick}
        onPointerDown={handleContactPointerDown}
        onPointerMove={handleContactPointerMove}
        onPointerUp={handleContactPointerUp}
        onPointerCancel={() => {
          contactDrag.current = null
          setIsContactDragging(false)
        }}
      >
        <span>{text.contactRoland}</span>
        <small>{text.contactRolandContext}</small>
      </button>

      {isContactOpen && (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-label={text.contactForm.title}>
          <div className="contact-modal__backdrop" onClick={() => setIsContactOpen(false)} />

          <form
            className="contact-form"
            action="https://formspree.io/f/SETT-INN-DIN-FORMSPREE-ID"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Ny melding fra Breathe Senja" />
            <input type="hidden" name="language" value={language} />
            <input type="hidden" name="page" value={page} />

            <button
              className="contact-form__close"
              type="button"
              aria-label={text.contactForm.close}
              onClick={() => setIsContactOpen(false)}
            >
              ×
            </button>

            <p className="contact-form__kicker">{text.contactForm.kicker}</p>
            <h2>{text.contactForm.title}</h2>

            <label>
              <span>{text.contactForm.name}</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>

            <label>
              <span>{text.contactForm.email}</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>

            <label>
              <span>{text.contactForm.message}</span>
              <textarea name="message" rows={5} required />
            </label>

            <button className="contact-form__submit" type="submit">
              {text.contactForm.submit}
            </button>

            <p className="contact-form__privacy">{text.privacyNotice}</p>
          </form>
        </div>
      )}

      {text.imageNotice && <p className="image-notice">{text.imageNotice}</p>}
    </main>
  )
}

export default App
