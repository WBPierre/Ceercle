import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import Chip from '@mui/material/Chip';
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import ColorPicker from "../../../molecules/app/ColorPicker";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Dialog, DialogActions, DialogTitle,
} from "@mui/material";
import TeamService from "../../../../services/app/team.service";
import { useSnackbar } from "notistack";
import * as App_Routes from "../../../../navigation/app/Routes";

function TeamGeneralInformation() {
    const { id } = useParams()

    const { t } = useTranslation();

    let navigate = useNavigate();

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;
            case 'color':
                setColor(event.target.value);
                break;
            default:
                break;
        }
    }


    const { enqueueSnackbar } = useSnackbar();

    const validateDescription = () => {
        if (name === '') return false;
        if (color === '') return false;
        return true;
    }

    const saveDescription = async () => {
        if (validateDescription()) {
            const resources = {
                teamId: parseInt(id),
                name: name,
                color: color
            };
            await TeamService.updateTeamDescription(resources).then(async (res) => {
                if (res.status === 200) {
                    enqueueSnackbar(t('app:teams:personalize.snackbar_team_saved'), {
                        variant: 'success'
                    });
                    navigate(App_Routes.TEAMS);
                } else {
                    enqueueSnackbar(t('app:snackbar:error'), {
                        variant: 'error'
                    });
                }
            })
        } else {
            enqueueSnackbar(t('app:teams:personalize.snackbar_team_deleted'), {
                variant: 'warning'
            });
        }
    }


    const [openDelete, setOpenDelete] = useState(false);

    const handleDeleteClickOpen = () => {
        setOpenDelete(true);
    };

    const handleDeleteClose = () => {
        setOpenDelete(false);
    };

    const handleDeleteConfirmation = async () => {
        await TeamService.deleteTeam(id).then(async (res) => {
            if (res.status === 200) {
                enqueueSnackbar(t('app:teams:personalize.snackbar_team_deleted'), {
                    variant: 'success'
                });
                navigate(App_Routes.TEAMS);
            } else {
                enqueueSnackbar(t('app:snackbar:error'), {
                    variant: 'error'
                });
            }
        })
    }



    const [openAddUser, setOpenAddUser] = useState(false);

    const handleAddUserOpen = () => {
        setOpenAddUser(true);
    };

    const handleAddUserClose = (reload) => {
        setOpenAddUser(false);
        if (reload) {
            getTeam(id);
        }
    };


    const [listUsers, setListUsers] = useState([]);
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    async function getTeam(index) {
        const res = await TeamService.getTeam(index);
        setName(res.data.name)
        setColor(res.data.color)
        let listUsersTemp = []
        for (let i = 0; i < res.data.users.length; i++) {
            let object = {
                'id': res.data.users[i].id,
                'name': res.data.users[i].name,
                'position': res.data.users[i].position,
                'avatar': res.data.users[i].avatar
            }
            listUsersTemp.push(object);
        }
        setListUsers(listUsersTemp)
    }

    useEffect(() => {
        getTeam(id);
    }, [id]);


    return (
        <div>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                    <TextField sx={{ width: 300 }} label={t('app:teams:personalize.name')} id="fullWidth" name={"name"} value={name} onChange={handleChange} />
                </Grid>

                <Grid item>
                    <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
                        <TextField sx={{ width: 150 }} label={t('generic:color')} id="fullWidth" name={"name"} value={color} onChange={handleChange} />
                        <CircleIcon sx={{ color: color, fontSize: 40 }} />
                        <ColorPicker updateColor={(hex) => setColor(hex)} />
                    </Stack>
                </Grid>

                <Grid item>
                    <Grid container direction="row" justifyContent="space-between">
                        <Grid item md={2}>
                            <Chip
                                label={t('generic:save')}
                                sx={{
                                    borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold"
                                }}
                                color="error"
                                icon={<CheckCircleOutlineIcon />}
                                variant="outlined"
                                onClick={saveDescription}
                            />
                        </Grid>
                        <Grid item md={2}>
                            <Chip
                                label={t('app:teams:personalize.delete_team')}
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
                    {t('app:teams:personalize.delete_team_ask')}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleDeleteClose} sx={{ color: "#696A6C" }} >{t('generic:cancel')}</Button>
                    <Button onClick={handleDeleteConfirmation} sx={{ color: "#D20303" }}> {t('generic:delete')} </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default TeamGeneralInformation;