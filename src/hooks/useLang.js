const useLang = (component, lang) => {
    const getJsonLang = async (processData) => {
        let jsonObj = null;
        try {
            import(`../lang/${component}-${lang}.json`).then((module) => {
                jsonObj = module.default;
                processData(jsonObj);
            })
        }
        catch(error){
            throw error;
        }
    }

    return { getJsonLang };
};

export default useLang;