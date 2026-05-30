import { useEffect, useState } from 'react'
import { languageLabels, languages, translations, type Language } from './i18n'

type Page = 'home' | 'summer' | 'winter'

function App() {
  const [language, setLanguage] = useState<Language>('no')
  const [page, setPage] = useState<Page>('home')
  const [isContactOpen, setIsContactOpen] = useState(false)
  const text = translations[language]

  // Synkroniser med nettleserens frem/tilbake-knapper
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setPage(event.state.page)
      } else {
        setPage('home')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (newPage: Page) => {
    setPage(newPage)
    window.history.pushState({ page: newPage }, '', newPage === 'home' ? '/' : `#${newPage}`)
  }

  return (
    <main className={`site-page site-page--${page}`} aria-label={text.siteName}>
      <h1 className="sr-only">{text.siteName}</h1>

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
        <section className="season-choices" aria-label={text.chooseSeason}>
          <button
            className="season-choice season-choice--summer"
            type="button"
            onClick={() => navigateTo('summer')}
          >
            <span>{text.seasons.summer}</span>
          </button>

          <button
            className="season-choice season-choice--winter"
            type="button"
            onClick={() => navigateTo('winter')}
          >
            <span>{text.seasons.winter}</span>
          </button>
        </section>
      )}

      {page === 'summer' && (
        <section className="season-page season-page--summer">
          <div className="season-page-panel season-page-panel--content">
            <div className="season-page-content">
              <p className="season-kicker">{text.summerPage.kicker}</p>
              <h2>{text.summerPage.title}</h2>
              <p>{text.summerPage.description}</p>
              
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
            <p className="season-network">{text.summerPage.network}</p>
            <aside className="season-about" aria-label={text.about.title}>
              {text.about.kicker && <p>{text.about.kicker}</p>}
              <h3>{text.about.title}</h3>
              <p>{text.about.description}</p>
            </aside>

            <button
              className="contact-link contact-link--inline"
              type="button"
              onClick={() => setIsContactOpen(true)}
            >
              {text.contactRoland}
            </button>
          </div>
        </section>
      )}

      {page === 'winter' && (
        <section className="season-page season-page--winter">
          <div className="season-page-panel season-page-panel--content">
            <div className="season-page-content">
              <p className="season-kicker">{text.winterPage.kicker}</p>
              <h2>{text.winterPage.title}</h2>
              <p>{text.winterPage.description}</p>
              
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
            <p className="season-network">{text.winterPage.network}</p>
            <aside className="season-about" aria-label={text.about.title}>
              {text.about.kicker && <p>{text.about.kicker}</p>}
              <h3>{text.about.title}</h3>
              <p>{text.about.description}</p>
            </aside>

            <button
              className="contact-link contact-link--inline"
              type="button"
              onClick={() => setIsContactOpen(true)}
            >
              {text.contactRoland}
            </button>
          </div>
        </section>
      )}

      {page === 'home' && (
        <button
          className="contact-link"
          type="button"
          onClick={() => setIsContactOpen(true)}
        >
          {text.contactRoland}
        </button>
      )}

      {isContactOpen && (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-label={text.contactForm.title}>
          <div className="contact-modal__backdrop" onClick={() => setIsContactOpen(false)} />

          <form
            className="contact-form"
            action="https://formspree.io/f/SETT-INN-DIN-FORMSPREE-ID"
            method="POST"
          >
            <input type="hidden" name="_subject" value="Ny melding fra Senja Explorer" />
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
