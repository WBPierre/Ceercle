import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GridModule from "../../containers/home/GridModule";
import Paper from "@mui/material/Paper";
import Essec from "../../../assets/images/footer/essec.jpg";

function SCValueElement(props){
    return(  
            <Grid item xs={12} md={3} align="center">
                <Grid container direction="column" >
                    <Grid item>
                        <img src={props.image} alt="value image" style={{height: '20vmin', width:'100%'}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1">
                            {props.text}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default SCValueElement;