import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import {useEffect, useRef, useState} from "react";
import Button from "@mui/material/Button";

function DescriptionElement(props){
    const [height, setHeight] = useState(0);
    const textRef = useRef(null);

    useEffect( () => {
        setHeight(textRef.current.clientHeight);
    }, []);

    if(props.align === "left"){
        return(
            <Grid container direction="row" my={10}>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={5} direction="column" ref={textRef}>
                        <Grid item>
                            <Typography variant="h5" fontWeight={600}>
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                {props.text}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">{props.buttonText}</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} align="center">
                    <img src={props.image} style={{maxHeight: height, width:'100%'}} alt="logo" />
                </Grid>
            </Grid>
        )
    }else{
        return(
            <Grid container direction="row">
                <Grid item xs={12} md={6} align="center">
                    <img src={props.image} style={{maxHeight: height}} alt="logo" />
                </Grid>
                <Grid item xs={12} md={6}>
                <Grid container spacing={5} direction="column" ref={textRef}>
                    <Grid item>
                        <Typography variant="h5" fontWeight={600}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">
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