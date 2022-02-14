import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";


export default function SettingSectionTemplate(props) {

    return (
        <Grid item mt={3} mb={2}>
            <Grid container direction="row">
                <Grid item md={4}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Typography variant="h5" fontWeight={600} style={{ color: '#2A2828' }}>
                                {props.title}
                            </Typography>
                        </Grid>
                        <Grid item mb={1}>
                            <Typography variant="body" fontWeight={100} fontSize={15} style={{ color: '#414040' }}>
                                {props.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={8} pl={10}>
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    );
}
