import Typewriter from 'typewriter-effect';
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

function TypingEffect(){

    const { t } = useTranslation();

    const strings = [
        '<span style="color: #00B050;text-decoration: underline;">'+t('public:home:intro.slider_at_the_office')+'</span>',
        '<span style="color: #0070C0;text-decoration: underline;">'+t('public:home:intro.slider_at_home')+'</span>',
        '<span style="color: #FFC000;text-decoration: underline;">'+t('public:home:intro.slider_at_coworking')+'</span>']

    return (
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                strings: strings
            }}
        />
    )
}

export default TypingEffect;