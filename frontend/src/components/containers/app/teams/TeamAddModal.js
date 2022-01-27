import { useTranslation } from "react-i18next";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Divider, Modal, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { BlockPicker } from 'react-color';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function TeamAddModal(props) {

    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [color, setColor] = useState('#000000');


    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const validate = () => {
        props.handleAddTeam(name, color)
        setName('')
        setColor('#000000')
    };

    const closeModal = () => {
        props.handleModalClose()
        setName('')
        setColor('#000000')
    };

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
                            {t('app:teams:main.new_team')}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Divider />
                    </Grid>

                    <Grid item mt={4}>
                        <TextField fullWidth label={t('app:teams:team_name')} id="fullWidth" name={"name"} value={name} onChange={handleChange} />
                    </Grid>


                    <Grid item item mt={4}>
                        <Grid container direction={"row"} justifyContent={"start"} alignItems={"center"}>
                            <Grid item md={6}>
                                <BlockPicker color={color} onChangeComplete={handleChangeComplete} />
                            </Grid>

                            <Grid item md={6}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: color }}>
                                    {name}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item item mt={4}>
                            <Button fullWidth variant={"outlined"} onClick={validate}>{t('app:teams:main.add')}</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>

    )
}

export default TeamAddModal;