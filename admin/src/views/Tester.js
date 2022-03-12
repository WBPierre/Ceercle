import CustomContainer from "../components/containers/CustomContainer";
import {Button, ListItem, ListItemText, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import TestService from "../services/admin/test.service";
import {useSnackbar} from "notistack";


function Tester(){

    const { enqueueSnackbar } = useSnackbar();

    const testSlack = async () => {
        await TestService.testSlack().then(() => {
            enqueueSnackbar('Request successful', {
                variant: 'success'
            });
        }).catch((err) => {
            console.log(err.response);
            enqueueSnackbar('Request failed with status : '+err.response.status+'(Check console for error)', {
                variant: 'error'
            });
        })
    }

    return(
        <CustomContainer>
            <Typography variant={"h4"}>This page enables to test features</Typography>
            <Grid container mt={10} direction={"column"}>
                <Grid item>

                    <Grid container direction={"row"} alignItems={"center"}>
                        <Grid item xs={6}>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Test slack installation on Ceercle" secondary="This test should send a text message to Ceercle Slack" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item>
                            <Button variant={"contained"} onClick={() => testSlack()}>Run test</Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </CustomContainer>
    )
}

export default Tester;