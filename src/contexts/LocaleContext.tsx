import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, countries, languages, Country } from '../config/translations';

interface LocaleContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  currentCountry: Country;
  setCountry: (countryCode: string) => void;
  formatPrice: (amount: number) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [currentCountry, setCurrentCountry] = useState<Country>(
    countries.find(c => c.code === 'US') || countries[0]
  );

  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Failed to load language preference:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('language', language);
    } catch (error) {
      console.error('Failed to save language preference:', error);
    }
  }, [language]);

  const setCountry = (countryCode: string) => {
    const newCountry = countries.find(c => c.code === countryCode);
    if (newCountry) {
      setCurrentCountry(newCountry);
      // Update language if it's different
      if (newCountry.language !== language) {
        setLanguage(newCountry.language);
      }
    }
  };

  const formatPrice = (amount: number): string => {
    const convertedAmount = amount * currentCountry.exchangeRate;
    return `${currentCountry.currencySymbol}${convertedAmount.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    })}`;
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['en'][key] || key;
  };

  return (
    <LocaleContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      currentCountry, 
      setCountry,
      formatPrice 
    }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
