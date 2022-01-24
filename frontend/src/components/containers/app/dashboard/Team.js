import {Avatar, AvatarGroup, Menu, Paper} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import example1 from "../../../../assets/images/example/1.jpg";
import example2 from "../../../../assets/images/example/2.jpg";
import example3 from "../../../../assets/images/example/3.jpg";
import example4 from "../../../../assets/images/example/4.jpg";
import example5 from "../../../../assets/images/example/5.jpg";
import AddIcon from '@mui/icons-material/Add';
import OfficeIcon from "../../../molecules/icons/OfficeIcon";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaperIcon from "../../../molecules/icons/PaperIcon";
import ManWorkingIcon from "../../../molecules/icons/ManWorkingIcon";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import TimeService from "../../../../services/app/time.service";
import AwayIcon from "../../../molecules/icons/AwayIcon";
import OffIcon from "../../../molecules/icons/OffIcon";
import ToDefineIcon from "../../../molecules/icons/ToDefineIcon";
import ProfileDefault from "../../../../assets/images/example/default.png";
import MenuItem from "@mui/material/MenuItem";


function Team(props) {

    const [team, setTeam] =  useState(null);
    const [anchorEl0, setAnchorEl0] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const [anchorEl4, setAnchorEl4] = React.useState(null);
    const [anchorEl5, setAnchorEl5] = React.useState(null);
    const open0 = Boolean(anchorEl0);
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);
    const open4 = Boolean(anchorEl4);
    const open5 = Boolean(anchorEl5);
    const handleClick0 = (event) => {
        setAnchorEl0(event.currentTarget);
    };
    const handleClose0 = () => {
        setAnchorEl0(null);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };
    const handleClick3 = (event) => {
        setAnchorEl3(event.currentTarget);
    };
    const handleClose3 = () => {
        setAnchorEl3(null);
    };
    const handleClick4 = (event) => {
        setAnchorEl4(event.currentTarget);
    };
    const handleClose4 = () => {
        setAnchorEl4(null);
    };
    const handleClick5 = (event) => {
        setAnchorEl5(event.currentTarget);
    };
    const handleClose5 = () => {
        setAnchorEl5(null);
    };


    useEffect(() => {
        async function getTeamTimeSheet() {
            await TimeService.getTeamTimeSheet(props.day).then((res) => {
                console.log(res.data);
                setTeam(res.data);
            })
        }
        getTeamTimeSheet();
    }, [])

    let navigate = useNavigate();
    if(team === null){
        return (<Grid/>)
    }
    return (
        <Grid container direction={"column"} spacing={2} py={2} px={2}>
            <Grid item xs={12}>
                <Grid container direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Grid item>
                        <Typography variant={"h5"} fontWeight={500}>
                            Mon équipe
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant={"text"} onClick={() => navigate('/app/calendar')} style={{ backgroundColor: 'transparent', color: "#3B3838" }}>Accéder</Button>
                    </Grid>
                </Grid>
            </Grid>
            {team[1].length > 0 &&
                <Grid item xs={12}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12}>
                            <Button
                                aria-controls={open1 ? 'basic-menu1' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open1 ? 'true' : undefined}
                                onClick={handleClick1}
                                id="basic-button1"
                                    variant="text" style={{ backgroundColor: 'transparent', color: '#008946', fontSize: 16, textTransform: 'none' }} startIcon={<OfficeIcon sx={{ width: 28, height: 28, backgroundColor: '#95E59A' }} />} endIcon={<ExpandMoreIcon style={{ color: '#7F7F7F' }} />}>Bureau ({team[1].length}/{team[0].length+team[1].length+team[2].length+team[3].length+team[4].length})</Button>
                            <Menu
                                id="basic-menu1"
                                anchorEl={anchorEl1}
                                open={open1}
                                onClose={handleClose1}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button1',
                                }}
                                PaperProps={{
                                    elevation: 2
                                }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <div>
                                    {team[1].map((item) => {
                                        return(
                                            <MenuItem onClick={handleClose1} style={{marginLeft: 5}}>
                                                <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                                {`${item.firstName} ${item.lastName}`}
                                            </MenuItem>
                                        )
                                    })}
                                </div>
                            </Menu>
                        </Grid>
                        <Grid item xs={12} paddingLeft={2}>
                            <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                                {team[1].map((e, index) => {
                                        if(index < 3){
                                            return(
                                                <Grid item>
                                                    <Avatar alt="Remy Sharp" src={e.profilePicturePath === null ? ProfileDefault : e.profilePicturePath} sx={{width: 24, height: 24}}/>
                                                </Grid>
                                            )
                                        }
                                    }
                                )}
                                {team[1].length > 3 && (
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} style={{backgroundColor:'transparent', color:'#7F7F7F', fontSize:12}}>
                                            +{team[1].length-3}
                                        </Avatar>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {team[2].length > 0 &&
                <Grid item xs={12}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12}>
                            <Button aria-controls={open2 ? 'basic-menu2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open2 ? 'true' : undefined}
                                    onClick={handleClick2}
                                    id="basic-button2" variant="text" style={{ backgroundColor: 'transparent', color: '#0070C0', fontSize: 16, textTransform: 'none' }} startIcon={<ManWorkingIcon sx={{ width: 28, height: 28, backgroundColor: '#8BCCEE' }} />} endIcon={<ExpandMoreIcon style={{ color: '#7F7F7F' }} />}>Télétravail ({team[2].length}/{team[0].length+team[1].length+team[2].length+team[3].length+team[4].length})</Button>
                            <Menu
                                id="basic-menu2"
                                anchorEl={anchorEl2}
                                open={open2}
                                onClose={handleClose2}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button2',
                                }}
                                PaperProps={{
                                    elevation: 2
                                }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <div>
                                    {team[2].map((item) => {
                                        return(
                                            <MenuItem onClick={handleClose2} style={{marginLeft: 5}}>
                                                <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                                {`${item.firstName} ${item.lastName}`}
                                            </MenuItem>
                                        )
                                    })}
                                </div>
                            </Menu>
                        </Grid>
                        <Grid item xs={12} paddingLeft={2}>
                            <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                                {team[2].map((e, index) => {
                                        if(index < 3){
                                            return(
                                                <Grid item>
                                                    <Avatar alt="Remy Sharp" src={e.profilePicturePath === null ? ProfileDefault : e.profilePicturePath} sx={{width: 24, height: 24}}/>
                                                </Grid>
                                            )
                                        }
                                    }
                                )}
                                {team[2].length > 3 && (
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} style={{backgroundColor:'transparent', color:'#7F7F7F', fontSize:12}}>
                                            +{team[2].length-3}
                                        </Avatar>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {(team[1].length === 0 || team[2].length === 0) && team[3].length > 0 &&
                <Grid item xs={12}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12}>
                            <Button aria-controls={open3 ? 'basic-menu3' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open3 ? 'true' : undefined}
                                    onClick={handleClick3}
                                    id="basic-button3" variant="text" style={{ backgroundColor: 'transparent', color: '#0070C0', fontSize: 16, textTransform: 'none' }} startIcon={<AwayIcon sx={{ width: 28, height: 28, backgroundColor: '#E6DCF1' }} />} endIcon={<ExpandMoreIcon style={{ color: '#7F7F7F' }} />}>Déplacement ({team[3].length}/{team[0].length+team[1].length+team[2].length+team[3].length+team[4].length})</Button>
                            <Menu
                                id="basic-menu3"
                                anchorEl={anchorEl3}
                                open={open3}
                                onClose={handleClose3}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button3',
                                }}
                                PaperProps={{
                                    elevation: 2
                                }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <div>
                                    {team[3].map((item) => {
                                        return(
                                            <MenuItem onClick={handleClose3} style={{marginLeft: 5}}>
                                                <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                                {`${item.firstName} ${item.lastName}`}
                                            </MenuItem>
                                        )
                                    })}
                                </div>
                            </Menu>
                        </Grid>
                        <Grid item xs={12} paddingLeft={2}>
                            <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                                {team[3].map((e, index) => {
                                        if(index < 3){
                                            return(
                                                <Grid item>
                                                    <Avatar alt="Remy Sharp" src={e.profilePicturePath === null ? ProfileDefault : e.profilePicturePath} sx={{width: 24, height: 24}}/>
                                                </Grid>
                                            )
                                        }
                                    }
                                )}
                                {team[3].length > 3 && (
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} style={{backgroundColor:'transparent', color:'#7F7F7F', fontSize:12}}>
                                            +{team[3].length-3}
                                        </Avatar>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {((team[1].length === 0 && team[2].length === 0) || (team[1].length === 0 && team[3].length === 0) || (team[2].length === 0 && team[3].length === 0)) && team[4].length > 0 &&
                <Grid item xs={12}>
                    <Grid container direction={"column"}>
                        <Grid item xs={12}>
                            <Button
                                aria-controls={open4 ? 'basic-menu4' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open4 ? 'true' : undefined}
                                onClick={handleClick4}
                                id="basic-button4"
                                variant="text" style={{
                                backgroundColor: 'transparent',
                                color: '#0070C0',
                                fontSize: 16,
                                textTransform: 'none'
                            }} startIcon={<OffIcon sx={{width: 28, height: 28, backgroundColor: '#FBE7B4'}}/>}
                                    endIcon={<ExpandMoreIcon style={{color: '#7F7F7F'}}/>}>Off ({team[4].length}/{team[0].length+team[1].length+team[2].length+team[3].length+team[4].length})</Button>
                            <Menu
                                id="basic-menu4"
                                anchorEl={anchorEl4}
                                open={open4}
                                onClose={handleClose4}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button4',
                                }}
                                PaperProps={{
                                    elevation: 2
                                }}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                            >
                                <div>
                                    {team[4].map((item) => {
                                        return(
                                            <MenuItem onClick={handleClose4} style={{marginLeft: 5}}>
                                                <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                                {`${item.firstName} ${item.lastName}`}
                                            </MenuItem>
                                        )
                                    })}
                                </div>
                            </Menu>
                        </Grid>
                        <Grid item xs={12} paddingLeft={2}>
                            <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                                {team[4].map((e, index) => {
                                        if(index < 3){
                                            return(
                                                <Grid item>
                                                    <Avatar alt="Remy Sharp" src={e.profilePicturePath === null ? ProfileDefault : e.profilePicturePath} sx={{width: 24, height: 24}}/>
                                                </Grid>
                                            )
                                        }
                                    }
                                )}
                                {team[4].length > 3 && (
                                    <Grid item>
                                        <Avatar sx={{ width: 24, height: 24 }} style={{backgroundColor:'transparent', color:'#7F7F7F', fontSize:12}}>
                                            +{team[4].length-3}
                                        </Avatar>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {(
                (team[1].length === 0 && team[2].length === 0 && team[3].length === 0) ||
                (team[1].length === 0 && team[3].length === 0 && team[4].length === 0) ||
                (team[2].length === 0 && team[3].length === 0 && team[4].length === 0) ||
                (team[1].length === 0 && team[2].length === 0 && team[4].length === 0)
            )
            && team[0].length > 0 &&
            <Grid item xs={12}>
                <Grid container direction={"column"}>
                    <Grid item xs={12}>
                        <Button variant="text"
                                aria-controls={open0 ? 'basic-menu0' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open0 ? 'true' : undefined}
                                onClick={handleClick0}
                                id="basic-button0"
                            style={{
                            backgroundColor: 'transparent',
                            color: '#D3D3D3',
                            fontSize: 16,
                            textTransform: 'none'
                        }} startIcon={<ToDefineIcon sx={{width: 28, height: 28, backgroundColor: '#D3D3D3'}}/>}
                                endIcon={<ExpandMoreIcon style={{color: '#7F7F7F'}}/>}>Non déclaré ({team[0].length}/{team[0].length+team[1].length+team[2].length+team[3].length+team[4].length})</Button>
                        <Menu
                            id="basic-menu0"
                            anchorEl={anchorEl0}
                            open={open0}
                            onClose={handleClose0}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button0',
                            }}
                            PaperProps={{
                                elevation: 2
                            }}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <div>
                                {team[0].map((item) => {
                                    return(
                                        <MenuItem onClick={handleClose0} style={{marginLeft: 5}}>
                                            <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                            {`${item.firstName} ${item.lastName}`}
                                        </MenuItem>
                                    )
                                })}
                            </div>
                        </Menu>
                    </Grid>
                    <Grid item xs={12} paddingLeft={2}>
                        <Grid container direction={"row"} alignItems={"center"} spacing={2}>
                            {team[0].map((e, index) => {
                                if(index < 3){
                                    return(
                                        <Grid item>
                                            <Avatar alt="Remy Sharp" src={e.profilePicturePath === null ? ProfileDefault : e.profilePicturePath} sx={{width: 24, height: 24}}/>
                                        </Grid>
                                    )
                                }
                            }
                            )}
                            {team[0].length > 3 && (
                                <Grid item>
                                    <Avatar sx={{ width: 24, height: 24 }} style={{backgroundColor:'transparent', color:'#7F7F7F', fontSize:12}}>
                                        +{team[0].length-3}
                                    </Avatar>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            }
            <Grid item xs={12}>
                <Button aria-controls={open5 ? 'basic-menu5' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open5 ? 'true' : undefined}
                        onClick={handleClick5}
                        id="basic-button5"
                        variant="text" style={{ backgroundColor: 'transparent', color: 'black', fontSize: 16, textTransform: 'none' }} startIcon={<PaperIcon sx={{ width: 24, height: 24 }} />} endIcon={<ExpandMoreIcon />}>
                    Tout afficher
                </Button>
                <Menu
                    id="basic-menu5"
                    anchorEl={anchorEl5}
                    open={open5}
                    onClose={handleClose5}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button5',
                    }}
                    PaperProps={{
                        elevation: 2
                    }}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {team[1].length > 0 &&
                    <div>
                        <MenuItem onClick={handleClose5} disableTouchRipple style={{color:'#008946', cursor:'default', backgroundColor:'transparent'}}>
                            <OfficeIcon sx={{width: 28, height: 28, marginRight:2, backgroundColor: '#C3E4B6'}}/> <span style={{color:'#008946', fontWeight:500}}>Au bureau</span>
                        </MenuItem>
                        {team[1].map((item) => {
                            return(
                                <MenuItem onClick={handleClose5} style={{marginLeft: 5}}>
                                    <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                    {`${item.firstName} ${item.lastName}`}
                                </MenuItem>
                            )
                        })}
                    </div>
                    }
                    {team[2].length > 0 &&
                    <div>
                        <MenuItem onClick={handleClose5} disableTouchRipple style={{color:'#0070C0', cursor:'default', backgroundColor:'transparent'}}>
                            <ManWorkingIcon sx={{width: 28, height: 28, marginRight:2, backgroundColor: '#DAEFFA'}}/> <span style={{color:'##0070C0', fontWeight:500}}>Télétravail</span>
                        </MenuItem>
                        {team[2].map((item) => {
                            return(
                                <MenuItem onClick={handleClose5} style={{marginLeft: 5}}>
                                    <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                    {`${item.firstName} ${item.lastName}`}
                                </MenuItem>
                            )
                        })}
                    </div>
                    }
                    {team[3].length > 0 &&
                    <div>
                        <MenuItem onClick={handleClose5} disableTouchRipple disabled style={{color:'#7030A0', cursor:'default', backgroundColor:'transparent'}}>
                            <AwayIcon sx={{width: 28, height: 28, marginRight:2, backgroundColor: '#E6DCF1'}}/> <span style={{color:'#7030A0', fontWeight:500}}>Déplacement</span>
                        </MenuItem>
                        {team[3].map((item) => {
                            return(
                                <MenuItem onClick={handleClose5} style={{marginLeft: 5}}>
                                    <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                    {`${item.firstName} ${item.lastName}`}
                                </MenuItem>
                            )
                        })}
                    </div>
                    }
                    {team[4].length > 0 &&
                    <div>
                        <MenuItem onClick={handleClose5} disableTouchRipple style={{color:'#FFA800', cursor:'default', backgroundColor:'transparent'}}>
                            <OffIcon sx={{width: 28, height: 28, marginRight:2, backgroundColor: '#FBE7B4'}}/> <span style={{color:'#FFA800', fontWeight:500}}>Off</span>
                        </MenuItem>
                        {team[4].map((item) => {
                            return(
                                <MenuItem onClick={handleClose5} style={{marginLeft: 5}}>
                                    <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                                    {`${item.firstName} ${item.lastName}`}
                                </MenuItem>
                            )
                        })}
                    </div>
                    }
                    {team[0].length > 0 &&
                        <div>
                            <MenuItem onClick={handleClose5} disableTouchRipple style={{cursor:'default', backgroundColor:'transparent'}}>
                                <ToDefineIcon sx={{width: 28, height: 28, marginRight:2, backgroundColor: '#D3D3D3'}}/> <span style={{color:'#D3D3D3', fontWeight:500}}>Non déclaré</span>
                            </MenuItem>
                            {team[0].map((item) => {
                                return(
                                <MenuItem onClick={handleClose5} style={{marginLeft: 5}}>
                                <Avatar sx={{ width: 24, height: 24, marginRight:2 }} alt={item.fullName} src={item.profilePicturePath === null ? ProfileDefault : item.profilePicturePath} />
                            {`${item.firstName} ${item.lastName}`}
                                </MenuItem>
                                )
                            })}
                        </div>
                    }
                </Menu>
            </Grid>
        </Grid>
    )
}

export default Team;