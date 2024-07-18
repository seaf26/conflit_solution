import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'ar';
    i18n.changeLanguage(savedLanguage);
    document.body.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';

  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); 
    document.body.dir = language === 'en' ? 'ltr' : 'rtl';
  };

  return (
    <select
      id={styles.translate}
      onChange={(e) => changeLanguage(e.target.value)}
      value={i18n.language}
    >
      <option value="ar">العربية</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;