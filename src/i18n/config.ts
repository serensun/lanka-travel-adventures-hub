import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import deTranslations from './locales/de.json';
import esTranslations from './locales/es.json';
import itTranslations from './locales/it.json';
import frTranslations from './locales/fr.json';

export const supportedLanguages = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  fr: 'Français'
};

export const defaultLanguage = 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      de: { translation: deTranslations },
      es: { translation: esTranslations },
      it: { translation: itTranslations },
      fr: { translation: frTranslations }
    },
    lng: defaultLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0
    },
    supportedLngs: Object.keys(supportedLanguages)
  });

export default i18n;