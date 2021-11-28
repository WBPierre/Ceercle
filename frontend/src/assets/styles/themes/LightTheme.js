import { createTheme } from '@mui/material/styles'


// A custom theme for this app
const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#FFF',
            light: '#000',
            dark: '#fc0000',
        },
        secondary: {
            main: '#00b0ff',
            light: '#33bfff',
            dark: '#007bb2',
        }
    },
    typography: {
        button:{
            fontFamily: 'SF Pro Display',
            fontWeight: 600
        },
        fontFamily: 'SF Pro Display',
        fontSize: 14,
        htmlFontSize: 16
    },
})

export default theme
