import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import generic_en from "./en/generic.json";
import generic_fr from "./fr/generic.json";
import header_en from "./en/header.json";
import app_fr from "./fr/app/index";
import public_fr from"./fr/public/index";

const resources = {
    en: {
        // Namspaces
        generic: generic_en,
        header: header_en,
    },
    fr:{
        generic: generic_fr,
        public: public_fr,
        app: app_fr
    }
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
    interpolation: { escapeValue: false },  // React already does escaping
    fallbackLng: "fr",                              // language to use
    resources: resources
});

export default i18n;