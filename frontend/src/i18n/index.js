import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import generic_en from "./en/generic.json";
import generic_fr from "./fr/generic.json";
import header_en from "./en/header.json";
import header_fr from "./fr/header.json";
import home_fr from "./fr/home.json";
import navbar_fr from "./fr/navbar.json";
import contact_fr from "./fr/contact.json";

const resources = {
    en: {
        // Namspaces
        generic: generic_en,
        header: header_en,
    },
    fr:{
        generic: generic_fr,
        header: header_fr,
        home : home_fr,
        navbar : navbar_fr,
        contact: contact_fr
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