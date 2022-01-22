import CustomContainer from "../../components/containers/app/CustomContainer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TeamsGrid from "../../components/containers/app/teams/TeamsGrid";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TeamAddModal from "../../components/containers/app/teams/TeamAddModal";
import Chip from '@mui/material/Chip';
import TeamService from "../../services/app/team.service";
import { useSnackbar } from "notistack";


function Teams() {
    const [openModal, setOpenModal] = useState(false);

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const { enqueueSnackbar } = useSnackbar();

    const handleAddTeam = async (name, color) => {
        let team_to_add = { 'name': name, 'color': color }
        console.log(team_to_add)
        await TeamService.createTeam(team_to_add).then(async (res) => {
            if (res.status === 200) {
                enqueueSnackbar('Equipe créé', {
                    variant: 'success'
                });
            } else {
                enqueueSnackbar('Une erreur est survenue', {
                    variant: 'error'
                });
            }
        }).catch(err => { console.log(err) })
        handleModalClose();
        listAllTeams()
    };

    const [listTeams, setListTeams] = useState(null);

    async function listAllTeams() {
        const res = await TeamService.listAllTeams();
        setListTeams(res.data);
    }

    useEffect(() => {
        listAllTeams();
    }, []);

    if (listTeams === null) {
        return (<CustomContainer />)
    }

    return (
        <CustomContainer>
            <TeamAddModal openModal={openModal} handleModalClose={handleModalClose} handleAddTeam={handleAddTeam} />

            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                        Gestion des équipes
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body" fontWeight={300} style={{ color: '#414040' }}>
                        Gérer et paramétrez les équipes au sein de l'entreprise.
                    </Typography>
                </Grid>

                <Grid item mt={3}>
                    <TeamsGrid listTeams={listTeams} />
                </Grid>

                <Grid item mt={2} style={{ alignItems: "right" }}>
                    <Chip
                        label="Nouvelle équipe"
                        sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold", fontSize: 15 }}
                        color="error"
                        onClick={() => setOpenModal(true)}
                        icon={<AddCircleOutlineIcon />}
                        variant="outlined"
                    />
                </Grid>

            </Grid>
        </CustomContainer>
    )
}

export default Teams;