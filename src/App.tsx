import { type FormEvent, type PointerEvent, useEffect, useRef, useState } from 'react'
import { languageLabels, languages, translations, type Language } from './i18n'

type Page = 'home' | 'summer' | 'winter'
type ContactPosition = { x: number; y: number }
type ContactFormStatus = 'idle' | 'sending' | 'success' | 'error'
type GalleryType = 'summer' | 'winter'
type GalleryItem = {
  kind: 'image' | 'video'
  name: string
  source?: GalleryType | 'shared'
}
type SummerGalleryGroupKey = 'boatTrips' | 'beachTrips' | 'fishingTrips' | 'fjordCalm' | 'moreImages'
type WinterGalleryGroupKey = 'randonee' | 'randoneeVideos' | 'iceFishing' | 'winterCalm' | 'moreImages'
type GalleryGroup<TKey extends string> = {
  key: TKey
  items: GalleryItem[]
}
type ActiveGalleryImage = {
  index: number
  type: GalleryType
} | null
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

const imageItem = (name: string): GalleryItem => ({ kind: 'image', name })
const sharedImageItem = (name: string): GalleryItem => ({ kind: 'image', name, source: 'shared' })

const airbnbListings = [
  'https://www.airbnb.no/rooms/31561817',
  'https://www.airbnb.no/rooms/40201913',
]

const summerGalleryGroups: GalleryGroup<SummerGalleryGroupKey>[] = [
  {
    key: 'boatTrips',
    items: [
      '1000001425',
      '1000004704',
      '1000004707',
      '1000004825',
      '1000004826',
      '1000004828',
      '1000015985',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3921',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4243',
    ].map(imageItem),
  },
  {
    key: 'beachTrips',
    items: [
      '1000001481',
      '1000004815',
      '1000004820',
      '1000002628',
      '1000016037',
      '1000021466',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4217',
      '1000001432',
      '1000000191',
    ].map(imageItem),
  },
  {
    key: 'fishingTrips',
    items: [
      '1000010373',
      '1000021873',
      '1000021808',
      '1000021874',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3939',
      '1000001424',
    ].map(imageItem),
  },
  {
    key: 'fjordCalm',
    items: [
      imageItem('1000015925'),
      imageItem('1000001037'),
      imageItem('1000004740'),
      imageItem('1000001400'),
      imageItem('1000013646'),
      imageItem('1000004115'),
      sharedImageItem('cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_390'),
      sharedImageItem('1000004112'),
      imageItem('1000009873'),
      imageItem('1000010085'),
      imageItem('1000010087'),
      imageItem('1000010088'),
    ],
  },
  {
    key: 'moreImages',
    items: [
      '1000002459',
      '1000004619',
      '1000004659',
      '1000004702',
      '1000004706',
      '1000004710',
      '1000004817',
      '1000004818',
      '1000004824',
      '1000005629',
      '1000010374',
      '1000013423',
      '1000013491',
      '1000016048',
      '1000021448',
      '1000021801',
      '1000000148',
      '1000004665',
      '1000004676',
      '1000004731',
      '1000010089',
      '1000016044',
      '1000016022',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_4171',
      '1000000599',
      '1000001449',
      '1000021458',
    ].map(imageItem),
  },
]

const winterGalleryGroups: GalleryGroup<WinterGalleryGroupKey>[] = [
  {
    key: 'randonee',
    items: [
      '1000021591',
      '1000020232',
      '1000019862',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1455',
      '1000001116',
      '1000001049',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1510',
      '1000019884',
      '1000020480',
      '1000000866',
      '1000013371',
      '1000001118',
      '1000000991',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1446',
      '1000001234',
    ].map(imageItem),
  },
  {
    key: 'randoneeVideos',
    items: [
      '1000020230',
      '1000020204',
      '1000020308',
      '1000020211',
    ].map((name): GalleryItem => ({ kind: 'video', name })),
  },
  {
    key: 'iceFishing',
    items: [
      '1000013165',
      '1000013170',
      '1000013169',
      '1000013156',
      '1000013591',
      '1000013160',
      '1000013212',
      '1000013175',
      '1000013162',
    ].map(imageItem),
  },
  {
    key: 'winterCalm',
    items: [
      '1000000993',
      '1000010937',
      '1000015917',
      '1000015791',
      '1000013130',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3756',
      '1000000760',
      '1000000870',
      '1000000994',
    ].map(imageItem),
  },
  {
    key: 'moreImages',
    items: [
      '1000000855',
      '1000000867',
      '1000000992',
      '1000001012',
      '1000001047',
      '1000004017',
      '1000010930',
      '1000010934',
      '1000012751',
      '1000013213',
      '1000013484',
      '1000013488',
      '1000013520',
      '1000013651',
      '1000015787',
      '1000015793',
      '1000015794',
      '1000015795',
      '1000016003',
      '1000016265',
      '1000016266',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1587',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1980',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_2041',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3473',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3724',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_3749',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5192',
      '1000001017',
      '1000001018',
      '1000001019',
      '1000001021',
      '1000001051',
      '1000001131',
      '1000001184',
      '1000001192',
      '1000001200',
      '1000001202',
      '1000001206',
      '1000001233',
      '1000001052',
      '1000001282',
      '1000001650',
      '1000001700',
      '1000003991',
      '1000003998',
      '1000004018',
      '1000013487',
      '1000019870',
      '1000019883',
      '1000019890',
      '1000020234',
      '1000020236',
      '1000020242',
      '1000020274',
      '1000020473',
      '1000020484',
      '1000020488',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1037',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1271',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1273',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5298',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_5319',
      '1000013116',
      '1000013590',
      '1000001280',
      '1000000868',
      '1000000898',
      '1000015792',
      '1000015976',
      '1000015982',
      '1000015987',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_1608',
      'cafed17a-6444-4dfc-82f5-f3e884c0afd8-1_all_2924',
    ].map(imageItem),
  },
]

const chunkGalleryItems = (items: GalleryItem[]) =>
  Array.from(
    { length: Math.ceil(items.length / 9) },
    (_, pageIndex) => items.slice(pageIndex * 9, pageIndex * 9 + 9),
  )

const summerVisibleGalleryGroups = summerGalleryGroups.filter((group) => group.key !== 'moreImages')
const winterVisibleGalleryGroups = winterGalleryGroups.filter((group) => group.key !== 'moreImages')
const summerGalleryItems = summerVisibleGalleryGroups.flatMap((group) => group.items)
const winterGalleryItems = winterVisibleGalleryGroups.flatMap((group) => group.items)

const galleryItemsByType = {
  summer: summerGalleryItems,
  winter: winterGalleryItems,
}

const homeBackgrounds = [
  'tidlig-var',
  'sen-var',
  'sommer',
  'sensommer',
  'host',
  'senhost',
  'vinter',
  'dypvinter',
]

const publicAssetPath = (path: string) => `${import.meta.env.DEV ? '/' : import.meta.env.BASE_URL}${path}`
const seasonBackgrounds = {
  summer: publicAssetPath('images/backgrounds/summer.webp'),
  winter: publicAssetPath('images/backgrounds/winter.webp'),
}
const AirbnbText = ({ children }: { children: string }) => {
  const [before, after = ''] = children.split('Airbnb')

  return (
    <span className="airbnb-link-text">
      {before}<span className="airbnb-text">Airbnb</span>{after}
    </span>
  )
}
const getPageFromHash = (): Page => {
  const hashPage = window.location.hash.replace('#', '')
  return hashPage === 'summer' || hashPage === 'winter' ? hashPage : 'home'
}

function App() {
  const [language, setLanguage] = useState<Language>('no')
  const [page, setPage] = useState<Page>(() => getPageFromHash())
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [contactFormStatus, setContactFormStatus] = useState<ContactFormStatus>('idle')
  const [scrollOpacity, setScrollOpacity] = useState(1)
  const [contactPositions, setContactPositions] = useState<Partial<Record<Page, ContactPosition>>>({})
  const [isContactDragging, setIsContactDragging] = useState(false)
  const [activeGalleryImage, setActiveGalleryImage] = useState<ActiveGalleryImage>(null)
  const contactDrag = useRef<ContactDragState | null>(null)
  const suppressContactClick = useRef(false)
  const text = translations[language]
  const activeGalleryItems = activeGalleryImage ? galleryItemsByType[activeGalleryImage.type] : []
  const activeGalleryItem = activeGalleryImage ? activeGalleryItems[activeGalleryImage.index] : null

  useEffect(() => {
    Object.values(seasonBackgrounds).forEach((source) => {
      const image = new Image()
      image.src = source
    })
  }, [])

  // Håndter bakgrunns-fade ved scrolling
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList?.contains('season-page')) {
        const scrollTop = target.scrollTop
        const vh = window.innerHeight
        // Fader ut over en lengre distanse (1.5 x vh) for en mer langsom effekt
        const opacity = Math.max(0.32, 1 - scrollTop / (vh * 2.25))
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
      setScrollOpacity(1)
    }

    window.addEventListener('hashchange', syncPageFromLocation)
    window.addEventListener('popstate', syncPageFromLocation)

    return () => {
      window.removeEventListener('hashchange', syncPageFromLocation)
      window.removeEventListener('popstate', syncPageFromLocation)
    }
  }, []) 

  useEffect(() => {
    if (activeGalleryImage === null) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveGalleryImage(null)
      }

      if (event.key === 'ArrowLeft') {
        setActiveGalleryImage((current) =>
          current === null
            ? current
            : {
                ...current,
                index:
                  (current.index - 1 + galleryItemsByType[current.type].length) %
                  galleryItemsByType[current.type].length,
              },
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveGalleryImage((current) =>
          current === null
            ? current
            : {
                ...current,
                index: (current.index + 1) % galleryItemsByType[current.type].length,
              },
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeGalleryImage])

  const showPreviousGalleryImage = () => {
    setActiveGalleryImage((current) =>
      current === null
        ? current
        : {
            ...current,
            index:
              (current.index - 1 + galleryItemsByType[current.type].length) %
              galleryItemsByType[current.type].length,
          },
    )
  }

  const showNextGalleryImage = () => {
    setActiveGalleryImage((current) =>
      current === null
        ? current
        : {
            ...current,
            index: (current.index + 1) % galleryItemsByType[current.type].length,
          },
    )
  }

  const navigateTo = (newPage: Page) => {
    setPage(newPage)
    setScrollOpacity(1)
    setActiveGalleryImage(null)
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

    const hasMovedPastTap = Math.hypot(
      event.clientX - drag.startX,
      event.clientY - drag.startY,
    ) > 8

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
    setContactPositions((current) => ({ ...current, [page]: nextPosition }))
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

    setContactFormStatus('idle')
    setIsContactOpen(true)
  }

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setContactFormStatus('sending')

    const form = event.currentTarget

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        setContactFormStatus('success')
      } else {
        setContactFormStatus('error')
      }
    } catch {
      setContactFormStatus('error')
    }
  }

  return (
    <main className={`site-page site-page--${page}`} aria-label={text.siteName}>
      <h1 className="sr-only">{text.siteName}</h1>

      <div className="top-controls">
        <img
          className="brand-logo top-controls__logo"
          src={publicAssetPath('images/breathe-senja-logo.png')}
          alt="Breathe Senja"
          width="1024"
          height="1024"
        />

        <button
          className={`contact-link contact-link--top${isContactDragging ? ' is-dragging' : ''}`}
          type="button"
          style={
            contactPositions[page]
              ? {
                  left: contactPositions[page].x,
                  position: 'fixed',
                  right: 'auto',
                  top: contactPositions[page].y,
                }
              : undefined
          }
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

        <button
          className="about-trigger"
          type="button"
          aria-label={text.about.triggerAriaLabel}
          title={text.about.triggerTitle}
          onClick={() => setIsAboutOpen(true)}
        >
          ?
        </button>

        <nav className="language-switcher" aria-label={text.chooseLanguage}>
          {languages.map((languageCode) => (
            <button
              key={languageCode}
              className={languageCode === language ? 'is-active' : undefined}
              type="button"
              aria-label={text.languages[languageCode]}
              title={text.languages[languageCode]}
              aria-pressed={languageCode === language}
              onClick={() => setLanguage(languageCode)}
            >
              {languageLabels[languageCode]}
            </button>
          ))}
        </nav>
      </div>

      {page !== 'home' && (
        <button className="back-button" type="button" onClick={() => navigateTo('home')}>
          {text.back}
        </button>
      )}

      {page === 'home' && (
        <>
          <section className="home-hero" aria-label={text.siteName}>
            {homeBackgrounds.map((background) => (
              <div
                key={background}
                className={`home-background home-background--${background}`}
                aria-hidden="true"
              />
            ))}

            <section className="home-accommodation" aria-label={text.accommodation.title}>
              <h2>{text.accommodation.title}</h2>
              <p>{text.accommodation.description}</p>
              <div className="home-accommodation__links">
                {airbnbListings.map((url, index) => (
                  <a key={url} href={url}>
                    <AirbnbText>{text.accommodation.homeLinks[index]}</AirbnbText>
                    <span className="external-link-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </section>

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

            <section className="home-season-info" aria-label={text.chooseSeason}>
              <button
                className="home-season-card home-season-card--winter"
                type="button"
                onClick={() => navigateTo('winter')}
              >
                <span className="home-season-card__kicker">{text.homeSeasonBoxes.winter.kicker}</span>
                <span className="home-season-card__title">{text.homeSeasonBoxes.winter.title}</span>
                <span className="home-season-card__description">{text.homeSeasonBoxes.winter.description}</span>
              </button>

              <button
                className="home-season-card home-season-card--summer"
                type="button"
                onClick={() => navigateTo('summer')}
              >
                <span className="home-season-card__kicker">{text.homeSeasonBoxes.summer.kicker}</span>
                <span className="home-season-card__title">{text.homeSeasonBoxes.summer.title}</span>
                <span className="home-season-card__description">{text.homeSeasonBoxes.summer.description}</span>
              </button>
            </section>
          </section>
        </>
      )}

      {page === 'summer' && (
        <section className="season-page season-page--summer">
          <div 
            className="season-page-background" 
            style={{ backgroundImage: `url(${seasonBackgrounds.summer})`, opacity: scrollOpacity }}
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
                  document.getElementById('summer-gallery-boatTrips')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>{text.continue}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M19 14l-7 7-7-7M12 5v16" />
                </svg>
              </button>
            </div>
          </div>

          {summerVisibleGalleryGroups.flatMap((group, groupIndex) =>
            chunkGalleryItems(group.items).map((galleryPage, pageIndex) => {
              const isFirstSummerPanel = groupIndex === 0 && pageIndex === 0
              const showGroupTitle = pageIndex === 0

              return (
                <div
                  key={`${group.key}-${pageIndex}`}
                  id={pageIndex === 0 ? `summer-gallery-${group.key}` : undefined}
                  className="season-page-panel season-page-panel--image"
                >
                  {isFirstSummerPanel && (
                    <h3 className="season-gallery-title">{text.summerPage.galleryTitle}</h3>
                  )}
                  {showGroupTitle && (
                    <div className="season-gallery-heading">
                      <img className="brand-logo" src={publicAssetPath('images/breathe-senja-logo.png')} alt="" />
                      <h4 className="season-gallery-group-title">{text.summerPage.galleryGroups[group.key]}</h4>
                    </div>
                  )}
                  <div className="season-image-grid">
                    {galleryPage.map((galleryItem) => {
                      const galleryIndex = summerGalleryItems.findIndex((item) => item.name === galleryItem.name)

                      return (
                        <button
                          key={galleryItem.name}
                          className="season-image-grid__item"
                          type="button"
                          aria-label={`Vis sommerbilde ${galleryIndex + 1}`}
                          onClick={() => setActiveGalleryImage({ type: 'summer', index: galleryIndex })}
                        >
                          <img
                            src={publicAssetPath(`images/web/${galleryItem.source ?? 'summer'}/${galleryItem.name}.webp`)}
                            alt=""
                          />
                          <span
                            className="season-image-grid__filename"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {galleryItem.name}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            }),
          )}

          <div id="about-panel" className="season-page-panel season-page-panel--about">
            <img
              className="brand-logo season-page-panel__logo"
              src={publicAssetPath('images/breathe-senja-logo.png')}
              alt="Breathe Senja"
            />
            {text.summerPage.comingSoon && <p className="season-coming-soon">{text.summerPage.comingSoon}</p>}
            <section className="season-experiences" aria-label={text.summerPage.experiences.title}>
              <h3>{text.summerPage.experiences.title}</h3>
              {text.summerPage.experiences.items.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </section>

            <section className="season-accommodation" aria-label={text.accommodation.title}>
              <h3>{text.accommodation.title}</h3>
              <p>{text.accommodation.description}</p>
              <div className="season-accommodation__links">
                {airbnbListings.map((url, index) => (
                  <a key={url} href={url}>
                    <AirbnbText>{text.accommodation.links[index]}</AirbnbText>
                    <span className="external-link-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </section>

          </div>
        </section>
      )}

      {page === 'winter' && (
        <section className="season-page season-page--winter">
          <div 
            className="season-page-background" 
            style={{ backgroundImage: `url(${seasonBackgrounds.winter})`, opacity: scrollOpacity }}
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
                  document.getElementById('winter-gallery-randonee')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>{text.continue}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M19 14l-7 7-7-7M12 5v16" />
                </svg>
              </button>
            </div>
          </div>

          {winterVisibleGalleryGroups.flatMap((group, groupIndex) =>
            chunkGalleryItems(group.items).map((galleryPage, pageIndex) => {
              const isFirstWinterPanel = groupIndex === 0 && pageIndex === 0
              const showGroupTitle = pageIndex === 0

              return (
                <div
                  key={`${group.key}-${pageIndex}`}
                  id={pageIndex === 0 ? `winter-gallery-${group.key}` : undefined}
                  className="season-page-panel season-page-panel--image"
                >
                  {isFirstWinterPanel && (
                    <h3 className="season-gallery-title">{text.winterPage.galleryTitle}</h3>
                  )}
                  {showGroupTitle && (
                    <div className="season-gallery-heading">
                      <img className="brand-logo" src={publicAssetPath('images/breathe-senja-logo.png')} alt="" />
                      <h4 className="season-gallery-group-title">{text.winterPage.galleryGroups[group.key]}</h4>
                    </div>
                  )}
                  <div className="season-image-grid">
                    {galleryPage.map((galleryItem) => {
                      const galleryIndex = winterGalleryItems.findIndex((item) => item.name === galleryItem.name)

                      return (
                        <button
                          key={galleryItem.name}
                          className={`season-image-grid__item${galleryItem.kind === 'video' ? ' season-image-grid__item--video' : ''}`}
                          type="button"
                          aria-label={`Vis ${galleryItem.kind === 'video' ? 'vintervideo' : 'vinterbilde'} ${galleryIndex + 1}`}
                          onClick={() => setActiveGalleryImage({ type: 'winter', index: galleryIndex })}
                        >
                          {galleryItem.kind === 'video' ? (
                            <>
                              <video
                                src={publicAssetPath(`images/web/winter/${galleryItem.name}.mp4`)}
                                muted
                                playsInline
                                preload="metadata"
                              />
                              <span className="season-image-grid__badge">Video</span>
                            </>
                          ) : (
                            <img
                              className={galleryItem.name === '1000013175' ? 'season-image-grid__media--focus-face' : undefined}
                              src={publicAssetPath(`images/web/${galleryItem.source ?? 'winter'}/${galleryItem.name}.webp`)}
                              alt=""
                            />
                          )}
                          <span
                            className="season-image-grid__filename"
                            onClick={(event) => event.stopPropagation()}
                          >
                            {galleryItem.name}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            }),
          )}

          <div id="about-panel" className="season-page-panel season-page-panel--about">
            <img
              className="brand-logo season-page-panel__logo"
              src={publicAssetPath('images/breathe-senja-logo.png')}
              alt="Breathe Senja"
            />
            {text.winterPage.comingSoon && <p className="season-coming-soon">{text.winterPage.comingSoon}</p>}
            <section className="season-experiences" aria-label={text.winterPage.experiences.title}>
              <h3>{text.winterPage.experiences.title}</h3>
              {text.winterPage.experiences.items.map((item) => (
                <article key={item.title}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </section>

            <section className="season-accommodation" aria-label={text.accommodation.title}>
              <h3>{text.accommodation.title}</h3>
              <p>{text.accommodation.description}</p>
              <div className="season-accommodation__links">
                {airbnbListings.map((url, index) => (
                  <a key={url} href={url}>
                    <AirbnbText>{text.accommodation.links[index]}</AirbnbText>
                    <span className="external-link-arrow" aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </section>

          </div>
        </section>
      )}

      {page !== 'home' && (
        <nav className="season-gallery-index" aria-label={page === 'summer' ? text.summerPage.galleryTitle : text.winterPage.galleryTitle}>
          {(page === 'summer' ? summerVisibleGalleryGroups : winterVisibleGalleryGroups).map((group) => (
            <button
              key={group.key}
              type="button"
              onClick={() => {
                document.getElementById(`${page}-gallery-${group.key}`)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {page === 'summer'
                ? text.summerPage.galleryGroups[group.key as SummerGalleryGroupKey]
                : text.winterPage.galleryGroups[group.key as WinterGalleryGroupKey]}
            </button>
          ))}
        </nav>
      )}

      {isAboutOpen && (
        <div className="about-modal" role="dialog" aria-modal="true" aria-labelledby="about-modal-title">
          <div className="contact-modal__backdrop" onClick={() => setIsAboutOpen(false)} />

          <section className="about-popover">
            <div className="about-popover__logo">
              <img
                src={publicAssetPath('images/breathe-senja-logo.png')}
                alt="Breathe Senja"
                width="1024"
                height="1024"
              />
            </div>
            <button
              className="contact-form__close"
              type="button"
              aria-label={text.contactForm.close}
              onClick={() => setIsAboutOpen(false)}
            >
              ×
            </button>
            <h2 id="about-modal-title">{text.about.kicker}</h2>
            <p>{text.about.description}</p>
            <dl className="about-popover__details">
              <div>
                <dt>{text.about.phoneLabel}</dt>
                <dd>{text.about.phone}</dd>
              </div>
              <div>
                <dt>{text.about.orgNumberLabel}</dt>
                <dd>{text.about.orgNumber}</dd>
              </div>
            </dl>
            <a
              className="about-popover__map-link"
              href={text.about.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              {text.about.mapLabel}
              <span className="external-link-arrow" aria-hidden="true">↗</span>
            </a>
            <div className="about-popover__airbnb">
              {airbnbListings.map((url, index) => (
                <a key={url} href={url}>
                  <AirbnbText>{text.about.airbnbLinks[index]}</AirbnbText>
                  <span className="external-link-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      )}

      {isContactOpen && (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-label={text.contactForm.title}>
          <div className="contact-modal__backdrop" onClick={() => setIsContactOpen(false)} />

          <form
            className="contact-form"
            action="https://formspree.io/f/xvznzpvd"
            method="POST"
            onSubmit={handleContactSubmit}
          >
            <img
              className="brand-logo contact-form__logo"
              src={publicAssetPath('images/breathe-senja-logo.png')}
              alt=""
            />
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

            <button
              className="contact-form__submit"
              type="submit"
              disabled={contactFormStatus === 'sending'}
            >
              {contactFormStatus === 'sending' ? text.contactForm.sending : text.contactForm.submit}
            </button>

            <p className="contact-form__privacy">{text.privacyNotice}</p>
            {contactFormStatus === 'success' && (
              <p className="contact-form__status contact-form__status--success" role="status" aria-live="polite">
                {text.contactForm.success}
              </p>
            )}
            {contactFormStatus === 'error' && (
              <p className="contact-form__status contact-form__status--error" role="alert">
                {text.contactForm.error}
              </p>
            )}
          </form>
        </div>
      )}

      {activeGalleryImage && activeGalleryItem && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={activeGalleryItem.kind === 'video' ? 'Video' : 'Bilde'}>
          <button
            className="image-lightbox__backdrop"
            type="button"
            aria-label={activeGalleryItem.kind === 'video' ? 'Lukk video' : 'Lukk bilde'}
            onClick={() => setActiveGalleryImage(null)}
          />

          <div className="image-lightbox__content">
            <button
              className="image-lightbox__close"
              type="button"
              aria-label={activeGalleryItem.kind === 'video' ? 'Lukk video' : 'Lukk bilde'}
              onClick={() => setActiveGalleryImage(null)}
            >
              ×
            </button>
            <button
              className="image-lightbox__nav image-lightbox__nav--prev"
              type="button"
              aria-label="Forrige bilde"
              onClick={showPreviousGalleryImage}
            >
              ‹
            </button>
            {activeGalleryItem.kind === 'video' ? (
              <video
                src={publicAssetPath(`images/web/${activeGalleryImage.type}/${activeGalleryItem.name}.mp4`)}
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={publicAssetPath(`images/web/${activeGalleryItem.source ?? activeGalleryImage.type}/${activeGalleryItem.name}.webp`)}
                alt=""
              />
            )}
            <button
              className="image-lightbox__nav image-lightbox__nav--next"
              type="button"
              aria-label="Neste bilde"
              onClick={showNextGalleryImage}
            >
              ›
            </button>
          </div>
        </div>
      )}

      {text.imageNotice && <p className="image-notice">{text.imageNotice}</p>}
    </main>
  )
}

export default App
