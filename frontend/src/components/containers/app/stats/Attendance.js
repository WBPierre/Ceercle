import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import TimeService from "../../../../services/app/time.service";
import UserService from "../../../../services/app/user.service";
import AttendanceByDay from "./AttendanceByDay"
import AttendanceDetailed from "./AttendanceDetailed"
import AttendanceFilterBar from "./AttendanceFilterBar"
import AttendancePie from "./AttendancePie"
import { useSnackbar } from "notistack";
import moment from "moment";


function Attendance() {
    const { t } = useTranslation();

    const { enqueueSnackbar } = useSnackbar();

    const [pieData, setPieData] = useState(null)
    const [byWeekdayData, setByWeekdayData] = useState(null)
    const [historicData, setHistoricData] = useState(null)

    const today = moment().format("YYYY-MM-DD")
    const [filters, setFilers] = useState({
        collaborator: -1,
        team: 0,
        startDate: today,
        endDate: today
    })

    const validate = () => {
        if (moment.duration(endDate.diff(startDate)).asDays() < 0) return false;
        if (collaborator > 0 && team > 0) return UserService.getUserInTeam({ userId: collaborator, teamId: team })
        return true
    }

    async function refreshDataCharts() {
        const res = await TimeService.getTimeSheetStats();
        setPieData(res.data.pieData)
        setByWeekdayData(res.data.byWeekdayData);
        setHistoricData(res.data.historicData);
    }
    const refreshCharts = (newFilters) => {
        setFilers(newFilters);
        if (validate) {
            refreshDataCharts()
            //how to construct the filters and link them to charts: with a get /:id/:idTeam/:startDate/:endDate yes. So here, invoke TimeService.getTimeSheetStats(filters)
        }
    }



    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Typography variant="h4" fontWeight={600} style={{ color: '#2A2828' }}>
                    Taux de présence
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="body" fontWeight={300} style={{ color: '#414040' }}>
                    Analysez les statistiques de vos équipes (taux de présence au bureau, en télétravail)
                </Typography>
            </Grid>

            <Grid item mt={2}>
                <AttendanceFilterBar filters={filters} handleFilters={refreshCharts} />
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
                <AttendanceDetailed historicData={historicData} />
            </Grid>

        </Grid>

    )
}

export default Attendance;