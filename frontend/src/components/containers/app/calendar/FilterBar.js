import { useTranslation } from "react-i18next";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Chip, InputBase, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import * as React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import moment from "moment";
import TeamService from "../../../../services/app/team.service";

function FilterBar(props) {

    const { i18n } = useTranslation();
    const lang = i18n.language;
    const { t } = useTranslation();

    const [team, setTeam] = useState(0);
    const [type, setType] = useState(-1);
    const [search, setSearch] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        async function getAllTeams() {
            await TeamService.listAllTeams().then((res) => {
                setList(res.data);
            })
        }
        getAllTeams();
    }, [])

    const handleChange = (event) => {
        setTeam(event.target.value);
    };

    const handleChangeType = (event) => {
        setType(event.target.value);
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        props.handleFilters({ search: search, team: team, type: type });
    }, [search, team, type]);


    if (props.week.length === 0) {
        return (<div />)
    }
    return (
        <Grid container direction={"row"} justifyContent={"space-around"}>
            <Grid item xs={3}>
                <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                    <FormControl sx={{ width: 150, borderBottom: 'none' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <InputBase id="input-with-sx" placeholder={t('app:calendar:search')} variant="standard" onChange={handleChangeSearch} fullWidth value={search} />
                            <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </Box>
                    </FormControl>
                } />
            </Grid>
            <Grid item xs={3}>
                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{ color: '#1F4E79' }}>{t('app:calendar:team')}</Typography>
                    </Grid>
                    <Grid item>
                        <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                            <FormControl fullWidth sx={{ width: 150 }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={team}
                                    onChange={handleChange}
                                    disabled={false}
                                    variant={"standard"}
                                    input={<InputBase />}
                                >
                                    <MenuItem value={0}>{t('app:calendar:team_search')}</MenuItem>
                                    {list.map((team, index) => {
                                        return (
                                            <MenuItem key={index} value={team.id}>{team.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        } />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{ color: '#1F4E79' }}>{t('app:calendar:status')}</Typography>
                    </Grid>
                    <Grid item>
                        <Chip component={FormControl} style={{ backgroundColor: 'white' }} variant={"outlined"} label={
                            <FormControl fullWidth sx={{ width: 150 }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    onChange={handleChangeType}
                                    input={<InputBase />}
                                >
                                    <MenuItem value={-1}>{t('app:statuses:everywhere')}</MenuItem>
                                    <MenuItem value={1}>{t('app:statuses:office')}</MenuItem>
                                    <MenuItem value={2}>{t('app:statuses:home_working')}</MenuItem>
                                    <MenuItem value={3}>{t('app:statuses:on_the_go')}</MenuItem>
                                    <MenuItem value={4}>{t('app:statuses:off')}</MenuItem>
                                    <MenuItem value={0}>{t('app:statuses:undeclared')}</MenuItem>
                                </Select>
                            </FormControl>
                        } />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container direction={"row"} alignItems={"center"} spacing={1}>
                    <Grid item>
                        <Typography fontWeight={500} style={{ color: '#1F4E79' }}>{t('app:calendar:week')}</Typography>
                    </Grid>
                    <Grid item>
                        <Paper style={{ padding: 5 }} elevation={0}>
                            {`${moment(props.week[0].day).date()} ${moment(props.week[0].day).locale(lang).format('MMMM')} - ${moment(props.week[4].day).date()} ${moment(props.week[4].day).locale(lang).format('MMMM')}`}
                        </Paper>
                    </Grid>
                </Grid>

            </Grid>
        </Grid >

    )
}

export default FilterBar;