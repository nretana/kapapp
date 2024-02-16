import { useState, useEffect, useContext } from 'react';

import homeLangJson from '../lang/home-en.json';
import navbarLangJson from '../lang/navbar-en.json';
import footerLangJson from '../lang/footer-en.json';

import AppContext from '../store/app-context';
import useLang from '../hooks/useLang.js';

const getLangByComponent = (name) => {
    switch(name){
        case 'home':
            return homeLangJson;
        case 'navbar':
            return navbarLangJson;
        case 'footer':
            return footerLangJson;
        default:
            return null;
    }
};

const Translate = (Component, name) => {

    const defaultLangJson = getLangByComponent(name.toLowerCase());
    const TranslateComponent = (props) => {
        const [componentLabels, setComponentLabels] = useState(defaultLangJson.pageLabels);
        const appContext = useContext(AppContext);
        const { getJsonLang } = useLang(name.toLowerCase(), appContext.lang);

        useEffect(() => {

        const processData = (data) => {
            if(data === null  || data.pageLabels === null){
                return;
            }
            setComponentLabels(data.pageLabels);
        }
        
        getJsonLang(processData);

        }, [appContext.lang]);

        return (<Component {...props} componentLabels={componentLabels} />)
    }

    return TranslateComponent;
};

export default Translate;