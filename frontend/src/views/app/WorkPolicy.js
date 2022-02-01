import * as React from 'react';
import { useTranslation } from "react-i18next";
import Typography from '@mui/material/Typography';
import CustomContainer from "../../components/containers/app/CustomContainer";
import OfficeOccupancy from '../../components/containers/app/workpolicy/OfficeOccupancy';
import CompanyRules from '../../components/containers/app/workpolicy/CompanyRules';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import UserManagement from "../../components/containers/app/workpolicy/UserManagement";
import Integration from "../../components/containers/app/workpolicy/Integration";

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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function WorkPolicy() {

    const { t } = useTranslation();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary"
                    indicatorColor="secondary">
                    <Tab label={t('app:rh_parameters:company.tab_name')} {...a11yProps(0)} />
                    <Tab label={t('app:rh_parameters:offices.tab_name')} {...a11yProps(1)} />
                    <Tab label={t('app:rh_parameters:users.tab_name')} {...a11yProps(2)} />
                    <Tab label={t('app:rh_parameters:integration.tab_name')} {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <CompanyRules />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <OfficeOccupancy />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <UserManagement />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Integration />
            </TabPanel>
        </div >

    );
}
