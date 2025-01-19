import { I18n } from 'i18n-js';
import en from './english';
import fr from './french';
import { getLocales } from 'expo-localization';

const translations = {
  en,
  fr,
};

const i18n = new I18n(translations);

// Enable fallback for missing translations
i18n.enableFallback = true;

// Set the default locale (can be updated dynamically)
i18n.locale = getLocales()[0].languageCode ?? 'en';

export default i18n;
