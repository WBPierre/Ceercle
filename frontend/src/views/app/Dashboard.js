import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import CreateIcon from '@mui/icons-material/Create';
import Button from "@mui/material/Button";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';
import PlanningElement from "../../components/containers/app/dashboard/PlanningElement";
import {Divider} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Office from "../../components/containers/app/dashboard/Office";
import Container from "@mui/material/Container";
import Team from "../../components/containers/app/dashboard/Team";
import Favorites from "../../components/containers/app/dashboard/Favorites";
import CustomContainer from "../../components/containers/app/CustomContainer";
import Fade from 'react-reveal/Fade';
import {useState} from "react";

export default function Dashboard(props) {

    const animationDuration = 500;
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const [anim, setAnim] = useState(true);
    const [index, setIndex] = useState(1);
    const [orientation, setOrientation] = useState(true);

    // TO DELETE
    const [dayNumber, setDayNumber] = useState(13);
    const [current, setCurrent] = useState(true);
    const [past, setPast] = useState(false);

    const [position1, setPosition1] = useState("office");
    const [position2, setPosition2] = useState("remote");
    const [position3, setPosition3] = useState("office");
    const [position4, setPosition4] = useState("move");
    const [position5, setPosition5] = useState("move");
    const [position6, setPosition6] = useState("remote");
    const [position7, setPosition7] = useState("remote");
    const [position8, setPosition8] = useState("office");
    const [position9, setPosition9] = useState("office");
    const [position10, setPosition10] = useState("move");
    const [position11, setPosition11] = useState("");
    const [position12, setPosition12] = useState("");
    const [position13, setPosition13] = useState("office");
    const [position14, setPosition14] = useState("office");
    const [position15, setPosition15] = useState("office");

    const handlePrevious = () => {
        if(index-1 === 1){
            setCurrent(true);
        }else{
            setCurrent(false)
        }
        if(index-1 < 1){
            setPast(true);
        }
        setDayNumber(dayNumber-7);
        setOrientation(true);
        setAnim(!anim);
        setIndex(index-1);
        setTimeout(() => {
            setAnim(true)
        }, animationDuration)
    }

    const handleNext = () => {
        if(index+1 === 1){
            setCurrent(true);
        }else{
            setCurrent(false)
        }
        if(index+1 >= 1){
            setPast(false);
        }
        setDayNumber(dayNumber+7);
        setOrientation(false);
        setAnim(!anim);
        setIndex(index+1);
        setTimeout(() => {
            setAnim(true)
        }, animationDuration)
    }

    return (
        <CustomContainer>
            <Grid wrap={"nowrap"} container direction={"column"} spacing={2} marginTop={"1%"}>
                <Grid item>
                    <Paper elevation={4} square style={{borderRadius:'25px', minHeight:'40vh'}}>
                        <Grid container direction={"column"} spacing={2} justifyContent={"center"} alignItems={"center"} paddingBottom={"2%"}>
                            <Grid item xs={12}>
                                <Button variant="text" endIcon={<CreateIcon style={{fontSize: 28, color:'grey'}}/>} disableRipple={true} style={{backgroundColor:'transparent', textTransform: 'none', fontSize: 28, color:'black'}}>
                                    Mon planning
                                </Button>
                            </Grid>
                            <Grid item xs={12} style={{width:'100%'}}>
                                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                                    <Grid item xs={1} textAlign={"right"} style={{zIndex:2}}>
                                        <IconButton disabled={index === 0} onClick={() => handlePrevious()} aria-label="previous" size={"large"}>
                                            <ChevronLeftIcon fontSize={"large"}/>
                                        </IconButton>
                                    </Grid>


                                    <Grid item xs={10} style={{zIndex:1}}>
                                        <div style={{width:'100%'}}>

                                        <Fade left={orientation} right={!orientation} spy={index} when={anim} duration={animationDuration} opposite distance={"10%"} cascade>
                                            <Grid container direction={"row"} justifyContent={"space-evenly"}>
                                                <Grid item>
                                                    <PlanningElement modify={index === 0 ? (x) => setPosition1(x) : index === 1 ? (x) => setPosition6(x) : (x) => setPosition11(x)} from={index === 0 ? position1 : index === 1 ? position6 : position11} day={"Lun."} dayNumber={dayNumber} current={current} past={past}/>
                                                </Grid>
                                                <Grid item>
                                                    <PlanningElement modify={index === 0 ? (x) => setPosition2(x) : index === 1 ? (x) => setPosition7(x) : (x) => setPosition12(x)} from={index === 0 ? position2 : index === 1 ? position7 : position12} day={"Mar."} dayNumber={dayNumber+1} current={false} past={past}/>
                                                </Grid>
                                                <Grid item>
                                                    <PlanningElement modify={index === 0 ? (x) => setPosition3(x) : index === 1 ? (x) => setPosition8(x) : (x) => setPosition13(x)} from={index === 0 ? position3 : index === 1 ? position8 : position13} day={"Mer."} dayNumber={dayNumber+2} current={false} past={past}/>
                                                </Grid>
                                                <Grid item>
                                                    <PlanningElement modify={index === 0 ? (x) => setPosition4(x) : index === 1 ? (x) => setPosition9(x) : (x) => setPosition14(x)} from={index === 0 ? position4 : index === 1 ? position9 : position14} day={"Jeu."} dayNumber={dayNumber+3} current={false} past={past}/>
                                                </Grid>
                                                <Grid item>
                                                    <PlanningElement modify={index === 0 ? (x) => setPosition5(x) : index === 1 ? (x) => setPosition10(x) : (x) => setPosition15(x)} from={index === 0 ? position5 : index === 1 ? position10 : position15} day={"Ven."} dayNumber={dayNumber+4} current={false} past={past}/>
                                                </Grid>
                                            </Grid>
                                        </Fade>
                                        </div>
                                    </Grid>
                                    <Grid item xs={1} textAlign={"left"} style={{zIndex:2}}>
                                        <IconButton onClick={()=>handleNext()} disabled={index === 2} aria-label="previous" size={"large"}>
                                            <ChevronRightIcon fontSize={"large"}/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} mb={2}>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs={4}>
                            <Divider/>
                        </Grid>
                        <Grid item xs={4} textAlign={"center"}>
                            <Button variant="text" endIcon={<ExpandMoreIcon />}>
                                Aujourd'hui
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Divider/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"row"} spacing={3}>
                        <Grid item xs={12} md={4} mt={2}>
                            <Office/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Team/>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Favorites/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CustomContainer>

    );
}
