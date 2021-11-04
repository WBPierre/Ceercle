import Grid from "@mui/material/Grid";
import {Card, CardContent, CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";


function UserInterfaceElement(props){
    return(
            <Grid item xs={12} md={4} align="center">
                <Card raised={true}>
                    <CardHeader title={props.title}/>
                    <CardContent>
                        <Typography variant="body1">
                            {props.text}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
    )
}

export default UserInterfaceElement;