import { useTranslation } from "react-i18next";
import {useEffect, useState} from "react";
import TimeService from "../../../../services/app/time.service";
import { useSnackbar } from "notistack";
import Grid from "@mui/material/Grid";
import CalendarUserButton from "./CalendarUserButton";

function CalendarUser(props) {

    const { t } = useTranslation();
    const { enqueueSnackbar } = useSnackbar();
    const [half, setHalf] = useState(false);

    const handleChange = (e) => {
        setHalf(e.target.checked);
    }


    const modifyChoice = async (name, half, order) => {
        await declareDay(props.data.day, name, half, order)
    }

    useEffect(() => {
        if(props.data.morning !== props.data.afternoon){
            setHalf(true);
        }else{
            setHalf(false);
        }
    }, [props.data])

    const declareDay = async (day, choice, half, order) => {
        let resources = {
            day: day,
            morning: props.data.morning,
            afternoon: props.data.afternoon
        }
        if(half){
            if(order === 0){
                resources.morning = choice;
            }else{
                resources.afternoon = choice
            }
        }else{
            resources.morning = choice;
            resources.afternoon = choice;
        }
        if(props.data.morning !== choice || props.data.afternoon !== choice) {
            await TimeService.setTimeSheet(resources);
            enqueueSnackbar(t('app:calendar:snackbar_success'), {
                variant: 'success'
            });
        }
        await props.updateData();
    }

    return (
        <div style={{height:'100%', width:'100%'}}>
            {half ? (
                <Grid container direction={"row"} sx={{width:'100%'}} spacing={0}>
                    <Grid item xs={6}>
                        <CalendarUserButton order={0} half={half} data={props.data} modifyChoice={(choice, half, order) => modifyChoice(choice, half, order)} changeHalf={handleChange}/>
                    </Grid>
                    <Grid item xs={6}>
                        <CalendarUserButton order={1} half={half} data={props.data} modifyChoice={(choice, half, order) => modifyChoice(choice, half, order)} changeHalf={handleChange}/>
                    </Grid>
                </Grid>
            ):(
                <Grid container direction={"row"} sx={{width:'100%'}} spacing={0}>
                    <Grid item xs={12} sx={{width:'100%'}}>
                        <CalendarUserButton order={0} half={half} data={props.data} modifyChoice={(choice, half, order) => modifyChoice(choice, half, order)} changeHalf={handleChange}/>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}

export default CalendarUser;