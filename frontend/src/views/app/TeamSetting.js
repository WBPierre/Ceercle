import CustomContainer from "../../components/containers/app/CustomContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UsersGrid from "../../components/containers/app/teams/UsersGrid";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import Chip from '@mui/material/Chip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TeamAddModal from "../../components/containers/app/teams/TeamAddModal";
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import ColorPicker from "../../components/molecules/app/ColorPicker";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from "@mui/material";
import example1 from "../../assets/images/example/1.jpg";
import example2 from "../../assets/images/example/2.jpg";
import example3 from "../../assets/images/example/3.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSnackbar } from "notistack";


function Teams() {
    const { id } = useParams()
    let navigate = useNavigate();

    const listTeams = [{ 'id': '0', 'name': "Finances", 'size': 7, 'color': "#046AFC" },
    { 'id': '1', 'name': "Marketing", 'size': 11, 'color': "#FC1704" },
    { 'id': '2', 'name': "Opérations", 'size': 27, 'color': "#085803" }]

    const [listUsers, setListUsers] = useState([]);

    const [name, setName] = useState(listTeams[{ id }.id].name);
    const [color, setColor] = useState(listTeams[{ id }.id].color);

    const deleteUser = (id) => {
        let listTemp = [...listUsers]
        listTemp.splice(id, 1)
        var i = 0;
        while (i < listTemp.length) {
            listTemp[i].id = i.toString()
            i++
        }
        setListUsers(listTemp)
    };

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'color':
                setColor(event.target.value);
                break;
        }
    }

    const [openDelete, setOpenDelete] = useState(false);

    const handleDeleteClickOpen = () => {
        setOpenDelete(true);
    };

    const handleDeleteClose = () => {
        setOpenDelete(false);
    };


    const { enqueueSnackbar } = useSnackbar();

    const save = () => {
        enqueueSnackbar('Paramètres enregistrés.', {
            variant: 'success'
        });
    }

    const handleDeleteConfirmation = () => {
        enqueueSnackbar('Equipe supprimée.', {
            variant: 'success'
        });
        navigate('/app/teams');
    }

    useEffect(() => {
        setListUsers([{ 'id': 0, 'name': "Louis Lacaille", 'position': 'Head of Marketing', 'avatar': example1 },
        { 'id': 1, 'name': "Pierre Delmer", 'position': 'Tech Lead', 'avatar': example2 },
        { 'id': 2, 'name': "Paul Dupont", 'position': 'Full stack dev', 'avatar': example3 }])
    }, []);


    return (
        <CustomContainer>

            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <Grid container direction="row">
                        <Grid item md={10}>
                            <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                                Personnalisation de l'équipe
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Chip
                                label="Revenir aux équipes"
                                sx={{
                                    borderColor: "#777575", color: "#777575", fontWeight: "bold"
                                }}
                                color="error"
                                icon={<ArrowBackIcon />}
                                variant="outlined"
                                onClick={() => navigate('/app/teams')}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <TextField sx={{ width: 300 }} label="Nom d'équipe" id="fullWidth" name={"name"} value={name} onChange={handleChange} />
                </Grid>

                <Grid item>
                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                        <TextField sx={{ width: 150 }} label="Couleur" id="fullWidth" name={"name"} value={color} onChange={handleChange} />
                        <CircleIcon sx={{ color: color, fontSize: 40 }} />
                        <ColorPicker updateColor={(hex) => setColor(hex)} />
                    </Stack>
                </Grid>

                <Grid item mt={1}>
                    <UsersGrid listTeams={listUsers} handleDeleteUser={deleteUser} />
                </Grid>

                <Grid item>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item md={3}>
                            <Chip
                                label="Ajouter un utilisateur"
                                sx={{
                                    borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold"
                                }}
                                color="error"
                                icon={<AddCircleOutlineIcon />}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item md={2}>
                            <Chip
                                label="Enregistrer"
                                sx={{
                                    borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold"
                                }}
                                color="error"
                                icon={<CheckCircleOutlineIcon />}
                                variant="outlined"
                                onClick={save}
                            />
                        </Grid>
                        <Grid item md={2}>
                            <Chip
                                label="Supprimer l'équipe"
                                sx={{
                                    borderColor: "#D20303", color: "#D20303", fontWeight: "bold"
                                }}
                                color="error"
                                icon={<DeleteIcon />}
                                variant="outlined"
                                onClick={handleDeleteClickOpen}
                            />
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>

            <Dialog
                open={openDelete}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Supprimer l'équipe ?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDeleteClose} sx={{ color: "#696A6C" }} >Annuler</Button>
                    <Button onClick={handleDeleteConfirmation} sx={{ color: "#D20303" }}> Supprimer </Button>
                </DialogActions>
            </Dialog>
        </CustomContainer >
    )
}

export default Teams;