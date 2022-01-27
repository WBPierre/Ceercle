import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import moment from "moment";

function CalendarDateElement(props) {

    const { t } = useTranslation();

    const GetDay = () => {
        switch (props.dayKey) {
            case 0: return (t('app:date_elements:Mon'));
            case 1: return (t('app:date_elements:Tue'));
            case 2: return (t('app:date_elements:Wed'));
            case 3: return (t('app:date_elements:Thu'));
            case 4: return (t('app:date_elements:Fri'));
        }
    }

    if (moment().format("YYYY-MM-DD") === props.date.day) {
        return (
            <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <Grid item px={1}>
                    <Grid container direction={"column"} px={1}>
                        <Typography textAlign={"center"} style={{ color: '#C00000' }}
                            fontSize={23}
                            fontWeight={900}>{<GetDay />}</Typography>
                        <Typography textAlign={"center"} style={{ color: '#002060' }}
                            fontSize={19}
                            fontWeight={900}>{moment(props.date.day, 'YYYY-MM-DD').date()}</Typography>
                    </Grid>

                </Grid>
            </Grid>

        )
    } else {
        return (
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography textAlign={"center"} style={{ color: '#d32f2f' }}
                        fontSize={22}
                        fontWeight={500}>{<GetDay />}</Typography>
                    <Typography textAlign={"center"} style={{ color: '#2F5597' }}
                        fontSize={18}
                        fontWeight={500}>{moment(props.date.day, 'YYYY-MM-DD').date()}</Typography>
                </Grid>
            </Grid>
        )
    }

}

export default CalendarDateElement;