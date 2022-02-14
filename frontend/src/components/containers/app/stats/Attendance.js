import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TimeService from "../../../../services/app/time.service";
import UserService from "../../../../services/app/user.service";
import AttendanceByDay from "./AttendanceByDay"
import AttendanceDetailed from "./AttendanceDetailed"
import { Chip } from "@mui/material";
import AttendanceFilterBar from "./AttendanceFilterBar"
import AttendancePie from "./AttendancePie"
import moment from "moment";


function Attendance() {
    const { t } = useTranslation();

    const [pieData, setPieData] = useState(null)
    const [byWeekdayData, setByWeekdayData] = useState(null)
    const [historicData, setHistoricData] = useState(null)
    const [businessDaysList, setBusinessDaysList] = useState(null)

    //startDate et Endate: semaine en cours automatiquement
    const today = moment().format("YYYY-MM-DD")
    const [collaborator, setCollaborator] = useState({ id: -1, label: "" })
    const [team, setTeam] = useState(0)
    const [startDate, setStartDate] = useState(today)
    const [endDate, setEndDate] = useState(today)



    const validate = () => {
        if (moment.duration(moment(endDate).diff(moment(startDate))).asDays() < 0) return false;
        if (collaborator && collaborator > 0 && team > 0) return UserService.getUserInTeam({ userId: collaborator.id, teamId: team })
        return true
    }

    async function refreshDataCharts(start, end) {
        let collaboratorId = -1
        if (collaborator) {
            collaboratorId = collaborator.id
        }
        let filters = {
            collaborator: collaboratorId,
            team: team,
            startDate: moment(startDate).format('YYYY-MM-DD'),
            endDate: moment(endDate).format('YYYY-MM-DD')
        }
        if (start && end) {
            filters.startDate = moment(start).format('YYYY-MM-DD')
            filters.endDate = moment(end).format('YYYY-MM-DD')
        }

        const res = await TimeService.getTimeSheetStats(filters);
        setPieData(res.data.pieData)
        setByWeekdayData(res.data.byWeekdayData);
        setHistoricData(res.data.historicData);
        setBusinessDaysList(res.data.business_days_list)
    }


    const refreshCharts = () => {
        if (validate()) {
            refreshDataCharts()
        }
    }

    useEffect(() => {
        let start
        let end
        if (moment(startDate).day() === 0) {
            start = moment(startDate).add(1, 'days').format("YYYY-MM-DD");
            end = moment(startDate).add(5, 'days').format("YYYY-MM-DD");
        } else if (moment(startDate).day() === 6) {
            start = moment(startDate).add(2, 'days').format("YYYY-MM-DD");
            end = moment(endDate).add(6, 'days').format("YYYY-MM-DD")
        } else {
            start = moment(startDate).add(1 - moment(startDate).day(), 'days').format("YYYY-MM-DD");
            end = moment(endDate).add(1 - moment(startDate).day(), 'days').format("YYYY-MM-DD");
        }
        setStartDate(start)
        setEndDate(end)
        refreshDataCharts(start, end);
    }, []); // eslint-disable-line

    useEffect(() => {
        setCollaborator({ id: -1, label: "" })
    }, [team]);



    if (!pieData || !byWeekdayData || !historicData || !businessDaysList) {
        return (
            <div />
        )
    }

    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                    {t('app:stats:attendance.title')}
                </Typography>
            </Grid>

            <Grid item>
                <Grid container direction="row">
                    <Grid item md={10}>
                        <Typography variant="body" fontWeight={300} style={{ color: '#414040' }}>
                            {t('app:stats:attendance.subtitle')}
                        </Typography>
                    </Grid>

                    <Grid item md={1}>
                        <Chip
                            label={t('app:stats:attendance.refresh')}
                            sx={{ borderColor: "#3F07A8", color: "#3F07A8", fontWeight: "bold" }}
                            color="error"
                            onClick={refreshCharts}
                            variant="outlined"
                        />
                    </Grid>

                </Grid>
            </Grid>

            <Grid item mt={1}>
                <AttendanceFilterBar
                    collaborator={collaborator} setCollaborator={setCollaborator}
                    team={team} setTeam={setTeam}
                    startDate={startDate} setStartDate={setStartDate}
                    endDate={endDate} setEndDate={setEndDate}
                />
            </Grid>

            <Grid item mt={2}>
                <Grid container direction="row" spacing={1}>
                    <Grid item md={4}>
                        <AttendancePie pieData={pieData} />
                    </Grid>

                    <Grid item md={8}>
                        <AttendanceByDay byWeekdayData={byWeekdayData} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item mt={2}>
                <AttendanceDetailed historicData={historicData} businessDaysList={businessDaysList} />
            </Grid>
        </Grid >

    )
}

export default Attendance;