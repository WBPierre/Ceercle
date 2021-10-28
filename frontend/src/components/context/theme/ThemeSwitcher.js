import normal from './../../../assets/styles/themes/LightTheme';
import dark from './../../../assets/styles/themes/DarkTheme';

const themes = {
    normal,
    dark,
}

export default function getTheme(theme) {
    return themes[theme]
}
