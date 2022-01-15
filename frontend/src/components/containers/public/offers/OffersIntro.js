import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";

function OffersIntro({ props }) {
    const { t } = useTranslation();


    return (
        <Box sx={{ backgroundColor: "#3F07A8" }}>
            <Grid container direction={"column"}>
                <Grid item md={12} px={10} mt={6} mb={4}>
                    <Grid item md={12}>
                        <Grid container direction={"column"}>
                            <Grid item xs={12}>
                                <Typography variant="h4" fontWeight={600} fontSize={36} align="center">
                                    <span style={{ color: "#FFFFFF" }}>
                                        {t('public:offers:main.title')}
                                    </span>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} mb={6}>
                                <Typography variant="h4" fontWeight={600} fontSize={36} align="center">
                                    <span style={{ color: "#FFFFFF" }}>
                                        {t('public:offers:main.sub_title_1')}
                                    </span>
                                </Typography>
                            </Grid>

                            <Grid item xs={12} mb={6}>
                                <Typography variant="h4" fontWeight={600} fontSize={45} align="center">
                                    <span style={{ color: "#B4C7E7" }}>
                                        {t('public:offers:main.sub_title_2')}
                                    </span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )

}

export default OffersIntro;