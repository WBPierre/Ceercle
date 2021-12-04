import Typewriter from 'typewriter-effect';
import {useTranslation} from "react-i18next";

function TypingEffect(){

    const { t } = useTranslation();


    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString('<span style="color: #00B050;text-decoration: underline;">'+t('public:home:intro.slider_at_the_office')+'</span>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<span style="color: #0070C0;text-decoration: underline;">'+t('public:home:intro.slider_at_home')+'</span>')
                    .pauseFor(500)
                    .deleteAll()
                    .typeString('<span style="color: #FFC000;text-decoration: underline;">'+t('public:home:intro.slider_at_coworking')+'</span>')
                    .pauseFor(500)
                    .deleteAll()
                    .start();
            }}
            options={{
                autoStart: true,
                loop: true,
            }}
        />
    )
}

export default TypingEffect;