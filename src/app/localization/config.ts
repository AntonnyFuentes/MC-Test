import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './translations/en.json';
import es from './translations/es.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {translation: en},
    es: {translation: es},
  },
  lng: RNLocalize.getLocales()[0].languageCode,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});
