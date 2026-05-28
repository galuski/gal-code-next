import 'server-only';

const dictionaries = {
  he: () => import('./he.json').then((module) => module.default),
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'he' | 'en' | 'es') => {
  // פתרון גיבוי (Fallback) לעברית במקרה שהשפה לא מזוהה
  return dictionaries[locale]?.() ?? dictionaries.he();
};