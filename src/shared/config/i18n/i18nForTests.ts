import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,
        ns: ['translation'],
        defaultNS: 'translation',
        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        resources: { ru: { translation: {} } },
        parseMissingKeyHandler: (key) => key.split(':').pop(),
    });

export default i18n;
