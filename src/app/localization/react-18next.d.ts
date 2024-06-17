import en from './translations/en.json';
import es from './translations/es.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en';
    resources: {
      en: typeof en;
      es: typeof es;
    };
  }
}
