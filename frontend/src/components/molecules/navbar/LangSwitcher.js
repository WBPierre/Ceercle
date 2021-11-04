import {useTranslation} from "react-i18next";
import {Button, Menu} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';

function LangSwitcher(){

    const { i18n} = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        console.log(i18n.language);
    }, [])

    const returnLangueText = () => {
        switch(i18n.language){
            case "fr":
                return "Français";
            default:
                return "English";
        }
    }

    const changeLangue = (lang) => {
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
                variant="outlined"
                color="inherit"
                startIcon={<LanguageIcon/>}
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
            >
                {i18n.language !== "fr-FR" && i18n.language !== "fr" &&
                    <MenuItem onClick={() => changeLangue("fr")}>Français</MenuItem>
                }
                {i18n.language !== "en-EN" && i18n.language !== "en" &&
                    <MenuItem onClick={() => changeLangue("en")}>English</MenuItem>
                }
            </Menu>
        </div>
    )
}

export default LangSwitcher;