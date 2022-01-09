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

function Teams() {
    const [openModal, setOpenModal] = useState(false);
    const [listTeams, setListTeams] = useState([]);

    const handleModalClose = () => {
        setOpenModal(false);
    };

    const handleAddTeam = (name, color) => {
        setListTeams(listTeams => [...listTeams, { 'id': (listTeams.length + 1).toString(), 'name': name, 'size': 0, 'color': color }])
        handleModalClose();
    };

    useEffect(() => {
        setListTeams([{ 'id': '0', 'name': "Finances", 'size': 7, 'color': "#046AFC" },
        { 'id': '1', 'name': "Marketing", 'size': 11, 'color': "#FC1704" },
        { 'id': '2', 'name': "Opérations", 'size': 27, 'color': "#085803" }])
    }, []);

    return (
        <CustomContainer>
            <TeamAddModal openModal={openModal} handleModalClose={handleModalClose} handleAddTeam={handleAddTeam} />

            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Typography variant="h4" fontWeight={600} style={{ color: '#323AB8' }}>
                        Gestion des équipes
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="body" fontWeight={300} style={{ color: '#323AB8' }}>
                        Gérer et paramétrez les équipes au sein de l'entreprise.
                    </Typography>
                </Grid>

                <Grid item mt={3}>
                    <TeamsGrid listTeams={listTeams} />
                </Grid>

                <Grid item mt={3} style={{ alignItems: "right" }}>
                    <Button startIcon={<AddCircleOutlineIcon />} variant="contained" sx={{ backgroundColor: "#323AB8" }} onClick={() => setOpenModal(true)}> Nouvelle équipe </Button>
                </Grid>

            </Grid>
        </CustomContainer>
    )
}

export default Teams;