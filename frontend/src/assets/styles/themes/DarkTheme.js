import { createTheme } from '@mui/material/styles'


// A custom theme for this app
const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#2F5597',
        },
        secondary: {
            main: '#69D0DB',
        },
        success: {
            main: '#60B56D'
        },
        info: {
            main: '#ebf4ff'
        },
        error: {
            main: '#DE5959'
        },
        warning: {
            main: '#F6B84E'
        },
        purple: {
            main: '#9872B2'
        },
        gdark: {
            main: '#156756'
        },
        charcoal: {
            main: '#474C55'
        },
        background: {
            paper: '#FBFBFC',
            default: '#FFF'
        },
        text:{
            primary: '#000'
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
    zIndex: {
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500
    }
})

export default theme
