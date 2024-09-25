import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      }
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma en caso de que falte traducción
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar las variables
    },
    
  }, (err, t) => {
    if (err) {
      console.error('Error initializing i18next:', err);
    } else {
      console.log('i18next initialized with language:', i18n.language); // Debería mostrar 'en' o 'es'
    }
  });

export default i18n;