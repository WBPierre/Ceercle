import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Avatar, ListItemIcon, ListItemText, Menu, Switch, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import OffIcon from "../../../molecules/icons/OffIcon";
import * as React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../../context/auth/AuthHelper";
import { useTranslation } from "react-i18next";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Container from "@mui/material/Container";
import OfficeService from "../../../../services/app/office.service";

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));


function PlanningButton(props) {

    const { t } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [half, setHalf] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (!props.data.past) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const modifyChoice = (name) => {
        props.modifyChoice(name, half, props.order);
        handleClose();
    }

    const handleChange = (e) => {
        setHalf(e.target.checked);
        if (!e.target.checked) {
            props.modifyChoice(props.data.morning, false, 0);
        }
        props.changeHalf(e);
        handleClose();
    }

    useEffect(() => {
        setHalf(props.half);
    }, [props.half])

    const getActiveBGColor = () => {
        if (props.order === 0) {
            switch (props.data.morning) {
                case 0: return "#F2F2F2";
                case 1: return "#F7FEF5"
                case 2: return "#F3F7FE"
                case 3: return "#FAF6FF"
                case 4: return "#FEFAF1"
            }
        } else {
            switch (props.data.afternoon) {
                case 0: return "#F2F2F2";
                case 1: return "#F7FEF5"
                case 2: return "#F3F7FE"
                case 3: return "#FAF6FF"
                case 4: return "#FEFAF1"
            }
        }

    }


    const getIcon = () => {
        if (half) {
            if (props.order === 0) {
                switch (props.data.morning) {
                    case 0: return (<AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />);
                    case 1: return (<OfficeIcon sx={{ width: 40, height: 40 }} />)
                    case 2: return (<ManWorkingIcon sx={{ width: 40, height: 40 }} />)
                    case 3: return (<AwayIcon sx={{ width: 40, height: 40 }} />)
                    case 4: return (<OffIcon sx={{ width: 40, height: 40 }} />)
                }
            } else {
                switch (props.data.afternoon) {
                    case 0: return (<AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />);
                    case 1: return (<OfficeIcon sx={{ width: 40, height: 40 }} />)
                    case 2: return (<ManWorkingIcon sx={{ width: 40, height: 40 }} />)
                    case 3: return (<AwayIcon sx={{ width: 40, height: 40 }} />)
                    case 4: return (<OffIcon sx={{ width: 40, height: 40 }} />)
                }
            }
        } else {
            switch (props.data.morning) {
                case 0: return (<AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />);
                case 1: return (<OfficeIcon sx={{ width: 40, height: 40 }} />)
                case 2: return (<ManWorkingIcon sx={{ width: 40, height: 40 }} />)
                case 3: return (<AwayIcon sx={{ width: 40, height: 40 }} />)
                case 4: return (<OffIcon sx={{ width: 40, height: 40 }} />)
            }
        }
    }

    const getTextColor = () => {
        if (props.order === 0) {
            switch (props.data.morning) {
                case 0: return "#d32f2f";
                case 1: return "#008946"
                case 2: return "#0070C0"
                case 3: return "#7030A0"
                case 4: return "#FFA800"
            }
        } else {
            switch (props.data.afternoon) {
                case 0: return "#d32f2f";
                case 1: return "#008946"
                case 2: return "#0070C0"
                case 3: return "#7030A0"
                case 4: return "#FFA800"
            }
        }
    }

    const getBgColor = () => {
        if (props.order === 0) {
            switch (props.data.morning) {
                case 0: return "#D3D3D3";
                case 1: return "#C3E4B6"
                case 2: return "#DAEFFA"
                case 3: return "#E6DCF1"
                case 4: return "#FBE7B4"
            }
        } else {
            switch (props.data.afternoon) {
                case 0: return "#D3D3D3";
                case 1: return "#C3E4B6"
                case 2: return "#DAEFFA"
                case 3: return "#E6DCF1"
                case 4: return "#FBE7B4"
            }
        }
    }

    const getText = () => {
        if (props.order === 0) {
            switch (props.data.morning) {
                case 0: return props.data.past ? t('app:statuses:undeclared') : t('app:statuses:to_be_defined');
                case 1: return t('app:statuses:office')
                case 2: return t('app:statuses:home_working')
                case 3: return t('app:statuses:on_the_go')
                case 4: return t('app:statuses:off')
            }
        } else {
            switch (props.data.afternoon) {
                case 0: return props.data.past ? t('app:statuses:undeclared') : t('app:statuses:to_be_defined');
                case 1: return t('app:statuses:office')
                case 2: return t('app:statuses:home_working')
                case 3: return t('app:statuses:on_the_go')
                case 4: return t('app:statuses:off')
            }
        }
    }

    const shouldDisplayOption = (choice) => {
        if (half) {
            if (props.order === 0) {
                if (choice === props.data.morning) {
                    return 'none';
                } else {
                    return 'flex';
                }
            } else {
                if (choice === props.data.afternoon) {
                    return 'none';
                } else {
                    return 'flex';
                }
            }
        } else {
            if (choice === props.data.morning) {
                return 'none';
            } else {
                return 'flex';
            }
        }
    }


    const [available, setAvailable] = useState(true);
    useEffect(() => {
        async function isSeatAvailable() {
            //let when = 2;
            //if (props.half) { when = props.order }
            //console.log(props.order)
            const res = await OfficeService.isSeatAvailable(props.data.day, props.data.morning);
            setAvailable(res.data.available)
        }
        isSeatAvailable();
    }, [props.data.day])


    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Button disableRipple={true} style={{
                textTransform: 'none',
                backgroundColor: props.data.current ? getActiveBGColor() : '',
                cursor: !props.data.past ? 'pointer' : 'default',
                flex: 1,
                width: '100%'
            }} id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography textAlign={"center"} fontSize={10} style={{ color: props.half ? '#b4b4b4' : 'transparent' }}>{props.half ? props.order === 0 ? t('generic:morning') : t('generic:afternoon') : 'UNDEFINED'}</Typography>
                    </Grid>
                    <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                        <Avatar sx={{ width: 65, height: 65 }}
                            style={{
                                border: props.data.current ? `3px solid ${getTextColor()}` : 'none',
                                backgroundColor: props.data.past ? '#D3D3D3' : getBgColor()
                            }}>
                            {getIcon()}
                        </Avatar>
                    </Grid>
                    <Grid item xs={12} my={2} mb={1} style={{ width: '100%' }}>
                        <Typography textAlign={"center"}
                            style={{ color: props.data.past ? '#D3D3D3' : getTextColor(), width: '100%' }}
                            fontSize={props.half ? props.data.current ? 16 : 14 : props.data.current ? 18 : 16}
                            fontWeight={props.data.current ? 600 : 500}>{getText()}</Typography>
                    </Grid>
                </Grid>
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
                <MenuItem key={-1} disableRipple={true} disableTouchRipple style={{ backgroundColor: 'transparent', cursor: 'default' }}>
                    <ListItemText primaryTypographyProps={{ fontSize: 12 }}>{t('generic:half')}</ListItemText>
                    <Switch aria-label={'Switch half days'} checked={half} onChange={handleChange} value={half} />
                </MenuItem>

                <MenuItem key={0} style={{ display: shouldDisplayOption(0) }} onClick={() => modifyChoice(0)}>
                    <ListItemIcon>
                        <ToDefineIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                </MenuItem>

                <HtmlTooltip
                    title={available ? "" :
                        <Container maxWidth={false} disableGutters={true} >
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography fontWeight="bold" fontSize={14} color="#6A6968"> {t('app:dashboard:desk.no_remaining_seat')}</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    }
                    followCursor
                >
                    <div>
                        <MenuItem key={1} style={{ display: shouldDisplayOption(1) }} onClick={() => modifyChoice(1)} disabled={!available}>
                            <ListItemIcon>
                                <OfficeIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:office')}</ListItemText>
                        </MenuItem>
                    </div>
                </HtmlTooltip>

                <MenuItem key={2} style={{ display: shouldDisplayOption(2) }} onClick={() => modifyChoice(2)}>
                    <ListItemIcon>
                        <ManWorkingIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                </MenuItem>

                <MenuItem key={3} style={{ display: shouldDisplayOption(3) }} onClick={() => modifyChoice(3)}>
                    <ListItemIcon>
                        <AwayIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                </MenuItem>

                <MenuItem key={4} style={{ display: shouldDisplayOption(4) }} onClick={() => modifyChoice(4)}>
                    <ListItemIcon>
                        <OffIcon />
                    </ListItemIcon>
                    <ListItemText>{t('app:statuses:off')}</ListItemText>
                </MenuItem>

            </Menu >
        </div >
    )
}

export default PlanningButton;