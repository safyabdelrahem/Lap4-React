
import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en'); 

    useEffect(() => {
       
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    const toggleLanguage = () => {
        setLang(prevLang => (prevLang === 'en' ? 'ar' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
