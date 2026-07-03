export const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.startsWith('ar') ? 'ar' : 'en';
};

export const isRTL = (language) => language === 'ar';

export const formatDate = (date, language) => {
  return new Intl.DateTimeFormat(language === 'ar' ? 'ar-SY' : 'en-US', {
    year: 'numeric',
    month: 'long',
  }).format(date);
};

export default { getBrowserLanguage, isRTL, formatDate };
