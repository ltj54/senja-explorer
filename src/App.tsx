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

      <nav className="season-choices" aria-label={text.chooseSeason}>
        <a className="season-choice season-choice--summer" href="#summer">
          <span>{text.seasons.summer}</span>
        </a>

        <a className="season-choice season-choice--winter" href="#winter">
          <span>{text.seasons.winter}</span>
        </a>
      </nav>
    </main>
  )
}

export default App
