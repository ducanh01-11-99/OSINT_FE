import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';

import vi from './locales/vi/index';
import en from './locales/en/index';

const Languages = ['en', 'vi'];

export const DEFAULT_LOCALE =
  process.env.NODE_ENV === 'production' ? window.SystemConfig.LANG : 'vi';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n
  .use(detector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ['vi', 'en'],
    lng: DEFAULT_LOCALE,
    interpolation: { escapeValue: false },
    debug: true,
    whitelist: Languages,
  });

export default i18n;
