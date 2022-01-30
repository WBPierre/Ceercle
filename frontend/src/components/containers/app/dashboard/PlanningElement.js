import { Avatar, ListItemIcon, ListItemText, Menu, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import moment from "moment";
import { useTranslation } from "react-i18next";
import OffIcon from "../../../molecules/icons/OffIcon";

function PlanningElement(props) {

    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        if (!props.past) {
            setAnchorEl(event.currentTarget);
        }
    };

    const modifyChoice = (name) => {
        props.modify(props.date, name)
        handleClose();
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    switch (props.from) {
        case 1:
            return (
                <div style={{ width: '100%', height: '100%' }}>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: props.current ? '#F7FEF5' : '',
                        cursor: !props.past ? 'pointer' : 'default',
                        width: '100%', height: '100%'
                    }} id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#008946' : '#C00000' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#008946' : '#002060' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar sx={{ width: 65, height: 65 }}
                                    style={{
                                        border: props.current ? '3px solid #60b56d' : 'none',
                                        backgroundColor: props.past ? '#D3D3D3' : props.current ? '#C3E4B6' : '#C3E4B6'
                                    }}>
                                    <OfficeIcon sx={{ width: 40, height: 40 }} />
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} my={2} />
                            <Grid item xs={12} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <Typography textAlign={"center"}
                                    style={{ color: props.past ? '#D3D3D3' : props.current ? '#008946' : '#008946', width: '100%' }}
                                    fontSize={props.current ? 18 : 16}
                                    fontWeight={props.current ? 600 : 500}>{t('app:statuses:office')}</Typography>
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
                        <MenuItem onClick={() => modifyChoice(0)}>
                            <ListItemIcon>
                                <ToDefineIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <AwayIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(4)}>
                            <ListItemIcon>
                                <OffIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:off')}</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            );
        case 2:
            return (
                <div style={{ width: '100%', height: '100%' }}>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: props.current ? '#F3F7FE' : '',
                        cursor: !props.past ? 'pointer' : 'default',
                        width: '100%', height: '100%'
                    }} id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#0070C0' : '#C00000' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#0070C0' : '#002060' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar sx={{ width: 65, height: 65 }}
                                    style={{
                                        border: props.current ? '3px solid #0070C0' : 'none',
                                        backgroundColor: props.past ? '#D3D3D3' : props.current ? '#DAEFFA' : '#DAEFFA'
                                    }}>
                                    <ManWorkingIcon sx={{ width: 40, height: 40 }} />
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} my={2} />
                            <Grid item xs={12} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <Typography textAlign={"center"}
                                    style={{ color: props.past ? '#D3D3D3' : props.current ? '#0070C0' : '#0070C0', width: '100%' }}
                                    fontSize={props.current ? 18 : 16}
                                    fontWeight={props.current ? 600 : 500}>{t('app:statuses:home_working')}</Typography>
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
                        <MenuItem onClick={() => modifyChoice(0)}>
                            <ListItemIcon>
                                <ToDefineIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:office')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <AwayIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(4)}>
                            <ListItemIcon>
                                <OffIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:off')}</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            );
        case 3:
            return (
                <div style={{ width: '100%', height: '100%' }}>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: props.current ? '#FAF6FF' : '',
                        cursor: !props.past ? 'pointer' : 'default',
                        width: '100%', height: '100%'
                    }} id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#7030A0' : '#C00000' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#7030A0' : '#002060' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar sx={{ width: 65, height: 65 }}
                                    style={{
                                        border: props.current ? '3px solid #9872B2' : 'none',
                                        backgroundColor: props.past ? '#D3D3D3' : '#E6DCF1'
                                    }}>
                                    <AwayIcon sx={{ width: 40, height: 40 }} />
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} my={2} />
                            <Grid item xs={12} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <Typography textAlign={"center"}
                                    style={{ color: props.past ? '#D3D3D3' : props.current ? '#7030A0' : '#7030A0', width: '100%' }}
                                    fontSize={props.current ? 18 : 16}
                                    fontWeight={props.current ? 600 : 500}>{t('app:statuses:on_the_go')}</Typography>
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
                        <MenuItem onClick={() => modifyChoice(0)}>
                            <ListItemIcon>
                                <ToDefineIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:office')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(4)}>
                            <ListItemIcon>
                                <OffIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:off')}</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            )
        case 4:
            return (
                <div style={{ width: '100%', height: '100%' }}>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: props.current ? '#FEFAF1' : '',
                        cursor: !props.past ? 'pointer' : 'default',
                        width: '100%', height: '100%'
                    }} id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#FFA800' : '#C00000' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#FFA800' : '#002060' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar sx={{ width: 65, height: 65 }}
                                    style={{
                                        border: props.current ? '3px solid #FFA800' : 'none',
                                        backgroundColor: props.past ? '#D3D3D3' : '#FBE7B4'
                                    }}>
                                    <OffIcon sx={{ width: 40, height: 40 }} />
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} my={2} />
                            <Grid item xs={12} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <Typography textAlign={"center"}
                                    style={{ color: props.past ? '#D3D3D3' : props.current ? '#FFA800' : '#FFA800', width: '100%' }}
                                    fontSize={props.current ? 18 : 16}
                                    fontWeight={props.current ? 600 : 500}>{t('app:statuses:off')}</Typography>
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
                        <MenuItem onClick={() => modifyChoice(0)}>
                            <ListItemIcon>
                                <ToDefineIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:to_be_defined')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:office')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <AwayIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            )
        default:
            return (
                <div style={{ width: '100%', height: '100%' }}>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: props.current ? '#F2F2F2' : '',
                        cursor: !props.past ? 'pointer' : 'default',
                        width: '100%', height: '100%'
                    }} id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#d32f2f' : '#C00000' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{ color: props.current ? '#d32f2f' : '#002060' }}
                                    fontSize={props.current ? 22 : 20}
                                    fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item style={{ display: 'flex', justifyContent: 'center' }}>
                                <Avatar sx={{ width: 65, height: 65 }}
                                    style={{
                                        border: props.current ? '3px solid #d32f2f' : 'none',
                                        backgroundColor: props.past ? '#D3D3D3' : '#D3D3D3'
                                    }}>
                                    <AwayIcon sx={{ width: 40, height: 40, display: 'none' }} />
                                </Avatar>
                            </Grid>
                            <Grid item xs={12} my={2} />
                            <Grid item xs={12} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                <Typography textAlign={"center"}
                                    style={{ color: props.past ? '#D3D3D3' : props.current ? '#d32f2f' : '#d32f2f', width: '100%' }}
                                    fontSize={props.current ? 18 : 16} fontWeight={props.current ? 600 : 500}>{props.past ? t('app:statuses:undeclared') : t('app:statuses:to_be_defined')}</Typography>
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
                        <MenuItem onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:office')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:home_working')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <AwayIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:on_the_go')}</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(4)}>
                            <ListItemIcon>
                                <OffIcon />
                            </ListItemIcon>
                            <ListItemText>{t('app:statuses:off')}</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            )
    }
}

export default PlanningElement;