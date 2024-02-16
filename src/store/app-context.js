import React, { useState } from 'react';

const AppContext = React.createContext({
    lang: 'en',
    updateLang: (langValue) => {}
})

export const AppContextProvider = (props) =>{

    const [lang, setLang] = useState('en')

    const updateLangHandler = (langValue) => {
        setLang(langValue);
    };

    const contextValue = {
        lang,
        updateLang: updateLangHandler
    };

    return(
        <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
    )
};

export default AppContext;