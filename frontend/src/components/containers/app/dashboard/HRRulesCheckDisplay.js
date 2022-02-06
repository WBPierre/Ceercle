import * as React from "react";
import { Chip, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportIcon from '@mui/icons-material/Report';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 300,
        border: '1px solid #dadde9',
    },
}));





function RulesCheckDisplay(props) {
    const { t } = useTranslation();

    const statuses = [t('app:statuses:undeclared'), t('app:statuses:office'), t('app:statuses:home_working'), t('app:statuses:on_the_go'), t('app:statuses:off')]

    const formatUserStatus = (status) => {
        if (status[0] == status[1]) {
            return statuses[status[0]]
        } else {
            return statuses[status[0]] + " - " + statuses[status[1]]
        }

    }

    if (props.ruleRespected.userStatusesByDayForWeek === undefined || props.ruleRespected.userStatusesByDayForWeek.length === 0) {
        return (<div />)
    }
    return (
        <HtmlTooltip
            title={
                <React.Fragment>
                    <Container maxWidth={false} disableGutters={true} >
                        <Grid container direction="column">
                            <Grid item>
                                <Typography fontWeight="bold" fontSize={14} color="inherit">{t('app:alerts_HR_rules:title')}</Typography>
                            </Grid>

                            <Grid item mt={1}>
                                <Typography color="inherit" fontSize={12} fontWeight="bold" style={{ textDecorationLine: 'underline' }}> {t('app:alerts_HR_rules:attendance_rate')}{props.ruleRespected.companyRuleScope == 0 ? t('app:alerts_HR_rules:week') : t('app:alerts_HR_rules:month')}</Typography>
                            </Grid>
                            <Grid item>
                                <span color="inherit" style={{ fontSize: "12px" }} >{t('app:alerts_HR_rules:max_office')}{props.ruleRespected.companyOfficeMaximum}</span>
                                <span color="inherit" style={{ fontSize: "9px" }}> ({props.ruleRespected.companyOfficeMaximum - props.ruleRespected.userOffice} {t('app:alerts_HR_rules:remaining')}{props.ruleRespected.companyOfficeMaximum - props.ruleRespected.userOffice > 1 ? t('app:alerts_HR_rules:plural') : ''})</span>
                            </Grid>
                            <Grid item>
                                <span color="inherit" style={{ fontSize: "12px" }}>{t('app:alerts_HR_rules:max_remote')}{props.ruleRespected.companyRemoteMaximum}</span>
                                <span color="inherit" style={{ fontSize: "9px" }}> ({props.ruleRespected.companyRemoteMaximum - props.ruleRespected.userRemote} {t('app:alerts_HR_rules:remaining')}{props.ruleRespected.companyRemoteMaximum - props.ruleRespected.userRemote > 1 ? t('app:alerts_HR_rules:plural') : ''})</span>
                            </Grid>

                            <Grid item mt={1} sx={{
                                display:
                                {
                                    xs: props.ruleRespected.mondayMandatoryStatus > 0 || props.ruleRespected.tuesdayMandatoryStatus > 0
                                        || props.ruleRespected.wednesdayMandatoryStatus > 0 || props.ruleRespected.thursdayMandatoryStatus > 0
                                        || props.ruleRespected.fridayMandatoryStatus > 0
                                        ? 'block' : 'none',
                                    md: props.ruleRespected.mondayMandatoryStatus > 0 || props.ruleRespected.tuesdayMandatoryStatus > 0
                                        || props.ruleRespected.wednesdayMandatoryStatus > 0 || props.ruleRespected.thursdayMandatoryStatus > 0
                                        || props.ruleRespected.fridayMandatoryStatus > 0
                                        ? 'block' : 'none'
                                }
                            }}
                            >
                                <Typography color="inherit" fontSize={12} fontWeight="bold" style={{ textDecorationLine: 'underline' }}> {t('app:alerts_HR_rules:mandatory_days')}</Typography>
                            </Grid>
                            <Grid item sx={{ display: { xs: props.ruleRespected.mondayMandatoryStatus > 0 ? 'block' : 'none', md: props.ruleRespected.mondayMandatoryStatus > 0 ? 'block' : 'none' } }}>
                                <span color="inherit" style={{ fontSize: "12px" }}>{t('app:date_elements:monday')}: {props.ruleRespected.mondayMandatoryStatus == 1 ? t('app:statuses:office') : t('app:statuses:home_working')}</span>
                                <span color="inherit" style={{ fontSize: "9px" }}> ({formatUserStatus(props.ruleRespected.userStatusesByDayForWeek[0])})</span>
                            </Grid>
                            <Grid item sx={{ display: { xs: props.ruleRespected.tuesdayMandatoryStatus > 0 ? 'block' : 'none', md: props.ruleRespected.tuesdayMandatoryStatus > 0 ? 'block' : 'none' } }}>
                                <span color="inherit" style={{ fontSize: "12px" }}>{t('app:date_elements:tuesday')}: {props.ruleRespected.tuesdayMandatoryStatus == 1 ? t('app:statuses:office') : t('app:statuses:home_working')}</span>
                                <span color="inherit" style={{ fontSize: "9px" }}> ({formatUserStatus(props.ruleRespected.userStatusesByDayForWeek[1])})</span>
                            </Grid>
                            <Grid item sx={{ display: { xs: props.ruleRespected.wednesdayMandatoryStatus > 0 ? 'block' : 'none', md: props.ruleRespected.wednesdayMandatoryStatus > 0 ? 'block' : 'none' } }}>
                                <span color="inherit" style={{ fontSize: "12px" }}>{t('app:date_elements:wednesday')}: {props.ruleRespected.wednesdayMandatoryStatus == 1 ? t('app:statuses:office') : t('app:statuses:home_working')}</span>
                                <span color="inherit" style={{ fontSize: "9px" }}> ({formatUserStatus(props.ruleRespected.userStatusesByDayForWeek[2])})</span>
                            </Grid>
                            <Grid item sx={{ display: { xs: props.ruleRespected.thursdayMandatoryStatus > 0 ? 'block' : 'none', md: props.ruleRespected.thursdayMandatoryStatus > 0 ? 'block' : 'none' } }}>
                                <span color="inherit" style={{ fontSize: "12px" }}>{t('app:date_elements:thursday')}: {props.ruleRespected.thursdayMandatoryStatus == 1 ? t('app:statuses:office') : t('app:statuses:home_working')}</span>
                                <span color="inherit" style={{ fontSize: "9px" }}> ({formatUserStatus(props.ruleRespected.userStatusesByDayForWeek[3])})</span>
                            </Grid>
                            <Grid item sx={{ display: { xs: props.ruleRespected.fridayMandatoryStatus > 0 ? 'block' : 'none', md: props.ruleRespected.fridayMandatoryStatus > 0 ? 'block' : 'none' } }}>
                                <span color="inherit" style={{ fontSize: "12px" }}>{t('app:date_elements:friday')}: {props.ruleRespected.fridayMandatoryStatus == 1 ? t('app:statuses:office') : t('app:statuses:home_working')}</span>
                                <span color="inherit" style={{ fontSize: "9px" }}> ({formatUserStatus(props.ruleRespected.userStatusesByDayForWeek[4])})</span>
                            </Grid>

                        </Grid>
                    </Container>
                </ React.Fragment>
            }
        >
            <Chip
                label={props.ruleRespected.check ? t('app:alerts_HR_rules:valid') : t('app:alerts_HR_rules:warning')}
                icon={props.ruleRespected.check ? <CheckCircleIcon style={{ color: 'green' }} /> : <ReportIcon style={{ color: 'orange' }} />}
                onClick={() => console.log("display rules")}
            />
        </HtmlTooltip>
    )

}

export default RulesCheckDisplay;