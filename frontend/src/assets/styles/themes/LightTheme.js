import { createTheme } from '@mui/material/styles'


// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            light: '#757ce8',
            dark: '#002884',
        },
        secondary: {
            main: '#00b0ff',
            light: '#33bfff',
            dark: '#007bb2',
        },
        background: {
            default: '#f5f5f5',
        },
    },
})

export default theme
