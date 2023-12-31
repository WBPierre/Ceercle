import {useTranslation} from "react-i18next";
import {Button, Menu, useTheme} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function LangSwitcher(props){

    const { i18n} = useTranslation();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const returnLangueText = () => {
        switch(i18n.language){
            case "fr":
                return "Français";
            default:
                return "English";
        }
    }

    const changeLangue = (lang) => {
        setAnchorEl(null);
        i18n.changeLanguage(lang);
    }

    return(
        <div>
            <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="text"
                sx={{mr:2}}
                style={{color: props.dark === undefined ? '#203864' : theme.palette.text.primary, borderColor: theme.palette.text.primary, fontWeight:500, textTransform: 'capitalize', fontSize: 18}}
                endIcon={<KeyboardArrowDownIcon />}
            >
                {returnLangueText()}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                style={{color: theme.palette.text.primary}}
            >
                {i18n.language !== "fr-FR" && i18n.language !== "fr" &&
                    <MenuItem onClick={() => changeLangue("fr")} style={{color: theme.palette.text.primary}}>Français</MenuItem>
                }
                {i18n.language !== "en-EN" && i18n.language !== "en" &&
                    <MenuItem onClick={() => changeLangue("en")} style={{color: theme.palette.text.primary}}>English</MenuItem>
                }
            </Menu>
        </div>
    )
}

export default LangSwitcher;