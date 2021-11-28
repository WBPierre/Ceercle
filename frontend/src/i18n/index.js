import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import generic_en from "./en/generic.json";
import generic_fr from "./fr/generic.json";
import header_en from "./en/header.json";
import home_fr from "./fr/public/home.json";
import navbar_fr from "./fr/public/navbar.json";
import offers_fr from "./fr/public/offers.json";
import demo_fr from "./fr/public/demo.json";

const resources = {
    en: {
        // Namspaces
        generic: generic_en,
        header: header_en,
    },
    fr:{
        generic: generic_fr,
        home : home_fr,
        navbar : navbar_fr,
        offers : offers_fr,
        demo: demo_fr
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