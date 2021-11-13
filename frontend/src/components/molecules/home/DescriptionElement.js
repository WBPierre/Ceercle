import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import {useEffect, useRef, useState} from "react";
import Button from "@mui/material/Button";
import ObserverViewPort from "../../functions/ObserverViewPort";
import {Fade} from "@mui/material";

function DescriptionElement(props){
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);

    useEffect( () => {
        setHeight(textRef.current.clientHeight);
    }, []);

    if(props.align === "left"){
        return(
            <Grid container direction="row" my={10} spacing={5}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={5} direction="column" ref={textRef}>
                        <Grid item>
                            <Typography variant="h5" fontWeight={600}>
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" fontSize={18}>
                                {props.text}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">{props.buttonText}</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src={props.image} style={{maxHeight: height, width:'50%'}} alt="logo" />
                </Grid>
            </Grid>
        )
    }else{
        return(
            <Grid container direction="row" my={10} spacing={5}>
                <Grid item xs={12} md={6} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src={props.image} style={{maxHeight: height, width:'50%'}} alt="logo" />
                </Grid>
                <Grid item xs={12} md={6}>
                <Grid container spacing={5} direction="column" ref={textRef}>
                    <Grid item>
                        <Typography variant="h5" fontWeight={600}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" fontSize={18}>
                            {props.text}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">{props.buttonText}</Button>
                    </Grid>
                </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default DescriptionElement;