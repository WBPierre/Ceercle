import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import GlossaryList from "./GlossaryList";
import {useEffect, useState} from "react";
import UserService from "../../../../services/app/user.service";


export default function SearchGlossary(props) {
    const theme = useTheme();
    let navigate = useNavigate();
    const { t } = useTranslation();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getListUsers() {
            await UserService.getGlossaryUsers().then((res) => {
                setUsers(res.data);
            })
        }
        getListUsers();
    }, [])

    const [value, setValue] = React.useState('');


    const handleChange = (event) => {
        setValue(event.target.value);
    };

    if(users.length === 0){
        return (<div/>)
    }
    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                    Annuaire
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="body" fontWeight={100} fontSize={18} style={{ color: '#7F7F7F' }}>
                    Rechercher parmi les {users.length} employés
                </Typography>
            </Grid>

            <Grid item mt={2}>
                <FormControl sx={{ width: '80%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Rechercher</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        value={value}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </Grid>

            <Grid item mt={2}>
                <GlossaryList searchValue={value} newUserToDisplay={props.newUserToDisplay} users={users}/>
            </Grid>
        </Grid >
    );
}

//variable d'état sur le textfield (useState, set state) uis onchange = "handlechange"
//zindex, absolute, 