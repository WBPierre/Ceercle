import { createTheme } from '@mui/material/styles'


// A custom theme for this app
const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#fc0000',
            light: '#000',
            dark: '#fc0000',
        },
        secondary: {
            main: '#00b0ff',
            light: '#33bfff',
            dark: '#007bb2',
        }
    },
})

export default theme
