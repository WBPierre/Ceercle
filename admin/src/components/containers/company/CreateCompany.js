import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {Button, Divider, Stack, Switch, TextField, Typography} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import {useState} from "react";
import moment from "moment";
import {useSnackbar} from "notistack";
import CompanyService from "../../../services/admin/company.service";


function CreateCompany(props){
    const [name, setName] = useState('');
    const [activationDay, setActivationDay] = useState('');
    const [invoiceType, setInvoiceType] = useState(false);
    const { enqueueSnackbar } = useSnackbar();


    const createCompany = async () => {
        let date = moment(activationDay, 'YYYY-MM-DD', true);
        if(name.length > 2 && date.isValid() && date.diff(moment().format('YYYY-MM-DD')) > 0){
            const resources = {
                name: name,
                activationDay: activationDay,
                invoiceType: invoiceType ? 1 : 0
            }
            await CompanyService.createCompany(resources).then((res) => {
                enqueueSnackbar("Operation successful", {
                    variant: 'success'
                });
            });
            props.update();
            props.handleClose();
        }else{
            enqueueSnackbar("Wrong parameters", {
                variant: 'warning'
            });
        }
    }


    const handleChange = (e) => {
        switch(e.target.name){
            case 'name':
                setName(e.target.value);
                break;
            case 'activationDay':
                setActivationDay(e.target.value);
                break;
            case 'invoiceType':
                setInvoiceType(e.target.checked);
                break;
        }
    }
    return(
        <Dialog
            open={props.open}
            keepMounted
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Create a company</DialogTitle>
            <Divider/>
            <DialogContent>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                            <Grid item xs={4}>
                                <Typography>Company name</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Company name"
                                    name="name"
                                    autoComplete="given-name"
                                    value={name}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                            <Grid item xs={4}>
                                <Typography>Activation day</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="activationDay"
                                    label="Activation day"
                                    name="activationDay"
                                    placeholder={"YYYY-MM-DD"}
                                    value={activationDay}
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={5}>
                            <Grid item xs={4}>
                                <Typography>Invoice type</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography>Monthly</Typography>
                                    <Switch value={invoiceType} onChange={handleChange} name={"invoiceType"}  inputProps={{ 'aria-label': 'ant design' }} />
                                    <Typography>Yearly</Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={() => createCompany()}>Create</Button>
            </DialogActions>
        </Dialog>
    )

}
export default CreateCompany;