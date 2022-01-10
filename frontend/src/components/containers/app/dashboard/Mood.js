import {Avatar, AvatarGroup, Paper} from "@mui/material";
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
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "../../../molecules/icons/GoogleIcon";
import SunIcon from "../../../molecules/icons/SunIcon";
import SunBehindCloudIcon from "../../../molecules/icons/SunBehindCloudIcon";
import SunBehindCloudRainIcon from "../../../molecules/icons/SunBehindCloudRainIcon";
import CloudWithRainIcon from "../../../molecules/icons/CloudWithRainIcon";
import {useEffect, useState} from "react";
import MoodService from "../../../../services/app/mood.service";

function Mood(props){

    const [mood, setMood] = useState(null);

    useEffect(() => {
        async function getMood(){
            const res = await MoodService.getMood(props.day);
            setMood(res.data);
        }
        getMood();
    }, []);

    const updateMood = async (type) => {
        const resources = {
            day: props.day,
            type: type
        }
        await MoodService.setMood(resources);
        await MoodService.getMood(props.day).then((res) =>{
            setMood(res.data);
        });
    }



    return(
            <Grid container direction={"column"} spacing={2} py={2} px={2}>
                <Grid item xs={12}>
                    <Typography variant={"h5"} fontWeight={500}>
                        Mon Moral
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container direction={"column"} py={2} spacing={4}>
                        <Grid item xs={12}>
                            <Typography fontWeight={400}>
                                Renseigner votre moral de la journée à votre manager :
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                                <Grid item>
                                    <IconButton sx={{mr:2}} onClick={() => updateMood(0)} style={{border:mood !== null && mood.type === 0 ? '1px solid #2F5597': 'none'}}>
                                        <SunIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton sx={{mr:2}} onClick={() => updateMood(1)} style={{border:mood !== null && mood.type === 1 ? '1px solid #2F5597': 'none'}}>
                                        <SunBehindCloudIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton sx={{mr:2}} onClick={() => updateMood(2)} style={{border:mood !== null && mood.type === 2 ? '1px solid #2F5597': 'none'}}>
                                        <SunBehindCloudRainIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton sx={{mr:2}} onClick={() => updateMood(3)} style={{border:mood !== null && mood.type === 3 ? '1px solid #2F5597': 'none'}}>
                                        <CloudWithRainIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Votre moral est au beau fixe !</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default Mood;