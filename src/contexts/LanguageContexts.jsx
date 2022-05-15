import React, { useState , createContext } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => { 
 const [language, setLanguage] = useState('');

    return (
        <LanguageContext.Provider
            value={{
                languageList: [language, setLanguage],
            }}
            contained ="true"
        >
            {props.children}
        </LanguageContext.Provider>
    );
};