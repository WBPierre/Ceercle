import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

import banniere from "../../../../assets/images/app/banniere2.jpeg";
import TabInfoByUser from "./TabInfoByUser";
import example3 from "../../../../assets/images/example/3.jpg";
import BannerDefault from "../../../../assets/images/example/banner_default.jpg";
import ProfileDefault from "../../../../assets/images/example/default.png";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function InfoByUser(props) {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();

    const [favorite, setFavorite] = React.useState(0);


    const onClick = (event) => {
        setFavorite(1 - favorite)
    };

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container direction="column" style={{ backgroundColor: theme.palette.background.paper }}>
            <Grid item minHeight="30vh" style={{ position: "relative" }}>
                <div style={{ height: "80%", width: "100%", zIndex: 1, backgroundImage: `url(${props.userToDisplay.bannerPath === null ? BannerDefault : props.userToDisplay.bannerPath})`, position: "absolute", backgroundPosition: "center", backgroundSize: "cover" }}>
                </div>
                <div style={{ position: "absolute", bottom: '0%', left: '5%', zIndex: 2 }}>
                    <Avatar src={props.userToDisplay.profilePicturePath === null ? ProfileDefault : props.userToDisplay.profilePicturePath} sx={{ width: 120, height: 120, border: "4px solid white" }} />
                </div>
            </Grid>



            <Grid item px={2}>
                <Grid container direction="row" sx={{ backgroundColor: theme.palette.background.paper }}>
                    <Grid item md={12}>
                        <Typography variant="h3" fontWeight={600} style={{ color: '#414040' }}>
                            {props.userToDisplay.firstName + " " + props.userToDisplay.lastName}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item mt={1} px={2}>
                <Box sx={{ width: '100%' }}>
                    <TabInfoByUser userToDisplay={props.userToDisplay} />
                </Box>
            </Grid>
        </Grid >
    );
}

//zindex, absolute, 