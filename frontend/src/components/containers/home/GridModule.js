import Grid from "@mui/material/Grid";


function GridModule(props){
    return(
        <Grid container spacing={5} my={5} py={5} direction={props.direction} style={props.style}>
            {props.children}
        </Grid>
    )
}

export default GridModule;