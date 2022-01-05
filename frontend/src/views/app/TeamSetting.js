import CustomContainer from "../../components/containers/app/CustomContainer";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    Select,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

function TeamSetting() {
    const { id } = useParams();
    let navigate = useNavigate();

    return (
        <CustomContainer>
            <Grid container direction={"column"} spacing={3}>
                <Grid item>
                    <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography variant={"h5"}>Id= {id}</Typography>
                        </Grid>
                        <Grid item md={2} textAlign={"center"}>
                            <Typography variant={"h5"}>Une première section avec les éléments descriptifs de l'équipe (nom, couleur); puis une seconde section avec un tableau d'utilisateur permettant d'en ajour et supprimer</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CustomContainer>
    )
}
export default TeamSetting;