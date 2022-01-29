import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import generic_fr from "./fr/generic.json";
import app_fr from "./fr/app/index";
import public_fr from "./fr/public/index";
import generic_en from "./en/generic.json";
import app_en from "./en/app/index";
import public_en from "./en/public/index";

const resources = {
    en: {
        // Namspaces
        generic: generic_en,
        public: public_en,
        app: app_en
    },
    fr: {
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