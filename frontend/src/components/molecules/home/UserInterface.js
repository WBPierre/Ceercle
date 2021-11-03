import Grid from "@mui/material/Grid";
import {Card, CardContent, CardHeader} from "@mui/material";
import Typography from "@mui/material/Typography";
import GridModule from "../../containers/home/GridModule";


function UserInterface(){
    return(
        <GridModule direction="row">
            <Grid item xs={12} md={4} align="center">
                <Card raised={true}>
                    <CardHeader title="WebApp"/>
                    <CardContent>
                        <Typography variant="body1">
                            lorem
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} align="center">
                <Card raised={true}>
                    <CardHeader title="App mobile"/>
                    <CardContent>
                        <Typography variant="body1">
                            lorem
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} align="center">
                <Card raised={true}>
                    <CardHeader title="Intégration Slack/Teams"/>
                    <CardContent>
                        <Typography variant="body1">
                            lorem
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </GridModule>
    )
}

export default UserInterface;