import { useState } from 'react'

import heroImage from './assets/senja-hero.jpg'

type Language = 'no' | 'en' | 'de'

const texts = {
  no: {
    languageLabel: 'Velg språk',
    brand: 'Senja Explorer',
    eyebrow: 'Senja Explorer & Services',
    title: 'Opplevelser på Senja — sommer og vinter',
    intro:
        'En rolig testside for naturopplevelser, bilder, kontakt og informasjon om turer på Senja.',
    summerButton: 'Sommer',
    winterButton: 'Vinter',
    contactButton: 'Kontakt',
    summerLabel: 'Sommer',
    summerTitle: 'Fjell, fjord og lyse kvelder',
    summerText:
        'Her kan Roland presentere sommeropplevelser, turer, bilder og praktisk informasjon for besøkende som ønsker å oppleve Senja i den lyse årstiden.',
    winterLabel: 'Vinter',
    winterTitle: 'Nordlys, snø og stillhet',
    winterText:
        'Her kan siden vise vinterstemning, nordlys, guidede opplevelser og annen informasjon som passer for gjester som besøker Senja om vinteren.',
    contactLabel: 'Kontakt',
    contactTitle: 'Send en forespørsel',
    contactText:
        'Publikum bør enkelt kunne kontakte Roland på e-post for spørsmål, booking eller mer informasjon.',
    emailButton: 'Send e-post',
  },
  en: {
    languageLabel: 'Choose language',
    brand: 'Senja Explorer',
    eyebrow: 'Senja Explorer & Services',
    title: 'Experiences on Senja — summer and winter',
    intro:
        'A calm test page for nature experiences, photos, contact details and information about trips on Senja.',
    summerButton: 'Summer',
    winterButton: 'Winter',
    contactButton: 'Contact',
    summerLabel: 'Summer',
    summerTitle: 'Mountains, fjords and bright evenings',
    summerText:
        'Roland can present summer experiences, trips, photos and practical information for visitors who want to explore Senja during the bright season.',
    winterLabel: 'Winter',
    winterTitle: 'Northern lights, snow and silence',
    winterText:
        'The page can show winter atmosphere, northern lights, guided experiences and other information for guests visiting Senja in winter.',
    contactLabel: 'Contact',
    contactTitle: 'Send an enquiry',
    contactText:
        'Visitors should be able to contact Roland easily by email for questions, booking or more information.',
    emailButton: 'Send email',
  },
  de: {
    languageLabel: 'Sprache wählen',
    brand: 'Senja Explorer',
    eyebrow: 'Senja Explorer & Services',
    title: 'Erlebnisse auf Senja — Sommer und Winter',
    intro:
        'Eine ruhige Testseite für Naturerlebnisse, Bilder, Kontakt und Informationen über Touren auf Senja.',
    summerButton: 'Sommer',
    winterButton: 'Winter',
    contactButton: 'Kontakt',
    summerLabel: 'Sommer',
    summerTitle: 'Berge, Fjorde und helle Abende',
    summerText:
        'Hier kann Roland Sommererlebnisse, Touren, Bilder und praktische Informationen für Besucher präsentieren, die Senja in der hellen Jahreszeit erleben möchten.',
    winterLabel: 'Winter',
    winterTitle: 'Nordlicht, Schnee und Stille',
    winterText:
        'Die Seite kann Winterstimmung, Nordlicht, geführte Erlebnisse und weitere Informationen für Gäste zeigen, die Senja im Winter besuchen.',
    contactLabel: 'Kontakt',
    contactTitle: 'Anfrage senden',
    contactText:
        'Besucher sollten Roland einfach per E-Mail kontaktieren können, um Fragen zu stellen, zu buchen oder weitere Informationen zu erhalten.',
    emailButton: 'E-Mail senden',
  },
}

function App() {
  const [language, setLanguage] = useState<Language>('no')
  const t = texts[language]

  return (
      <main className="page">
        <header className="site-header">
          <p className="brand">{t.brand}</p>

          <nav className="language-switcher" aria-label={t.languageLabel}>
            <button
                type="button"
                className={language === 'no' ? 'active' : ''}
                onClick={() => setLanguage('no')}
            >
              NO
            </button>
            <button
                type="button"
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
                type="button"
                className={language === 'de' ? 'active' : ''}
                onClick={() => setLanguage('de')}
            >
              DE
            </button>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-image-wrap">
            <img src={heroImage} alt="Landskap på Senja" className="hero-image" />
          </div>

          <p className="eyebrow">{t.eyebrow}</p>

          <h1>{t.title}</h1>

          <p className="intro">{t.intro}</p>

          <div className="actions">
            <a href="#summer">{t.summerButton}</a>
            <a href="#winter">{t.winterButton}</a>
            <a href="#contact">{t.contactButton}</a>
          </div>
        </section>

        <section id="summer" className="content-section">
          <p className="section-label">{t.summerLabel}</p>
          <h2>{t.summerTitle}</h2>
          <p>{t.summerText}</p>
        </section>

        <section id="winter" className="content-section">
          <p className="section-label">{t.winterLabel}</p>
          <h2>{t.winterTitle}</h2>
          <p>{t.winterText}</p>
        </section>

        <section id="contact" className="content-section">
          <p className="section-label">{t.contactLabel}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>

          <a
              className="email-link"
              href="mailto:post@senja-explorer.no?subject=Forespørsel%20fra%20nettsiden"
          >
            {t.emailButton}
          </a>
        </section>

        <footer className="site-footer">
          <p>© Senja Explorer & Services</p>
        </footer>
      </main>
  )
}

export default App