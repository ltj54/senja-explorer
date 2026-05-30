import no from './no'
import en from './en'
import de from './de'

export const languages = ['no', 'en', 'de'] as const

export type Language = (typeof languages)[number]

export const languageLabels: Record<Language, string> = {
  no: 'NO',
  en: 'EN',
  de: 'DE',
}

export const translations = {
  no,
  en,
  de,
} satisfies Record<Language, typeof no>
