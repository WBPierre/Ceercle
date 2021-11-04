import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import GridModule from "../../containers/home/GridModule";

function SCValueElement(props){
    return(  
            <Grid item xs={12} md={3} align="center">
                <Grid container direction="column" >
                    <Grid item>
                        <FreeBreakfastIcon/>
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