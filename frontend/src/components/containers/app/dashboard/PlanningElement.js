import {Avatar, ListItemIcon, ListItemText, Menu, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import PlaneTakeOffIcon from "../../../molecules/icons/PlaneTakeOffIcon";
import {useTheme} from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {useState} from "react";
import {ContentPaste} from "@mui/icons-material";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import moment from "moment";

function PlanningElement(props) {

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
                <div>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: !props.past ? '' : 'transparent',
                        cursor: !props.past ? 'pointer' : 'default'
                    }} id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1} alignItems={"center"}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{color: props.current ? '#95E59A' : '#d32f2f'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{color: props.current ? '#95E59A' : '#2F5597'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar sx={{width: 75, height: 75}}
                                        style={{
                                            border: props.current ? '3px solid #95E59A' : 'none',
                                            backgroundColor: props.past ? '#D3D3D3' : props.current ? '#C3E4B6' : '#C3E4B6'
                                        }}>
                                    <OfficeIcon sx={{width: 50, height: 50}}/>
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography textAlign={"center"}
                                            style={{color: props.past ? '#D3D3D3' : props.current ? '#95E59A' : '#60b56d'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>Bureau</Typography>
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
                                <ToDefineIcon/>
                            </ListItemIcon>
                            <ListItemText>A définir</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon/>
                            </ListItemIcon>
                            <ListItemText>Au bureau</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon/>
                            </ListItemIcon>
                            <ListItemText>Télétravail</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <PlaneTakeOffIcon/>
                            </ListItemIcon>
                            <ListItemText>Déplacement</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            );
        case 2:
            return (
                <div>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: !props.past ? '' : 'transparent',
                        cursor: !props.past ? 'pointer' : 'default'
                    }} id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1} alignItems={"center"}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{color: props.current ? '#8BCCEE' : '#d32f2f'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{color: props.current ? '#8BCCEE' : '#2F5597'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar sx={{width: 75, height: 75}}
                                        style={{
                                            border: props.current ? '3px solid #8BCCEE' : 'none',
                                            backgroundColor: props.past ? '#D3D3D3' : props.current ? '#DAEFFA' : '#DAEFFA'
                                        }}>
                                    <ManWorkingIcon sx={{width: 50, height: 50}}/>
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography textAlign={"center"}
                                            style={{color: props.past ? '#D3D3D3' : props.current ? '#8BCCEE' : '#2F5597'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>Télétravail</Typography>
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
                                <ToDefineIcon/>
                            </ListItemIcon>
                            <ListItemText>A définir</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon/>
                            </ListItemIcon>
                            <ListItemText>Au bureau</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon/>
                            </ListItemIcon>
                            <ListItemText>Télétravail</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <PlaneTakeOffIcon/>
                            </ListItemIcon>
                            <ListItemText>Déplacement</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            );
        case 3:
            return (
                <div>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: !props.past ? '' : 'transparent',
                        cursor: !props.past ? 'pointer' : 'default'
                    }} id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1} alignItems={"center"}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{color: props.current ? '#C7B3DA' : '#d32f2f'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{color: props.current ? '#C7B3DA' : '#2F5597'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar sx={{width: 75, height: 75}}
                                        style={{
                                            border: props.current ? '3px solid #C7B3DA' : 'none',
                                            backgroundColor: props.past ? '#D3D3D3' : '#E6DCF1'
                                        }}>
                                    <PlaneTakeOffIcon sx={{width: 50, height: 50}}/>
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography textAlign={"center"}
                                            style={{color: props.past ? '#D3D3D3' : props.current ? '#C7B3DA' : '#9872B2'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>Déplacement</Typography>
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
                                <ToDefineIcon/>
                            </ListItemIcon>
                            <ListItemText>A définir</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(1)}>
                            <ListItemIcon>
                                <OfficeIcon/>
                            </ListItemIcon>
                            <ListItemText>Au bureau</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon/>
                            </ListItemIcon>
                            <ListItemText>Télétravail</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <PlaneTakeOffIcon/>
                            </ListItemIcon>
                            <ListItemText>Déplacement</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            )
        default:
            return (
                <div>
                    <Button disableRipple={true} style={{
                        textTransform: 'none',
                        backgroundColor: !props.past ? '' : 'transparent',
                        cursor: !props.past ? 'pointer' : 'default'
                    }} id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                        <Grid container direction={"column"} spacing={1} alignItems={"center"}>
                            <Grid item xs={12}>
                                <Typography textAlign={"center"} style={{color: props.current ? '#d32f2f' : '#d32f2f'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{props.day}</Typography>
                                <Typography textAlign={"center"} style={{color: props.current ? '#2F5597' : '#2F5597'}}
                                            fontSize={props.current ? 24 : 22}
                                            fontWeight={props.current ? 600 : 500}>{moment(props.date, 'YYYY-MM-DD').date()}</Typography>
                            </Grid>
                            <Grid item>
                                <Avatar sx={{width: 75, height: 75}}
                                        style={{
                                            border: props.current ? '3px solid #d32f2f' : 'none',
                                            backgroundColor: props.past ? '#D3D3D3' : '#D3D3D3'
                                        }}>
                                    <PlaneTakeOffIcon sx={{width: 50, height: 50, display: 'none'}}/>
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Typography textAlign={"center"}
                                            style={{color: props.past ? '#D3D3D3' : props.current ? '#d32f2f' : '#d32f2f'}}
                                            fontSize={props.current ? 24 : 22} fontWeight={props.current ? 600 : 500}>{props.past ? 'Non déclaré' : 'A définir'}</Typography>
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
                                <OfficeIcon/>
                            </ListItemIcon>
                            <ListItemText>Au bureau</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(2)}>
                            <ListItemIcon>
                                <ManWorkingIcon/>
                            </ListItemIcon>
                            <ListItemText>Télétravail</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={() => modifyChoice(3)}>
                            <ListItemIcon>
                                <PlaneTakeOffIcon/>
                            </ListItemIcon>
                            <ListItemText>Déplacement</ListItemText>
                        </MenuItem>
                    </Menu>
                </div>
            )
    }
}

export default PlanningElement;