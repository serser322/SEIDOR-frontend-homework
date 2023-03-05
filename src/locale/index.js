import { createI18n } from 'vue-i18n'
import en from './en.json'
import ch from './ch.json'

const getLocale = () => {
  return localStorage.getItem('locale') || 'en'
}

export const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    ch
  }
})
