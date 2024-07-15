import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <select id={styles.translate} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="ar">العربية</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
