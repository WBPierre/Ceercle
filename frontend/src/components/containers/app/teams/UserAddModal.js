import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Divider, Modal, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import UserService from "../../../../services/app/user.service";
import TeamService from "../../../../services/app/team.service";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function UserAddModal(props) {
    const { t } = useTranslation();

    const confirmAddUser = async () => {
        let object = { userId: value.id, teamId: parseInt(props.teamId) }
        console.log(object);
        await TeamService.addUserToTeam(object)
        props.handleModalClose(true)
        setValue(null)
    };

    const closeModal = () => {
        props.handleModalClose(false)
        setValue(null)
    };


    const [value, setValue] = useState(null);
    const [users, setUsers] = useState(null);

    async function listUsers() {
        const res = await UserService.getUsersNamesForTeam(props.teamId);
        setUsers(res.data);
        console.log(res.data)
    }

    useEffect(() => {
        listUsers();
    }, []);

    return (
        <Modal
            open={props.openModal}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container direction={"column"} spacing={1}>
                    <Grid item>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: '#414040' }}>
                            {t('app:teams:personalize.add_user')}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Divider />
                    </Grid>

                    <Grid item mt={4}>
                        <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            disablePortal
                            id="combo-box-demo"
                            options={users}
                            getOptionDisabled={(option) =>
                                option.isInTeam
                            }
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label={t('app:teams:personalize.user')} />}
                        />
                    </Grid>

                    <Grid item mt={4}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={t('generic:cancel')}
                                sx={{
                                    borderColor: "#3C3B3D", color: "#3C3B3D", fontWeight: "bold"
                                }}
                                color="error"
                                onClick={closeModal}
                                icon={<CancelIcon />}
                                variant="outlined"
                            />
                            <Chip
                                label={t('generic:add')}
                                disabled={value == null}
                                sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                                color="error"
                                onClick={confirmAddUser}
                                icon={<CheckCircleIcon />}
                                variant="outlined"
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Modal>

    )
}

export default UserAddModal;