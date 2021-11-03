import Grid from "@mui/material/Grid";


function GridModule(props){
    return(
        <Grid container spacing={5} my={5} direction={props.direction}>
            {props.children}
        </Grid>
    )
}

export default GridModule;