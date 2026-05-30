import { useState } from 'react'
import { languageLabels, languages, translations, type Language } from './i18n'

function App() {
  const [language, setLanguage] = useState<Language>('no')
  const text = translations[language]

  return (
    <main className="season-landing" aria-label={text.siteName}>
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

      <section className="season-choices" aria-label={text.chooseSeason}>
        <button className="season-choice season-choice--summer" type="button">
          <span>{text.seasons.summer}</span>
        </button>

        <button className="season-choice season-choice--winter" type="button">
          <span>{text.seasons.winter}</span>
        </button>
      </section>

      <p className="image-notice">{text.imageNotice}</p>
    </main>
  )
}

export default App
