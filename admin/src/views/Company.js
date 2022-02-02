import CustomContainer from "../components/containers/CustomContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CompanyService from "../services/admin/company.service";
import Grid from "@mui/material/Grid";
import {
    Button, Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    Select,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useSnackbar } from "notistack";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Parameters from "../components/containers/company/Parameters";
import Office from "../components/containers/company/Office";
import Information from "../components/containers/company/Information";
import Users from "../components/containers/company/Users";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Company() {
    const { id } = useParams();

    const [company, setCompany] = useState(null);


    useEffect(async () => {
        const res = await CompanyService.getCompany(id);
        setCompany(res.data);
    }, []);

    const [value, setValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    if (company === null) {
        return (<CustomContainer />)
    }
    return (
        <CustomContainer>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChangeTab} aria-label="basic tabs example">
                        <Tab label="Information" {...a11yProps(0)} />
                        <Tab label="Parameters" {...a11yProps(1)} />
                        <Tab label="Office management" {...a11yProps(2)} />
                        <Tab label="Users" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Information company={company}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Parameters company={company}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Office company={company}/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Users company={company}/>
                </TabPanel>
            </Box>

        </CustomContainer>
    )
}
export default Company;