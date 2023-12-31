import * as React from 'react';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import { Divider } from "@mui/material";
import Office from "../../components/containers/app/dashboard/Office";
import Team from "../../components/containers/app/dashboard/Team";
import Mood from "../../components/containers/app/dashboard/Mood";
import { useEffect, useState } from "react";
import PlanningBoard from "../../components/containers/app/dashboard/PlanningBoard";
import useAuth from "../../components/context/auth/AuthHelper";
import moment from "moment";
import UserService from "../../services/app/user.service";
import TimeService from "../../services/app/time.service";
import OfficeModal from "../../components/containers/app/dashboard/OfficeBooking/OfficeModal";
import { useSnackbar } from "notistack";


export default function Dashboard(props) {
    const day = moment().tz("Europe/Paris");
    if (day.day() === 0) {
        day.add(1, 'days');
    } else if (day.day() === 6) {
        day.add(2, 'days');
    }
    const { t } = useTranslation();
    const context = useAuth();
    const [week, setWeek] = useState([]);
    const [booking, setBooking] = useState([]);

    const [currentBooking, setCurrentBooking] = useState([]);
    const [canBookOffice, setCanBookOffice] = useState(false);
    const [ruleRespected, setRuleRespected] = useState(false);
    const [openOffice, setOpenOffice] = useState(false);
    const [dayOffice, setDayOffice] = useState(day.format('YYYY-MM-DD'));
    const [resaType, setResaType] = useState(0);
    const [index, setIndex] = useState(0);
    const [timeSheetResources, setTimeSheetResources] = useState(undefined);
    const [user, setUser] = useState(null);
    const daySelected = day.format('YYYY-MM-DD');
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const getTimeSheet = async () => {
            await TimeService.getTimeSheet(index).then((res) => {
                setWeek(res.data.week);
                let current = res.data.week.find(x => x.current);
                if(current){
                    setCanBookOffice(current.morning === 1 || current.afternoon === 1);
                    setCurrentBooking(current.reservation);
                }else{
                    setCanBookOffice(res.data.week[0].morning === 1 || res.data.week[0].afternoon === 1);
                    setCurrentBooking(res.data.week[0].reservation);
                }
            })
        }
        getTimeSheet();
        async function getUserInfo() {
            const res = await UserService.getUserInfo();
            setUser(res.data);
        }
        getUserInfo();
        getHasUserValidatedCompanyRules(index);

    }, []); // eslint-disable-line

    const getHasUserValidatedCompanyRules = async (ind) => {
        await TimeService.getHasUserValidatedCompanyRules(ind).then((res) => {
            setRuleRespected(res.data)
        })
    }

    const getTimeSheet = async (ind) => {
        setIndex(ind);
        await TimeService.getTimeSheet(ind).then((res) => {
            setWeek(res.data.week);
            if (ind === 0) {
                let current = res.data.week.find(x => x.current);
                if(current){
                    setCanBookOffice(current.morning === 1 || current.afternoon === 1);
                    setCurrentBooking(current.reservation);
                }else{
                    setCanBookOffice(res.data.week[0].morning === 1 || res.data.week[0].afternoon === 1);
                    setCurrentBooking(res.data.week[0].reservation);
                }
            }
            getHasUserValidatedCompanyRules(ind);
        })
    }


    const handleOpenOffice = (daySelected, booking, type, resources) => {
        setDayOffice(daySelected);
        setBooking(booking);
        setResaType(type);
        setTimeSheetResources(resources);
        setOpenOffice(true);
    }

    const handleCloseOffice = async (update) => {
        setOpenOffice(false);
        if (update) {
            await getTimeSheet(index);
            enqueueSnackbar(t('app:dashboard:desk_modification'), {
                variant: 'success'
            });
        }
    }





    return (
        <Grid wrap={"nowrap"} container direction={"column"} spacing={1}>
            <OfficeModal open={openOffice} resources={timeSheetResources} handleClose={(update) => handleCloseOffice(update)} day={dayOffice} booking={booking} resaType={resaType} />
            <Grid item>
                <PlanningBoard getTimeSheet={(index) => getTimeSheet(index)} week={week} ruleRespected={ruleRespected} handleOpenOffice={(day, booking, type, resources) => handleOpenOffice(day, booking, type, resources)} user={user}/>
            </Grid>
            <Grid item xs={12} mb={2}>
                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                    <Grid item xs={4}>
                        <Divider color="#3B3838" />
                    </Grid>
                    <Grid item xs={4} textAlign={"center"}>
                        <Button variant="text" disableRipple={true} sx={{ color: "#3B3838", cursor: 'default' }}>
                            {t('app:dashboard:today')}
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Divider color="#3B3838" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction={"row"} spacing={1} justifyContent={"space-around"}>
                    {context.user.company.activeOfficeHandler &&
                        <Grid item xs={12} md={4} style={{ borderRadius: '25px' }} component={Paper}>
                            <Office day={daySelected} canBookOffice={canBookOffice} reservation={currentBooking} handleOpenOffice={(day, booking) => handleOpenOffice(day, booking)} />
                        </Grid>
                    }
                    <Grid item xs={12} md={context.user.company.activeOfficeHandler ? 3 : 5} style={{ borderRadius: '25px' }} component={Paper}>
                        <Team day={daySelected} />
                    </Grid>
                    <Grid item xs={12} md={context.user.company.activeOfficeHandler ? 4 : 5} style={{ borderRadius: '25px' }} component={Paper}>
                        <Mood day={daySelected} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    );
}
