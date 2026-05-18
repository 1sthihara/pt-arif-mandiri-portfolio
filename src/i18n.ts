import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';

const resources = {
  en: { translation: translationEN },
  id: { translation: translationID }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // Menggunakan bahasa Indonesia ('id') sebagai default jika deteksi awal kosong
    lng: localStorage.getItem('i18nextLng') || 'id', 
    fallbackLng: 'en',
    supportedLngs: ['en', 'id'],
    interpolation: {
      escapeValue: false
    },
    detection: {
      // Ditambahkan 'htmlTag' dan 'cookie' sebagai fallback deteksi jika localStorage sempat tertahan
      order: ['localStorage', 'htmlTag', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng' // Memastikan i18next mencari key ini di browser kamu
    }
  });

export default i18n;